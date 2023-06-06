<template>
  <div class="flex flex-col h-screen w-screen">
    <div class="h-16 w-full">
      顶部操作区
    </div>
      <n-layout has-sider class="flex-1">
      <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :native-scrollbar="false"
      >
        <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        预览区
      </n-layout-content>
    </n-layout>
    <div class="h-32 w-full">
        轨道区
        <TrackEditor />
    </div>
  </div>
</template>

<script setup lang="ts">
import TrackEditor from '@/features/track/index.vue'
const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      },
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
          },
        ]
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