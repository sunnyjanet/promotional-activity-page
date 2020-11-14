let defaultActiveIndex = '0'
try {
  if (localStorage.activeMenuIndex) {
    defaultActiveIndex = localStorage.activeMenuIndex
  }
} catch (e) {
  console.error('使用localstorage出错', e)
}

export default {
  activeMenuIndex: defaultActiveIndex
}
