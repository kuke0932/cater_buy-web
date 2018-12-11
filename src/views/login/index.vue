<template>
  <div>
    <div>
      <video id="end" width="100%" controls autoplay>
        <source src="/static/bailishouyue.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
    },
    mounted () {
      this.showOtherVideo()
    },
    methods: {
      showOtherVideo () {
        let _this = this
        setTimeout(function () {
          const dom = document.getElementById('end')
          const flag = dom.paused
          if (!flag) {
            _this.showOtherVideo()
          } else {
            // _this.showOtherVideo()
            if (dom.currentTime === dom.duration && dom.currentTime !== 0) {
              // 这里的判断是如果视频的总时间等于视频已经播放的时间，并且视频的播放时间不为零时
              // 这个地方的就是写视频结束的时候的代码的地方
            } else {
              _this.showOtherVideo()
            }
          }
        }, 1000)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
