<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  created () {
    // this.toggleKeyBoard()
  },
  methods: {
    /* 输入框获取焦点 底部按钮消失 失去焦点按钮显示 */
    toggleKeyBoard () {
      const h0 = window.innerHeight
      window.onresize = function () {
        const h1 = window.innerHeight
        const btn = document.getElementById('btn_box')
        if (h1 < h0) {
          btn.style.display = 'none'
        } else {
          btn.style.display = 'flex'
        }
      }
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background: #f1f2f6;
}
body{
  position: relative;
  color: #333!important;
}
a{
  color:#333;
}
a:visited{
  color:#333;
}
/* 导航条固定 */
.vux-header{
  position: fixed!important;
  top:0;
  width: 100%;
  z-index: 100;
  background-color: #2980b9 !important;
}
/* 返回按钮位置颜色 */
.vux-header .vux-header-left{
  left: 12px !important;
}
/* 内容margin-top */
.container{
  margin-top: 46px;
}
/* 内容底部内边距 */
.weui-tab__panel{
  padding-bottom: 42px!important;
}
/* 添加购物车 */
.point-outer.point-pre {
  display: none;
}
.point-outer {
  position: absolute;
  z-index: 20;
  -webkit-transition: all 0.5s cubic-bezier(0.39,-0.4,0.83,0.23) 0s;
  transition: all 0.5s cubic-bezier(0.39,-0.4,0.83,0.23) 0s;
}
.point-inner {
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  background-color: #2980b9;
  -webkit-transition: all 0.5s linear 0s;
  color: #ffffff;
  text-align: center;
  font-size: 0.7rem;
}
</style>
