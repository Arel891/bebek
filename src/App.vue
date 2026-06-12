<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()

const transitionName = computed(() => {
  return (route.meta.transition as string) || 'page'
})
</script>

<template>
  <div class="min-h-screen bg-bg-light">
    <Navbar />

    <main>
      <RouterView v-slot="{ Component }">
        <Transition :name="transitionName" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
main {
  min-height: 100vh;
}
</style>
