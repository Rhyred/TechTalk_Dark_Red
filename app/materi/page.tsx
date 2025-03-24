import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Ubah data materi
const materiList = [
  {
    id: 1,
    title: "Pengenalan Edge Computing",
    description: "Pelajari konsep dasar Edge Computing dan bagaimana teknologi ini mengubah cara kita memproses data",
    image: "/edgecomputing.jpg?height=200&width=400",
    category: "Fundamental",
    duration: "2 jam",
    level: "Pemula",
    slug: "pengenalan-edge-computing",
  },
  {
    id: 2,
    title: "Neural Processing Unit (NPU)",
    description: "Memahami peran NPU dalam akselerasi AI di perangkat edge",
    image: "/NPU.jpg?height=200&width=400",
    category: "Hardware",
    duration: "3 jam",
    level: "Menengah",
    slug: "neural-processing-unit",
  },
  {
    id: 3,
    title: "Edge Computing vs Cloud Computingc",
    description: "Membandingkan Edge Computing dan Cloud Computing: kelebihan dan kekurangan",
    image: "/vs.png?height=200&width=400",
    category: "Konsep",
    duration: "2.5 jam",
    level: "Pemula",
    slug: "edge-vs-cloud-computing",
  },
  {
    id: 4,
    title: "IoT dan Edge Computing",
    description: "Mengintegrasikan Edge Computing dengan perangkat Internet of Things (IoT)",
    image: "/IoT.png?height=200&width=400",
    category: "Implementasi",
    duration: "4 jam",
    level: "Menengah",
    slug: "iot-dan-edge-computing",
  },
  {
    id: 5,
    title: "Edge AI: Implementasi AI di Edge",
    description: "Menjalankan model AI di perangkat edge untuk inferensi real-time",
    image: "/AI.png?height=200&width=400",
    category: "AI",
    duration: "3 jam",
    level: "Lanjutan",
    slug: "edge-ai-implementasi",
  },
  {
    id: 6,
    title: "Keamanan dalam Edge Computing",
    description: "Strategi dan praktik terbaik untuk mengamankan infrastruktur Edge Computing",
    image: "/SC.jpg?height=200&width=400",
    category: "Keamanan",
    duration: "2.5 jam",
    level: "Menengah",
    slug: "keamanan-edge-computing",
  },
]

export default function MateriPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center animate-fade-up">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Materi Edge Computing</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
          Jelajahi berbagai materi pembelajaran tentang Edge Computing dan teknologi terkait
        </p>
      </div>

      {/* Filter dan Pencarian */}
      <div className="mb-8 grid gap-4 md:grid-cols-4 animate-fade-up animate-delay-100">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Cari materi..." className="pl-10 w-full" />
          </div>
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Kategori</SelectItem>
              <SelectItem value="fundamental">Fundamental</SelectItem>
              <SelectItem value="hardware">Hardware</SelectItem>
              <SelectItem value="konsep">Konsep</SelectItem>
              <SelectItem value="implementasi">Implementasi</SelectItem>
              <SelectItem value="ai">AI</SelectItem>
              <SelectItem value="keamanan">Keamanan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Level</SelectItem>
              <SelectItem value="pemula">Pemula</SelectItem>
              <SelectItem value="menengah">Menengah</SelectItem>
              <SelectItem value="lanjutan">Lanjutan</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materiList.map((materi, index) => (
          <Card
            key={materi.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 group animate-fade-up"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={materi.image || "/placeholder.svg"}
                alt={materi.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={`/materi/${materi.slug}`} className="w-full">
                  <Button variant="secondary" size="sm" className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Baca Materi
                  </Button>
                </Link>
              </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  {materi.category}
                </Badge>
                <Badge variant="outline">{materi.level}</Badge>
              </div>
              <CardTitle className="mt-2 group-hover:text-primary transition-colors">{materi.title}</CardTitle>
              <CardDescription>{materi.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                <span>{materi.duration}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/materi/${materi.slug}`} className="w-full">
                <Button className="w-full group">
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span className="mr-1">Baca Materi</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

