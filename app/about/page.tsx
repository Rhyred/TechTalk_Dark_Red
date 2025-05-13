import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

// Data tim
const teamMembers = [
  {
    name: "Robi Rizki Permana",
    role: "Ketua & Developer",
    image: "obi.jpeg?height=300&width=300",
    bio: "Mahasiswa Teknik Informatika Juga Sebagai Ketua Team dengan keahlianya dalam pengembangan web dan minat khusus pada Edge Computing. Robi/Agan's memimpin pengembangan platform Tech.Talk.",
    social: {
      github: "https://github.com/Rhyred",
      linkedin: "https://www.linkedin.com/in/robi-rizki-permana-9b483920b/",
      instagram: "https://www.instagram.com/rake_rhyred/",
    },
  },
  {
    name: "Ratu Qolbu Maziah",
    role: "Content Writter",
    image: "quens.jpeg?height=300&width=300",
    bio: "Mahasiswa Teknik Informatika dengan fokus pada AI dan Machine Learning. Ratu bertanggung jawab untuk membuat dan mengelola konten pembelajaran Dan Referensi Informasi di Tech.Talk , serta membangun sinopsis project video ",
    social: {
      github: "#",
      linkedin: "#",
      instagram: "https://www.instagram.com/qratumaziah/",
    },
  },
  {
    name: "Hafidz Hasan Sunandar",
    role: "UI/UX Designer",
    image: "/hafidz.jpeg?height=300&width=300",
    bio: "Mahasiswa Teknik Informatika dengan keahlian dalam UI/UX. Hafidz merancang antarmuka pengguna yang intuitif dan menarik untuk platform Tech.Talk , serta membuat Storyline yang menarik.",
    social: {
      github: "#",
      linkedin: "#",
      instagram: "https://www.instagram.com/hfidz04/",
    },
  },
  {
    name: "Fadli Al Hasybi",
    role: "Researcher",
    image: "/fadli.jpeg?height=300&width=300",
    bio: "Mahasiswa Teknik Informatika dengan fokus pada IoT dan Edge Computing. Fadli melakukan penelitian tentang tren terbaru dalam Edge Computing untuk konten Tech.Talk , serta berfokus pada Storyboard",
    social: {
      github: "#",
      linkedin: "#",
      instagram: "https://www.instagram.com/habsheesh_/?utm_source=ig_web_button_share_sheet/",
    },
  },
  {
    name: "Raihan",
    role: "Marketing & Outreach",
    image: "/raihan.jpeg?height=300&width=300",
    bio: "Mahasiswa Teknik Informatika dengan minat pada teknologi. Raihan bertanggung jawab untuk mempromosikan Tech.Talk sekaligus Membuat Project video.",
    social: {
      github: "#",
      linkedin: "#",
      instagram: "https://www.instagram.com/haans1220?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  },
]

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-up">Tentang Kami</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto animate-fade-up animate-delay-100">
          Mengenal lebih dekat tim di balik Tech.Talk dan misi kami untuk menyebarkan pengetahuan tentang Edge Computing
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-right animate-delay-200">
              <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
              <p className="text-muted-foreground mb-4">
                Tech.Talk didirikan dengan misi untuk menyebarkan pengetahuan tentang Edge Computing dan teknologi
                terkait kepada masyarakat luas dan Khusunya Rekan Mahasiswa Informatika. Kami percaya bahwa pemahaman tentang teknologi ini sangat penting di era
                digital saat ini.  
              </p>
              <p className="text-muted-foreground">
                Dengan platform kami, pengguna dapat mengakses berbagai materi pembelajaran tentang Edge Computing, yang
                disusun oleh Kami. Kami berkomitmen untuk terus meningkatkan kualitas dan kuantitas
                materi yang kami sediakan.
              </p>
            </div>
            <div className="relative h-[300px] w-full animate-fade-left animate-delay-300">
              <Image
                src="/ppg.jpg?height=600&width=800"
                alt="Misi Kami"
                fill
                className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 relative h-[300px] w-full animate-fade-right animate-delay-200">
              <Image
                src="/itenas.jpg?height=600&width=800"
                alt="Sejarah Kami"
                fill
                className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-left animate-delay-300">
              <h2 className="text-2xl font-bold mb-4">Sejarah Kami</h2>
              <p className="text-muted-foreground mb-4">
                Tech.Talk dimulai sebagai project kelompok mahasiswa ITENAS (Institut Teknologi Nasional Bandung) pada tahun 2025, 
                ketika kami melihat kurangnya sumber belajar tentang Edge Computing dalam bahasa Indonesia. 
                Seiring berjalannya waktu, kami terus mengembangkan platform ini untuk menjadi sumber belajar yang komprehensif. 
                Serta Juga Sebagai Tugas Kuliah Di Mata Kuliah IFB Pengantar Transormasi Digital
              </p>
              <p className="text-muted-foreground">
                Saat ini, Tech.Talk telah menjadi salah satu platform pembelajaran online terkemuka tentang Edge
                Computing di Indonesia, dengan Tahap Pengembangan dan beberapa materi pembelajaran yang tersedia.
              </p>
            </div>
          </div>
        </section>

        {/* Tambahkan section video */}
        <section className="animate-fade-up animate-delay-400">
          <h2 className="text-2xl font-bold mb-6 text-center">Project video</h2>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wTsMzIZC12k"
                title="Video Project  Tech.Talk"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Tonton project After Movie tim kami untuk mengenal lebih dekat para pendiri Serta Memperluas Ilmu Edge computing dan visi Tech.Talk
            </p>
          </div>
        </section>

        <section className="animate-fade-up animate-delay-500">
          <h2 className="text-2xl font-bold mb-6 text-center">Tim Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <Link
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href={member.social.github}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href={member.social.instagram}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

