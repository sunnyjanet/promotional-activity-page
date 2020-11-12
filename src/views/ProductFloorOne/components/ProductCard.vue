<template>
  <div class="ProductCard">
    <div class="product-img-wrapper">
      <img class="product-img" src="https://m.tuniucdn.com/fb2/t1/G5/M00/3F/F6/Cii-tFpfCEWIYRSZAAZS2BLaaeUAACfRAGWEhEABlLw953_w450_h300_c1_t0.jpg"/>
      <div class="chufa">
        <span>全国出发 | 跟团游</span>
      </div>
      <div class="prod-info">
        <div class="prod-name">西安-芙蓉园-明城墙-大唐不夜城半自助3日游</div>
        <div class="prod-intro">一场说走就走的美食之旅+聆听城墙上的故事+走一走大唐皇家园林+24小时接送/五星住宿/2人起订/6人小团</div>
      </div>
    </div>
    <div class="product-price">
      ￥<span>999</span>起
    </div>
    <div class="buy-icon"></div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style lang="scss" scoped>
  .ProductCard {
    position: relative;
    width: 240px;
    height: 240px;
    background: #fff;
    border-radius: 5px;
    .product-img-wrapper {
      position: relative;
      width: 240px;
      height: 181px;
      .product-img {
        width: 100%;
        height: 100%;
      }
      .chufa {
        position: absolute;
        top: 6px;
        right: 4px;
        border-radius: 20px;
        width: 117px;
        height: 22px;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        overflow: hidden;
      }
      .prod-info {
        position: absolute;
        width: 228px;
        height: 46px;
        background: rgba(0, 0, 0, 0.6);
        bottom: 0;
        left: 0;
        padding: 0 8px;
        .prod-name {
          height: 23px;
          line-height: 23px;
          font-size: 16px;
          color: #fff;
          overflow: hidden;
        }
        .prod-intro {
          height: 20px;
          line-height: 20px;
          font-size: 13px;
          color: #fff;
          overflow: hidden;
        }
      }
    }
    .product-price{
      font-size: 16px;
      color: #434343;
      position: absolute;
      bottom: 13px;
      left: 5px;
      height: 30px;
      & span {
        font-size: 30px;
        color: #fc3b35;
      }
    }
    .buy-icon {
      position: absolute;
      bottom: 13px;
      right: 5px;
      width: 106px;
      height: 30px;
      background: url(http://m.tuniucdn.com/fb2/t1/G2/M00/07/E7/Cii-TFgsHTGIBpAjAAAPAMYAjNEAAEdQwNOR5wAAA8Y398.png) no-repeat center;
    }
  }
</style>
