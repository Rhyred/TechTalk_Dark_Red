import Link from "next/link"
import { BookOpen, Github, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 animate-fade-up">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-primary">Tech.Talk</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Platform pembelajaran online tentang Edge Computing dan teknologi terkini.
            </p>
          </div>
          <div className="animate-fade-up animate-delay-100">
            <h3 className="font-semibold mb-4 text-lg">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"></span>
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/materi"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"></span>
                  Materi
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"></span>
                  Tentang
                </Link>
              </li>
            </ul>
          </div>
          <div className="animate-fade-up animate-delay-200">
            <h3 className="font-semibold mb-4 text-lg">Akun</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/login"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"></span>
                  Masuk
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"></span>
                  Daftar
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-2 transition-all duration-300"></span>
                  Profil
                </Link>
              </li>
            </ul>
          </div>
          <div className="animate-fade-up animate-delay-300">
            <h3 className="font-semibold mb-4 text-lg">Sosial Media</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-full"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-full"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-full"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground animate-fade-up animate-delay-400">
          <p>&copy; {new Date().getFullYear()} Tech.Talk. Hak Cipta Dilindungi.</p>
          <p className="mt-2 text-xs">
            <Link href="#" className="hover:text-primary transition-colors">
              Kebijakan Privasi
            </Link>
            {" • "}
            <Link href="#" className="hover:text-primary transition-colors">
              Syarat dan Ketentuan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

