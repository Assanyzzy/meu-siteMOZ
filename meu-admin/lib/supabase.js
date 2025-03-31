import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://drsybbydlegliuudolnj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyc3liYnlkbGVnbGl1dWRvbG5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzODEwMzUsImV4cCI6MjA1ODk1NzAzNX0.MwDG-B3cACE9ntaadvKNWMMRLsgZjE5LiCMToY7RJA8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
