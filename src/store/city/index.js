export default {
  state: {
    nm: localStorage.getItem('nowNm') || '北京',
    id: localStorage.getItem('nowId') || 1
  },
  mutations: {
    CITY_INFO (state, payLoad) {
      state.nm = payLoad.nm
      state.id = payLoad.id
    }
  },
  actions: {
  }
}
