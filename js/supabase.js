import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = "https://pqqydqzxpzhtutlyfjal.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxcXlkcXp4cHpodHV0bHlmamFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDY0NzYsImV4cCI6MjA5NjUyMjQ3Nn0.NQQrl5zabFVDBPgoDiNp9WAbZf3OM0-2psY6TszWd2Y"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

if (supabase.auth) {
    console.log("Холбогдсон байна")
    console.log(supabase.auth)
} else {
    console.log("Холбогдсонгүй")
}