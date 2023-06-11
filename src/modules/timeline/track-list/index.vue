<template>
  <div>
    <TimeScale />
    <div class="timeline-container">
      <div ref="stageRef" class="timeline-stage"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TimeScale from './time-scale.vue';
</script>

<style lang="scss" scoped>
.timeline-container {
  position: relative;
  height: 250px;
}

.timeline-stage {
  position: absolute;
  top: 0;
  left: 0;
}
</style>