/*
  # Component Analytics Schema

  1. New Tables
    - `component_views`
      - `id` (uuid, primary key) - Unique identifier for each record
      - `component_name` (text) - Name of the component being tracked
      - `view_count` (integer) - Number of times the component has been viewed
      - `copy_count` (integer) - Number of times code has been copied
      - `last_viewed_at` (timestamptz) - Last time this component was viewed
      - `created_at` (timestamptz) - When tracking started for this component

  2. Security
    - Enable RLS on `component_views` table
    - Add policy for public read access (anyone can view analytics)
    - Add policy for public upsert access (track views without auth)

  3. Indexes
    - Index on component_name for fast lookups
    - Index on view_count for sorting by popularity
*/

CREATE TABLE IF NOT EXISTS component_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  component_name text UNIQUE NOT NULL,
  view_count integer DEFAULT 0,
  copy_count integer DEFAULT 0,
  last_viewed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE component_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read component analytics
CREATE POLICY "Anyone can view component analytics"
  ON component_views
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Allow anyone to insert/update component analytics (for tracking)
CREATE POLICY "Anyone can track component views"
  ON component_views
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can update component views"
  ON component_views
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_component_views_name ON component_views(component_name);
CREATE INDEX IF NOT EXISTS idx_component_views_count ON component_views(view_count DESC);