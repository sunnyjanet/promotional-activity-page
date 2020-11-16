import axios from 'axios'
import qs from 'qs'

export default {
  getAllProductsById ({ commit, state }) {
    axios
      .post(
        'http://localhost:3001/get-long-list-by-city',
        qs.stringify(state.activeCityObj)
      )
      .then((res) => {
        const allProductsArr = res.data.floorData || []
        commit('getAllProducts', allProductsArr)
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
