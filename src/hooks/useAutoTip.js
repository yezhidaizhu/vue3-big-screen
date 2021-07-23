import { onMounted, onUnmounted, reactive, getCurrentInstance, nextTick } from "vue";

import useThemeChg from './useThemeChg';

/**
 * 用于自动 展示 tooltip
 * 目前仅测试过拥有 series.data 的 玫瑰 / 柱状
 * @param {String|ref} refer 指向图标的 ref 名
 * @param {Number} dur 间隔时间 ms
 */

const firstTipTime = 2000; // 立即执行的第一个提示展示延时时间，避免setInterval时间间隔长

function useAutoTip(refer, dur = 4000) {
  let actionTimer = null;
  const _parentInstance = getCurrentInstance();
  let instance = reactive({});

  // 监听更改主题，重新渲染，主要由于更改主题后mouseover等鼠标事件失效
  useThemeChg(() => {
    startAutoTip();
  })

  const startActions = () => {
    if (!instance) return;

    let dataIndex = -1;

    const dataLen = instance.option.series[0].data.length;
    actionTimer = setInterval(() => {
      instance.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex
      });
      dataIndex = (dataIndex + 1) % dataLen;
      instance.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex
      });
      // 显示 tooltip
      instance.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex
      });
    }, dur);
  };

  const stopActions = () => {
    actionTimer && clearInterval(actionTimer);
  }

  const startAutoTip = (_instance) => {
    if (_instance) {
      instance = reactive(_instance)
    }

    if (dur < firstTipTime) {
      setTimeout(() => {
        firstActions();
      }, firstTipTime);
    }

    stopActions();
    startActions();
    instance.chart.on("mouseover", () => {
      stopActions();
    });

    instance.chart.on("mouseout", (p) => {
      stopActions();
      startActions();
    });
  }

  // 一开始就执行
  const firstActions = () => {
    const dataIndex = 0;
    instance.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex
    });
    instance.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex
    });
    // 显示 tooltip
    instance.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex
    });
  }

  onMounted(() => {
    nextTick(() => {
      if (!refer) return;

      instance = typeof refer === 'string' ? reactive(_parentInstance.refs[refer]) : reactive(refer);
      if (!instance) return;

      startAutoTip();
    });
  });

  onUnmounted(() => {
    stopActions();
  });


  return {
    startAutoTip,
  }
}

export default useAutoTip;
