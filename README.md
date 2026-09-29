# Website Warung Ndeso 

Website profil untuk **Warung Makan Ndeso**, Desa Monggot, Kabupaten Grobogan — dibangun untuk mendukung digitalisasi UMKM kuliner desa.

Dikembangkan sebagai laporan kerja praktek:
**Pembuatan Website Profile Warung Makan Ndeso Untuk Mendukung Digitalisasi UMKM Desa Monggot Grobogan**
Giri Nada Wardana — Teknik Informatika, Universitas Surakarta
Dosen Pembimbing: Ramadhian Agus Triono S., S.Ag., S.Kom., M.M.

🔗 **Live site:**
https://warungndeso.my.id/
---

## Latar Belakang

Warung Makan Ndeso sebelumnya hanya mengandalkan promosi dari mulut ke mulut, sehingga informasi profil, menu, harga, lokasi, dan jam operasional belum bisa diakses secara luas. Website ini dibangun sebagai media informasi dan promosi digital agar jangkauannya lebih luas.

## Fitur Utama

- **Beranda (Hero Section)** — kesan pertama yang menonjolkan identitas warung
- **Tentang Kami** — profil singkat usaha
- **Menu Favorit** — daftar menu lengkap dengan foto dan harga (Mie Ayam Ceker, Ayam Bakar, dll.)
- **Galeri Foto** — dokumentasi visual warung dan menu
- **Testimoni Pelanggan** — ulasan dari pelanggan yang sudah datang
- **Lokasi & Jam Operasional** — terintegrasi dengan Google Maps
- **Kontak Cepat** — tombol WhatsApp mengambang (Floating Action Button)

## Teknologi

| Bagian | Teknologi |
|---|---|
| Struktur | HTML |
| Tampilan & tata letak | CSS |
| Interaktivitas | JavaScript (hamburger menu, animasi scroll, slideshow, carousel) |
| Font | Poppins |
| Warna utama | Oranye `#FF9800`, hijau WhatsApp `#25D366` |
| Hosting | Vercel |

Website bersifat statis/semi-dinamis tanpa database — seluruh konten dimuat langsung dalam struktur kode.

## Hasil Pengujian

- **Black box testing** — seluruh fitur utama (navigasi, menu, galeri, responsivitas mobile, kontak) diuji dan berhasil (valid)
- **Evaluasi kuesioner** — skala Likert kepada 21 responden, mayoritas menjawab *Sangat Setuju* dan *Setuju* bahwa website mudah diakses, tampilannya menarik, serta informasi menu dan lokasi jelas

## Cara Menjalankan

Karena website ini murni HTML/CSS/JS tanpa proses build, cukup:

```bash
git clone https://github.com/GiriNada/website-warung-ndeso.git
cd website-warung-ndeso
```

Lalu buka `index.html` langsung di browser, atau jalankan local server sederhana:

```bash
# pakai VS Code Live Server, atau
python -m http.server
```

## Struktur Proyek

```
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    └── icons/
```


## Deployment

Website ini di-deploy ke [Vercel](https://vercel.com). Untuk deploy ulang:

1. Hubungkan repository ini ke akun Vercel
2. Vercel otomatis mendeteksi ini sebagai static site
3. Setiap `git push` ke branch `main` akan otomatis men-deploy versi terbaru

## Screenshot

> `Halaman`
> <img width="1902" height="1043" alt="image" src="https://github.com/user-attachments/assets/cfe52a33-063b-4c97-b2a0-7ecd2d46b883" />
> <img width="1900" height="503" alt="image" src="https://github.com/user-attachments/assets/261e9bf3-4b95-4c6f-8656-4677f91f28b5" />
> <img width="1892" height="1048" alt="image" src="https://github.com/user-attachments/assets/52396911-2a92-4af1-b4a3-4532732625e7" />
> <img width="1897" height="1046" alt="image" src="https://github.com/user-attachments/assets/66f1f8b0-f873-4f0f-abe8-8e3caff223de" />
> <img width="1888" height="470" alt="image" src="https://github.com/user-attachments/assets/8d3dabd2-1005-4851-b9a5-d2a15b8d8239" />
> <img width="1896" height="1046" alt="image" src="https://github.com/user-attachments/assets/42a07f32-5834-49f9-bfdd-42f622212673" />
> <img width="1901" height="557" alt="image" src="https://github.com/user-attachments/assets/96a83bcb-faa5-4262-8e0a-059126d1bced" />






## Pengembangan Selanjutnya

- Fitur pemesanan online (e-commerce)
- Content Management System (CMS) agar pemilik bisa update menu sendiri tanpa coding
- Penambahan jumlah responden uji coba

## Kontak

**Giri Nada Wardana**
Teknik Informatika, Universitas Surakarta
📧 girinada79@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/giri-nada-wardana-2020a6310)
