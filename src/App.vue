<template>
  <BaseLayout>
    <Demo />
  </BaseLayout>

  <!-- 更改主题按钮 -->
  <button @click="onChgTheme"
          class="chg-theme-btn p-2 px-4 w-16 bg-blue-500 rounded fixed bottom-10 right-10">
    {{theme}}
  </button>

</template>

<script setup>
import { provide, ref, watch } from "vue";
import BaseLayout from '@/layout/BaseLayout.vue';
import Demo from '@/pages/Demo.vue';
import { echartDefaultTheme, echartSecTheme } from '@/config/index';

import { THEME_KEY } from "vue-echarts";

const theme = ref(echartDefaultTheme);

// 提供主题
provide(THEME_KEY, theme);

// 改变主题
const onChgTheme = () => {
  if (!echartSecTheme) return;
  theme.value = theme.value === echartDefaultTheme ? echartSecTheme : echartDefaultTheme;
}

// 使用在 body 增加与主题相同名称的 class 
// 方便控制除了图表以外的样式，比如背景字体颜色等
const onThemeChg = () => {
  echartDefaultTheme && document.body.classList[theme.value === echartDefaultTheme ? 'add' : 'remove'](echartDefaultTheme);
  echartSecTheme && document.body.classList[theme.value === echartSecTheme ? 'add' : 'remove'](echartSecTheme);
}

onThemeChg();

echartSecTheme && watch(theme, onThemeChg);

</script>

<style scoped>
.chg-theme-btn {
  z-index: 999;
}
</style>
