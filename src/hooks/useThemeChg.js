import { inject, watch, nextTick, onMounted } from "vue"
import { THEME_KEY } from "vue-echarts";

/**
 * 当图表主题改变时，触发事件
 * @param {Function} chg  要执行的函数
 * @param {Boolean} doItFirst  是否一开始就执行
 */


export default (chg, doItFirst = false) => {
  const echartsTheme = inject(THEME_KEY);

  watch(echartsTheme, () => {
    nextTick(() => {
      if (typeof chg === 'function') {
        chg(echartsTheme);
      }
    })
  });

  onMounted(() => {
    if (doItFirst) {
      if (typeof chg === 'function') {
        chg(isDarkTheme);
      }
    }
  })
}