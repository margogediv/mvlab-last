
export default {
  namespaced: true,

  state: () => ({
    curentUser: {
      name: "Иван Иванович",
      special: "нач. цеха",
      access: true,
      accessLevel: "завод",
      company: "ООО 'Рога и Копыта'"
    },
    currentTabHeader: "",
    currentTabSidebar:"",

  }),
  getters: {
    curentUser(state) {
      return state.curentUser;
    },
    currentTabHeader(state) {
      return state.currentTabHeader;
    },
    currentTabSidebar(state) {
      return state.currentTabSidebar;
    },

  },
  mutations: {
    setActiveTabHeader(state, point) {
      state.currentTabHeader = point;
    },
    setActiveTabSidebar(state, point) {
      state.currentTabSidebar = point;
    },


  },
  actions: {
    setActiveTabHeader(store, point) {
      store.commit('setActiveTabHeader', point);
    },
    setActiveTabSidebar(store, point) {
      store.commit('setActiveTabSidebar', point);
    },

  },
  strict: process.env.NODE_ENV !== 'production'
};
