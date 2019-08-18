<template>
  <div>
    <van-cell>
      <div
        class="avatar-wrapper"
        slot="title"
        v-if="userInfo"
      >
        <img
          class="avatar"
          mode="cover"
          :src="userInfo.avatarUrl"
        />
        <span>{{userInfo.nickName}}</span>
      </div>
      <div
        class="avatar-wrapper"
        slot="title"
        v-else
      >
        <img
          class="avatar"
          mode="cover"
          :src="userDefault"
        />
        <button
          class="get-user-btn"
          open-type="getUserInfo"
          bindgetuserinfo="GetUserInfoHandler"
        >去授权</button>
        <span>去授权</span>
      </div>
    </van-cell>
    <!-- <van-cell
      title="收藏"
      url="/pages/collections/main"
      is-link
    /> -->
    <van-cell
      title="关于"
      is-link
    />
    <!-- <van-cell
      title="打赏"
      is-link
    /> -->
    <van-dialog
      id="van-dialog"
      @getuserinfo="GetUserInfoHandler"
    />
  </div>
</template>
<script>
import mixins from '@/utils/mixins'
import userDefault from '@/asset/user.png'
export default {
  mixins: [mixins],
  data () {
    return {
      userDefault
    }
  },
  onLoad () {
    wx.setNavigationBarTitle({
      title: '用户'
    })
  }
}
</script>
<style lang="less" scoped>
.avatar-wrapper {
  .get-user-btn {
    width: 100vw;
    position: absolute;
    left: 0;
    opacity: 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  .avatar {
    border-radius: 50%;
    width: 14vw;
    height: 14vw;
  }
}
</style>