import { createClient } from '@supabase/supabase-js';

const URL = 'https://mypqffxuqjbdjynrlpuv.supabase.co';
const API_KEY  = process.env.REACT_APP_SUPABASE_KEY;

export const supabase = createClient(URL, API_KEY);
