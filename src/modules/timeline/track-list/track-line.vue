<template>
  <div class="w-full">
     <div :ref="drop" role="Dustbin" class="h-32 w-full text-white p-2 text-center" :style="{ backgroundColor }">
    {{ isActive ? 'Release to drop' : 'Drag a box here' }}
  </div>
  <div
    :ref="drag"
    role="Box"
    :style="{ ...style, opacity }"
    :data-testid="`box-Glass`"
  >
    Glass
  </div>
  </div>
  
</template>

<script setup lang="ts">
import { DragPreviewImage, useDrag,useDrop } from 'vue3-dnd'
import { computed, unref } from 'vue'
import { toRefs } from '@vueuse/core'
interface DropResult {
  name: string
}
const [collect1, drop] = useDrop(() => ({
  accept: 'box',
  drop: () => ({ name: 'Dustbin' }),
  collect: monitor => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))
const { canDrop, isOver } = toRefs(collect1)
const isActive = computed(() => unref(canDrop) && unref(isOver))
const backgroundColor = computed(() =>
  unref(isActive) ? 'darkgreen' : unref(canDrop) ? 'darkkhaki' : '#222'
)

const style:any = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

const [collect, drag] = useDrag(() => ({
  type: 'box',
  item: () => ({
    name: 'Glass',
  }),
  end: (item, monitor) => {
    const dropResult = monitor.getDropResult<DropResult>()
    if (item && dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`)
    }
  },
  collect: monitor => ({
    isDragging: monitor.isDragging(),
    handlerId: monitor.getHandlerId(),
  }),
}))

const { isDragging } = toRefs(collect)

const opacity = computed(() => (unref(isDragging) ? 0.4 : 1))
// const [collectedProps, dragSource, dragPreview] = useDrag(() => ({
// 	type: 'BOX',
// 	item: { id: '1' },
// }))
// watchEffect(() => {
//   console.log('collectedProps', collectedProps)
// })
</script>

<style lang="scss" scoped>
.box {
  float: left;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid gray;
  cursor: move;

  &.dragging {
    opacity: 0.4;
  }
}
</style>