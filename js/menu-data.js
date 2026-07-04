/**
 * DATA MENU — Edit di sini saja untuk mengubah menu.
 * ------------------------------------------------------------
 * Setiap item adalah sebuah object dengan field:
 *   kategori   : "pentol" atau "tambahan"  (harus sama dgn id kategori di bawah)
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
  { id: "pentol", label: "Pentol" },
  { id: "tambahan", label: "Tambahan" },
];

// Daftar item menu
const MENU = [
  // ---------- PENTOL ----------
  {
    kategori: "pentol",
    nama: "Pentol Original",
    deskripsi: "Pentol daging klasik, kenyal dan gurih.",
    harga: 2000,
    gambar: "images/pentol-original.jpg",
  },
  {
    kategori: "pentol",
    nama: "Pentol Urat",
    deskripsi: "Berisi urat sapi, tekstur lebih mantap.",
    harga: 3000,
    gambar: "images/pentol-urat.jpg",
  },
  {
    kategori: "pentol",
    nama: "Pentol Telur",
    deskripsi: "Pentol besar dengan telur puyuh di dalamnya.",
    harga: 4000,
    gambar: "images/pentol-telur.jpg",
  },
  {
    kategori: "pentol",
    nama: "Pentol Keju",
    deskripsi: "Isian keju lumer, gurih dan creamy.",
    harga: 4000,
    gambar: "images/pentol-keju.jpg",
  },
  {
    kategori: "pentol",
    nama: "Pentol Pedas",
    deskripsi: "Adonan dengan cabai, sensasi pedas nampol.",
    harga: 3000,
    gambar: "images/pentol-pedas.jpg",
  },

  // ---------- TAMBAHAN ----------
  {
    kategori: "tambahan",
    nama: "Tahu Bakso",
    deskripsi: "Tahu goreng isi adonan pentol.",
    harga: 2500,
    gambar: "images/tahu-bakso.jpg",
  },
  {
    kategori: "tambahan",
    nama: "Siomay",
    deskripsi: "Siomay kukus, cocok dicocol sambal.",
    harga: 2500,
    gambar: "images/siomay.jpg",
  },
  {
    kategori: "tambahan",
    nama: "Sambal Kacang",
    deskripsi: "Bumbu kacang halus, manis-pedas.",
    harga: 3000,
    gambar: "images/sambal-kacang.jpg",
  },
  {
    kategori: "tambahan",
    nama: "Kerupuk",
    deskripsi: "Kerupuk renyah pelengkap.",
    harga: 1000,
    gambar: "images/kerupuk.jpg",
  },
  {
    kategori: "tambahan",
    nama: "Extra Sambal",
    deskripsi: "Tambahan sambal cabai rawit, extra pedas.",
    harga: 1000,
    gambar: "images/extra-sambal.jpg",
  },
];
