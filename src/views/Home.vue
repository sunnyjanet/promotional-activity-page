<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="bannerImgWrapper">
      <img class="bannerImg" src="https://m.tuniucdn.com/fb2/t1/G7/M00/03/59/CkC9r1-be42IMu5GAAQFSpr162wAABxuAEKP1YABAVi81.jpeg"/>
    </div>
    <bank-floor></bank-floor>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar/NavBar'
import BankFloor from '@/views/BankFloor/BankFloor'
export default {
  name: 'Home',
  components: {
    NavBar,
    BankFloor
  }
}
</script>

<style lang="scss" scoped>
  .home {
    min-width: 1280px;
    position: relative;
    overflow: hidden;
    min-height: 90vh;
    .bannerImgWrapper {
      display: flex;
      justify-content: center;
    }
  }
</style>
