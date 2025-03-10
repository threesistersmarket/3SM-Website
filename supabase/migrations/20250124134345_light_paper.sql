/*
  # Create blog posts schema

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `excerpt` (text)
      - `author_name` (text)
      - `featured_image` (text)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text GENERATED ALWAYS AS (
    CASE 
      WHEN length(content) <= 150 THEN content 
      ELSE substring(content, 1, 147) || '...'
    END
  ) STORED,
  author_name text NOT NULL,
  featured_image text,
  published_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are viewable by everyone" ON blog_posts
  FOR SELECT
  TO public
  USING (true);