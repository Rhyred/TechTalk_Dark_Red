# Tech.Talk - Platform Pembelajaran Edge Computing

Tech.Talk adalah platform pembelajaran online yang berfokus pada Edge Computing dan teknologi terkini. Platform ini menyediakan berbagai materi pembelajaran, quiz, dan fitur pelacakan kemajuan untuk membantu pengguna memahami konsep Edge Computing.

## Struktur Database

Database Tech.Talk telah dinormalisasi untuk memastikan integritas data dan menghindari redundansi. Berikut adalah struktur database utama:

### Tabel Pengguna dan Autentikasi

- **profiles**: Menyimpan informasi profil pengguna
- **roles**: Menyimpan peran pengguna (user, admin, author)
- **user_roles**: Relasi many-to-many antara pengguna dan peran

### Tabel Materi Pembelajaran

- **categories**: Kategori materi (Fundamental, Hardware, dll)
- **difficulty_levels**: Level kesulitan materi (Pemula, Menengah, Lanjutan)
- **materi**: Materi pembelajaran utama
- **modules**: Modul-modul dalam materi
- **tags**: Tag untuk materi
- **materi_tags**: Relasi many-to-many antara materi dan tag

### Tabel Quiz dan Penilaian

- **quiz_questions**: Pertanyaan quiz
- **quiz_options**: Pilihan jawaban untuk pertanyaan quiz
- **user_quiz_results**: Hasil quiz pengguna
- **user_quiz_answers**: Jawaban pengguna untuk setiap pertanyaan

### Tabel Progress Pembelajaran

- **user_progress**: Progress pengguna pada materi
- **completed_modules**: Modul yang telah diselesaikan pengguna
- **certificates**: Sertifikat penyelesaian materi

### Tabel Interaksi Pengguna

- **comments**: Komentar pada materi
- **likes**: Like pada materi
- **bookmarks**: Bookmark materi
- **notifications**: Notifikasi untuk pengguna

## Normalisasi Database

Database telah dinormalisasi hingga bentuk normal ketiga (3NF):

1. **1NF**: Semua atribut adalah atomik dan tidak ada pengulangan grup
2. **2NF**: Semua atribut non-kunci bergantung sepenuhnya pada kunci utama
3. **3NF**: Semua atribut non-kunci bergantung langsung pada kunci utama, bukan pada atribut non-kunci lainnya

Contoh normalisasi:
- Kategori dan level kesulitan dipisahkan ke tabel terpisah
- Pilihan jawaban quiz dipisahkan dari pertanyaan quiz
- Peran pengguna dipisahkan ke tabel terpisah

## Indeks Database

Indeks telah ditambahkan untuk meningkatkan performa query:

- Indeks pada kolom slug materi untuk pencarian cepat
- Indeks pada foreign key untuk mempercepat join
- Indeks pada kolom yang sering digunakan dalam filter

## Row Level Security (RLS)

Kebijakan keamanan tingkat baris (RLS) telah diterapkan untuk memastikan keamanan data:

- Pengguna hanya dapat melihat dan mengedit profil mereka sendiri
- Materi yang belum dipublikasikan hanya dapat dilihat oleh penulis dan admin
- Hanya penulis dan admin yang dapat membuat dan mengedit materi

