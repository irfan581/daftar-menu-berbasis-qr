/* =====================================================================
   MENU DIGITAL PENTOL — script.js
   - Render menu dari data (menu-data.js)
   - Bar kategori sticky + highlight otomatis sesuai posisi scroll
   Tanpa library eksternal.
   ===================================================================== */

(function () {
  "use strict";

  // ---------------------------------------------------------------
  // Util
  // ---------------------------------------------------------------

  /** Format angka jadi rupiah, mis. 10000 -> "Rp 10.000" */
  function formatRupiah(angka) {
    return "Rp " + Number(angka).toLocaleString("id-ID");
  }

  /** Buat elemen dengan class & isi opsional */
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /** Emoji placeholder per kategori (dipakai jika foto belum ada) */
  function placeholderEmoji(kategori) {
    return kategori === "isi" ? "🍽️" : "🍢";
  }

  // ---------------------------------------------------------------
  // Render menu
  // ---------------------------------------------------------------

  const menuRoot = document.getElementById("menu-root");
  const categoryList = document.getElementById("category-list");

  // Hanya tampilkan kategori yang benar-benar punya item
  const kategoriTampil = KATEGORI.filter((kat) =>
    MENU.some((item) => item.kategori === kat.id)
  );

  function buildCategoryBar() {
    kategoriTampil.forEach((kat, index) => {
      const li = el("li");
      const btn = el("button", "category-bar__btn", kat.label);
      btn.type = "button";
      btn.dataset.target = kat.id;
      if (index === 0) btn.classList.add("is-active");

      btn.addEventListener("click", function () {
        const section = document.getElementById("section-" + kat.id);
        if (section) section.scrollIntoView({ block: "start" });
      });

      li.appendChild(btn);
      categoryList.appendChild(li);
    });
  }

  function buildCard(item) {
    const li = el("li");
    const card = el("article", "card");

    // Media (foto atau placeholder)
    const media = el("div", "card__media");
    if (item.gambar) {
      const img = el("img", "card__img");
      img.src = item.gambar;
      img.alt = item.nama;
      img.loading = "lazy";
      // Kalau foto belum tersedia -> ganti ke placeholder
      img.addEventListener("error", function () {
        media.innerHTML = "";
        const ph = el("div", "card__placeholder", placeholderEmoji(item.kategori));
        media.appendChild(ph);
      });
      media.appendChild(img);
    } else {
      media.appendChild(
        el("div", "card__placeholder", placeholderEmoji(item.kategori))
      );
    }

    // Body (teks)
    const body = el("div", "card__body");
    body.appendChild(el("h3", "card__name", item.nama));
    if (item.deskripsi) {
      body.appendChild(el("p", "card__desc", item.deskripsi));
    }
    body.appendChild(el("div", "card__price", formatRupiah(item.harga)));

    card.appendChild(media);
    card.appendChild(body);
    li.appendChild(card);
    return li;
  }

  function buildMenu() {
    kategoriTampil.forEach((kat) => {
      const section = el("section", "menu-section");
      section.id = "section-" + kat.id;
      section.setAttribute("aria-labelledby", "title-" + kat.id);

      const title = el("h2", "menu-section__title", kat.label);
      title.id = "title-" + kat.id;
      section.appendChild(title);

      const list = el("ul", "menu-list");
      MENU.filter((item) => item.kategori === kat.id).forEach((item) => {
        list.appendChild(buildCard(item));
      });
      section.appendChild(list);

      menuRoot.appendChild(section);
    });
  }

  // ---------------------------------------------------------------
  // Highlight kategori aktif sesuai posisi scroll (IntersectionObserver)
  // ---------------------------------------------------------------

  let lastActiveId = null;

  function setActiveCategory(id) {
    if (id === lastActiveId) return; // hindari kerja berulang saat scroll
    lastActiveId = id;

    const buttons = categoryList.querySelectorAll(".category-bar__btn");
    buttons.forEach((btn) => {
      const active = btn.dataset.target === id;
      btn.classList.toggle("is-active", active);
      if (active) keepChipInView(btn);
    });
  }

  /**
   * Jaga chip aktif tetap terlihat DENGAN menggeser bar kategori
   * secara horizontal saja — TIDAK memakai scrollIntoView, karena
   * scrollIntoView bisa ikut menggeser scroll vertikal halaman dan
   * membuat scroll naik/turun terasa "melompat".
   */
  function keepChipInView(btn) {
    const bar = categoryList;
    const left = btn.offsetLeft;
    const right = left + btn.offsetWidth;
    const viewLeft = bar.scrollLeft;
    const viewRight = viewLeft + bar.clientWidth;
    const pad = 16;

    if (left < viewLeft + pad) {
      bar.scrollLeft = left - pad;
    } else if (right > viewRight - pad) {
      bar.scrollLeft = right - bar.clientWidth + pad;
    }
  }

  function observeSections() {
    const sections = menuRoot.querySelectorAll(".menu-section");
    if (!("IntersectionObserver" in window) || !sections.length) return;

    // rootMargin atas dikurangi tinggi bar sticky (~64px) supaya
    // kategori berganti tepat saat judulnya lewat di bawah bar.
    const observer = new IntersectionObserver(
      function (entries) {
        // ambil section paling atas yang sedang terlihat
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length) {
          const id = visible[0].target.id.replace("section-", "");
          setActiveCategory(id);
        }
      },
      {
        rootMargin: "-64px 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // ---------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------

  function init() {
    if (typeof MENU === "undefined" || typeof KATEGORI === "undefined") {
      console.error("Data menu tidak ditemukan. Pastikan menu-data.js dimuat.");
      return;
    }
    buildCategoryBar();
    buildMenu();
    observeSections();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
