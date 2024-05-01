<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-2xl lg:text-3xl font-millik">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CharacterDetail',

  props: ['title']
}
</script>

<style lang="scss" scoped></style>
