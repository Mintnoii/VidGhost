import konva from 'konva'

const useKonva = () => {
  const stage = ref()
  const elementsList = ref<any[]>([])

  return {
    stage,
    elementsList
  }
}