<template>
  <div class="relative h-16">
    <div data-testid="trim-handle" role="button" aria-label="向前修剪按钮" class="absolute inset-0 left-0 jPnApq"
      style="cursor: ew-resize;">
      <div class="sc-eLWVrc bbepoM selected">
        <SvgIcon name="track/handler" />
      </div>
    </div>
    <div class="SelectedIndicator__Container-sc-1lzngmw-0 buzMQH isSelected isLargeTrackItem"></div>
    <slot name="item"></slot>
    <div data-testid="trim-handle" role="button" aria-label="向后修剪按钮" class="sc-curcqj iMgjoQ" style="cursor: w-resize;">
      <div class="sc-eLWVrc bbepoM selected">
        <SvgIcon name="track/handler" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.jPnApq {
  cursor: ew-resize;
  z-index: 1;
  width: 14px;
  margin: 2px;
  transition: opacity 50ms linear 0s;
  touch-action: none;
}

.buzMQH.isSelected {
  box-shadow: rgb(98, 214, 177) 0px 0px 0px 2px inset;
}

.buzMQH.isLargeTrackItem {
  border-radius: 6px;
}

.buzMQH {
  position: absolute;
  inset: 0px;
  pointer-events: none;
  z-index: 2;
  border-radius: 4px;
  transition: box-shadow 50ms linear 0s;
  box-shadow: rgba(255, 255, 255, 0.25) 0px 1px 2px inset, rgba(255, 255, 255, 0.1) 0px -1px 2px inset, rgba(213, 213, 225, 0) 0px 0px 0px 2px inset;
}

.visual-track-item .sc-gJSbpZ {
  border-radius: 6px;
}

.brfZCR {
  width: 100%;
  height: 100%;
  background: rgb(59, 59, 79);
  overflow: hidden;
  opacity: 1;
  transform: translateZ(0px);
  cursor: pointer;
  border-radius: 4px;
}

.iMgjoQ {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 1;
  width: 14px;
  margin: 2px;
  transition: opacity 50ms linear 0s;
  touch-action: none;
}

.bbepoM.selected {
  background-color: rgba(43, 172, 146, 0.5);
}

.bbepoM.selected {
  color: rgb(255, 255, 255);
}

.bbepoM {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(75, 75, 97, 0.8);
  transition: background-color 50ms linear 0s;
  animation: 50ms linear 0s 1 normal none running bACkHk;
  color: rgb(213, 213, 225);
}
</style>