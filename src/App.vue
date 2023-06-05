<template>
  <div class="container">
    <div class="materials">
      素材区
    </div>
    <div>
      <div class="font-bold underline">
      预览区
    </div>
    <div>
      操作区
      <TrackEditor />
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TrackEditor from '@/features/track/index.vue'
</script>

<style scoped>
.container {
  display: flex;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
}
.materials {
  height: 100vh;
  width: 20vw;
}
</style>