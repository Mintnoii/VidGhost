import {getJsonParse} from '@/utils'

const useTimelineStore = defineStore('timeline', () => {
  // 比例尺缩放值
  const rulerScale = ref(30)
  const trackList = reactive<TrackLineItem[]>(localStorage.trackList ? getJsonParse(localStorage.trackList) : [])
  // 帧宽度
  const frameWidth = ref(0.003);
  return { frameWidth,rulerScale, trackList }
})

export default useTimelineStore