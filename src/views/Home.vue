<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="bannerImgWrapper">
      <img
        class="bannerImg"
        src="https://m.tuniucdn.com/fb2/t1/G7/M00/03/59/CkC9r1-be42IMu5GAAQFSpr162wAABxuAEKP1YABAVi81.jpeg"
      />
    </div>
    <bank-floor></bank-floor>
    <div
      class="tab-wrapper"
      v-for="(item, index) in allProductsArr"
      :key="index"
    >
      <product-floor-one
        :tabsDataList="item.tabs"
        :floorStyle="item.floorStyle"
        :floorContentStyle="item.floorContentStyle"
        :tabsWrapperStyle="item.tabsWrapperStyle"
        :floorTitleStyle="item.floorTitleStyle"
        :floorTitleImg="item.floorTitleImg"
      ></product-floor-one>
    </div>
  </div>
</template>

<script>
import NavBar from '@/views/NavBar/NavBar'
import BankFloor from '@/views/BankFloor/BankFloor'
import ProductFloorOne from '@/views/ProductFloorOne/ProductFloorOne'
import axios from 'axios'
export default {
  name: 'Home',
  computed: {
    allProductsArr () {
      return this.$store.state.allProductsArr
    }
  },
  components: {
    NavBar,
    BankFloor,
    ProductFloorOne
  },
  methods: {
    getDefaultCity () {
      axios
        .post('http://localhost:3001/get-default-city')
        .then((res) => {
          this.$store.commit('changeActiveNavIndex', res.data)
          this.$store.dispatch('getAllProductsById')
        })
    }
  },
  created () {
    this.getDefaultCity()
  }
}
</script>

<style lang="scss" scoped>
.home {
  min-width: 1280px;
  position: relative;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .bannerImgWrapper {
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 1280px;
  }
}
</style>
