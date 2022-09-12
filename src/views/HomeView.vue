<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Level {
  title: string
}

const availableLevels: Level[] = [
  {
    title: t('game.levels.easy'),
  },
  {
    title: t('game.levels.normal'),
  },
  {
    title: t('game.levels.hard'),
  },
]
</script>

<template>
  <main class="m-4">
    <span class="flex justify-center">
      {{ t('game.chooseLevel') }}:
    </span>

    <button v-for="level in availableLevels" :key="level.title">
      {{ level.title }}
    </button>
  </main>
</template>
