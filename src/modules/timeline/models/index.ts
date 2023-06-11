import useTimelineStore from './store'

const useTimeline = () => {
  const Store = useTimelineStore()
  const { frameWidth,timeScale } = storeToRefs(Store)

  // 更新刻度尺缩放比例
  const updateTimeScale = (scale:number) => timeScale.value = scale

  return {
    frameWidth,
    timeScale,
    updateTimeScale
  }
}

export default useTimeline