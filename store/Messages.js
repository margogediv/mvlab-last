export default {
  namespaced: true,

  state: () => ({
    currentDevMessages: [
      {
        id: 1,
        device: "Устройство 1",
        driver: "S7 TCP 192.168.34.23:102",
        connect: "conn = Stetum_324,var = FD1_real_324",
        msg: "S7 TCP 192.168.34.23:102",
        status: "ok",
      },
      {
        id: 2,
        device: "Устройство 2",
        driver: "S7 TCP 192.168.34.23:101",
        connect: "conn = Stetum_325, var = FD1_real_325",
        msg: "S7 TCP 192.168.34.21:102",
        status: "ok",
      }
    ],
    currentMessages: [],
    currentAlert: null,

  }),
  getters: {
    currentDevMessages(state) {
      return state.currentDevMessages;
    },
    currentMessages(state) {
      return state.currentMessages;
    },
    currentAlert(state) {
      return state.currentAlert;
    },

  },
  mutations: {
    updateCurrentDevMessages(state, payload) {
      state.currentDevMessages = payload;
    },
    updateCurrentMessages(state, payload) {
      state.currentMessages = payload;
    },
  },
  actions: {
    async getCurrentDevMessages(store, payload) {

      // let data = await this.$axios.$get('/api/error_net/');
      // store.commit('updateCurrentDevMessages', data.currentDevMessages);
    },
    async getCurrentMessages(store, payload) {
      // let data = await this.$axios.$get('/api/current_messages/');
      // store.commit('updateCurrentMessages', data.currentMessages);
    },
  },

  strict: process.env.NODE_ENV !== 'production'
};
