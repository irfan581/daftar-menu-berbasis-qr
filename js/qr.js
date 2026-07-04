/* =====================================================================
   QR GENERATOR — qr.js
   Render QR ke <canvas> (untuk PNG tajam) + ekspor SVG + cetak.
   Memakai library qrcode.js (MIT, Kazuhiko Arase) yang di-vendor lokal.
   ===================================================================== */

(function () {
  "use strict";

  var elUrl = document.getElementById("qr-url");
  var elColor = document.getElementById("qr-color");
  var elBg = document.getElementById("qr-bg");
  var elEcc = document.getElementById("qr-ecc");
  var elError = document.getElementById("qr-error");
  var elCaption = document.getElementById("qr-caption");
  var canvas = document.getElementById("qr-canvas");
  var ctx = canvas.getContext("2d");

  var QUIET = 4; // margin wajib QR (dalam satuan modul)
  var current = null; // objek qr terakhir yang berhasil dibuat

  // ---------------------------------------------------------------
  function showError(msg) {
    elError.textContent = msg;
    elError.hidden = false;
  }
  function clearError() {
    elError.hidden = true;
    elError.textContent = "";
  }

  // ---------------------------------------------------------------
  // Bangun model QR dari input. Return objek qr atau null jika gagal.
  function buildModel() {
    var text = elUrl.value.trim();
    if (!text) {
      current = null;
      showError("Isi dulu link menu-nya.");
      return null;
    }
    try {
      // typeNumber 0 = ukuran otomatis menyesuaikan panjang teks
      var qr = window.qrcode(0, elEcc.value);
      qr.addData(text);
      qr.make();
      clearError();
      current = qr;
      return qr;
    } catch (e) {
      current = null;
      showError("Link terlalu panjang untuk level koreksi ini — coba level lebih rendah atau perpendek URL.");
      return null;
    }
  }

  // ---------------------------------------------------------------
  // Gambar QR ke canvas beresolusi tinggi (siap diunduh sbg PNG).
  function drawToCanvas(qr) {
    var count = qr.getModuleCount();
    var total = count + QUIET * 2;

    // target ~1024px, dibulatkan agar tiap modul jumlah piksel bulat (tajam)
    var cell = Math.max(4, Math.floor(1024 / total));
    var size = total * cell;

    canvas.width = size;
    canvas.height = size;

    ctx.fillStyle = elBg.value;
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = elColor.value;
    for (var r = 0; r < count; r++) {
      for (var c = 0; c < count; c++) {
        if (qr.isDark(r, c)) {
          ctx.fillRect((c + QUIET) * cell, (r + QUIET) * cell, cell, cell);
        }
      }
    }

    elCaption.textContent =
      "Versi " + versionFromCount(count) + " · " + count + "×" + count +
      " modul · " + elUrl.value.trim();
  }

  function versionFromCount(count) {
    // modul = 21 + 4*(versi-1)
    return (count - 21) / 4 + 1;
  }

  // ---------------------------------------------------------------
  function render() {
    var qr = buildModel();
    if (!qr) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      elCaption.textContent = "";
      return;
    }
    drawToCanvas(qr);
  }

  // ---------------------------------------------------------------
  // Unduh PNG dari canvas
  function downloadPng() {
    if (!current) return;
    triggerDownload(canvas.toDataURL("image/png"), "qr-menu.png");
  }

  // Unduh SVG (vektor — tajam di cetakan besar)
  function downloadSvg() {
    if (!current) return;
    var svg = buildSvg(current);
    var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    triggerDownload(url, "qr-menu.svg");
  }

  function buildSvg(qr) {
    var count = qr.getModuleCount();
    var total = count + QUIET * 2;
    var parts = [];
    parts.push(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' +
        total + " " + total + '" shape-rendering="crispEdges">'
    );
    parts.push('<rect width="' + total + '" height="' + total + '" fill="' + elBg.value + '"/>');
    var d = "";
    for (var r = 0; r < count; r++) {
      for (var c = 0; c < count; c++) {
        if (qr.isDark(r, c)) {
          d += "M" + (c + QUIET) + "," + (r + QUIET) + "h1v1h-1z";
        }
      }
    }
    parts.push('<path d="' + d + '" fill="' + elColor.value + '"/>');
    parts.push("</svg>");
    return parts.join("");
  }

  function triggerDownload(href, filename) {
    var a = document.createElement("a");
    a.href = href;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // ---------------------------------------------------------------
  function init() {
    if (typeof window.qrcode !== "function") {
      showError("Library QR gagal dimuat. Pastikan file qrcode.js ada di folder yang sama.");
      return;
    }
    ["input", "change"].forEach(function (ev) {
      elUrl.addEventListener(ev, render);
      elColor.addEventListener(ev, render);
      elBg.addEventListener(ev, render);
      elEcc.addEventListener(ev, render);
    });
    document.getElementById("qr-download-png").addEventListener("click", downloadPng);
    document.getElementById("qr-download-svg").addEventListener("click", downloadSvg);
    document.getElementById("qr-print").addEventListener("click", function () {
      window.print();
    });

    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
