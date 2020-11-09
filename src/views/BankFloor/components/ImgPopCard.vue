<template>
    <div class="img-pop-card">
      <div
      class="card-block"
      v-for="(item, index) in cardBlockDataList"
      :key="index"
      :style="item.cardStyle"
      @click="handleImgLinkClick"
      >
        <img
        class="img-link"
        :src="item.imgUrl"
        >
        <div class="pop-mask" :class="{popHide: popBoxHidden}">
          <div class="pop-conent">
            <div class="pop-title">{{popBoxData.popTitle}}</div>
            <div class="pop-text" v-html="popBoxData.popText"></div>
            <img class="pop-close-icon" :src="popBoxData.closeIconUrl" @click.stop="handleCloseClick"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ImgPopCard',
  data () {
    return {
      popBoxHidden: true,
      cardBlockDataList: [{
        id: 0,
        cardStyle: {
          width: '248px',
          height: '47px',
          top: '253px',
          left: '190px'
        },
        imgUrl: 'https://m2.tuniucdn.com/fb2/t1/G7/M00/03/74/CkC9Y1-gznOIE4ArAABBdcf4_GoAAB13gMFJBgAAEGN00.jpeg'
      }, {
        id: 1,
        cardStyle: {
          width: '248px',
          height: '47px',
          top: '253px',
          left: '515px'
        },
        imgUrl: 'https://m2.tuniucdn.com/fb2/t1/G7/M00/03/74/CkC9Y1-gznOIE4ArAABBdcf4_GoAAB13gMFJBgAAEGN00.jpeg'
      }, {
        id: 2,
        cardStyle: {
          width: '248px',
          height: '47px',
          top: '253px',
          left: '840px'
        },
        imgUrl: 'https://m2.tuniucdn.com/fb2/t1/G7/M00/03/74/CkC9Y1-gznOIE4ArAABBdcf4_GoAAB13gMFJBgAAEGN00.jpeg'
      }, {
        id: 3,
        cardStyle: {
          width: '248px',
          height: '47px',
          top: '454px',
          left: '190px'
        },
        imgUrl: 'https://m2.tuniucdn.com/fb2/t1/G7/M00/03/74/CkC9Y1-gznOIE4ArAABBdcf4_GoAAB13gMFJBgAAEGN00.jpeg'
      }, {
        id: 4,
        cardStyle: {
          width: '248px',
          height: '47px',
          top: '454px',
          left: '515px'
        },
        imgUrl: 'https://m2.tuniucdn.com/fb2/t1/G7/M00/03/74/CkC9Y1-gznOIE4ArAABBdcf4_GoAAB13gMFJBgAAEGN00.jpeg'
      }, {
        id: 5,
        cardStyle: {
          width: '248px',
          height: '47px',
          top: '454px',
          left: '840px'
        },
        imgUrl: 'https://m2.tuniucdn.com/fb2/t1/G7/M00/03/74/CkC9Y1-gznOIE4ArAABBdcf4_GoAAB13gMFJBgAAEGN00.jpeg'
      }],
      popBoxData: {
        popTitle: '江苏建行龙支付优惠规则',
        popText: '江苏建行龙支付（周边自驾满500-100）：<br>江苏（除苏州）地区客户通过途牛APP领券后下单预订指定周边游产品，在预订页勾选优惠券并使用建行龙支付（限龙支付钱包余额、龙支付绑定的建行借、贷记卡支付）全额支付订单，可享满500元立减100元，每单最高优惠100元，每个途牛会员及每龙支付账户每月限享受一次优惠。<br>1）优惠资格以成功勾选活动并按照优惠价成功支付的先后顺序为准。<br>2）活动订单仅限在线支付全款，不支持线下门店刷卡或现金券或礼品卡支付。如订单发生退款或退货，仅退还持卡人实际支付的金额，不包含优惠立减金额。<br>3）活动名额有限，先到先得；名额如被抢完，所领取的优惠券将自动失效，不再另行通知。<br><br>江苏建行龙支付双十一爆款活动<br>活动时间：2020年11月15日10：00-购完即止<br>活动期间，江苏（除苏州）地区建行龙支付客户购买途牛指定爆款产品指定团期，领取优惠券后至途牛APP下单并在预订页勾选优惠券，提交订单后使用龙支付在线支付全额团款（不可门市支付、转账等，不可使用旅游券抵扣全额团款），可享受订单指定团期&amp;房型惊爆价（详见优惠券）的优惠（每单限2成人预订且享受优惠）。名额有限、订完即止，总名额消耗完毕则活动提前结束。勾选优惠后请在2小时内支付，逾期优惠失效需重新勾选。该活动不可与立减共享。<br><br>活动规则<br>1、本次活动仅适用于江苏建行龙支付客户，持卡人需在指定页面领取优惠券，预订指定活动产品方可勾选优惠，成功提交订单后，需至途牛app使用龙支付支付全额团款。<br>2、活动期间每个会员ID、每龙支付账户每月限参加该组爆款活动所有线路共计1次优惠；<br>3、该特价为指定房型及产品，若升级房型及产品产生额外费用则需出游人单独承担。<br>4、名额有限，以成功勾选活动并付款先后顺序为准，先付先得。如果在名额订满之前未能完成订单支付，则不可再享受优惠，已领取的优惠券也自动失效。<br>5、特价产品，一经预订不可退订，如不能出游建议您联系客服确认能否更换出游人。<br>6、对于以不正当方式参与活动的用户，包括但不限于参加资格、消费时间及奖励方式，暂停或取消本活动等，如有变更途牛将第一时间予以通知。<br>7、本次活动仅限成人参与，儿童同行不享受优惠政策（具体以产品线路“费用说明”中公布为准）。<br>江苏建行龙卡信用卡-国内/出境游满1000减100最高减600元/单<br>江苏建行龙卡信用卡-周边/自驾游满600减100最高减300<br>江苏（除苏州）建行信用卡用户在途牛旅游网领取优惠券并预订指定周边/自驾/国内/出境产品，在预订页勾选优惠，并使用江苏建行信用卡在PC或APP端通过分期快捷支付在线支付全额团款（不支持线下支付、首付出发、旅游券支付等）即可享受满减优惠。<br>单次支付金额低于500不可分期，分期手续费用户承担，费率为3期2.5%，6期3.5%，12期5%，24期为10%，手续费一次性支付，活动名额有限，先到先得。<br>勾选优惠后请在4小时内支付，逾期优惠失效需重新勾选。<br>本活动每会员ID/每卡限享1次优惠，可与途牛立减及其他优惠券叠加享受，不可与其他银行/金融券叠加，具体以实际使用时的提示为准。<br></div>',
        closeIconUrl: 'https://m.tuniucdn.com/fb2/t1/G2/M00/6B/9A/Cii-TljkiaaIJyDmAAAHl_OGz4wAAJAYQP_998AAAgh534.png'
      }
    }
  },
  methods: {
    handleImgLinkClick () {
      this.popBoxHidden = false
    },
    handleCloseClick () {
      this.popBoxHidden = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .img-pop-card {
    position: relative;
    height: 610px;
    .card-block {
      position: absolute;
      .pop-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,0.1);
      z-index: 999;
        &.popHide {
        display: none;
        }
        .pop-conent {
        position: relative;
        width: 700px;
        height: 500px;
        .pop-title {
        height: 70px;
        line-height: 70px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        background-color: #d31616;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        }
        .pop-text {
        width: 650px;
        height: 350px;
        padding: 25px;
        font-size: 16px;
        color: #464646;
        line-height: 1.8;
        overflow: auto;
        background-color: #fff;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        }
        .pop-close-icon {
        display: block;
        position: absolute;
        top: 15px;
        right: 20px;
        cursor: pointer;
        }
        }
      }
    }
  }

</style>
