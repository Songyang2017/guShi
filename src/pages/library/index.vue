<template>
  <div>
    <div class="list-wrapper">
      <div
        v-for="its in list"
        :key="its.id"
        @click="goList(its.id, its.text)"
        class="cover-its"
      >
        <img
          mode="cover"
          :src="its.pic"
          alt=""
        >
        <div>{{its.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import SongCi from '@/asset/img/songci.jpg'
import ShiJing from '@/asset/img/shijing.jpg'
import LunYu from '@/asset/img/lunyu.jpg'
import TangShi from '@/asset/img/tangshi.jpg'

export default {
  data () {
    return {
      list: [
        {
          pic: TangShi,
          text: '唐诗',
          id: 'poet_tang'
        },
        {
          pic: SongCi,
          text: '宋词',
          id: 'ci'
        },
        {
          pic: ShiJing,
          text: '诗经',
          id: 'shijing'
        },
        {
          pic: LunYu,
          text: '论语',
          id: 'lunyu'
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    goList (id, text) {
      wx.navigateTo({
        url: `/pages/listItem/main?id=${id}&text=${text}`
      })
    }
  }
}
</script>
<style scoped lang="less">
.list-wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  .cover-its {
    position: relative;
    width: 34vw;
    height: 34vw;
    border-radius: 8px;
    margin: 0 auto 20px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    div {
      position: absolute;
      bottom: 0;
      font-size: 15px;

      width: 34vw;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      padding: 4px 0;
    }
  }
}
</style>