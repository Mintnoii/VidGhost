<template>
  <n-config-provider :theme="darkTheme">
    <DndProvider :backend="HTML5Backend">
    <Editor />
  </DndProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Editor from '@/views/editor/index.vue'
</script>

<style scoped>
</style>