<div align="center">

# 🍢 Menu Digital Pentol

**Menu digital penjual pentol yang diakses lewat QR code.**
Pelanggan cukup scan → menu langsung terbuka di HP.

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![No Build](https://img.shields.io/badge/build-tanpa%20framework-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

</div>

> Website statis, ringan, tanpa framework — siap deploy _drag & drop_.
> Fokus pada tampilan menu (tanpa fitur pesan/checkout).

---

## 📑 Daftar Isi

- [Fitur](#-fitur)
- [Teknologi](#-teknologi)
- [Struktur Proyek](#-struktur-proyek)
- [Menjalankan Lokal](#-menjalankan-lokal)
- [Mengubah Menu](#️-cara-mengubah-menu)
- [Mengganti Foto](#️-cara-mengganti-foto)
- [Deploy & QR Code](#-deploy--qr-code)
- [Lisensi](#-lisensi)

---

## ✨ Fitur

- 📱 **Mobile-first** — dirancang untuk dibuka dari HP setelah scan QR.
- 📌 **Bar kategori sticky** (Pentol & Tambahan) dengan highlight otomatis mengikuti scroll.
- 🖼️ **Kartu menu** berisi foto, nama, deskripsi, dan harga.
- 🌙 **Dark mode** otomatis (mengikuti HP) + tombol manual.
- 🔳 **Generator QR** (`qr.html`) — bikin QR sendiri, warna custom, unduh PNG/SVG, jalan **offline**.
- ⚡ **Tanpa dependency / build step** — cukup HTML, CSS, JS biasa.

## 🛠️ Teknologi

| Bagian        | Dipakai                                             |
| ------------- | --------------------------------------------------- |
| Struktur      | HTML5 semantik                                      |
| Gaya          | CSS3 (variabel, dark mode, sticky, responsif)       |
| Logika        | JavaScript (vanilla, tanpa framework)               |
| QR code       | `qrcode.js` — Kazuhiko Arase (MIT, di-_vendor_)     |
| Hosting       | Static hosting apa saja (Netlify Drop, GitHub Pages)|

## 📁 Struktur Proyek

```
.
├── index.html          # halaman menu
├── qr.html             # generator QR code
├── css/
│   ├── style.css       # gaya halaman menu
│   └── qr.css          # gaya halaman QR
├── js/
│   ├── menu-data.js    # >>> DATA MENU: edit di sini <<<
│   ├── script.js       # logika menu (render, kategori, dark mode)
│   ├── qr.js           # logika generator QR
│   └── qrcode.js       # library QR (MIT, di-vendor — offline)
└── images/             # foto menu (placeholder, tinggal ditimpa)
```

## 🚀 Menjalankan Lokal

Butuh server statis kecil (biar path relatif & foto termuat benar):

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## ✏️ Cara Mengubah Menu

Semua data menu ada di satu file: **`menu-data.js`**. Setiap item berupa object:

```js
{
  kategori: "pentol",              // "pentol" atau "tambahan"
  nama: "Pentol Urat",
  deskripsi: "Berisi urat sapi.",
  harga: 3000,                      // angka saja, tanpa "Rp"
  gambar: "images/pentol-urat.jpg", // nama file foto
}
```

Ganti nama usaha & tagline di **`index.html`** (cari `Nama Usaha Anda`).

## 🖼️ Cara Mengganti Foto

Taruh foto di folder **`images/`** dengan **nama file sama** seperti di `menu-data.js`.
Selama foto asli belum ada, otomatis tampil placeholder — jadi tampilan tetap rapi.

## 📤 Deploy & QR Code

1. Seret seluruh folder ini ke **[app.netlify.com/drop](https://app.netlify.com/drop)** — langsung online.
2. Salin URL hasil deploy.
3. Buka **`qr.html`**, tempel URL tadi, atur warna bila perlu.
4. Unduh QR (**PNG** untuk stiker, **SVG** untuk cetak besar tanpa pecah).
5. Tes scan pakai HP dulu, lalu cetak & pasang di meja/gerobak.

> `qr.html` cuma alat bantu — tidak wajib ikut di-deploy dan sudah di-set `noindex`.

## 📄 Lisensi

Kode proyek ini bebas dipakai untuk keperluan klien.
`qrcode.js` © Kazuhiko Arase — lisensi **MIT**.
