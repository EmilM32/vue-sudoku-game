<script setup lang="ts">
import { ref, watch } from 'vue'

const inputValue = ref<null | number>(null)

watch(inputValue, (newValue) => {
  if (!newValue) return (inputValue.value = null)

  const valueAsString = newValue.toString()
  const lastNumber = parseInt(valueAsString.at(-1) || '0')

  if (lastNumber && lastNumber >= 1 && lastNumber <= 9) {
    inputValue.value = lastNumber
  } else {
    inputValue.value = null
  }
})
</script>

<template>
  <input
    type="number"
    v-model.number="inputValue"
    class="w-10 h-10 md:w-14 md:h-14 appearance-none outline-none p-4 border text-center caret-transparent text-3xl dark:bg-slate-700 dark:border-slate-900 focus:bg-amber-400 dark:focus:bg-lime-800"
  />
</template>

<style lang="postcss" scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
