<template>
  <div>
    <ul v-if="list.length">
      <li
        v-for="(it, inx) in list"
        :key="inx"
      >
        <p>{{it.author}}</p>
        <p>{{it.rhythmic}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [],
      db: wx.cloud.database()
    }
  },
  onLoad () {
    this.db.collection('ci').where({ tags: ['宋词三百首'] }).get().then(res => {
      let { data } = res
      this.list = data
      console.log('cid', this.list)
    })
  }
}
</script>
<style>
</style>
