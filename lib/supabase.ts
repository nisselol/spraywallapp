import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';
import 'react-native-url-polyfill/auto';

// Supabase configuration
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

// Custom storage adapter for Expo SecureStore
const ExpoSecureStoreAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    SecureStore.deleteItemAsync(key);
  },
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Database types (will be generated from Supabase)
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username: string;
          full_name?: string | null;
          avatar_url?: string | null;
        };
        Update: {
          username?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          updated_at?: string;
        };
      };
      climbs: {
        Row: {
          id: string;
          user_id: string;
          route_name: string;
          grade: string;
          crag_name: string;
          location: string | null;
          description: string | null;
          image_urls: string[] | null;
          completed_at: string;
          rating: number | null;
          is_public: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          route_name: string;
          grade: string;
          crag_name: string;
          location?: string | null;
          description?: string | null;
          image_urls?: string[] | null;
          completed_at?: string;
          rating?: number | null;
          is_public?: boolean;
        };
        Update: {
          route_name?: string;
          grade?: string;
          crag_name?: string;
          location?: string | null;
          description?: string | null;
          image_urls?: string[] | null;
          completed_at?: string;
          rating?: number | null;
          is_public?: boolean;
          updated_at?: string;
        };
      };
      climb_attempts: {
        Row: {
          id: string;
          climb_id: string;
          user_id: string;
          attempt_date: string;
          success: boolean;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          climb_id: string;
          user_id: string;
          attempt_date?: string;
          success: boolean;
          notes?: string | null;
        };
        Update: {
          attempt_date?: string;
          success?: boolean;
          notes?: string | null;
        };
      };
    };
  };
} 