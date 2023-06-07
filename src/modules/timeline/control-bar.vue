<template>
  <div class="pl-4 pb-1 pr-10 w-full h-8 border-y border-violet-200 dark:border-gray-600">
    <div class="float-left h-8 w-32 flex flex-row flex-nowrap items-center justify-around cursor-pointer">
      <div v-for="item of icons" :key="item.title" @click="handlerIcon(item)">
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
    <!-- <div class="float-right flex w-52 h-9 justify-center items-center">
      <SubIcon :style="svgStyle" class="cursor-pointer mr-4" @click="changeScale(-10)" />
      <el-slider v-model="modelValue" v-bind="sliderProps" />
      <AddIcon :style="svgStyle" class="cursor-pointer ml-4" @click="changeScale(10)" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import { usePageState } from '@/stores/pageState';
// import { useTrackState } from '@/stores/trackState';
// const props = defineProps({
//   modelValue: {
//     type: Number,
//     default: 30
//   }
// });
// const emit = defineEmits({
//   'update:modelValue': val => {
//     return val !== null;
//   }
// });
// const modelValue = computed({
//   get() {
//     return props.modelValue;
//   },
//   set(value) {
//     emit('update:modelValue', value);
//   }
// });
// const store = usePageState();
// const trackStore = useTrackState();
// const statePoint = computed(() => store._stepInfo.statePoint);
// const stateLength = computed(() => store._stepInfo.stateLength);
// const svgStyle = ref({
//   fontSize: '1.75rem',
//   padding: '0.25rem',
//   boxSizing: 'content-box'
// });
// const sliderProps = reactive({
//   showTooltip: false,
//   size: 'small',
//   step: 10,
//   max: 100,
//   min: 0
// });
// function changeScale(val: number) {
//   let newVal = modelValue.value + val;
//   if (newVal > sliderProps.max) newVal = sliderProps.max;
//   if (newVal < sliderProps.min) newVal = sliderProps.min;
//   modelValue.value = newVal;
// }
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