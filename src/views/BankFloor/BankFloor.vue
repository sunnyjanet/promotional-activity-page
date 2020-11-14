<template>
  <div class="BankFloor">
    <div class="floor-content">
      <pop-box-card></pop-box-card>
      <pop-lottery-card></pop-lottery-card>
    </div>
  </div>
</template>

<script>
import PopBoxCard from './components/PopBoxCard'
import PopLotteryCard from './components/PopLotteryCard'
export default {
  name: 'BankFloor',
  components: {
    PopBoxCard,
    PopLotteryCard
  }
}
</script>

<style lang="scss" scoped>
  .BankFloor {
    position: relative;
    width: 1280px;
    overflow: hidden;
    background: url("https://m1.tuniucdn.com/fb2/t1/G7/M00/03/6F/CkC9r1-f0-CIa7Y7AASOhw25o2YAAB0-wPCbygABI6f69.jpeg") center top repeat-y;
    display: flex;
    justify-content: center;
    align-items: center;
    .floor-content {
      position: relative;
      width: 1280px;
      height: 610px;
    }
  }
</style>
