<template>
  <div class="canvas-box">
    <canvas
      canvas-id="my-ctx"
      :style="{width: winWh+'px', height: winHe+'px'}"
    ></canvas>
  </div>
</template>
<script>
import qr from '../asset/img/minQr.jpg'
import { mapState } from 'vuex'

const WIN_WH = wx.getSystemInfoSync().windowWidth
const WIN_HE = wx.getSystemInfoSync().windowHeight
export default {
  props: {
    origin: Object
  },
  onLoad () {
    this.$bus.$off('save-ctx')
    this.initCanvas()
  },
  computed: {
    ...mapState(['userInfo'])
  },
  mounted () {
    this.$bus.$on('save-ctx', () => {
      this.saveCanvas()
    })
  },
  data () {
    return {
      winWh: WIN_WH * 0.8,
      winHe: WIN_HE,
      size: {
        normal: 13,
        aut: 12
      },
      ctx: '',
      line: {
        base: 80,
        sept: 27
      }
    }
  },
  methods: {
    saveCanvas () {
      let qrWh = 60
      let qrHe = 60
      this.ctx = wx.createCanvasContext('my-ctx')
      let _list = this.origin.content.join(',').replace(/!|\?|？/g, ',').split('。')

      // this.winHe = (4 + _list.length) * this.line.sept
      this.winHe = qrHe + this.line.base + this.size.normal + (1 + _list.length) * this.line.sept + this.size.aut + _list.length * this.size.normal

      this.ctx.setFillStyle('#fffbf8')
      this.ctx.fillRect(0, 0, this.winWh, this.winHe)
      this.ctx.setTextAlign('center')
      this.ctx.setFontSize(this.size.aut)
      this.ctx.setFillStyle('#a2a2a2')
      this.ctx.setFontSize(this.size.aut)
      this.ctx.fillText(`${this.userInfo.nickName} 分享`, this.winWh / 2, this.line.base / 2)
      this.ctx.setFillStyle('#454545')
      this.ctx.fillText(this.origin.title, this.winWh / 2, this.line.base)
      this.ctx.setFontSize(this.size.aut)
      this.ctx.fillText(this.origin.author, this.winWh / 2, this.line.base + this.line.sept * 1)
      this.ctx.setFontSize(this.size.normal)

      _list.forEach((v, i) => {
        this.ctx.fillText(v.replace(/,/g, ''), this.winWh / 2, this.line.base + this.line.sept * (i + 2))
      })

      this.ctx.drawImage(qr, (this.winWh / 2) - (qrWh / 2), this.winHe - 120, qrWh, qrHe)
      this.ctx.setFillStyle('#a2a2a2')
      this.ctx.setFontSize(this.size.aut)
      this.ctx.fillText(`打开微信搜索 “诗与词”`, this.winWh / 2, this.winHe - 40)

      this.ctx.draw(false, () => {
        wx.canvasToTempFilePath({
          canvasId: 'my-ctx',
          x: 0,
          y: 0,
          width: this.winWh,
          height: this.winHe,
          destWidth: this.winWh * 10,
          destHeight: this.winHe * 10,
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
    },
    initCanvas () {
      let qrWh = 60
      let qrHe = 60
      this.ctx = wx.createCanvasContext('my-ctx')
      let _list = this.origin.content.join(',').replace(/!|\?|？/g, ',').split('。')

      // this.winHe = (4 + _list.length) * this.line.sept
      this.winHe = qrHe + this.line.base + this.size.normal + (1 + _list.length) * this.line.sept + this.size.aut + _list.length * this.size.normal

      this.ctx.setFillStyle('#fffbf8')
      this.ctx.fillRect(0, 0, this.winWh, this.winHe)
      this.ctx.setTextAlign('center')
      this.ctx.setFontSize(this.size.aut)
      this.ctx.setFillStyle('#a2a2a2')
      this.ctx.setFontSize(this.size.aut)
      this.ctx.fillText(`${this.userInfo.nickName} 分享`, this.winWh / 2, this.line.base / 2)
      this.ctx.setFillStyle('#454545')
      this.ctx.fillText(this.origin.title, this.winWh / 2, this.line.base)
      this.ctx.setFontSize(this.size.aut)
      this.ctx.fillText(this.origin.author, this.winWh / 2, this.line.base + this.line.sept * 1)
      this.ctx.setFontSize(this.size.normal)

      _list.forEach((v, i) => {
        this.ctx.fillText(v.replace(/,/g, ''), this.winWh / 2, this.line.base + this.line.sept * (i + 2))
      })

      this.ctx.drawImage(qr, (this.winWh / 2) - (qrWh / 2), this.winHe - 120, qrWh, qrHe)
      this.ctx.setFillStyle('#a2a2a2')
      this.ctx.setFontSize(this.size.aut)
      this.ctx.fillText(`打开微信搜索 “诗与词”`, this.winWh / 2, this.winHe - 40)
      this.ctx.draw()
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