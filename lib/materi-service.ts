import { supabase } from "./supabase"
import type { Materi } from "@/types"

export async function getAllMateri(): Promise<Materi[]> {
  const { data, error } = await supabase
    .from("materi")
    .select("*, author:profiles(*)")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching materi:", error)
    return []
  }

  return data || []
}

export async function getMateriBySlug(slug: string): Promise<Materi | null> {
  const { data, error } = await supabase.from("materi").select("*, author:profiles(*)").eq("slug", slug).single()

  if (error) {
    console.error("Error fetching materi by slug:", error)
    return null
  }

  return data
}

export async function getRelatedMateri(currentMateriId: string, limit = 3): Promise<Materi[]> {
  const { data, error } = await supabase
    .from("materi")
    .select("*, author:profiles(*)")
    .neq("id", currentMateriId)
    .limit(limit)

  if (error) {
    console.error("Error fetching related materi:", error)
    return []
  }

  return data || []
}

