<script lang="ts" setup>
import { useDrag } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'

const props = defineProps<{
  id: any
  left: number
}>()

const [collect, drag] = useDrag(() => ({
  type: 'box',
  item: { id: props.id, left: props.left, top: 0 },
  collect: monitor => ({
    isDragging: monitor.isDragging(),
  }),
}))
const { isDragging } = toRefs(collect)
</script>

<template>
  <div v-if="isDragging" :ref="drag" />
  <div
    v-else
    :ref="drag"
    class="box"
    :style="{ left: `${left}px`, top: `0px` }"
    role="Box"
    data-testid="box"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.box {
  position: absolute;
  height: 100%;
  background-color: white;
  border: 1px dashed gray;
  cursor: move;
}
</style>