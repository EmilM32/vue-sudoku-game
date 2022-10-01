<script setup lang="ts">
import SingleBlock from '@/components/board/SingleBlock.vue'

const getBorderRightIndex = () => {
  const result: number[] = []
  for (let i = 1; i <= 81; i++) {
    if (i % 3 === 0) result.push(i)
  }

  return result.filter((_, index) => (index + 1) % 3)
}
const borderRightIndex = getBorderRightIndex()

const getBorderBottomIndex = () => {
  const result: number[] = []

  for (let i = 1; i <= 81; i++) {
    if ((i >= 19 && i <= 27) || (i >= 46 && i <= 54)) result.push(i)
  }

  return result
}
const borderBottomIndex = getBorderBottomIndex()
</script>

<template>
  <div
    class="grid grid-cols-9 justify-items-center w-fit mx-auto border-black border-2"
  >
    <SingleBlock
      v-for="i in 9 * 9"
      :key="i"
      :class="{
        'border-r-2 border-r-black': borderRightIndex.includes(i),
        'border-b-2 border-b-black': borderBottomIndex.includes(i),
      }"
    />
  </div>
</template>
