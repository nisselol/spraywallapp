# SprayWall App Setup Guide

## 🚀 Quick Start

### 1. Supabase Setup

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Wait for the database to be ready

2. **Get Your Credentials**
   - Go to Project Settings → API
   - Copy your `Project URL` and `anon public` key

3. **Environment Variables**
   Create a `.env` file in your project root:
   ```env
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### 2. Database Schema

Run these SQL commands in your Supabase SQL Editor:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create climbs table
CREATE TABLE climbs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  route_name TEXT NOT NULL,
  grade TEXT NOT NULL,
  crag_name TEXT NOT NULL,
  location TEXT,
  description TEXT,
  image_urls TEXT[],
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create climb_attempts table
CREATE TABLE climb_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  climb_id UUID REFERENCES climbs(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  attempt_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  success BOOLEAN NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on our tables (AFTER creating them)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE climbs ENABLE ROW LEVEL SECURITY;
ALTER TABLE climb_attempts ENABLE ROW LEVEL SECURITY;

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public) VALUES ('climb-images', 'climb-images', true);

-- Row Level Security Policies

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Climbs policies
CREATE POLICY "Public climbs are viewable by everyone" ON climbs
  FOR SELECT USING (is_public = true OR auth.uid() = user_id);

CREATE POLICY "Users can insert their own climbs" ON climbs
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own climbs" ON climbs
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own climbs" ON climbs
  FOR DELETE USING (auth.uid() = user_id);

-- Climb attempts policies
CREATE POLICY "Users can view their own attempts" ON climb_attempts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own attempts" ON climb_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own attempts" ON climb_attempts
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own attempts" ON climb_attempts
  FOR DELETE USING (auth.uid() = user_id);

-- Storage policies
CREATE POLICY "Users can upload their own images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'climb-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Images are publicly accessible" ON storage.objects
  FOR SELECT USING (bucket_id = 'climb-images');

CREATE POLICY "Users can update their own images" ON storage.objects
  FOR UPDATE USING (bucket_id = 'climb-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own images" ON storage.objects
  FOR DELETE USING (bucket_id = 'climb-images' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Indexes for better performance
CREATE INDEX idx_climbs_user_id ON climbs(user_id);
CREATE INDEX idx_climbs_grade ON climbs(grade);
CREATE INDEX idx_climbs_crag_name ON climbs(crag_name);
CREATE INDEX idx_climbs_completed_at ON climbs(completed_at DESC);
CREATE INDEX idx_climb_attempts_climb_id ON climb_attempts(climb_id);
CREATE INDEX idx_climb_attempts_user_id ON climb_attempts(user_id);

-- Functions for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_climbs_updated_at BEFORE UPDATE ON climbs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```