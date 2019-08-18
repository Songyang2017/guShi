<template>
  <div v-if="list.length">
    <div
      v-for="its in list"
      :key="its._id"
    >
      <p>{{its.title || its.rhythmic || its.chapter}}</p>
      <p v-if="its.author">{{its.author}}</p>
      <!-- <div
        v-for="(it, inx) in its.paragraphs"
        :key="inx"
      >
        <p>{{it}}</p>
      </div> -->
    </div>
  </div>
</template>
<script>
import * as API from '@/api/getData'
export default {
  data () {
    return {
      list: []
    }
  },
  onLoad () {
    this.list.length = 0
  },
  onShow () {
    console.log(this.$root.$mp.query)
    this._getDataList()

    wx.setNavigationBarTitle({
      title: this.$root.$mp.query.text
    })
  },
  methods: {
    _getDataList () {
      API.getDataList(10, 1, this.$root.$mp.query.id).then(res => {
        let { list: { data } } = res

        this.list = data
      })
    }
  }
}
</script>
<style scoped lang="less">
</style>