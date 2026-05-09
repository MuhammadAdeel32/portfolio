<script setup>
import { ref } from 'vue'
import AppLoader from './components/AppLoader.vue'

const loading = ref(true)
const onLoaderDone = () => { loading.value = false }
</script>

<template>
  <AppLoader v-if="loading" @done="onLoaderDone" />
  <router-view v-if="!loading" />
</template>
