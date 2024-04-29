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
  <main role="main" class="mt-20 px-4">
    <RouterView />
  </main>
</template>

<style scoped></style>
