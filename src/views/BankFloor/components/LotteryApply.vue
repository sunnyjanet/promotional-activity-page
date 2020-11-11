<template>
  <div class="lottery-apply" v-if="!showLotteryList">
    <input
      type="text"
      v-model="telInput"
      class="lottery-tel"
      placeholder="输入手机号码"
    />
    <input
      type="text"
      v-model="checkCodeInput"
      class="lottery-check-code"
      placeholder="输入验证码"
    />
    <div
      class="lottery-get-check"
      :class="{ sendingClass: isSending }"
      @click.stop="handleSendingClick"
    >
      <span v-if="isSending">{{ totalTime | transfromTime }}</span>
      <span v-else>发送验证码</span>
    </div>
    <div class="lottery-submit" @click.stop="handleSubmitClick">
      立即<br />领取
    </div>
    <img
      class="lottery-close-icon"
      src="https://m.tuniucdn.com/fb2/t1/G1/M00/CF/E2/Cii9EFjsTVqIfK1oAAAHBq3zLhkAAJZtwP_-NsAAAcl085.png"
      @click.stop="handleCloseClick"
    />
  </div>
</template>

<script>
export default {
  name: 'LotteryApply',
  data () {
    return {
      telInput: '', // 输入的手机号
      checkCodeInput: '', // 输入的验证码
      totalTime: 60, // 默认的倒计时总时间
      isSending: false, // 是否在发送验证码
      sendingTimer: null, // 发送验证码的60秒计时器
      sentCodeCounts: [
        {
          tel: '15805199000',
          counts: '2'
        },
        {
          tel: '15805199022',
          counts: '3'
        },
        {
          tel: '15805199055',
          counts: '4'
        }
      ]
    }
  },
  methods: {
    sendCheck () {
      /* 此处代码：通过dispatch异步操作，将telInput（手机号）传给后端接口，后端发送验证码 */
      // 下方代码为实现60s倒计时
      this.isSending = true
      this.sendingTimer = setInterval(() => {
        this.totalTime--
        if (this.totalTime <= 0) {
          clearInterval(this.sendingTimer)
          this.isSending = false
          this.totalTime = 60
        }
      }, 1000)
    },
    handleSendingClick () {
      if (this.isSending === true) {
        return
      }
      const telReg = /^[1]([3-9])[0-9]{9}$/
      if (!telReg.test(this.telInput)) {
        this.$message({
          message: '请输入有效的11位手机号',
          offset: 200,
          customClass: 'message-box-custom',
          center: 'true'
        })
      } else {
        // 用data里的sentCodeCounts，模拟后端的手机号已发验证码的相关信息
        const matchedTelObj = this.sentCodeCounts.filter(
          (telObject) => telObject.tel === this.telInput
        )
        const matchedTelIndex = this.sentCodeCounts.findIndex(
          (telObject) => telObject.tel === this.telInput
        )
        if (matchedTelObj.length === 0) {
          this.sendCheck()
          this.sentCodeCounts.splice({ tel: this.telInput, counts: 1 })
        } else if (matchedTelObj[0].counts < 3) {
          this.sendCheck()
          this.sentCodeCounts[matchedTelIndex].counts++
        } else {
          this.$message({
            message: '每天最多发送3次验证码',
            offset: 200,
            customClass: 'message-box-custom',
            center: 'true'
          })
        }
      }
    },
    handleCloseClick () {
      this.$emit('handleCloseClick')
    },
    handleSubmitClick () {
      // 传字段给后端，后端将优惠活动绑定到用户名下，优惠领取完成！
      // 下面用写死的666作为弹出lottery-list，通知客户优惠已领取。
      if (this.checkCodeInput === '666') {
        this.$emit('showLotteryList')
      } else {
        this.$message({
          message: '验证码错误',
          offset: 200,
          customClass: 'message-box-custom',
          center: 'true'
        })
      }
    }
  },
  filters: {
    transfromTime (value) {
      return `${value}秒后重发`
    }
  }
}
</script>

<style lang="scss">
.el-message.message-box-custom {
  width: 400px;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-width: 0;
  font-size: 20px;
  & .el-icon-info {
    color: #fff;
  }
  & .el-message__content {
    font-size: 20px;
    color: #fff;
  }
}
</style>

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
    .lottery-apply {
      position: relative;
      width: 700px;
      height: 506px;
      background: url("https://m.tuniucdn.com/fb2/t1/G2/M00/74/D8/Cii-T1jsVWeICHxAAABiW6_FWpMAAJIMwJcylYAAGJz991.png")
        no-repeat;
      font-family: "微软雅黑", Arial, Helvetica, sans-serif;
      .lottery-tel {
        position: absolute;
        width: 430px;
        height: 70px;
        background: #fff;
        border-radius: 3px;
        top: 280px;
        left: 40px;
        font-size: 22px;
        text-align: center;
      }
      .lottery-check-code {
        position: absolute;
        width: 200px;
        height: 70px;
        background: #fff;
        border-radius: 3px;
        top: 370px;
        left: 40px;
        font-size: 22px;
        text-align: center;
      }
      .lottery-get-check {
        position: absolute;
        width: 210px;
        height: 70px;
        line-height: 70px;
        background: #ffd925;
        border-radius: 70px;
        top: 370px;
        left: 260px;
        color: #ff404e;
        font-size: 22px;
        text-align: center;
        &.sendingClass {
          background: #333;
          color: #fff;
        }
      }
      .lottery-submit {
        position: absolute;
        width: 120px;
        height: 120px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #d31616;
        border-radius: 10px;
        top: 280px;
        right: 34px;
        color: #fff;
        font-size: 44px;
        font-weight: 700;
      }
      .lottery-close-icon {
        position: absolute;
        top: 100px;
        right: 0;
      }
    }
  }
  .hide {
    display: none;
  }
}
</style>
