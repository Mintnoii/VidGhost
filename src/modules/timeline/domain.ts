import useTimelineStore from './store'

const useTimeline = () => {
  const { frameWidth } = useTimelineStore()
  return { frameWidth }
}

export default useTimeline