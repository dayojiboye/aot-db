<template>
  <RouterLink :to="to" class="font-moderat-bold hover:text-gray-400 text-base sm:text-lg">
    {{ label }}
  </RouterLink>
</template>

<script>
export default {
  name: 'nav-link',
  props: {
    to: String,
    label: String
  }
}
</script>

<style lang="scss" scoped>
.router-link-active,
.router-link-exact-active {
  color: rgb(156 163 175);
}
</style>
