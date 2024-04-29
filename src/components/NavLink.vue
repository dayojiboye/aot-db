<template>
  <RouterLink :to="to" class="font-moderat-bold hover:text-gray-400 text-base">
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
