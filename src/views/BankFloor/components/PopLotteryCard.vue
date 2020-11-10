<template>
  <div class="pop-lottery-card">
    <div
      class="card-block"
      v-for="(item, index) in cardBlockDataList"
      :key="index"
      :style="item.cardStyle"
      @click="handleImgLinkClick"
    >
      <img class="img-link" :src="item.imgUrl" />
      <div class="lottery-mask" :class="{ hide: isHide }">
        <div class="lottery-apply">
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
            @click.stop="handleSubmitClick"
          >
            <span v-if="isSending">{{ totalTime | transfromTime }}</span>
            <span v-else>发送验证码</span>
          </div>
          <div class="lottery-submit">立即<br />领取</div>
          >
          <img
            class="lottery-close-icon"
            src="https://m.tuniucdn.com/fb2/t1/G1/M00/CF/E2/Cii9EFjsTVqIfK1oAAAHBq3zLhkAAJZtwP_-NsAAAcl085.png"
          />
        </div>
        <!-- <div class="lottery-list">
              大礼包列表
            </div>
            <div class="lottery-error">
              领取失败
            </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopLotteryCard',
  data () {
    return {
      telInput: '',
      checkCodeInput: '',
      totalTime: 60, // 默认的倒计时总时间
      isHide: true,
      isSending: false,
      sendingTimer: null, // 发送验证码的60秒计时器
      cardBlockDataList: [
        {
          id: 0,
          cardStyle: {
            width: '342px',
            height: '68px',
            top: '521px',
            left: '462px'
          },
          imgUrl:
            'https://m3.tuniucdn.com/fb2/t1/G6/M00/25/27/Cii-U18G5VOIDa9NAAAE3JsBymEAAERMQP_-aYAAAT0241.png'
        }
      ]
    }
  },
  methods: {
    handleImgLinkClick () {
      this.isHide = false
    },
    handleSubmitClick () {
      const telReg = /^[1]([3-9])[0-9]{9}$/
      if (!telReg.test(this.telInput)) {
        this.$message({
          message: '请输入有效的11位手机号',
          offset: 200,
          customClass: 'message-box-custom',
          center: 'true'
        })
      } else {
        // 此处应dispatch异步操作，将telInput（手机号）传给后端接口，省略。
        // 下面直接编写60s倒计时效果的代码
        this.isSending = true
        this.sendingTimer = setInterval(() => {
          this.totalTime--
          if (this.totalTime <= 0) {
            clearInterval(this.sendingTimer)
            this.isSending = false
          }
        }, 1000)
        // 并获得发给客户的验证码，下方用写死的验证码模拟验证操作
      }
    }
  },
  filters: {
    transfromTime (value) {
      return `${value}秒`
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
    }
  }
  .hide {
    display: none;
  }
}
</style>
