<script setup lang="ts">
import { isLevelCorrect } from '@/utils'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import GameBoard from '@/components/board/GameBoard.vue'

const { params } = useRoute()
const { push } = useRouter()

if (!isLevelCorrect(params.id as string)) push({ name: 'home' })
</script>

<template>
  <GameBoard class="m-7" />
</template>
