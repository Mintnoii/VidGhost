<template>
  <div ref="canvasRef" id="konva" class="w-full h-full"></div>
</template>

<script setup lang="ts">
import Konva from 'konva'
import { onMounted, watch, ref, reactive, computed } from 'vue'

const refreshStage = () => {
  // const { width, height, scale } = setRootStyle()
  // 新建 Stage
  const stage = new Konva.Stage({
    container: 'konva',
    width: 1080 * 0.5,
    height: 720 * 0.5,
    offset: {
      x: -1080 * 0.5 / 2,
      y: -720 * 0.5 / 2,
    },
  })
  // 新建 layer
  const layer = new Konva.Layer({
    name: 'canvasLayer'
  })

  var rect1 = new Konva.Rect({
        x: 0,
        y: 0,
        width: 50,
        height: 50,
        fill: 'green',
        strokeWidth: 4,
      });
      // add the shape to the layer
      layer.add(rect1);
      stage.add(layer);
}

onMounted(() => {
  const konvaContainer = document.getElementById('konva')
  if (!konvaContainer) return
  refreshStage()
  // injectPropsData()
  // renderNodes(props.timelineDataService?.currentFrameUINodes || [])
  // props.timelineDataService?.onCurFrameNodesChange(renderNodes)
  // props.timelineDataService?.onCurActiveNodesChange(activateNodes)
})

</script>

<style scoped>

</style>