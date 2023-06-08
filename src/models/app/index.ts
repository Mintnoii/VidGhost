import useAppStore from './store'

const useAppModel = () => {
  const appStore = useAppStore()
  const { theme } = storeToRefs(appStore)
  const isDarkTheme = computed(() => theme.value === 'dark')
  return { isDarkTheme }
}

export default useAppModel