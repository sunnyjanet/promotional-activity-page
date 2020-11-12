<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="bannerImgWrapper">
      <img class="bannerImg" src="https://m.tuniucdn.com/fb2/t1/G7/M00/03/59/CkC9r1-be42IMu5GAAQFSpr162wAABxuAEKP1YABAVi81.jpeg"/>
    </div>
    <bank-floor></bank-floor>
    <product-floor-one></product-floor-one>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar/NavBar'
import BankFloor from '@/views/BankFloor/BankFloor'
import ProductFloorOne from '@/views/ProductFloorOne/ProductFloorOne'
export default {
  name: 'Home',
  components: {
    NavBar,
    BankFloor,
    ProductFloorOne
  }
}
</script>

<style lang="scss" scoped>
  .home {
    min-width: 1280px;
    position: relative;
    min-height: 90vh;
    .bannerImgWrapper {
      display: flex;
      justify-content: center;
      overflow: hidden;
    }
  }
</style>
