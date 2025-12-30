import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'sb_publishable_3Upbp_a0kWy9CdJGJqwzWA_pI0e4k3y'
const supabaseAnonKey = 'sb_secret_G04738BDniFyYyqKjfyF6A_BcZ98TXG'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)