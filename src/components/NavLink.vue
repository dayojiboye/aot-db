<template>
  <RouterLink :to="to" class="font-moderat-bold hover:text-gray-400 text-base sm:text-lg">
    {{ label }}
  </RouterLink>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    to: String,
    label: String
  }
}
</script>

<style lang="scss" scoped></style>
