<template>
  <div class="w-full relative">
    <label
      v-if="hasIconSlot()"
      :for="attr.id"
      class="absolute cursor-pointer top-[50%] left-[12px] translate-y-[-50%]"
    >
      <slot name="icon"></slot>
    </label>

    <input
      v-bind="attr"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="border-border border rounded-sm w-full h-10 bg-transparent px-3 py-2 text-base"
      :class="[inputClass && inputClass, hasIconSlot() && 'pl-10']"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomInput',

  props: ['attr', 'inputClass', 'modelValue'],

  emits: ['update:modelValue'],

  methods: {
    hasIconSlot() {
      return !!this.$slots.icon
    }
  }
}
</script>

<style lang="scss" scoped></style>
