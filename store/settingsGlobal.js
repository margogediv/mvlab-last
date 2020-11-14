export default {
    namespaced: true,

    state: () => ({
        clientsObject: null,

        typeStructured: [],
    }),
    getters: {
        clientsObject(state) {
            if(!(state.clientsObject && state.typeStructured.length))
                return state.clientsObject;

            let newObj = JSON.parse(JSON.stringify(state.clientsObject));
            let newArr = [];
            newObj.currentStructureObject.forEach((id) => {
                try {
                    newArr.push(state.typeStructured.filter((item) => item.id === id)[0].value);
                } catch (e) {
                    debugger
                }
            });

            newArr.push('Переменные');

            newObj.currentStructureObject = newArr;
            return newObj;
        },
        typeStructured(state) {
            let array = [];
            array.push({
                id: 0,
                text: "Выбор типа узла",
                value: "",
                disabled: true,
            });

            state.typeStructured.forEach((item) => {
                array.push({
                    id: item.id,
                    text: item.value,
                    value: item.value,
                    disabled: false,
                });
            });

            return array;
        },
    },
    mutations: {
        setClientsObject(state, data) {
            state.clientsObject = data;
        },
        setTypeStructured(state, data) {
            state.typeStructured = data;
        },

    },
    actions: {
        updateClientsObject(store, option) {
            let data = {
                    name_object: option.currentProject.projectName,
                    customer: option.currentProject.clientName,
                    contact: option.currentProject.clientContract,
                    currentStructureObject: option.currentStructureObject,
                    created_at: '14-11-20',
                    updated_at: '14-11-20',
                }

            store.commit('setClientsObject', data);
        },
        getTypeStructured(store) {
            let data = [
                {id: 1, value: "Резерв1"},
                {id: 2, value: "Резерв2"},
                {id: 3, value: "Организация"},
                {id: 4, value: "Предприятие"},
                {id: 5, value: "Завод"},
                {id: 6, value: "Цех"},
                {id: 7, value: "Узел"},
                {id: 8, value: "Датчик"},
            ];
            store.commit('setTypeStructured', data);
        },
    },
    strict: process.env.NODE_ENV !== 'production'
};
