/**
 * DATA MENU — Edit di sini saja untuk mengubah menu.
 * ------------------------------------------------------------
 * Setiap item adalah sebuah object dengan field:
 *   kategori   : "pentol" atau "isi"  (harus sama dgn id kategori di bawah)
 *   nama       : nama menu
 *   deskripsi  : keterangan singkat
 *   harga      : angka saja (tanpa "Rp"), contoh: 10000
 *   gambar     : nama file foto di folder /images
 *                (kalau foto belum ada, otomatis tampil placeholder)
 *
 * Cara ganti foto asli:
 *   1. Taruh foto di folder /images
 *   2. Samakan nama file di field "gambar" di bawah
 *      contoh: gambar: "images/pentol-urat.jpg"
 * ------------------------------------------------------------
 */

// Daftar kategori (urutan tampil + label pada bar kategori)
const KATEGORI = [
  { id: "menu", label: "Daftar Menu" },
];

// Daftar item menu — Pentol Kuah Jaya Selo
const MENU = [
  // ---------- PENTOL & PELENGKAP (item dasar per pcs) ----------
  {
    kategori: "menu",
    nama: "Pentol Alus",
    deskripsi: "Pentol halus, tekstur lembut.",
    harga: 250,
    gambar: "images/pentol-alus.jpg",
  },
  {
    kategori: "menu",
    nama: "Pentol Kasar / Urat",
    deskripsi: "Berisi urat sapi, tekstur kenyal & mantap.",
    harga: 500,
    gambar: "images/pentol-urat.jpg",
  },
  {
    kategori: "menu",
    nama: "Siomay",
    deskripsi: "Siomay kukus, cocok dicampur kuah.",
    harga: 500,
    gambar: "images/siomay.jpg",
  },
  {
    kategori: "menu",
    nama: "Pentol Tahu",
    deskripsi: "Tahu goreng isi adonan pentol.",
    harga: 250,
    gambar: "images/tahu-bakso.jpg",
  },

  // ---------- ISI SPESIAL (varian isi, harga per pcs) ----------
  {
    kategori: "menu",
    nama: "Isi Telur Asin",
    deskripsi: "Pentol isi telur asin, gurih legit.",
    harga: 5000,
    gambar: "images/isi-telur-asin.jpg",
  },
  {
    kategori: "menu",
    nama: "Isi Telur Ayam",
    deskripsi: "Pentol isi telur ayam.",
    harga: 5000,
    gambar: "images/isi-telur-ayam.jpg",
  },
  {
    kategori: "menu",
    nama: "Isi Telur Puyuh",
    deskripsi: "Pentol isi telur puyuh, praktis & gurih.",
    harga: 2000,
    gambar: "images/pentol-telur.jpg",
  },
  {
    kategori: "menu",
    nama: "Isi Keju Mozarella",
    deskripsi: "Isian keju mozarella lumer, gurih creamy.",
    harga: 1000,
    gambar: "images/pentol-keju.jpg",
  },
  {
    kategori: "menu",
    nama: "Isi Ayam Dhower",
    deskripsi: "Pentol isi ayam dhower berbumbu.",
    harga: 1000,
    gambar: "images/isi-ayam-dhower.jpg",
  },
  {
    kategori: "menu",
    nama: "Isi Ati Ayam",
    deskripsi: "Pentol isi ati ayam.",
    harga: 1000,
    gambar: "images/isi-ati-ayam.jpg",
  },
  {
    kategori: "menu",
    nama: "Isi Jamur",
    deskripsi: "Pentol isi jamur, gurih & kenyal.",
    harga: 1000,
    gambar: "images/isi-jamur.jpg",
  },
  {
    kategori: "menu",
    nama: "Isi Sosis",
    deskripsi: "Pentol isi potongan sosis.",
    harga: 1000,
    gambar: "images/isi-sosis.jpg",
  },
];

// Pilihan sambal (gratis, ditampilkan sebagai info — bukan item menu)
const SAMBAL = [
  "Bumbu Kacang",
  "Sambel Cabe",
  "Kecap",
  "Saos Cabe",
  "Saos Tomat",
];
