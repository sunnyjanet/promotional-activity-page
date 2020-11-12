<template>
  <div class="ProductFloorOne">
    <div class="floor-content">
      <product-card></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from './components/ProductCard'
export default {
  name: 'ProductFloorOne',
  components: {
    ProductCard
  }
}
</script>

<style lang="scss" scoped>
  .ProductFloorOne {
    position: relative;
    background: url(https://m.tuniucdn.com/fb2/t1/G7/M00/03/59/CkC9r1-bf96IHWcLAAD_aaHuTO4AABxvAEi2nAAAP-B20.jpeg) center top repeat-y;
    display: flex;
    justify-content: center;
    align-items: center;
    .floor-content {
      position: relative;
      width: 1280px;
      height: 694px;
    }
  }
</style>
