<template>
  <n-config-provider :theme="darkTheme">
    <Editor />
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import Editor from '@/views/editor/index.vue'
</script>

<style scoped>
</style>