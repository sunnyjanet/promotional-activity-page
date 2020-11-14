export default {
  switchBlogIndex (state, clickedBlogId) {
    state.clickedBlogIndex = clickedBlogId
  },
  switchActiveMenuIndex (state, clickedMenuIndex) {
    state.activeMenuIndex = clickedMenuIndex.toString()
    try {
      localStorage.activeMenuIndex = clickedMenuIndex.toString()
    } catch (e) {
      console.error('使用localstorage出错', e)
    }
  }
}
