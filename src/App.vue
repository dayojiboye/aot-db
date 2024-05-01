<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    RouterView,
    HeaderComponent: Header
  }
}
</script>

<template>
  <HeaderComponent />
  <main role="main" class="mt-20 w-full pb-12 max-w-[1024px] mx-auto">
    <RouterView />
  </main>
  <!-- To-Do: Add footer -->
</template>

<style scoped></style>
