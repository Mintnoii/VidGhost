<template>
  <n-layout class="h-screen w-screen">
    <n-layout-header style="height: 64px; padding: 24px" bordered>
      顶部操作区
    </n-layout-header>
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
  </n-layout>
</template>

<script setup lang="ts">
// import Timeline from '@/components/timeline/index.vue'
import Monitor from '@/modules/monitor/index.vue'
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