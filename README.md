# Menu Digital Pentol

Website statis untuk **menu digital penjual pentol** yang diakses lewat **QR code**.
Pelanggan scan QR → menu langsung terbuka di HP. Fokus pada tampilan menu
(tanpa fitur pesan/checkout).

> Dibuat sebagai proyek freelance. Ringan, tanpa framework, siap deploy drag & drop.

## ✨ Fitur

- **Mobile-first** — dirancang untuk dibuka dari HP setelah scan QR.
- **Bar kategori sticky** (Pentol & Tambahan) dengan highlight otomatis mengikuti scroll.
- **Kartu menu** berisi foto, nama, deskripsi, dan harga.
- **Dark mode** otomatis (mengikuti HP) + tombol manual.
- **Halaman generator QR** (`qr.html`) — bikin QR sendiri, jalan offline.
- **Tanpa dependency / build step** — cukup HTML, CSS, JS biasa.

## 📁 Struktur

```
.
├── index.html      # halaman menu
├── qr.html         # generator QR code
├── style.css       # gaya halaman menu
├── qr.css          # gaya halaman QR
├── script.js       # logika menu (render, kategori, dark mode)
├── qr.js           # logika generator QR
├── qrcode.js       # library QR (MIT, di-vendor — offline)
├── menu-data.js    # >>> DATA MENU: edit di sini <<<
└── images/         # foto menu (placeholder, tinggal ditimpa)
```

## ✏️ Cara mengubah menu

Buka **`menu-data.js`**. Setiap item berupa object:

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

## 🖼️ Cara mengganti foto

Taruh foto di folder **`images/`** dengan **nama file sama** seperti di `menu-data.js`.
Selama foto asli belum ada, otomatis tampil placeholder — jadi tampilan tetap rapi.

## 🚀 Menjalankan lokal

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

## 📤 Deploy

Seret seluruh folder ini ke **app.netlify.com/drop** — langsung online.
Lalu buka `qr.html`, tempel URL hasil deploy, unduh QR (PNG/SVG) untuk dicetak.

## 📄 Lisensi

Kode proyek ini bebas dipakai untuk keperluan klien.
`qrcode.js` © Kazuhiko Arase — lisensi MIT.
