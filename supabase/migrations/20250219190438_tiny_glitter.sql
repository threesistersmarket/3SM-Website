/*
  # Add contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `topic` (text)
      - `source` (text)
      - `message` (text)
      - `created_at` (timestamptz)
      - `status` (text)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public submissions
    - Add policy for authenticated users to view submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  topic text,
  source text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'archived'))
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form" ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);