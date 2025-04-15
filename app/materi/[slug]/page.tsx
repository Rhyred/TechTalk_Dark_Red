"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft, BookOpen, Share2, CheckCircle } from "lucide-react"
import { QuizSection } from "@/components/quiz-section"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/context/auth-context"

// Ubah data materi
const materiList = [
  {
    id: 1,
    title: "Pengenalan Edge Computing",
    description: "Pelajari konsep dasar Edge Computing dan bagaimana teknologi ini mengubah cara kita memproses data",
    image: "/edgecomputing.jpg?height=400&width=800",
    category: "Fundamental",
    duration: "2 jam",
    level: "Pemula",
    slug: "pengenalan-edge-computing",
    content: `
      <h2>Apa itu Edge Computing?</h2>
      <p>Edge Computing adalah paradigma komputasi yang membawa pemrosesan data dan aplikasi lebih dekat ke lokasi di mana data dihasilkan, alih-alih mengandalkan pusat data cloud yang mungkin berada ribuan mil jauhnya. Ini memungkinkan pemrosesan data yang lebih cepat dan efisien.</p>
      
      <h2>Mengapa Edge Computing Penting?</h2>
      <p>Dengan pertumbuhan perangkat IoT dan aplikasi yang membutuhkan respons real-time, Edge Computing menjadi semakin penting karena:</p>
      <ul>
        <li>Mengurangi latensi dengan memproses data lebih dekat dengan sumbernya</li>
        <li>Mengurangi bandwidth dengan memfilter dan memproses data sebelum dikirim ke cloud</li>
        <li>Meningkatkan privasi dan keamanan dengan menyimpan data sensitif secara lokal</li>
        <li>Memungkinkan operasi berkelanjutan bahkan ketika koneksi internet terputus</li>
      </ul>
      
      <h2>Arsitektur Edge Computing</h2>
      <p>Arsitektur Edge Computing biasanya terdiri dari tiga lapisan utama:</p>
      <ul>
        <li>Perangkat Edge: Perangkat yang menghasilkan data (sensor, kamera, dll.)</li>
        <li>Edge Gateway: Perangkat yang mengumpulkan dan memproses data dari perangkat edge</li>
        <li>Cloud: Infrastruktur cloud yang menyimpan dan memproses data untuk analisis jangka panjang</li>
      </ul>
      
      <h2>Kasus Penggunaan Edge Computing</h2>
      <p>Edge Computing digunakan dalam berbagai industri dan aplikasi, termasuk:</p>
      <ul>
        <li>Smart Cities: Pemantauan lalu lintas, kualitas udara, dan infrastruktur kota</li>
        <li>Manufaktur: Pemantauan dan kontrol mesin secara real-time</li>
        <li>Kesehatan: Pemantauan pasien dan analisis data medis</li>
        <li>Retail: Pengalaman belanja yang dipersonalisasi dan manajemen inventaris</li>
        <li>Transportasi: Kendaraan otonom dan manajemen armada</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Apa definisi utama dari Edge Computing?",
        options: [
          "Teknologi untuk menyimpan data di cloud",
          "Paradigma komputasi yang membawa pemrosesan data lebih dekat ke sumbernya",
          "Metode untuk mengoptimalkan algoritma AI",
          "Teknik untuk meningkatkan kecepatan internet",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Manakah yang BUKAN merupakan keuntungan dari Edge Computing?",
        options: [
          "Mengurangi latensi",
          "Meningkatkan privasi data",
          "Meningkatkan kapasitas penyimpanan",
          "Memungkinkan operasi saat offline",
        ],
        correctAnswer: 2,
      },
      {
        id: 3,
        question:
          "Lapisan mana dalam arsitektur Edge Computing yang mengumpulkan dan memproses data dari perangkat edge?",
        options: ["Perangkat Edge", "Edge Gateway", "Cloud", "Edge Controller"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Industri mana yang TIDAK disebutkan sebagai kasus penggunaan Edge Computing dalam materi?",
        options: ["Smart Cities", "Manufaktur", "Pendidikan", "Kesehatan"],
        correctAnswer: 2,
      },
      {
        id: 5,
        question: "Mengapa Edge Computing penting untuk aplikasi yang membutuhkan respons real-time?",
        options: [
          "Karena menyediakan penyimpanan data yang lebih besar",
          "Karena mengurangi latensi dengan memproses data lebih dekat dengan sumbernya",
          "Karena lebih murah daripada Cloud Computing",
          "Karena lebih mudah diimplementasikan",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Neural Processing Unit (NPU)",
    description: "Memahami peran NPU dalam akselerasi AI di perangkat edge",
    image: "/NPU.jpg?height=400&width=800",
    category: "Hardware",
    duration: "3 jam",
    level: "Menengah",
    slug: "neural-processing-unit",
    content: `
      <h2>Apa itu Neural Processing Unit (NPU)?</h2>
      <p>Neural Processing Unit (NPU) adalah jenis prosesor khusus yang dirancang untuk mempercepat beban kerja kecerdasan buatan (AI) dan pembelajaran mesin (ML). NPU dioptimalkan untuk operasi yang umum digunakan dalam jaringan neural, seperti perkalian matriks dan fungsi aktivasi.</p>
      
      <h2>Peran NPU dalam Edge Computing</h2>
      <p>NPU memainkan peran penting dalam Edge Computing dengan:</p>
      <ul>
        <li>Mempercepat inferensi model AI di perangkat edge</li>
        <li>Mengurangi konsumsi daya dibandingkan dengan CPU atau GPU untuk beban kerja AI</li>
        <li>Memungkinkan aplikasi AI real-time di perangkat dengan sumber daya terbatas</li>
        <li>Meningkatkan privasi dengan memproses data sensitif secara lokal</li>
      </ul>
      
      <h2>Arsitektur NPU</h2>
      <p>Arsitektur NPU biasanya terdiri dari:</p>
      <ul>
        <li>Array Pemrosesan: Unit komputasi paralel untuk operasi matriks</li>
        <li>Memory On-Chip: Penyimpanan data lokal untuk mengurangi akses memori eksternal</li>
        <li>Unit Kontrol: Mengelola aliran data dan eksekusi operasi</li>
        <li>Akselerator Fungsi: Hardware khusus untuk fungsi aktivasi dan operasi lainnya</li>
      </ul>
      
      <h2>NPU di Perangkat Modern</h2>
      <p>Banyak perangkat modern yang sudah dilengkapi dengan NPU, termasuk:</p>
      <ul>
        <li>Smartphone: Apple A-series (Neural Engine), Qualcomm Snapdragon (Hexagon DSP), Samsung Exynos (NPU)</li>
        <li>Perangkat IoT: Google Edge TPU, Intel Movidius</li>
        <li>Komputer: Apple M-series (Neural Engine), Intel Neural Compute Stick</li>
      </ul>
      
      <h2>Masa Depan NPU</h2>
      <p>Perkembangan NPU terus berlanjut dengan fokus pada:</p>
      <ul>
        <li>Peningkatan efisiensi energi</li>
        <li>Dukungan untuk model AI yang lebih kompleks</li>
        <li>Integrasi yang lebih baik dengan perangkat keras lainnya</li>
        <li>Standarisasi arsitektur dan framework</li>
      </ul>
    `,
    quiz: [
      {
        id: 1,
        question: "Apa kepanjangan dari NPU?",
        options: [
          "Network Processing Unit",
          "Neural Processing Unit",
          "Node Processing Unit",
          "Natural Processing Unit",
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Untuk apa NPU dioptimalkan?",
        options: [
          "Pemrosesan grafis",
          "Komputasi umum",
          "Operasi jaringan neural seperti perkalian matriks",
          "Penyimpanan data",
        ],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "Manakah yang BUKAN merupakan komponen dari arsitektur NPU?",
        options: ["Array Pemrosesan", "Memory On-Chip", "Unit Kontrol", "Floating Point Unit"],
        correctAnswer: 3,
      },
      {
        id: 4,
        question: "Apa nama NPU yang digunakan dalam perangkat Apple?",
        options: ["Neural Engine", "Hexagon DSP", "Edge TPU", "Movidius"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "Apa keuntungan utama menggunakan NPU dibandingkan dengan CPU untuk beban kerja AI?",
        options: [
          "Lebih murah",
          "Lebih mudah diprogram",
          "Konsumsi daya lebih rendah",
          "Lebih fleksibel untuk berbagai tugas",
        ],
        correctAnswer: 2,
      },
    ],
  },
]

export default function MateriDetailPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState("content")
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizScore, setQuizScore] = useState<number | null>(null)
  const { user } = useAuth()
  const { toast } = useToast()

  const materi = materiList.find((m) => m.slug === params.slug)

  useEffect(() => {
    // Simulasi mengambil status quiz dari database
    const checkQuizStatus = async () => {
      if (user) {
        // Di implementasi nyata, ini akan mengambil data dari Supabase
        // const { data, error } = await supabase
        //   .from("user_quiz_results")
        //   .select("*")
        //   .eq("user_id", user.id)
        //   .eq("materi_id", materi?.id)
        //   .single()

        // Untuk demo, kita gunakan data statis
        if (materi?.slug === "pengenalan-edge-computing") {
          setQuizCompleted(true)
          setQuizScore(90)
        }
      }
    }

    checkQuizStatus()
  }, [user, materi])

  const handleQuizComplete = (score: number) => {
    setQuizCompleted(true)
    setQuizScore(score)

    // Di implementasi nyata, ini akan menyimpan hasil ke Supabase
    // const saveQuizResult = async () => {
    //   if (user) {
    //     const { error } = await supabase
    //       .from("user_quiz_results")
    //       .upsert({
    //         user_id: user.id,
    //         materi_id: materi?.id,
    //         score: score,
    //         completed_at: new Date().toISOString()
    //       })
    //   }
    // }
    // saveQuizResult()

    toast({
      title: "Quiz Selesai!",
      description: `Anda mendapatkan nilai ${score}%`,
      variant: score >= 80 ? "default" : score >= 60 ? "default" : "destructive",
    })
  }

  if (!materi) {
    return (
      <div className="container py-10 text-center">
        <h1 className="text-2xl font-bold">Materi tidak ditemukan</h1>
        <p className="mt-4 text-muted-foreground">Materi yang Anda cari tidak tersedia atau telah dihapus.</p>
        <Link href="/materi">
          <Button className="mt-6 animate-bounce">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Daftar Materi
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="mb-6 animate-fade-up">
        <Link href="/materi">
          <Button variant="ghost" size="sm" className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Daftar Materi
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative h-[300px] w-full mb-6 animate-fade-up">
            <Image
              src={materi.image || "/placeholder.svg"}
              alt={materi.title}
              fill
              className="object-cover rounded-lg hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          <div className="mb-6 animate-fade-up animate-delay-100">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-primary/10 text-primary">
                {materi.category}
              </Badge>
              <Badge variant="outline">{materi.level}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                <span>{materi.duration}</span>
              </div>
              {quizCompleted && (
                <Badge variant="outline" className="bg-green-500/10 text-green-500 flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  <span>Quiz: {quizScore}%</span>
                </Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">{materi.title}</h1>
            <p className="text-muted-foreground text-lg mb-6">{materi.description}</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-fade-up animate-delay-200">
            <TabsList className="mb-6">
              <TabsTrigger value="content">Materi</TabsTrigger>
              <TabsTrigger value="quiz">Quiz</TabsTrigger>
            </TabsList>

            <TabsContent value="content">
              <div
                className="prose prose-lg dark:prose-invert max-w-none animate-fade-up"
                dangerouslySetInnerHTML={{ __html: materi.content }}
              />
            </TabsContent>

            <TabsContent value="quiz">
              {materi.quiz && (
                <QuizSection
                  title={`Quiz: ${materi.title}`}
                  description="Uji pemahaman Anda tentang materi yang telah dipelajari"
                  questions={materi.quiz}
                  onComplete={handleQuizComplete}
                />
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-lg border bg-card p-6 animate-fade-left">
              <h3 className="font-semibold mb-4">Tentang Materi Ini</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kategori</span>
                  <span className="font-medium">{materi.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level</span>
                  <span className="font-medium">{materi.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Durasi</span>
                  <span className="font-medium">{materi.duration}</span>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <Button className="w-full group" onClick={() => setActiveTab("quiz")}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  {quizCompleted ? "Lihat Hasil Quiz" : "Mulai Quiz"}
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Bagikan
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 animate-fade-left animate-delay-100">
              <h3 className="font-semibold mb-4">Materi Terkait</h3>
              <div className="space-y-4">
                {materiList
                  .filter((m) => m.id !== materi.id)
                  .slice(0, 3)
                  .map((m) => (
                    <Link key={m.id} href={`/materi/${m.slug}`} className="block group">
                      <div className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0">
                          <Image
                            src={m.image || "/placeholder.svg"}
                            alt={m.title}
                            fill
                            className="object-cover rounded group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors">{m.title}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">{m.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

