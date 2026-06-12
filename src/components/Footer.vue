<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-vue-next'

const menuLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang', path: '/tentang' },
  { name: 'Cabang', path: '/cabang' },
  { name: 'Rekomendasi', path: '/rekomendasi' },
  { name: 'Kontak', path: '/kontak' },
]
</script>

<template>
  <footer class="bg-bg-dark text-text-light">
    <!-- CTA Band -->
    <div class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/10"></div>
      <div class="absolute inset-0" style="background-image: url('/bebek-kaleyo-hero.jpg'); background-size: cover; background-position: center; opacity: 0.1;"></div>
      <div class="relative max-w-4xl mx-auto px-4 text-center">
        <h2 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Siap Merasakan Kelezatan<br>
          <span class="text-secondary">Bebek Kaleyo?</span>
        </h2>
        <p class="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
          Kunjungi cabang terdekat atau pesan online untuk menikmati bebek goreng legendaris Indonesia
        </p>
        <a href="/kontak" class="px-8 py-4 bg-gradient-to-r from-secondary to-primary text-bg-dark font-bold text-lg rounded-full hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105">
          Pesan Sekarang
        </a>
      </div>
    </div>

    <!-- Main Footer -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" class="w-7 h-7 text-white" fill="currentColor">
                  <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.5 1.5 3.5L8 14H6v2h2v2H6v2h12v-2h-2v-2h2v-2h-2l.5-3.5C17.5 9.5 18 8.5 18 7c0-2.5-2.5-5-6-5zm-2 16h4v-2h-4v2zm2-14c1.5 0 3 1 3.5 2.5L15.5 12h-7l-.5-5.5C8.5 5 10 4 12 4z"/>
                </svg>
              </div>
              <div>
                <span class="font-accent text-2xl text-secondary">Bebek Kaleyo</span>
                <span class="block text-xs text-text-light/70 tracking-widest uppercase">Jabodetabek</span>
              </div>
            </div>
            <p class="text-text-muted leading-relaxed">
              Bebek Goreng Legendaris Indonesia sejak 1976. Menyajikan kelezatan autentik dengan cita rasa yang tak terlupakan.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-heading text-lg font-semibold mb-6 text-secondary">Menu Cepat</h3>
            <ul class="space-y-3">
              <li v-for="link in menuLinks" :key="link.path">
                <RouterLink
                  :to="link.path"
                  class="text-text-muted hover:text-secondary transition-colors"
                >
                  {{ link.name }}
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="font-heading text-lg font-semibold mb-6 text-secondary">Kontak</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Phone class="w-5 h-5 text-primary mt-0.5" />
                <span class="text-text-muted">(021) 1234-5678</span>
              </li>
              <li class="flex items-start gap-3">
                <Mail class="w-5 h-5 text-primary mt-0.5" />
                <span class="text-text-muted">info@bebekkaleyo.co.id</span>
              </li>
              <li class="flex items-start gap-3">
                <Instagram class="w-5 h-5 text-primary mt-0.5" />
                <span class="text-text-muted">@bebekkaleyofficial</span>
              </li>
              <li class="flex items-start gap-3">
                <MapPin class="w-5 h-5 text-primary mt-0.5" />
                <span class="text-text-muted">Jabodetabek, Indonesia</span>
              </li>
            </ul>
          </div>

          <!-- Operating Hours -->
          <div>
            <h3 class="font-heading text-lg font-semibold mb-6 text-secondary">Jam Operasional</h3>
            <div class="flex items-start gap-3">
              <Clock class="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p class="text-text-light font-medium">Buka Setiap Hari</p>
                <p class="text-text-muted">10:00 - 22:00 WIB</p>
              </div>
            </div>
            <div class="mt-6 p-4 bg-surface rounded-xl border border-white/5">
              <p class="text-sm text-text-muted">
                Beberapa cabang mungkin memiliki jam operasional yang berbeda. Silakan cek halaman cabang untuk informasi lengkap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-center text-text-muted text-sm">
          &copy; 2026 Muhammad Rafif Mughni. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
