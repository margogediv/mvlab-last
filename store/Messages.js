export default {
  namespaced: true,

  state: () => ({
    currentDevMessages: [],
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

      let data = await this.$axios.$get('/api/error_net/');
      store.commit('updateCurrentDevMessages', data.currentDevMessages);
    },
    async getCurrentMessages(store, payload) {
      let data = await this.$axios.$get('/api/current_messages/');
      store.commit('updateCurrentMessages', data.currentMessages);
    },
  },

  strict: process.env.NODE_ENV !== 'production'
};
