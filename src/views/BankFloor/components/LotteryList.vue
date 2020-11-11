<template>
  <div class="lottery-list">
    <div class="lottery-list-title">
      <span v-if="!lotteryGottenBefore">领取成功</span>
      <span v-else>您已领取</span>
    </div>
    <img class="lottery-list-close" @click.stop="handleClose" src="https://m.tuniucdn.com/fb2/t1/G1/M00/CF/E2/Cii9EFjsTVqIfK1oAAAHBq3zLhkAAJZtwP_-NsAAAcl085.png" />
    <div class="lottery-list-content">
      <div class="lottery-item" v-for="(item, index) of lotteryListData" :key="index">
        <div class="discount-money">{{item.discountMoney}}</div>
        <div class="lottery-name">{{item.lotteryName}}}</div>
      </div>
    </div>
    <div class="lottery-list-tip">请到我的钱包-优惠券查看券使用规则</div>
    <div class="lottery-use" @click.stop="handleClose" >立即使用</div>
  </div>
</template>

<script>
export default {
  name: 'LotteryList',
  props: {
    lotteryGottenBefore: Boolean
  },
  data () {
    return {
      lotteryListData: [{
        discountMoney: '￥1000',
        lotteryName: '邮储江苏分行信用卡分期立减满5000减500最高减1000元/单'
      }, {
        discountMoney: '￥600',
        lotteryName: '广发信用卡国内指定旅游产品满5000-600'
      }, {
        discountMoney: '￥800',
        lotteryName: '广发信用卡国内指定旅游产品满5000-600'
      }, {
        discountMoney: '￥500',
        lotteryName: '广发信用卡国内指定旅游产品满5000-600'
      }]
    }
  },
  methods: {
    handleClose () {
      this.$emit('clickClose')
    }
  }
}
</script>

<style lang="scss" scoped>
  .lottery-list {
    position: relative;
    width: 700px;
    height: 562px;
    background: url(https://m.tuniucdn.com/fb2/t1/G2/M00/6B/F5/Cii-T1jkquaIM9JfAABRJR0gk4kAAJAvAP7r4QAAFE9058.png) no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 55px 20px 5px;
    .lottery-list-title {
      font-size: 50px;
      color: #d31616;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .lottery-list-close {
      position: absolute;
      top: 70px;
      right: 66px;
    }
    .lottery-list-content {
      width: 612px;
      height: 227px;
      overflow: auto;
      margin-bottom: 10px;
      .lottery-item {
        width: 612px;
        height: 62px;
        background: url(https://m.tuniucdn.com/fb2/t1/G2/M00/74/75/Cii-T1jsRRKIKnQGAAALUYufwfsAAJHwwP_9I0AAAtz513.png) no-repeat;
        margin-top: 7px;
        display: flex;
        justify-content: center;
        .discount-money {
          color: #fffd54;
          font-size: 42px;
          display: flex;
          align-items: center;
        }
        .lottery-name {
          width: 352px;
          font-size: 23px;
          display: flex;
          align-items: center;
          margin-left: 42px;
          color: #fff;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
    .lottery-list-tip {
      width: 700px;
      color: #fff;
      text-align: center;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .lottery-use {
      width: 199px;
      height: 54px;
      background: url(https://m.tuniucdn.com/fb2/t1/G2/M00/74/4E/Cii-TljsRRKII9gPAAAI1KcdKX4AAJHmAP_9v4AAAkC634.png) no-repeat;
      color: #fff;
      text-align: center;
      line-height: 54px;
      font-size: 24px;
    }
  }
</style>
