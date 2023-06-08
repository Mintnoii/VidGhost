<template>
  <div ref="timeScaleContainer" class="h-5 text-center text-sm top-0 right-0 left-0 leading-5 z-20 sticky">
    <canvas ref="timeScale" v-bind="canvasAttr" :style="canvasStyle" @click="handleClick" />
  </div>
</template>

<script setup lang="ts">
// import { usePageState } from '@/stores/pageState';
import { useAppModel } from '@/models'
import { drawTimeLine, getSelectFrame } from '@/modules/timeline/utils/canvasUtil';
import type { TrackScale, UserConfig, CanvasConfig } from './index';
import { ref, computed, onMounted, nextTick, watch, reactive, toRefs } from 'vue';

const props = withDefaults(defineProps<TrackScale>(), {
  start: 0,
  step: 30,
  scale: 0,
  focusPosition: () => ({
    start: 0,
    end: 0
  })
});
const emits = defineEmits({
  selectFrame(val: number) {
    return val !== null;
  }
});
/**
 * 初始化 Canvas
 * */
const timeScaleContainer = ref();
const timeScale = ref();
let canvasContext = {} as CanvasRenderingContext2D;
// const { hideSubMenu } = toRefs(usePageState());
const { isDarkTheme } = useAppModel()

const canvasConfigs = computed(() => ({
  bgColor: isDarkTheme.value ? '#374151' : '#E5E7EB', // 背景颜色
  ratio: window.devicePixelRatio || 1, // 设备像素比
  textSize: 12, // 字号
  textScale: 0.83, // 支持更小号字： 10 / 12
  lineWidth: 1, // 线宽
  // eslint-disable-next-line
  textBaseline: 'middle' as 'middle', // 文字对齐基线 (ts 中定义的textBaseLine是一个联合类型)
  // eslint-disable-next-line
  textAlign: 'center' as 'center', // 文字对齐方式
  longColor: isDarkTheme.value ? '#E5E7EB' : '#374151', // 长线段颜色
  shortColor: isDarkTheme.value ? '#9CA3AF' : '#6B7280', // 短线段颜色
  textColor: isDarkTheme.value ? '#E5E7EB' : '#374151', // 文字颜色
  subTextColor: isDarkTheme.value ? '#9CA3AF' : '#6B7280', // 小文字颜色
  focusColor: isDarkTheme.value ? '#6D28D9' : '#C4B5FD' // 选中元素区间
}));
const canvasAttr = reactive({
  width: 0,
  height: 0
});
const canvasStyle = computed(() => {
  return {
    width: `${canvasAttr.width / canvasConfigs.value.ratio}px`,
    height: `${canvasAttr.height / canvasConfigs.value.ratio}px`
  };
});
// 重绘线条
const updateTimeLine = () => {
  drawTimeLine(canvasContext, { ...props } as UserConfig, { ...canvasAttr, ...canvasConfigs.value } as CanvasConfig);
}
// 设置 canvas 上下文环境
const setCanvasContext = () => {
  canvasContext = timeScale.value.getContext('2d');
  canvasContext.font = `${canvasConfigs.value.textSize * canvasConfigs.value.ratio}px -apple-system, ".SFNSText-Regular", "SF UI Text", "PingFang SC", "Hiragino Sans GB", "Helvetica Neue", "WenQuanYi Zen Hei", "Microsoft YaHei", Arial, sans-serif`;
  canvasContext.lineWidth = canvasConfigs.value.lineWidth;
  canvasContext.textBaseline = canvasConfigs.value.textBaseline;
  canvasContext.textAlign = canvasConfigs.value.textAlign;
}
// 设置 timeScale 容器的大小
const setTimeScaleBox = () => {
  if (timeScaleContainer.value) {
    const { width, height } = timeScaleContainer.value.getBoundingClientRect();
    console.log('timeScale 宽高：', width, height);
    canvasAttr.width = width * canvasConfigs.value.ratio;
    canvasAttr.height = height * canvasConfigs.value.ratio;
    nextTick(() => {
      setCanvasContext();
      updateTimeLine();
    });
  }

}
function handleClick(event: MouseEvent) {
  const offset = event.offsetX;
  const frameIndex = getSelectFrame(props.start + offset, props.scale, props.step);
  emits('selectFrame', frameIndex);
}
onMounted(() => {
  setTimeScaleBox();
});
watch(canvasConfigs, updateTimeLine);
watch(props, updateTimeLine);
// watch(hideSubMenu, () => {
//   setTimeout(() => {
//     setTimeScaleBox();
//   }, 300);
// }, {
//   flush: 'post'
// });
window.addEventListener('resize', setTimeScaleBox, false);
</script>