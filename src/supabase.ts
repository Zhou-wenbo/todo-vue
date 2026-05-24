import { createClient,SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl= 'https://bdzbnmdpwsfovrilzebx.supabase.co'
const supabaseAnonKey= 'sb_publishable_HYMZCgcmBFtD0oxMa-IDsw_klb7rJCw'

export const supabase : SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)