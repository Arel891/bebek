<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Phone, Mail, MapPin, Clock, Instagram, Send, User, MessageSquare, CheckCircle } from 'lucide-vue-next'

const form = ref({
  nama: '',
  email: '',
  pesan: '',
})

const errors = ref({
  nama: '',
  email: '',
  pesan: '',
})

const isSubmitted = ref(false)
const isSubmitting = ref(false)

const validateForm = () => {
  let isValid = true
  errors.value = { nama: '', email: '', pesan: '' }

  if (!form.value.nama.trim()) {
    errors.value.nama = 'Nama harus diisi'
    isValid = false
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email harus diisi'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.value.email = 'Format email tidak valid'
    isValid = false
  }

  if (!form.value.pesan.trim()) {
    errors.value.pesan = 'Pesan harus diisi'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500))

  isSubmitting.value = false
  isSubmitted.value = true
  form.value = { nama: '', email: '', pesan: '' }

  // Reset success message after 5 seconds
  setTimeout(() => {
    isSubmitted.value = false
  }, 5000)
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
      <div class="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark/95 to-bg-dark"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Hubungi Kami</span>
        <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
          Kontak <span class="text-secondary">Bebek Kaleyo</span>
        </h1>
        <p class="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
          Punya pertanyaan, saran, atau ingin bekerja sama? Kami siap membantu Anda. Hubungi kami melalui form di bawah atau datang langsung ke cabang terdekat.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 lg:py-28 bg-bg-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Info -->
          <div class="reveal">
            <span class="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Informasi</span>
            <h2 class="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Cara Menghubungi <span class="text-primary">Kami</span>
            </h2>
            <p class="text-text-muted leading-relaxed mb-10">
              Tim kami siap membantu Anda dengan segala pertanyaan mengenai menu, cabang, kerja sama, atau reservasi. Jangan ragu untuk menghubungi kami.
            </p>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-heading font-bold text-text-primary mb-1">Telepon</h4>
                  <p class="text-text-muted">(021) 1234-5678</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-heading font-bold text-text-primary mb-1">Email</h4>
                  <p class="text-text-muted">info@bebekkaleyo.co.id</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-heading font-bold text-text-primary mb-1">Instagram</h4>
                  <p class="text-text-muted">@bebekkaleyofficial</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-heading font-bold text-text-primary mb-1">Alamat Pusat</h4>
                  <p class="text-text-muted">Jl. Cempaka Putih Raya No.108, Jakarta Pusat</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-heading font-bold text-text-primary mb-1">Jam Operasional</h4>
                  <p class="text-text-muted">Setiap Hari: 10:00 - 22:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="reveal reveal-delay-2">
            <div class="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-black/5">
              <h3 class="font-heading text-2xl font-bold text-text-primary mb-6">Kirim Pesan</h3>

              <!-- Success Message -->
              <div
                v-if="isSubmitted"
                class="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-xl flex items-center gap-3"
              >
                <CheckCircle class="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p class="font-medium text-accent">Pesan terkirim!</p>
                  <p class="text-text-muted text-sm">Terima kasih, kami akan segera menghubungi Anda.</p>
                </div>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-5">
                <!-- Nama -->
                <div>
                  <label class="block text-sm font-medium text-text-primary mb-2">
                    <span class="flex items-center gap-2">
                      <User class="w-4 h-4 text-primary" />
                      Nama
                    </span>
                  </label>
                  <input
                    v-model="form.nama"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    class="w-full px-4 py-3 bg-bg-light border border-black/10 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                    :class="{ 'border-primary-dark': errors.nama }"
                  />
                  <p v-if="errors.nama" class="mt-1 text-primary-dark text-sm">{{ errors.nama }}</p>
                </div>

                <!-- Email -->
                <div>
                  <label class="block text-sm font-medium text-text-primary mb-2">
                    <span class="flex items-center gap-2">
                      <Mail class="w-4 h-4 text-primary" />
                      Email
                    </span>
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="Masukkan email Anda"
                    class="w-full px-4 py-3 bg-bg-light border border-black/10 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors"
                    :class="{ 'border-primary-dark': errors.email }"
                  />
                  <p v-if="errors.email" class="mt-1 text-primary-dark text-sm">{{ errors.email }}</p>
                </div>

                <!-- Pesan -->
                <div>
                  <label class="block text-sm font-medium text-text-primary mb-2">
                    <span class="flex items-center gap-2">
                      <MessageSquare class="w-4 h-4 text-primary" />
                      Pesan
                    </span>
                  </label>
                  <textarea
                    v-model="form.pesan"
                    rows="5"
                    placeholder="Tulis pesan Anda di sini..."
                    class="w-full px-4 py-3 bg-bg-light border border-black/10 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                    :class="{ 'border-primary-dark': errors.pesan }"
                  ></textarea>
                  <p v-if="errors.pesan" class="mt-1 text-primary-dark text-sm">{{ errors.pesan }}</p>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send class="w-5 h-5" />
                  {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Placeholder -->
    <section class="py-20 lg:py-28 bg-bg-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 reveal">
          <span class="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Lokasi</span>
          <h2 class="font-heading text-3xl md:text-4xl font-bold text-text-light mb-4">
            Temukan Kami di <span class="text-secondary">Peta</span>
          </h2>
          <p class="text-text-muted max-w-2xl mx-auto">
            Kunjungi cabang Bebek Kaleyo terdekat untuk menikmati pengalaman bersantap yang tak terlupakan.
          </p>
        </div>

        <div class="reveal bg-surface rounded-2xl overflow-hidden shadow-xl border border-white/5 h-[400px] lg:h-[500px] relative">
          <div class="absolute inset-0 opacity-30" style="background-image: url('/branch-cempaka-putih.jpg'); background-size: cover; background-position: center;"></div>
          <div class="absolute inset-0 bg-bg-dark/60"></div>
          <div class="relative h-full flex items-center justify-center">
            <div class="text-center">
              <MapPin class="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 class="font-heading text-2xl font-bold text-text-light mb-2">Google Maps</h3>
              <p class="text-text-muted mb-6">Integrasi peta interaktif siap digunakan</p>
              <a
                href="https://maps.google.com/?q=Bebek+Kaleyo+Jabodetabek"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
              >
                <MapPin class="w-5 h-5" />
                Buka Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
