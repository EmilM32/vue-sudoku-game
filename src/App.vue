<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>{{ t('message.hello') }}</header>
  <!--    <div class="wrapper">-->
  <!--      <HelloWorld msg="You did it!" />-->

  <!--      <nav>-->
  <!--        <RouterLink to="/">Home</RouterLink>-->
  <!--        <RouterLink to="/about">About</RouterLink>-->
  <!--      </nav>-->
  <!--    </div>-->
  <!--  </header>-->
  <RouterView />
</template>
