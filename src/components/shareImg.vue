<template>
  <div class="canvas-box">
    <canvas
      canvas-id="my-ctx"
      :style="{width: winWh+'px', height: winHe+'px'}"
    ></canvas>
    <div>保存</div>
  </div>
</template>
<script>
import { getImageinfo } from '@/api/getData'
import { mapState } from 'vuex'

const WIN_WH = wx.getSystemInfoSync().windowWidth
const WIN_HE = wx.getSystemInfoSync().windowHeight
export default {
  props: {
    origin: Object
  },
  computed: {
    ...mapState(['userInfo'])
  },
  data () {
    return {
      winWh: WIN_WH * 0.8,
      winHe: WIN_HE,
      size: {
        normal: 13,
        aut: 12
      },
      line: {
        base: 80,
        sept: 30
      }
    }
  },
  onLoad () {
    this.initCanvas()
    // console.log(WIN_WH, WIN_HE, this.userInfo)
    getImageinfo(this.userInfo.avatarUrl).then(res => {
      console.log('res', res)
    })
  },
  methods: {
    initCanvas () {
      let ctx = wx.createCanvasContext('my-ctx')
      ctx.setFontSize(this.size.normal)
      ctx.rect(0, 0, this.winWh, this.winHe)
      ctx.setFillStyle('white')
      ctx.setTextAlign('center')
      ctx.fillText(this.origin.title, this.winWh / 2, this.line.base)
      ctx.setFontSize(this.size.aut)
      ctx.fillText(this.origin.author, this.winWh / 2, this.line.base + this.line.sept * 1)
      ctx.setFontSize(this.size.normal)
      let _list = this.origin.content.join(',').replace(/!/g, '。').split('。')

      _list.forEach((v, i) => {
        ctx.fillText(v.replace(/,/g, ''), this.winWh / 2, this.line.base + this.line.sept * (i + 2))
        console.log(v)
      })
      this.winHe = (4 + _list.length) * this.line.sept

      ctx.draw(false, () => {
        wx.canvasToTempFilePath({
          canvasId: 'my-ctx',
          x: 0,
          y: 0,
          width: this.winWh,
          height: this.winHe,
          destWidth: this.winWh * 15,
          destHeight: this.winHe * 15,
          fileType: 'jpg',
          quality: 1,
          success (res) {
            let { tempFilePath } = res
            wx.saveImageToPhotosAlbum({
              filePath: tempFilePath,
              success () {
                wx.showToast({
                  icon: 'none',
                  title: '分享图片已保存至相册',
                  duration: 2000
                })
              }
            })
          }
        })
      })
    }
  }
}
</script>
<style scoped lang="less">
.canvas-box {
  canvas {
    margin: auto;
  }
}
</style>