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
    nama: "Siomay Ori",
    deskripsi: "Siomay kukus original, cocok dicampur kuah.",
    harga: 500,
    gambar: "images/siomay-ori.png",
  },
  {
    kategori: "menu",
    nama: "Siomay Gobis",
    deskripsi: "Siomay dibungkus kol, kukus.",
    harga: 500,
    gambar: "images/siomay-gobis.png",
  },
  {
    kategori: "menu",
    nama: "Pentol Tahu",
    deskripsi: "Tahu goreng isi adonan pentol.",
    harga: 250,
    gambar: "images/tahu-bakso.jpg",
  },
  {
    kategori: "menu",
    nama: "Tahu Bakso",
    deskripsi: "Tahu goreng isi bakso, gurih.",
    harga: 500,
    gambar: "images/tahu-bakso-goreng.png",
  },
  {
    kategori: "menu",
    nama: "Pentol Alus",
    deskripsi: "Pentol tekstur halus, lembut.",
    harga: 500,
  },
  {
    kategori: "menu",
    nama: "Pentol Kasar",
    deskripsi: "Pentol tekstur kasar, kenyal.",
    harga: 500,
  },
  {
    kategori: "menu",
    nama: "Pentol Jamur",
    deskripsi: "Pentol isi jamur, gurih.",
    harga: 500,
  },
  {
    kategori: "menu",
    nama: "Pentol Sosis",
    deskripsi: "Pentol isi sosis.",
    harga: 500,
  },
  {
    kategori: "menu",
    nama: "Pentol Ayam Dhower",
    deskripsi: "Pentol ayam dhower.",
    harga: 500,
  },
  {
    kategori: "menu",
    nama: "Pentol Ati Ayam",
    deskripsi: "Pentol isi ati ayam.",
    harga: 500,
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
];

// Pilihan sambal (gratis, ditampilkan sebagai info — bukan item menu)
const SAMBAL = [
  "Bumbu Kacang",
  "Sambel Cabe",
  "Kecap",
  "Saos Cabe",
  "Saos Tomat",
];
