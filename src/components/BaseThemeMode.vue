<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <SunIcon
    v-show="isDark"
    class="h-6 w-6 m-3 text-white cursor-pointer"
    @click="toggleDark()"
  />
  <MoonIcon
    v-show="!isDark"
    class="h-6 w-6 m-3 text-slate-800 cursor-pointer"
    @click="toggleDark()"
  />
</template>
