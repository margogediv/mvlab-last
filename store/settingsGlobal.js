export default {
    namespaced: true,

    state: () => ({
        clientsObject: null,

        typeStructured: [],
        typeStructuredTable: [
            {
                id: 1,
                data: {
                    title: {
                        name1: 'Название Резерв1',
                    },
                    rows: []
                }
            },
            {
                id: 2,
                data: {
                    title: {
                        name1: 'Название Резерв1',
                        name2: 'Название Резерв2',
                    },
                    rows: []
                }
            },
            {
                id: 3,
                data: {
                    title: {
                        name1: 'Название Органищацмм',
                    },
                    rows: []
                }
            },
            {
                id: 4,
                data: {
                    title: {
                        name1: 'Название Предприятие',
                    },
                    rows: []
                }
            },
            {
                id: 5,
                data: {
                    title: {
                        name: 'Название Завод',
                        map: 'Местоположение',
                    },
                    rows: []
                }
            },
            {
                id: 6,
                data: {
                    title: {
                        name1: 'Название Цех',
                    },
                    rows: []
                }
            },
            {
                id: 7,
                data: {
                    title: {
                        name1: 'Название Узел',
                    },
                    rows: []
                }
            },
            {
                id: 8,
                data: {
                    title: {
                        name1: 'Название Датчик',
                    },
                    rows: []
                }
            },
        ]
    }),
    getters: {
        typeStructuredTable(state) {
            return state.typeStructuredTable;
        },
        clientsObject(state) {
            let clientsObject = state.clientsObject;
            if (!clientsObject)
                clientsObject = JSON.parse(localStorage.getItem('clientsObject'));

            if (!(clientsObject && state.typeStructured.length))
                return state.clientsObject;

            let newObj = JSON.parse(JSON.stringify(clientsObject));
            let newArr = [];
            clientsObject.currentStructureObject.forEach((id) => {
                try {
                    newArr.push(state.typeStructured.filter((item) => item.id === id)[0]);
                } catch (e) {
                    debugger
                }
            });

            newArr.push({
                id: state.typeStructured.length + 1,
                value: 'Переменные'
            });

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
        setTypeStructuredTable(state, option) {
            state.typeStructuredTable.filter((item => item.id === option.id))[0].data.rows.push(option.data);
        }
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

            localStorage.setItem('clientsObject', JSON.stringify(data));
            store.commit('setClientsObject', data);
        },
        delClientsObject(store) {
            localStorage.setItem('clientsObject',null);
            store.commit('setClientsObject', null);
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
        updateTypeStructuredTable(store, option) {
            store.commit('setTypeStructuredTable', option);
        }

    },
    strict: process.env.NODE_ENV !== 'production'
};
