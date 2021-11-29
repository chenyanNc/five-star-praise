<template>
  <div class="ui-starts">
    <span class="current-start" v-for="number in startQuantity" :key="number">
      <i 
      :class="['iconfont icon-tubiao_wuxing-']"
      :style="{fontSize: size + 'px', color: number <= startNum ? startColor : ''}"
      @click="setStartNum(number)"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Starts',
  props: {
    startQuantity: {
      type: Number,
      default: 5
    },
    num:{
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 14
    },
    startColor: {
      type: String,
      default: '#FCC33F'
    }
  },
  data() {
    return {
      startNum: this.num
    }
  },
  methods: {
    setStartNum(val) {
      this.startNum = val
      this.$emit('getStartNum', val)
    }
  }
}
</script>

<style lang="scss" scoped>

// 引入五角星字体图标 
@font-face {
  font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_2967587_7cp0ljbgfev.woff2?t=1638166310751') format('woff2'),
       url('//at.alicdn.com/t/font_2967587_7cp0ljbgfev.woff?t=1638166310751') format('woff'),
       url('//at.alicdn.com/t/font_2967587_7cp0ljbgfev.ttf?t=1638166310751') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ddd;

  &.icon-tubiao_wuxing-:before {
      content: "\e608";
    }
  &.active{
    color: #FCC33F;
  }
}

.current-start{
  margin-left: 2px;
}

</style>