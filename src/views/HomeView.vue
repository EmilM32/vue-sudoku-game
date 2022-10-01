<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { LevelID } from '@/ts/enums'
import BaseButton from '@/components/BaseButton.vue'
import type { Level } from '@/ts/interfaces'

const { t } = useI18n()

const availableLevels: Level[] = [
  {
    id: LevelID.EASY,
    title: t('game.levels.easy'),
  },
  {
    id: LevelID.NORMAL,
    title: t('game.levels.normal'),
  },
  {
    id: LevelID.HARD,
    title: t('game.levels.hard'),
  },
]

const startGame = (levelId: LevelID) => {
  console.log(levelId)
}
</script>

<template>
  <main class="m-4">
    <span class="flex justify-center">
      {{ t('game.chooseLevel') }}:
    </span>

    <div class="flex flex-col gap-4 mt-4 items-center">
      <BaseButton
        v-for="level in availableLevels"
        :key="level.id"
        :title="level.title"
        @click="startGame(level.id)"
      />
    </div>
  </main>
</template>
