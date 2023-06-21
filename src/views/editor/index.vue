<template>
  <div class="h-screen w-screen flex flex-col p-1.5">
    <section class="h-12 p-2.5 bg-zinc-900 rounded-lg">
      顶部操作区
    </section>
   <section class="flex-1 flex mt-1.5">
    <div class="bg-zinc-900 w-16 rounded-lg mr-1.5">导航条</div>
    <div class="flex flex-col flex-1">
      <div class="flex w-full h-3/5 mb-1.5">
        <div class="w-80 bg-zinc-900 h-full rounded-lg">
          资源素材
        </div>
        <div class="flex-1 bg-zinc-900 h-full rounded-lg mx-1.5">
          <CanvasEditor/>
        </div>
        <div class="w-80 bg-zinc-900 h-full rounded-lg">
            属性编辑
          </div>
      </div>
      <div class="bg-zinc-900 w-full rounded-lg h-2/5">
        <Timeline/>
      </div>
    </div>
   </section>
  </div>
  <!-- <n-layout class="h-screen w-screen">
    <header class="h-12 p-2.5 bg-gray-950 rounded-lg">
      顶部操作区
    </header>
    <n-layout position="absolute" style="top: 64px" has-sider>
      <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
        >
          <n-menu
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>
      <n-layout content-style="padding: 10px; height: 100%" :native-scrollbar="false">
        <div class="flex flex-col h-full w-full justify-between">
          <div>
            <Monitor/>
          </div>
          <Timeline/>
      </div>
      </n-layout>
    </n-layout>
  </n-layout> -->
</template>

<script setup lang="ts">
// import Timeline from '@/components/timeline/index.vue'
import Monitor from '@/modules/monitor/index.vue'
import CanvasEditor from '@/modules/canvas/index.vue'
import Timeline from '@/modules/timeline/index.vue'
const menuOptions = [
  {
    label: '素材',
    key: 'materials',
  },
  {
    label: '文本',
    key: 'text',
    children: [
      {
        label: '花字',
        key: 'text-more'
      },
    ]
  }
]
</script>

<style scoped>
.container {
  display: flex;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>