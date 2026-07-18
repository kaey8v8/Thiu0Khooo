const supabaseUrl = '__SUPABASE_URL__';
const supabaseAnonKey = '__SUPABASE_ANON_KEY__';

// 全域宣告一次
window.supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);
