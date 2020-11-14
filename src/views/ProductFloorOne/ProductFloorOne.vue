<template>
  <div class="ProductFloorOne" :style="floorStyle">
    <div class="floor-content" :style="floorContentStyle">
      <div class="floor-title" :style="floorTitleStyle">
        <img :src="floorTitleImg">
      </div>
      <div
        class="tabs-wrapper"
        :style="tabsWrapperStyle"
        v-if="tabsDataList.length > 1"
      >
        <div
          class="tab"
          v-for="(item, index) of tabsDataList"
          :key="index"
          @click.stop="handleTabActive(index)"
          @mouseover.stop="handleTabActive(index)"
        >
          <img v-if="activeTabIndex === index" :src="item.tabClickedImg" />
          <img v-else :src="item.tabDeafultImg" />
        </div>
      </div>
      <div class="products-wrapper">
        <product-card
          v-for="(item, index) of tabsDataList[activeTabIndex].tabProduct"
          :prodData="item"
          :key="index"
          class="product-card"
        ></product-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/views/ProductCard/ProductCard'
export default {
  name: 'ProductFloorOne',
  components: {
    ProductCard
  },
  props: {
    tabsDataList: {
      // 表示单个楼层所有的tab的数据 海南 东北
      type: Array,
      default () {
        return []
      }
    },
    floorStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    floorContentStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    floorTitleStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    tabsWrapperStyle: {
      type: Object,
      default () {
        return {}
      }
    },
    floorTitleImg: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      activeTabIndex: 0
    }
  },
  methods: {
    handleTabActive (index) {
      this.activeTabIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.activeTabBg {
  height: 50%;
  width: 100%;
}
.products-wrapper {
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: left;
  width: inherit;
  height: inherit;
  .product-card {
    margin: 0 2px;
    cursor: pointer;
  }
}
</style>
