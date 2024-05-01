<template>
  <div class="h-[200px] w-[280px] mx-auto flex flex-col gap-7 items-center justify-center">
    <p class="text-center text-base sm:text-lg font-moderat-medium">
      Something went wrong, please try again!
    </p>
    <button class="btn-primary" @click="$emit('onRetry')">Try again</button>
  </div>
</template>

<script>
export default {
  name: 'ErrorPanel'
}
</script>

<style lang="scss" scoped></style>
