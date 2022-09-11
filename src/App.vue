<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDark, useToggle } from '@vueuse/core'

const { t } = useI18n()

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="dark:text-gray-100">
    {{ t('message.hello') }}
  </header>
  <button @click="toggleDark()">toggle dark</button>
  <span class="mdi mdi-account-circle text-4xl"></span>

  <RouterView />
</template>

<style lang="postcss">
body {
  @apply bg-gray-100;
  @apply dark:bg-gray-800;
  @apply text-black;
  @apply dark:text-white;
}
</style>
