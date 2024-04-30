<template>
  <header
    role="banner"
    class="fixed w-full backdrop-filter backdrop-blur-3xl left-0 top-0 h-20 border-b border-border z-10 flex items-center px-4"
  >
    <RouterLink to="/" class="font-millik text-xl block">AOT-DB</RouterLink>

    <nav class="flex gap-4 flex-1 justify-end sm:justify-center">
      <NavLink to="/titans" label="Titans" />
    </nav>
  </header>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  name: 'HeaderComponent',
  components: {
    NavLink
  }
}
</script>

<style lang="scss" scoped></style>
