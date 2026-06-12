<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BranchCard from '@/components/BranchCard.vue'
import { MapPin, Search } from 'lucide-vue-next'

const searchQuery = ref('')
const selectedCity = ref('Semua')

const cities = ['Semua', 'Jakarta', 'Bekasi', 'Tangerang', 'Depok', 'Bogor']

const branches = [
  {
    id: 1,
    name: 'Bebek Kaleyo Cempaka Putih',
    city: 'Jakarta',
    address: 'Jl. Cempaka Putih Raya No.108, Cempaka Putih, Jakarta Pusat',
    hours: '10:00 - 22:00 WIB',
    rating: 4.8,
    image: '/branch-cempaka-putih.jpg',
    mapsUrl: 'https://maps.google.com/?q=Bebek+Kaleyo+Cempaka+Putih',
  },
  {
    id: 2,
    name: 'Bebek Kaleyo Tebet',
    city: 'Jakarta',
    address: 'Jl. Lapangan Roos No. 49, Bukit Duri, Tebet, Jakarta Selatan',
    hours: '10:00 - 22:00 WIB',
    rating: 4.7,
    image: '/branch-summarecon.jpg',
    mapsUrl: 'https://maps.google.com/?q=Bebek+Kaleyo+Tebet',
  },
  {
    id: 3,
    name: 'Bebek Kaleyo Kemang',
    city: 'Jakarta',
    address: 'Jl. Kemang Raya No. 18, Kemang, Jakarta Selatan',
    hours: '10:00 - 23:00 WIB',
    rating: 4.9,
    image: '/branch-cempaka-putih.jpg',
    mapsUrl: 'https://maps.google.com/?q=Bebek+Kaleyo+Kemang',
  },
  {
    id: 4,
    name: 'Bebek Kaleyo Harapan Indah',
    city: 'Bekasi',
    address: 'Jl. Harapan Indah Boulevard No. 12, Bekasi',
    hours: '10:00 - 22:00 WIB',
    rating: 4.6,
    image: '/branch-summarecon.jpg',
    mapsUrl: 'https://maps.google.com/?q=Bebek+Kaleyo+Harapan+Indah',
  },
  {
    id: 5,
    name: 'Bebek Kaleyo Summarecon Bekasi',
    city: 'Bekasi',
    address: 'Jl. Perjuangan Dalam, Marga Mulya, Bekasi Utara',
    hours: '10:00 - 22:00 WIB',
    rating: 4.8,
    image: '/branch-cempaka-putih.jpg',
    mapsUrl: 'https://maps.google.com/?q=Bebek+Kaleyo+Summarecon+Bekasi',
  },
  {
    id: 6,
    name: 'Bebek Kaleyo Alam Sutera',
    city: 'Tangerang',
    address: 'Jl. Alam Sutera Boulevard No. 45, Tangerang',
    hours: '10:00 - 22:00 WIB',
    rating: 4.7,
    image: '/branch-summarecon.jpg',
    mapsUrl: 'https://maps.google.com/?q=Bebek+Kaleyo+Alam+Sutera',
  },
  {
    id: 7,
    name: 'Bebek Kaleyo Gading Serpong',
    city: 'Tangerang',
    address: 'Jl. Gading Serpong Boulevard, Tangerang',
    hours: '10:00 - 22:00 WIB',
    rating: 4.8,
    image: '/branch-cempaka-putih.jpg',
    mapsUrl: 'https://maps.google.com/?q=Bebek+Kaleyo+Gading+Serpong',
  },
  {
    id: 8,
    name: 'Bebek Kaleyo Margonda',
    city: 'Depok',
    address: 'Jl. Margonda Raya No. 358, Depok',
    hours: '10:00 - 22:00 WIB',
    rating: 4.7,
    image: '/branch-summarecon.jpg',
    mapsUrl: 'https://maps.google.com/?q=Bebek+Kaleyo+Margonda',
  },
  {
    id: 9,
    name: 'Bebek Kaleyo Bogor',
    city: 'Bogor',
    address: 'Jl. Bina Marga I No.8, Baranangsiang, Bogor',
    hours: '10:00 - 21:00 WIB',
    rating: 4.6,
    image: '/branch-cempaka-putih.jpg',
    mapsUrl: 'https://maps.google.com/?q=Bebek+Kaleyo+Bogor',
  },
]

const filteredBranches = ref(branches)

const filterBranches = () => {
  filteredBranches.value = branches.filter((branch) => {
    const matchesCity = selectedCity.value === 'Semua' || branch.city === selectedCity.value
    const matchesSearch =
      searchQuery.value === '' ||
      branch.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCity && matchesSearch
  })
}

onMounted(() => {
  const revealElements = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  revealElements.forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="relative py-24 lg:py-32 bg-bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image: url('/branch-cempaka-putih.jpg'); background-size: cover; background-position: center;"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark/95 to-bg-dark"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Lokasi Kami</span>
        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
          Cabang <span class="text-secondary">Jabodetabek</span>
        </h1>
        <p class="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
          Temukan cabang Bebek Kaleyo terdekat di kota Anda. Kami hadir di berbagai lokasi strategis untuk melayani Anda.
        </p>
      </div>
    </section>

    <!-- Filter & Search Section -->
    <section class="py-8 bg-surface border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <!-- City Filters -->
          <div class="flex flex-wrap gap-2">
            <button
              v-for="city in cities"
              :key="city"
              @click="selectedCity = city; filterBranches()"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                selectedCity === city
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-text-light'
              ]"
            >
              {{ city }}
            </button>
          </div>

          <!-- Search -->
          <div class="relative w-full md:w-72">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              v-model="searchQuery"
              @input="filterBranches"
              type="text"
              placeholder="Cari cabang..."
              class="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-text-light placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Branches Grid -->
    <section class="py-20 lg:py-28 bg-bg-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="filteredBranches.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BranchCard
            v-for="branch in filteredBranches"
            :key="branch.id"
            :branch="branch"
            class="reveal"
          />
        </div>
        <div v-else class="text-center py-20">
          <MapPin class="w-16 h-16 text-text-muted mx-auto mb-4" />
          <h3 class="font-heading text-xl font-bold text-text-light mb-2">Cabang Tidak Ditemukan</h3>
          <p class="text-text-muted">Coba ubah filter atau kata kunci pencarian Anda.</p>
        </div>
      </div>
    </section>

    <!-- Map CTA -->
    <section class="py-20 lg:py-28 bg-bg-light">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <h2 class="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">
          Kunjungi Cabang <span class="text-primary">Terdekat</span>
        </h2>
        <p class="text-text-muted text-lg mb-8 leading-relaxed">
          Setiap cabang Bebek Kaleyo dirancang untuk memberikan pengalaman bersantap yang nyaman dan menyenangkan. Dengan suasana yang hangat dan pelayanan yang ramah, kami siap menyambut Anda dan keluarga.
        </p>
        <div class="bg-surface rounded-2xl overflow-hidden shadow-xl h-80 flex items-center justify-center relative">
          <div class="absolute inset-0 opacity-20" style="background-image: url('/branch-cempaka-putih.jpg'); background-size: cover; background-position: center;"></div>
          <div class="relative text-center">
            <MapPin class="w-12 h-12 text-primary mx-auto mb-4" />
            <p class="text-text-light font-medium mb-2">Peta Interaktif</p>
            <p class="text-text-muted text-sm">Google Maps integration ready</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
