<template>
  <div
    role="button"
    class="border border-border rounded-[4px] py-5 px-4 flex gap-4 items-center"
    @click="goToCharacter"
  >
    <img
      v-if="imageUrl"
      :alt="name"
      width="300"
      height="300"
      :src="imageUrl"
      class="rounded-[50%] w-14 h-14"
    />
    <span
      v-else
      class="rounded-[50%] w-14 h-14 text-xl flex items-center justify-center bg-slate-500"
      >{{ getInitial(name) }}</span
    >
    <h3 class="text-base">{{ name }}</h3>
  </div>
</template>

<script>
import { getCharacterInitial } from '@/utils/helpers'

export default {
  name: 'CharacterCard',

  props: {
    name: String,
    imageUrl: String,
    // age: [Number, String],
    id: Number
  },

  methods: {
    goToCharacter() {
      this.$router.push(`/character/${this.id}`)
    },

    getInitial(name) {
      return getCharacterInitial(name)
    }
  }
}
</script>

<style lang="scss" scoped></style>
