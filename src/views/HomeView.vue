<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-bg-dark pt-24 pb-20 lg:pt-32 lg:pb-32">
      <div class="absolute inset-0 opacity-40" style="background-image:url('/bebek-kaleyo-hero.jpg'); background-size: cover; background-position: center;"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-bg-dark/90 via-bg-dark/70 to-bg-dark"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p class="text-sm uppercase tracking-[0.4em] text-secondary mb-4">Sejak 1976</p>
        <h1 class="text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">Bebek Kaleyo Jabodetabek</h1>
        <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
          Nikmati Kelezatan Bebek Favorit Indonesia — Empuk, Gurih, dengan Sambal Dahsyat!
        </p>

        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#menu" class="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-bg-dark transition hover:opacity-90">
            Lihat Menu
          </a>
          <a href="/cabang" class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
            Cari Cabang
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-white py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6 sm:grid-cols-3">
          <div class="rounded-3xl bg-surface p-8 text-center shadow-sm border border-black/5">
            <p class="text-4xl font-bold text-secondary">25+</p>
            <p class="mt-3 text-sm uppercase tracking-[0.3em] text-text-muted">Cabang</p>
          </div>
          <div class="rounded-3xl bg-surface p-8 text-center shadow-sm border border-black/5">
            <p class="text-4xl font-bold text-secondary">10JT+</p>
            <p class="mt-3 text-sm uppercase tracking-[0.3em] text-text-muted">Pelanggan</p>
          </div>
          <div class="rounded-3xl bg-surface p-8 text-center shadow-sm border border-black/5">
            <p class="text-4xl font-bold text-secondary">4.8</p>
            <p class="mt-3 text-sm uppercase tracking-[0.3em] text-text-muted">Rating</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Warisan Rasa Section -->
    <section class="bg-bg-light py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <span class="text-sm uppercase tracking-[0.3em] text-secondary">Sejak 1976</span>
          <h2 class="mt-4 text-4xl font-bold">Warisan Rasa Bebek Legendaris</h2>
          <p class="mt-6 text-lg leading-relaxed text-text-muted">
            Bebek Kaleyo hadir dengan cita rasa bebek goreng yang empuk, gurih, dan sambal yang dahsyat. Kami menjaga resep warisan keluarga selama lebih dari 4 dekade, memastikan setiap suapan membawa kenikmatan autentik Indonesia.
          </p>
          <p class="mt-4 text-lg leading-relaxed text-text-muted">
            Dari sebuah kedai kecil di tahun 1976, kini Bebek Kaleyo telah berkembang menjadi salah satu destinasi kuliner bebek terfavorit di Indonesia dengan puluhan cabang di seluruh Jabodetabek.
          </p>
          <a href="/tentang" class="mt-8 inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-bg-dark transition hover:opacity-90">
            Pelajari Lebih Lanjut
          </a>
        </div>
        <div class="overflow-hidden rounded-[2rem] bg-white shadow-xl">
          <img src="/bebek-kaleyo-hero.jpg" alt="Bebek Kaleyo" class="h-full w-full object-cover" />
        </div>
      </div>
    </section>

    <!-- Menu Section -->
    <section id="menu" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <p class="text-sm uppercase tracking-[0.3em] text-secondary">Menu Unggulan</p>
          <h2 class="mt-4 text-4xl font-bold">Menu Andalan Kami</h2>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <article class="rounded-[2rem] border border-black/5 bg-bg-light p-6 shadow-sm">
            <img src="/menu-bebek-goreng.jpg" alt="Bebek Goreng Original" class="h-60 w-full rounded-[1.5rem] object-cover" />
            <div class="mt-6">
              <p class="text-sm uppercase tracking-[0.2em] text-text-muted">Rp30.000</p>
              <h3 class="mt-3 text-xl font-semibold">Bebek Goreng Original</h3>
              <p class="mt-3 text-text-muted">
                Bebek goreng khas dengan kulit garing dan daging empuk, disajikan dengan sambal istimewa dan lalapan segar.
              </p>
            </div>
          </article>

          <article class="rounded-[2rem] border border-black/5 bg-bg-light p-6 shadow-sm">
            <img src="/menu-bebek-kremes.jpg" alt="Bebek Goreng Kremes" class="h-60 w-full rounded-[1.5rem] object-cover" />
            <div class="mt-6">
              <p class="text-sm uppercase tracking-[0.2em] text-text-muted">Rp35.000</p>
              <h3 class="mt-3 text-xl font-semibold">Bebek Goreng Kremes</h3>
              <p class="mt-3 text-text-muted">
                Dibalut kremesan gurih yang renyah, menciptakan perpaduan tekstur yang sempurna di setiap gigitan.
              </p>
            </div>
          </article>

          <article class="rounded-[2rem] border border-black/5 bg-bg-light p-6 shadow-sm">
            <img src="/menu-sate-bebek.jpg" alt="Sate Bebek" class="h-60 w-full rounded-[1.5rem] object-cover" />
            <div class="mt-6">
              <p class="text-sm uppercase tracking-[0.2em] text-text-muted">Rp35.000</p>
              <h3 class="mt-3 text-xl font-semibold">Sate Bebek</h3>
              <p class="mt-3 text-text-muted">
                Tusukan daging bebek pilihan dengan bumbu kacang khas Kaleyo yang manis, gurih, dan menggoda selera.
              </p>
            </div>
          </article>
        </div>

      </div>
    </section>

    <!-- Branches Section -->
    <section class="bg-bg-light py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <p class="text-sm uppercase tracking-[0.3em] text-secondary">Lokasi Kami</p>
          <h2 class="mt-4 text-4xl font-bold">Cabang di Jabodetabek</h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article class="rounded-[2rem] overflow-hidden bg-white shadow-xl border border-black/5">
            <img src="/branch-cempaka-putih.jpg" alt="Bebek Kaleyo Cempaka Putih" class="h-60 w-full object-cover" />
            <div class="p-6">
              <p class="text-sm uppercase tracking-[0.2em] text-secondary">Jakarta</p>
              <h3 class="mt-3 text-xl font-semibold">Bebek Kaleyo Cempaka Putih</h3>
              <p class="mt-3 text-text-muted">Jl. Cempaka Putih Raya No.108</p>
            </div>
          </article>

          <article class="rounded-[2rem] overflow-hidden bg-white shadow-xl border border-black/5">
            <img src="/branch-summarecon.jpg" alt="Bebek Kaleyo Tebet" class="h-60 w-full object-cover" />
            <div class="p-6">
              <p class="text-sm uppercase tracking-[0.2em] text-secondary">Jakarta</p>
              <h3 class="mt-3 text-xl font-semibold">Bebek Kaleyo Tebet</h3>
              <p class="mt-3 text-text-muted">Jl. Lapangan Roos No. 49</p>
            </div>
          </article>

          <article class="rounded-[2rem] overflow-hidden bg-white shadow-xl border border-black/5">
            <img src="/branch-cempaka-putih.jpg" alt="Bebek Kaleyo Summarecon" class="h-60 w-full object-cover" />
            <div class="p-6">
              <p class="text-sm uppercase tracking-[0.2em] text-secondary">Bekasi</p>
              <h3 class="mt-3 text-xl font-semibold">Bebek Kaleyo Summarecon</h3>
              <p class="mt-3 text-text-muted">Jl. Perjuangan Dalam, Bekasi Utara</p>
            </div>
          </article>

          <article class="rounded-[2rem] overflow-hidden bg-white shadow-xl border border-black/5">
            <img src="/branch-summarecon.jpg" alt="Bebek Kaleyo Gading Serpong" class="h-60 w-full object-cover" />
            <div class="p-6">
              <p class="text-sm uppercase tracking-[0.2em] text-secondary">Tangerang</p>
              <h3 class="mt-3 text-xl font-semibold">Bebek Kaleyo Gading Serpong</h3>
              <p class="mt-3 text-text-muted">Jl. Gading Serpong Boulevard</p>
            </div>
          </article>

          <article class="rounded-[2rem] overflow-hidden bg-white shadow-xl border border-black/5">
            <img src="/branch-cempaka-putih.jpg" alt="Bebek Kaleyo Margonda" class="h-60 w-full object-cover" />
            <div class="p-6">
              <p class="text-sm uppercase tracking-[0.2em] text-secondary">Depok</p>
              <h3 class="mt-3 text-xl font-semibold">Bebek Kaleyo Margonda</h3>
              <p class="mt-3 text-text-muted">Jl. Margonda Raya No. 358</p>
            </div>
          </article>

          <article class="rounded-[2rem] overflow-hidden bg-white shadow-xl border border-black/5">
            <img src="/branch-summarecon.jpg" alt="Bebek Kaleyo Bogor" class="h-60 w-full object-cover" />
            <div class="p-6">
              <p class="text-sm uppercase tracking-[0.2em] text-secondary">Bogor</p>
              <h3 class="mt-3 text-xl font-semibold">Bebek Kaleyo Bogor</h3>
              <p class="mt-3 text-text-muted">Jl. Bina Marga I No.8, Baranangsiang</p>
            </div>
          </article>
        </div>

        <div class="mt-10 text-center">
          <a href="/cabang" class="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-bg-dark transition hover:opacity-90">
            Lihat Semua Cabang
          </a>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-bg-dark text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <p class="text-sm uppercase tracking-[0.3em] text-secondary">Testimoni</p>
          <h2 class="mt-4 text-4xl font-bold">Apa Kata Mereka?</h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <article class="rounded-[2rem] bg-bg-light p-8 text-bg-dark shadow-xl border border-black/5">
            <p class="mb-6 text-text-muted">
              "Bebeknya empuk banget, sambalnya pedas nendang! Paling suka yang kremesan. Selalu jadi pilihan keluarga kami setiap akhir pekan."
            </p>
            <p class="font-semibold">Budi</p>
            <p class="text-sm text-text-muted">Jakarta</p>
          </article>

          <article class="rounded-[2rem] bg-bg-light p-8 text-bg-dark shadow-xl border border-black/5">
            <p class="mb-6 text-text-muted">
              "Harga terjangkau, porsi melimpah, rasa juara. Keluarga saya selalu kembali ke sini. Pelayanannya juga ramah dan cepat!"
            </p>
            <p class="font-semibold">Sari</p>
            <p class="text-sm text-text-muted">Bekasi</p>
          </article>

          <article class="rounded-[2rem] bg-bg-light p-8 text-bg-dark shadow-xl border border-black/5">
            <p class="mb-6 text-text-muted">
              "Pelayanan cepat, tempat bersih, dan bebeknya selalu fresh. Recommended buat semua pecinta bebek goreng!"
            </p>
            <p class="font-semibold">Andi</p>
            <p class="text-sm text-text-muted">Tangerang</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Tidak ada logic khusus, konten home page statis.
</script>

<style scoped>
/* Tambahan styling opsional */
</style>
