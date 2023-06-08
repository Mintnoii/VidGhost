<template>
  <div class="border-y border-gray-600 h-10 w-full px-5 dark:border-gray-600 flex justify-between">
    <div class="flex flex-nowrap h-full w-32 items-center justify-around">
      <div v-for="item of icons" class="cursor-pointer" :key="item.title" @click="handlerIcon(item)">
        <n-tooltip trigger="hover">
          <template #trigger>
            <SvgIcon :name="item.icon" />
          </template>
          {{ item.title }}
        </n-tooltip>
        <!-- <component
              :is="item.icon"
              class="focus:outline-0"
              :class="item.disable ? 'cursor-not-allowed text-gray-400' : ''"
          /> -->
      </div>
    </div>
    <div class="flex h-full w-40 justify-center items-center">
      <SvgIcon name="timeline/sub" class="cursor-pointer mr-2" @click="changeScale(-10)" />
      <n-slider v-model="scaleValue" />
      <SvgIcon name="timeline/add" class="cursor-pointer ml-2" @click="changeScale(10)" />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { usePageState } from '@/stores/pageState';
// import { useTrackState } from '@/stores/trackState';
const scaleValue = ref(30)
// const props = defineProps({
//   scaleValue: {
//     type: Number,
//     default: 30
//   }
// });
// const emit = defineEmits({
//   'update:scaleValue': val => {
//     return val !== null;
//   }
// });
// const scaleValue = computed({
//   get() {
//     return props.scaleValue;
//   },
//   set(value) {
//     emit('update:scaleValue', value);
//   }
// });
// const store = usePageState();
// const trackStore = useTrackState();
// const statePoint = computed(() => store._stepInfo.statePoint);
// const stateLength = computed(() => store._stepInfo.stateLength);


const icons = computed(() => [
  {
    title: '撤销',
    disable: false,
    // disable: stateLength.value === 0 || statePoint.value === 0,
    icon: 'timeline/undo'
  },
  {
    title: '前进',
    disable: false,
    // disable: statePoint.value === stateLength.value,
    icon: 'timeline/redo'
  },
  {
    title: '分割',
    disable: true,
    icon: 'timeline/split'
  },
  {
    title: '删除',
    disable: false,
    // disable: trackStore.selectTrackItem.line === -1 && trackStore.selectTrackItem.index === -1,
    icon: 'timeline/delete'
  }
]);
const changeScale = (val: number) => {
  console.log('时间轴缩放比例改为', val);
  // let newVal = scaleValue.value + val;
  // if (newVal > sliderProps.max) newVal = sliderProps.max;
  // if (newVal < sliderProps.min) newVal = sliderProps.min;
  // scaleValue.value = newVal;
}
function handlerIcon(item: Record<string, any>) {
  console.log(item);
  // const { icon: type, disable } = item;
  // if (disable) {
  //   return;
  // }
  // if (type === 'DeleteIcon') {
  //   if (trackStore.selectTrackItem.line !== -1 && trackStore.selectTrackItem.index !== -1) {
  //     trackStore.removeTrack(trackStore.selectTrackItem.line, trackStore.selectTrackItem.index);
  //     trackStore.selectTrackItem.line = -1;
  //     trackStore.selectTrackItem.index = -1;
  //   }
  // } else if (type === 'UndoIcon') {
  //   store._undo();
  // } else if (type === 'RedoIcon') {
  //   store._redo();
  // }
}
</script>