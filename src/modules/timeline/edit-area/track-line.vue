<template>
  <div :ref="drop" class="container h-32 w-full text-white p-2 text-center" >
    <Box
      v-for="(value, key) in boxes"
      :id="key"
      :key="key"
      :left="value.left"
    >
      {{ value.title }}
    </Box>
  </div>
</template>

<script setup lang="ts">
import { DragPreviewImage, useDrag,useDrop,XYCoord } from 'vue3-dnd'
import { computed, unref } from 'vue'
import { toRefs } from '@vueuse/core'
import Box from './components/box.vue'

interface DragItem {
  type: string
  id: string
  top: number
  left: number
}
interface DropResult {
  name: string
}

const boxes = reactive<{
  [key: string]: {
    top: number
    left: number
    title: string
  }
}>({
  a: { top: 0, left: 80, title: 'Drag me around' },
  b: { top: 0, left: 20, title: 'Drag me too' },
})

const moveBox = (id: string, left: number, top: number) => {
  Object.assign(boxes[id], { left, top })
}

const [, drop] = useDrop(() => ({
  accept: 'box',
  drop(item: DragItem, monitor) {
    const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
    const left = Math.round(item.left + delta.x)
    const top = Math.round(item.top + delta.y)
    moveBox(item.id, left, top)
    return undefined
  },
}))
// watchEffect(() => {
//   console.log('collectedProps', collectedProps)
// })
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 60px;
  border: 1px solid rgb(158, 169, 233);
}
</style>