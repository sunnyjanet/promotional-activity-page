<template>
  <div class="BankFloor">
    <div class="img-type-card">
      <div
      class="card-block"
      v-for="(item, index) in dataList"
      :key="index"
      :style="item.cardStyle"
      @click="handleClick"
      >
        <img
        class="img-link"
        :src="item.imgUrl"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankFloor',
  data () {
    return {
      dataList: [{
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
      }]
    }
  },
  methods: {
    handleClick () {
      console.log('测试分支')
    }
  }
}
</script>

<style lang="scss" scoped>
  .BankFloor {
    position: relative;
    height: 610px;
    background: url("https://m1.tuniucdn.com/fb2/t1/G7/M00/03/6F/CkC9r1-f0-CIa7Y7AASOhw25o2YAAB0-wPCbygABI6f69.jpeg") center top repeat-y;
    .img-type-card {
      position: relative;
      .card-block {
        position: absolute;
      }
    }
  }
</style>
