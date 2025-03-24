export type User = {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  bio?: string
  role?: string
  created_at?: string
}

export type Materi = {
  id: string
  title: string
  description: string
  content: string
  image_url: string
  category: string
  duration: string
  level: string
  slug: string
  created_at: string
  updated_at: string
  author_id: string
  author?: User
}

export type Profile = {
  id: string
  username: string
  full_name: string
  avatar_url: string
  bio: string
  website: string
  role: string
}

