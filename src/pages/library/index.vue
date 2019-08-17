<template>
  <div>
    <van-tabs
      :active="active"
      bind:change="onChange"
    >
      <van-tab title="唐诗">内容 1</van-tab>
      <van-tab title="宋词">内容 2</van-tab>
      <van-tab title="论语">内容 3</van-tab>
      <van-tab title="古文">内容 4</van-tab>
    </van-tabs>

  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  mounted () {
    this.$db.collection('ci').where({ tags: ['宋词三百首'] }).get().then(res => {
      console.log('cid', res)
    })
  },
  methods: {
    onChange () {

    }
  }
}
</script>
<style scoped lang="less">
</style>