<template>
  <div class="navBar">
    <div class="navList">
      <el-button
      class="navItem"
      v-for="item in navCityList"
      :key="item.id"
      :class="item.id==activeIndex ? 'isActive' : ''"
      size="medium"
      @click.native="handleNavClick(item.id)"
      >
      {{item.cityName}}
      </el-button>
      <button class="moreCityBtn" @click="handleMoreCitybtn">更多+</button>
      <div class="moreCityList" v-show="this.moreCityShow">
        <span
        class="moreCityItem"
        v-for="item in navMoreCityList"
        :key="item.id"
        :class="item.id==activeIndex ? 'isActive' : ''"
        @click="handleNavClick(item.id)"
        >
        {{item.cityName}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NavBar',
  data () {
    return {
      navCityList: [],
      navCityCount: 13,
      navMoreCityList: [],
      activeIndex: 0,
      moreCityShow: false
    }
  },
  methods: {
    getInfo () {
      axios
        .get('mock/dataList.json')
        .then((res) => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.navCityList = data.navCityList.slice(0, this.navCityCount - 1)
            this.navMoreCityList = data.navCityList.slice(this.navCityCount)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    },
    handleNavClick (index) {
      this.activeIndex = index
      this.moreCityShow = false
    },
    handleMoreCitybtn () {
      this.moreCityShow = !this.moreCityShow
    }
  },
  created () {
    this.getInfo()
  }
}
</script>

<style lang="scss" scoped>
  .navBar {
    width: 100%;
    background-color: #242424;
    .navList {
      position: relative;
      display: flex;
      margin: 0 100px;
      justify-content: center;
      align-items: center;
      height: 50px;
      .navItem {
        margin: 0 6px;
        border: none;
        color: #fff;
        background-color: #242424;
        font-family: "微软雅黑", Arial, Helvetica, sans-serif;
        &.isActive {
        background-color: #e70084;
      }
        &:hover {
          background: #e70084;
        }
      }
      .moreCityBtn {
        color: #fde431;
        border: 1px solid #fde431;
        border-radius: 10px;
        background-color: #242424;
        padding: 2px 5px;
        cursor: pointer;
      }
      .moreCityList {
        position: absolute;
        z-index: 98;
        right: 40px;
        top: 60px;
        background-color: #fff;
        color: #000;
        &:before {
          content: "";
          position: absolute; //为什么要用absolute
          width: 0;
          height: 0;
          border-width: 4px 6px;
          border-style: dashed solid solid dashed;
          top: -8px;
          right: 20px;
          border-color: transparent #ffffff #ffffff transparent;
        }
        .moreCityItem {
          display: inline-block;
          position: relative;
          text-align: center;
          width: 40px;
          background-color: #fff;
          border: 2px solid #000;
          border-left: none;
          padding: 5px 10px;
          cursor: pointer;
            &.isActive, &:hover{
              background-color: #e70084;
              color: #fff;
            }
          &:first-child {
            border: 2px solid #000;
          }
        }
      }
    }
  }
</style>
