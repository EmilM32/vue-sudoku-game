<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <button
    type="button"
    class="inline-block px-6 py-2 border-2 border-blue-600 dark:border-blue-300 dark:text-blue-300 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
  >
    {{ title }}
  </button>
</template>
