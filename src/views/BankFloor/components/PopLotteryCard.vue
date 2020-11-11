<template>
  <div class="pop-lottery-card">
    <div
      class="card-block"
      style="{width: 342px;height: 68px;top: 521px; left: 462px;}"
      @click="handleImgLinkClick"
    >
      <img class="img-link" src="https://m3.tuniucdn.com/fb2/t1/G6/M00/25/27/Cii-U18G5VOIDa9NAAAE3JsBymEAAERMQP_-aYAAAT0241.png" />
      <div class="lottery-mask" :class="{ hide: isHide }">
        <lottery-apply v-if="!this.showLotteryList" @clickClose="handleCloseClick" @showLotteryListEvent="handleshowLotteryList"></lottery-apply>
        <lottery-list v-else class="lottery-list" @clickClose="handleCloseClick" :lotteryGottenBefore="lotteryGottenBefore"></lottery-list>
      </div>
    </div>
  </div>
</template>

<script>
import LotteryList from './LotteryList'
import LotteryApply from './LotteryApply'
export default {
  name: 'PopLotteryCard',
  components: {
    LotteryList,
    LotteryApply
  },
  data () {
    return {
      isHide: true, // 活动弹框mask是否隐藏
      showLotteryList: false, // 是否展示lottery-list弹框
      lotteryGottenBefore: false // 用户是否已领取优惠
    }
  },
  methods: {
    handleImgLinkClick () {
      // 从后端获得用户是否已领取优惠
      // 如果是（用lotteryGottenBefore：true模拟）,直接弹出lottery-list，告知已领取；
      // 如果不是用lotteryGottenBefore：false模拟），弹出lottery-apply页面，进行验证和领取。
      if (this.lotteryGottenBefore) {
        this.showLotteryList = true
      } else {
        this.showLotteryList = false
      }
      this.isHide = false
    },
    handleshowLotteryList () {
      this.showLotteryList = true
    },
    handleCloseClick () {
      this.isHide = true
    }
  }
}
</script>

<style lang="scss" scoped>
.card-block {
  position: absolute;
  cursor: pointer;
  .img-link {
    width: 100%;
  }
  .lottery-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  .hide {
    display: none;
  }
}
</style>
