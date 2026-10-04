const SUPABASE_URL = "sb_publishable_MwrDnt0O78Ij4W_Ajeukyw_9Vk0Km5X";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxZnFvd2J2cHprb21peWZ6aGRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwNjMxNjQsImV4cCI6MjEwNjYzOTE2NH0.yKKi630Jxq8RDLQ_RukC5HzQk5fSvL2-cWdHsXqmQiI";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
