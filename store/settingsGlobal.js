
export default {
    namespaced: true,

    state: () => ({

        clientsObject: null,

        // clientsObject: {
        //     name_object: 'TestName1',
        //     customer: 'test',
        //     contact: "test2",
        //     created_at: '12/12/12',
        //     updated_at: '11/11/11',
        // },

        typeStructured: [
            "Резерв1",
            "Резерв2",
            "Организация",
            "Предприятние",
            "Завод",
            "Цех",
            "Узел",
            "Датчик",
        ],
        currentStructureObject: null,
    }),
    getters: {
        clientsObject(state) {
            return state.clientsObject;
        },
        typeStructured(state) {
            return state.typeStructured;
        },
        currentStructureObject(state) {
            return state.currentStructureObject;
        },
    },
    mutations: {
        setClientsObject(state, data) {
            state.clientsObject = data;
        },
        setЕypeStructured(state, data) {
            state.typeStructured = data;
        },
        setCurrentStructureObject(state, currentData) {
            state.currentStructureObject[currentData.key] = currentData[currentData.key];
        },

    },
    actions: {
        updateCurrentStructureObject(store, currentData) {
            store.commit('setCurrentStructureObject', currentData);
        },
    },
    strict: process.env.NODE_ENV !== 'production'
};
