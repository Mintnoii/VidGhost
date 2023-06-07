<template>
  <div class="timeline-container bg-slate-900 w-full h-64 flex flex-col">
    <ControlBar />
    时间轴
  </div>
</template>

<script setup lang="ts">
import useTimeline from './domain'
import ControlBar from './control-bar.vue';
useTimeline()
</script>


<style lang="scss" scope>
.timeline-container {
  .top-operation-area {
    height: 31px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }

    .top-button-left {
      width: 26px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 8px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: #1b1b1b;
      }
    }

    .top-button-right {
      width: 26px;
      height: 20px;
      display: flex;
      justify-self: flex-end;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: #1b1b1b;
      }
    }
  }

  .left-operation-area {
    height: 100%;
  }

  .timeline {
    width: calc(100% - 37px);
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    box-shadow: inset 3px -3px 3px rgba(0, 0, 0, 0.1);

    .timescale {
      display: flex;
      flex-direction: row;
    }

    .video-line {
      margin-top: 15px;
      height: 72px;
      display: flex;
      flex-direction: row;
    }
  }
}
</style>