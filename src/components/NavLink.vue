<template>
  <RouterLink :to="to" class="hover:text-gray-400 text-base">
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
