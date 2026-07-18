const supabaseUrl = 'https://ojwryrmifoimjkkumdst.supabase.co/';
const supabaseAnonKey = 'sb_publishable_aBjX88rDqNLETYznUHmFmw_3FcO0xbl';

// 全域宣告一次
window.supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);
