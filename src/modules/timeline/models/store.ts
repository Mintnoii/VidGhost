const useTimelineStore = defineStore('timeline', () => {
  const timeScale = ref(30)
  const count = ref(0)
  // 时间轴容器宽度
  const timeline_container_width = ref(0);

// 时间轴宽度
const timeline_width = ref();

// 时间轴刻度尺宽度
const timeline_scale_width = Symbol();
  // 帧宽度
  const frameWidth = ref(0.003);
  return { frameWidth,timeScale }
})

export default useTimelineStore