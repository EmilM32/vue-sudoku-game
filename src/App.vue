<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BaseThemeMode from '@/components/BaseThemeMode.vue'

const { t } = useI18n()
</script>

<template>
  <header class="flex">
    <div class="flex-none w-10 h-10"></div>
    <span
      class="grow flex items-center justify-center text-2xl font-bold"
    >
      {{ t('app.title') }}
    </span>
    <BaseThemeMode />
  </header>

  <RouterView />
</template>

<style lang="postcss">
body {
  @apply bg-gray-100;
  @apply dark:bg-gray-800;
  @apply text-slate-800;
  @apply dark:text-white;
}
</style>
