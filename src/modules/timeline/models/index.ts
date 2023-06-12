import useTimelineStore from './store'

const useTimeline = () => {
  const Store = useTimelineStore()
  const { frameWidth,rulerScale,trackList} = storeToRefs(Store)

  // 更新刻度尺缩放比例
  const updateRulerScale = (scale:number) => rulerScale.value = scale

  return {
    frameWidth,
    trackList,
    rulerScale,
    updateRulerScale
  }
}

export default useTimeline