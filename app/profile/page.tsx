"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/context/auth-context"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabase"
import type { Profile } from "@/types"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [avatar, setAvatar] = useState<File | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!user) {
      router.push("/login")
      return
    }

    async function getProfile() {
      try {
        setLoading(true)

        const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()

        if (error) {  
          throw error
        }

        if (data) {
          setProfile(data)
          setAvatarUrl(data.avatar_url)
        }
      } catch (error: any) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    getProfile()
  }, [user, router, toast])

  // Pada bagian handleAvatarChange
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "File terlalu besar",
          description: "Ukuran file maksimal 2MB",
          variant: "destructive",
        })
        return
      }
      setAvatar(file)
      setAvatarUrl(URL.createObjectURL(file))
    }
  }

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!profile) return

    try {
      setLoading(true)

      // Upload avatar jika ada
      if (avatar) {
        setUploading(true)

        // Upload foto profil Tentang disini
        // Hapus avatar lama jika ada
        if (profile.avatar_url && profile.avatar_url.includes("supabase.co")) {
          const oldAvatarPath = profile.avatar_url.split("/").pop()
          if (oldAvatarPath) {
            await supabase.storage.from("avatars").remove([oldAvatarPath])
          }
        }

        // Upload avatar baru
        const fileExt = avatar.name.split(".").pop()
        const fileName = `${user!.id}-${Math.random().toString(36).substring(2)}.${fileExt}`

        const { data: uploadData, error: uploadError } = await supabase.storage.from("avatars").upload(fileName, avatar)

        if (uploadError) {
          throw uploadError
        }

        // Dapatkan URL publik
        const { data: urlData } = await supabase.storage.from("avatars").getPublicUrl(fileName)

        if (urlData) {
          profile.avatar_url = urlData.publicUrl
        }

        setUploading(false)
      }

      // Update profil
      const { error } = await supabase.from("profiles").upsert({
        id: user!.id,
        full_name: profile.full_name,
        username: profile.username,
        bio: profile.bio,
        website: profile.website,
        avatar_url: profile.avatar_url,
        updated_at: new Date().toISOString(),
      })

      if (error) {
        throw error
      }

      toast({
        title: "Profil diperbarui",
        description: "Profil Anda berhasil diperbarui",
      })
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container py-10 flex justify-center items-center min-h-[calc(100vh-16rem)]">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p>Memuat profil...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Profil Saya</h1>

        <Tabs defaultValue="profile">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="account">Akun</TabsTrigger>
            <TabsTrigger value="learning" asChild>
              <Link href="/profile/learning-progress">Progress Belajar</Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Informasi Profil</CardTitle>
                <CardDescription>
                  Perbarui informasi profil Anda di sini. Informasi ini akan ditampilkan secara publik.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                      <div className="relative h-24 w-24">
                        <Image
                          src={avatarUrl || "/placeholder.svg?height=96&width=96"}
                          alt="Avatar"
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="avatar">Foto Profil</Label>
                        {/* Upload foto profil Tentang disini */}
                        <Input
                          id="avatar"
                          type="file"
                          accept="image/*"
                          onChange={handleAvatarChange}
                          disabled={uploading}
                        />
                        <p className="text-sm text-muted-foreground">JPG, PNG atau GIF. Maksimal 2MB.</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                          id="username"
                          value={profile?.username || ""}
                          onChange={(e) => setProfile({ ...profile!, username: e.target.value })}
                          disabled={loading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="full_name">Nama Lengkap</Label>
                        <Input
                          id="full_name"
                          value={profile?.full_name || ""}
                          onChange={(e) => setProfile({ ...profile!, full_name: e.target.value })}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        rows={4}
                        value={profile?.bio || ""}
                        onChange={(e) => setProfile({ ...profile!, bio: e.target.value })}
                        disabled={loading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        type="url"
                        value={profile?.website || ""}
                        onChange={(e) => setProfile({ ...profile!, website: e.target.value })}
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <Button type="submit" disabled={loading || uploading}>
                    {loading || uploading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Menyimpan...
                      </>
                    ) : (
                      "Simpan Perubahan"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Akun</CardTitle>
                <CardDescription>Kelola pengaturan akun Anda, termasuk email dan password.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <div className="flex items-center gap-2">
                    <Input value={user?.email || ""} disabled />
                    <Button variant="outline" disabled>
                      Ubah Email
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Password</Label>
                  <div className="flex items-center gap-2">
                    <Input type="password" value="••••••••" disabled />
                    <Button variant="outline" disabled>
                      Ubah Password
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button variant="destructive" disabled>
                    Hapus Akun
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

