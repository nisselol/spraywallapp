import { decode } from 'base64-arraybuffer';
import * as FileSystem from 'expo-file-system';
import { supabase } from '../lib/supabase';

export interface ImageUploadResult {
  url: string | null;
  error: any;
}

export class ImageService {
  private static readonly BUCKET_NAME = 'climb-images';
  private static readonly MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  // Upload image from URI (camera/gallery)
  static async uploadImage(
    uri: string, 
    userId: string, 
    climbId?: string
  ): Promise<ImageUploadResult> {
    try {
      // Check file size
      const fileInfo = await FileSystem.getInfoAsync(uri);
      if (fileInfo.exists && fileInfo.size && fileInfo.size > this.MAX_FILE_SIZE) {
        return { 
          url: null, 
          error: { message: 'File size too large. Maximum 5MB allowed.' } 
        };
      }

      // Read file as base64
      const base64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Generate unique filename
      const timestamp = Date.now();
      const randomId = Math.random().toString(36).substring(2);
      const fileName = `${userId}/${climbId || 'profile'}/${timestamp}_${randomId}.jpg`;

      // Convert base64 to ArrayBuffer
      const arrayBuffer = decode(base64);

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from(this.BUCKET_NAME)
        .upload(fileName, arrayBuffer, {
          contentType: 'image/jpeg',
          upsert: false,
        });

      if (error) {
        return { url: null, error };
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(this.BUCKET_NAME)
        .getPublicUrl(data.path);

      return { url: urlData.publicUrl, error: null };
    } catch (error) {
      return { url: null, error };
    }
  }

  // Upload multiple images
  static async uploadMultipleImages(
    uris: string[], 
    userId: string, 
    climbId?: string
  ): Promise<{ urls: string[]; errors: any[] }> {
    const uploadPromises = uris.map(uri => 
      this.uploadImage(uri, userId, climbId)
    );

    const results = await Promise.all(uploadPromises);
    
    const urls: string[] = [];
    const errors: any[] = [];

    results.forEach(result => {
      if (result.url) {
        urls.push(result.url);
      }
      if (result.error) {
        errors.push(result.error);
      }
    });

    return { urls, errors };
  }

  // Delete image
  static async deleteImage(imageUrl: string): Promise<{ error: any }> {
    try {
      // Extract file path from URL
      const urlParts = imageUrl.split('/');
      const bucketIndex = urlParts.findIndex(part => part === this.BUCKET_NAME);
      
      if (bucketIndex === -1) {
        return { error: { message: 'Invalid image URL' } };
      }

      const filePath = urlParts.slice(bucketIndex + 1).join('/');

      const { error } = await supabase.storage
        .from(this.BUCKET_NAME)
        .remove([filePath]);

      return { error };
    } catch (error) {
      return { error };
    }
  }

  // Delete multiple images
  static async deleteMultipleImages(imageUrls: string[]): Promise<{ errors: any[] }> {
    const deletePromises = imageUrls.map(url => this.deleteImage(url));
    const results = await Promise.all(deletePromises);
    
    const errors = results
      .map(result => result.error)
      .filter(error => error !== null);

    return { errors };
  }

  // Get optimized image URL with transformations
  static getOptimizedImageUrl(
    originalUrl: string, 
    options: {
      width?: number;
      height?: number;
      quality?: number;
    } = {}
  ): string {
    // Supabase doesn't have built-in image transformations
    // You could integrate with services like Cloudinary or ImageKit here
    // For now, return the original URL
    return originalUrl;
  }

  // Create thumbnail URL
  static getThumbnailUrl(originalUrl: string): string {
    return this.getOptimizedImageUrl(originalUrl, {
      width: 200,
      height: 200,
      quality: 60,
    });
  }

  // Validate image file
  static validateImageFile(uri: string): Promise<{ isValid: boolean; error?: string }> {
    return new Promise(async (resolve) => {
      try {
        const fileInfo = await FileSystem.getInfoAsync(uri);
        
        if (!fileInfo.exists) {
          resolve({ isValid: false, error: 'File does not exist' });
          return;
        }

        if (fileInfo.size && fileInfo.size > this.MAX_FILE_SIZE) {
          resolve({ isValid: false, error: 'File size too large' });
          return;
        }

        // Check if it's an image by trying to read it
        // This is a basic check - you might want more sophisticated validation
        const extension = uri.toLowerCase().split('.').pop();
        const validExtensions = ['jpg', 'jpeg', 'png', 'webp'];
        
        if (!extension || !validExtensions.includes(extension)) {
          resolve({ isValid: false, error: 'Invalid file type' });
          return;
        }

        resolve({ isValid: true });
      } catch {
        resolve({ isValid: false, error: 'Failed to validate file' });
      }
    });
  }
} 