<script setup lang="ts">
import SingleBlock from '@/components/board/SingleBlock.vue'
import { ref } from 'vue'

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

const activeBlockIndex = ref(0)

const setBlocksColor = (activeBlock: number) => {
  activeBlockIndex.value = activeBlock

  // TODO add logic to color subactive blocks
}
</script>

<template>
  <div
    class="grid grid-cols-9 justify-items-center w-fit mx-auto border-black border-2"
  >
    <SingleBlock
      v-for="i in 9 * 9"
      :key="`block-${i}`"
      :class="{
        'border-r-2 border-r-black': borderRightIndex.includes(i),
        'border-b-2 border-b-black': borderBottomIndex.includes(i),
        'bg-amber-400 dark:bg-lime-800': activeBlockIndex === i,
      }"
      @click="setBlocksColor(i)"
    />
  </div>
</template>
