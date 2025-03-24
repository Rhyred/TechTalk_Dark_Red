import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Award, ArrowRight, Zap, Globe, Cpu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 animate-fade-up">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Jelajahi Dunia <span className="text-primary">Edge Computing</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Platform pembelajaran tentang Edge Computing dan teknologi terkini untuk meningkatkan pengetahuan dan
                keterampilan Anda di era komputasi modern.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-100">
              <Link href="/materi">
                <Button size="lg" className="group">
                  Pelajari Edge Computing
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" size="lg" className="group">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformasi Digital Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-10">
            <div className="mx-auto text-center md:max-w-[58rem] animate-fade-up">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Transformasi Digital</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Memahami perubahan fundamental dalam era digital modern
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-up animate-delay-100">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Zap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Apa itu Transformasi Digital?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Transformasi digital adalah integrasi teknologi digital ke dalam semua area bisnis, mengubah secara
                    fundamental cara beroperasi dan memberikan nilai kepada pelanggan. Ini juga merupakan perubahan
                    budaya yang mengharuskan organisasi terus menantang status quo, bereksperimen, dan nyaman dengan
                    kegagalan.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Dampak Global</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Transformasi digital telah mengubah lanskap bisnis global, menciptakan model bisnis baru,
                    meningkatkan efisiensi operasional, dan membuka peluang pasar yang sebelumnya tidak terjangkau.
                    Organisasi yang tidak beradaptasi berisiko tertinggal dalam persaingan yang semakin ketat.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Cpu className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Edge Computing & Transformasi Digital</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Edge Computing adalah komponen kunci dalam transformasi digital, memungkinkan pemrosesan data lebih
                    dekat dengan sumbernya. Ini mengurangi latensi, meningkatkan privasi data, dan memungkinkan aplikasi
                    real-time yang mendukung inovasi seperti kendaraan otonom, smart cities, dan industri 4.0.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mx-auto text-center mt-8 animate-fade-up animate-delay-200">
              <Link href="/materi">
                <Button variant="outline" className="group">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-10">
            <div className="mx-auto text-center md:max-w-[58rem] animate-fade-up">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Apa itu Edge Computing?</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Pelajari konsep dasar, sejarah, dan implementasi Edge Computing
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-10">
              <div className="flex flex-col items-center space-y-4 text-center animate-fade-up animate-delay-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Konsep Dasar</h3>
                <p className="text-muted-foreground">
                  Pelajari konsep dasar Edge Computing dan bagaimana teknologi ini mengubah cara kita memproses data.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center animate-fade-up animate-delay-200">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Implementasi</h3>
                <p className="text-muted-foreground">
                  Pelajari bagaimana Edge Computing diimplementasikan dalam berbagai industri dan aplikasi.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center animate-fade-up animate-delay-300">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Masa Depan</h3>
                <p className="text-muted-foreground">
                  Pelajari tren dan perkembangan terbaru dalam teknologi Edge Computing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tambahkan section baru setelah fitur unggulan dan sebelum CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="animate-fade-right">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Sejarah Edge Computing</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Edge Computing muncul sebagai respons terhadap pertumbuhan perangkat IoT dan kebutuhan akan pemrosesan
                  data yang lebih cepat. Konsep ini mulai berkembang pada awal 2000-an, tetapi baru mendapatkan momentum
                  signifikan pada dekade 2010-an.
                </p>
                <p>
                  Pada awalnya, Cloud Computing menjadi solusi utama untuk pemrosesan data, tetapi dengan meningkatnya
                  jumlah perangkat yang terhubung, kebutuhan akan pemrosesan data yang lebih dekat dengan sumber data
                  menjadi semakin penting.
                </p>
                <p>
                  Edge Computing hadir untuk mengatasi keterbatasan Cloud Computing, seperti latensi tinggi dan
                  bandwidth yang terbatas, dengan memindahkan sebagian pemrosesan data ke "edge" atau tepi jaringan,
                  lebih dekat dengan sumber data.
                </p>
              </div>
            </div>
            <div className="space-y-6 animate-fade-left">
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Video Pembelajaran</h2>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted hover:shadow-lg transition-shadow duration-300">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/cEOUeItHDdo"
                  title="Pengenalan Edge Computing"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground">
                Video pengenalan tentang Edge Computing dan bagaimana teknologi ini mengubah cara kita memproses data di
                era digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-up">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Siap untuk Menjelajahi Edge Computing?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Daftar sekarang dan akses berbagai materi pembelajaran tentang Edge Computing
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="group">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/materi">
                <Button variant="outline" size="lg" className="group">
                  Jelajahi Materi
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

