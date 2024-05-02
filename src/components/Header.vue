<template>
  <header
    id="header"
    role="banner"
    class="fixed w-full backdrop-filter backdrop-blur-3xl left-0 top-0 h-20 border-b border-b-border z-10 flex items-center px-4"
  >
    <span class="font-millik text-2xl block">AOT-DB</span>

    <nav class="flex gap-4 flex-1 justify-end sm:justify-center">
      <nav-link to="/" label="Home" />
      <nav-link to="/titans" label="Titans" />
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
