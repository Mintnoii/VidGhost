<template>
  <div class="flex flex-col overflow-x-scroll shrink-0 grow relative" ref="trackListRef" @scroll="handleScroll">
    <ScaleRuler />
    <!-- @wheel="handleWheel" @click="setSelectTract($event, -1, -1)" -->
    <div class="flex-1 overflow-y-auto justify-center flex">
      <div v-if="true" class="w-full">
        <div class="w-full">
          trackList
          <TrackLine/>
          <!-- <HandlerBox/> -->
        </div>
      </div>
      <div v-else
        class="flex justify-center items-center h-24 m-auto w-2/3 bg-gray-500 rounded-md text-sm border-dashed border-2 border-gray-500 hover:border-blue-300">
        <!-- <VideoIcon class="text-xl mr-4" /> -->
        将素材拖拽到这里，开始编辑你的大作吧~
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useTimeline from '@/modules/timeline/models'
import HandlerBox from './components/handler-box.vue';
import TrackLine from './track-line.vue';
import ScaleRuler from './scale-ruler.vue';
const { trackList } = useTimeline()
const handleScroll = () => {
  console.log('scroll');
  // const { scrollLeft, scrollTop } = trackList.value;
  // startX.value = scrollLeft - offsetLine.left;
  // startY.value = scrollTop;
}
watchEffect(() => {
  console.log(trackList.value, 'ddd');
})
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