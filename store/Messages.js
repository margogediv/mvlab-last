export default {
  namespaced: true,

  state: () => ({
    currentDevMessages: [],
    currentMessages: [],
    currentAlert: [
      {
        msg: "DANGER!!!",
        status: "dng"
      },
      {
        msg: "ALL ok",
        status: "ok"
      },
      {
        msg: "ALERT!!!",
        status: "alert"
      }
    ]

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
    updateCurrentAlert(state, payload) {
      state.currentAlert = payload;
    },
  },
  actions: {
    async getCurrentDevMessages(store, payload) {

      let data = await this.$axios.$get('http://185.6.25.155/api/error_net/');
      store.commit('updateCurrentDevMessages', data.currentDevMessages);
    },
    async getCurrentMessages(store, payload) {
      let data = await this.$axios.$get('http://ast.devzsg.net/api/messages/get-current-messages/');
      store.commit('updateCurrentMessages', data.currentMessages);
    },
    async getCurrentAlert(store, payload) {

      let data = await this.$axios.$get('http://ast.devzsg.net/api/messages/get-current-alert/');
      store.commit('updateCurrentAlert', data.currentAlert);
    },
  },

  strict: process.env.NODE_ENV !== 'production'
};
