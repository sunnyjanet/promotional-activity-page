<template>
  <div class="BankFloor">
    <img-pop-card></img-pop-card>
  </div>
</template>

<script>
import ImgPopCard from './components/ImgPopCard'
export default {
  name: 'BankFloor',
  components: {
    ImgPopCard
  }
}
</script>

<style lang="scss" scoped>
  .BankFloor {
    position: relative;
    background: url("https://m1.tuniucdn.com/fb2/t1/G7/M00/03/6F/CkC9r1-f0-CIa7Y7AASOhw25o2YAAB0-wPCbygABI6f69.jpeg") center top repeat-y;
  }
</style>
