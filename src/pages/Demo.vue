<template>
  <div class="h-2/4 flex justify-around p-4">
    <div class="w-1/4 h-full">
      <v-chart :option="pieOption"
               :autoresize="true" />
    </div>
    <div class="w-1/4 h-full">
      <v-chart :option="barOption"
               :autoresize="true"
               ref='barRef' />
    </div>
    <div class="w-1/4 h-full">
      <v-chart :option="lineOption"
               :autoresize="true" />
    </div>
  </div>

  <div class="text-center m-16 text-blue-500 hover:text-blue-800 cursor-pointer">
    <a href="https://echarts.apache.org/examples/zh/index.html"
       target="_blank">更多示例请查看 echarts 官网示例</a>
  </div>
</template>

<script setup>
import pieOption from '@/mock/pieOption';
import barOption from '@/mock/barOption';
import lineOption from '@/mock/lineOption';
import useAutoTip from '@/hooks/useAutoTip';
import { onMounted, onUnmounted, reactive, nextTick } from "vue";

useAutoTip('barRef');

</script>