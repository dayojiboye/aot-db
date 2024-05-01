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
  <main role="main" class="mt-20 w-full pb-20 max-w-[1024px] mx-auto">
    <RouterView />
  </main>
  <footer
    role="contentinfo"
    class="w-full p-4 fixed bottom-0 left-0 backdrop-filter backdrop-blur-3xl border-t border-t-border z-[9]"
  >
    <p class="font-moderat-bold text-sm text-muted">
      Made with ❤️ by
      <a href="https://github.com/dayojiboye" class="text-[#21638e] underline underline-offset-4"
        >Dayo Jiboye</a
      >
    </p>
  </footer>
</template>

<style scoped></style>
