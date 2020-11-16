export default {
  changeActiveNavIndex (state, CityObj) {
    state.activeCityObj = CityObj
    console.log('已执行commit，state中的activeCityObj.id为', state.activeCityObj.id)
  },
  getAllProducts (state, allProductsArr) {
    state.allProductsArr = allProductsArr
    console.log('已dispatch执行action，获得的产品列表为', state.allProductsArr)
  }
}
