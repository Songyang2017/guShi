<template>
  <div>
    <canvas canvas-id="my-ctx"></canvas>
  </div>
</template>
<script>
export default {
  onLoad () {
    this.initCanvas()
  },
  methods: {
    initCanvas () {
      let ctx = wx.createCanvasContext('my-ctx')
      ctx.rect()
    }
  }
}
</script>
<style scoped lang="less">
</style>