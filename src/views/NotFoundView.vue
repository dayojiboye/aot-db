<template>
  <div class="w-full flex flex-col items-center justify-center min-h-[300px]">
    <p class="text-lg sm:text-xl font-moderat-medium text-gray-400 text-center">
      Haha! This is a dead end.... Rumbling is coming!
    </p>
    <RouterLink to="/" class="btn-primary mt-5 group">
      Go Home
      <span
        class="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
      >
        -&gt;
      </span>
    </RouterLink>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
