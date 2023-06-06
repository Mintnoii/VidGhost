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
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        预览区

        <Timeline/>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import TrackEditor from '@/features/track/index.vue'
import Timeline from '@/components/timeline/index.vue'
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