<template>
  <div>
    <!-- <TimeScale /> -->
    <div class="timeline-container">
      <div ref="stageRef" class="timeline-stage"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TimeScale from './time-scale.vue';
import Konva from 'konva';
const stageRef = ref()
onMounted(() => {
  const stage = new Konva.Stage({
    container: stageRef.value,
    width: 1180,
    height: 250 // 面板高度为5个轴乘以每个轴的高度（50px）
  });
  // 创建一个Konva舞台和层
  const layer = new Konva.Layer()
  // 创建5个轴
  for (let i = 0; i < 5; i++) {
    // 每个轴的y坐标为i*50（每个轴高度为50px）
    const axis = new Konva.Rect({
      x: 0,
      y: i * 50,
      width: 1180,
      height: 1,
      fill: '#ddd',
      stroke: '#ddd'
    })
    // 创建每个轴上的元素
    // const element = new Konva.Rect({
    //   x: 50 + i * 150, // 每个元素的x坐标为50+每个轴的索引*150（每个元素宽度为100px）
    //   y: i * 50,
    //   width: 100,
    //   height: 50,
    //   fill: '#00BFFF',
    //   stroke: 'black'
    // })
    // const element = new CustomControl({ width: 100, height: 50, minWidth: 50, maxWidth: 2000 })
    // 将轴和元素添加到层中
    layer.add(axis)
    // layer.add(element)
  }
  // 创建一个 Group 实例
  const customGroup = new Konva.Group({
    x: 20,
    y: 50,
    draggable: true,
  });
  const groupLayer = new Konva.Layer()
  // 创建一个可调节组宽度的 layer，其中包含两个粉色的按钮
  var resizeLayer = new Konva.Layer({
    visible: false // 初始时不可见
  });
  // 创建一个背景色为浅蓝色的 Rect 矩形，添加到 Group 中
  const rect = new Konva.Rect({
    width: 30,
    height: 50,
    fill: 'lightblue',
  });

  // 创建粉红色的按钮，添加到 Group 中
  const buttonLeft = new Konva.Rect({
    // x: -10,
    // y: 0,
    width: 10,
    height: 50,
    fill: 'pink',
    draggable: true,
    dragBoundFunc: function (pos) {
      // 限制拖拽范围，确保按钮不会超出矩形范围
      const newX = Math.min(
        customGroup.x() + this.width() - 10,
        Math.max(0, pos.x)
      );
      // console.log(pos, 'buttonLeft - pos', newX, customGroup.x(), this.width(), this.getAbsolutePosition());
      return { x: newX, y: this.getAbsolutePosition().y };
    },
  });
  //监听按钮拖拽事件，改变矩形宽度
  buttonLeft.on('dragmove', function () {
    if (buttonLeft.getAbsolutePosition().x > 0) {
      console.log(rect.width(), rect.attrs.width, rect.getAbsolutePosition(), buttonLeft.getAbsolutePosition(), 'buttonLeft - dragmove');
      // rect.width(rect.width() - buttonLeft.getAbsolutePosition().x);
      // rect.width(Math.abs(buttonLeft.getAbsolutePosition().x) + rect.attrs.width);
      rect.x(buttonLeft.getAbsolutePosition().x);
      layer.batchDraw();
    }
  });
  // buttonLeft.on('dragmove', function () {
  //   console.log(this.x(), rect.attrs.width, this.getAbsolutePosition());
  //   if (this.getAbsolutePosition().x > 0) {
  //     if (this.x() < 0) {
  //       rect.width(Math.abs(this.x()) + rect.attrs.width);
  //       layer.batchDraw();
  //     }
  //   }
  // });

  customGroup.add(rect);
  customGroup.add(buttonLeft);

  // customGroup.add(groupLayer)
  layer.add(customGroup);

  // 创建矩形
  // var rect = new Konva.Rect({
  //   x: 150,
  //   y: 50,
  //   width: 100,
  //   height: 50,
  //   fill: 'lightblue',
  // });

  // 创建左侧按钮
  // var leftButton = new Konva.Rect({
  //   x: 140,
  //   y: 50,
  //   width: 10,
  //   height: 50,
  //   fill: 'pink',
  //   draggable: true,
  //   dragBoundFunc: function (pos) {
  //     console.log(pos, 'getAbsolutePosition');
  //     return {
  //       x: Math.min(rect.attrs.x + rect.attrs.width - 20, Math.max(0, pos.x)),
  //       y: this.getAbsolutePosition().y,
  //     };
  //   },
  // });

  // // 创建右侧按钮
  // var rightButton = new Konva.Rect({
  //   x: 250,
  //   y: 50,
  //   width: 10,
  //   height: 50,
  //   fill: 'pink',
  //   draggable: true,
  //   dragBoundFunc: function (pos) {
  //     return {
  //       x: Math.max(rect.attrs.x + 20, Math.min(stage.width() - 10, pos.x)),
  //       y: this.getAbsolutePosition().y,
  //     };
  //   },
  // });

  // // 监听按钮拖拽事件，改变矩形宽度
  // leftButton.on('dragmove', function () {
  //   var newX = this.x() + this.width();
  //   rect.width(newX - rect.attrs.x);
  //   layer.batchDraw();
  // });

  // rightButton.on('dragmove', function () {
  //   var newX = this.x();
  //   rect.width(newX - rect.attrs.x);
  //   layer.batchDraw();
  // });

  // 添加矩形和按钮到层中
  // layer.add(rect);
  // layer.add(leftButton);
  // layer.add(rightButton);
  // // 将层添加到舞台中，并绘制层
  stage.add(layer)
  layer.draw()
})
</script>

<style lang="scss" scoped>
.timeline-container {
  position: relative;
  height: 250px;
}

.timeline-stage {
  position: absolute;
  top: 0;
  left: 0;
}
</style>