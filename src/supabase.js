
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iwbtskwwtiacynhadomf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3YnRza3d3dGlhY3luaGFkb21mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyOTU5MDIsImV4cCI6MjAyNzg3MTkwMn0.35ezovNaKdxuwiDqDieK4wntLcuUMmdsXToDiQMMIoQ"

 export const supabase = createClient(supabaseUrl, supabaseKey)