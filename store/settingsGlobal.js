import de from "element-ui/src/locale/lang/de";

export default {
    namespaced: true,

    state: () => ({
        clientsObject: null,

        typeStructured: [],
        typeStructuredTable: [
            {
                id: 1,
                key: 'reserves1',
                table: {
                    name: 'Название Резерв1',
                },
            },
            {
                id: 2,
                key: 'reserves2',
                table: {
                    name: 'Название Резерв',
                    reserve1: 'Название Резерв2',
                },
            },
            {
                id: 3,
                key: 'organisations',
                table: {
                    name: 'Название Органищацмм',
                },
            },
            {
                id: 4,
                key: 'companies',
                table: {
                    name: 'Название Предприятие',
                },
            },
            {
                id: 5,
                key: 'factories',
                table: {
                    name: 'Название Завод',
                    map: 'Местоположение',
                },
            },
            {
                id: 6,
                key: 'workshops',
                table: {
                    name: 'Название Цех',
                    factory: 'Название Завода',
                    smena: 'Смены',
                    break: 'Перерывы',
                },
            },
            {
                id: 7,
                key: 'knots',
                table: {
                    name: 'Название Узел',
                },
            },
            {
                id: 8,
                key: 'sensors',
                table: {
                    name: 'Название Датчик',
                },
            },
            {
                id: 9,
                key: 'variables',
                table: {
                    name: 'Имя переменной',
                },
            },
        ],
        reserves1: [],
        reserves2: [],
        organisations: [
            {
                id: 1,
                name: 'Организация 1',
                reserv1_id: 1,
                reserv2_id: 1,
            },
            {
                id: 2,
                name: 'Организация 2',
                reserv1_id: 1,
                reserv2_id: 1,
            }
        ],
        companies: [
            {
                id: 1,
                name: 'Предприятие 1',
                reserv1_id: 1,
                reserv2_id: 1,
                organisation_id: 1,
            },
            {
                id: 2,
                name: 'Предприятие 2',
                reserv1_id: 1,
                reserv2_id: 1,
                organisation_id: 1,
            }
        ],
        factories: [
            {
                id: 1,
                name: 'Завод 1',
                reserv1_id: 1,
                reserv2_id: 1,
                organisation_id: 1,
                company_id: 1,
            },
            {
                id: 2,
                name: 'Завод 2',
                reserv1_id: 1,
                reserv2_id: 1,
                organisation_id: 1,
                company_id: 1,
            }
        ],
        workshops: [],
        knots: [
            {
                id: 1,
                name: 'Узел 1',
                reserv1_id: 1,
                reserv2_id: 1,
                organisation_id: 1,
                company_id: 1,
                factory_id: 1,
                workShop_id: 1,
            },
            {
                id: 2,
                name: 'Узел 2',
                reserv1_id: 1,
                reserv2_id: 1,
                organisation_id: 1,
                company_id: 1,
                factory_id: 1,
                workShop_id: 1,
            },
        ],
        sensors: [
            {
                id: 1,
                name: 'Датчик 1',
                reserv1_id: 1,
                reserv2_id: 1,
                organisation_id: 1,
                company_id: 1,
                factory_id: 1,
                knot_id: 1,
                workShop_id: 1,
            },
            {
                id: 2,
                name: 'Датчик 2',
                reserv1_id: 1,
                reserv2_id: 1,
                organisation_id: 1,
                company_id: 1,
                factory_id: 1,
                knot_id: 1,
                workShop_id: 1,
            }
        ],
        variables: [
            {
                id: 1,
                name: 'Переменная',
                reserv1_id: 1,
                reserv2_id: 1,
                organisation_id: 1,
                company_id: 1,
                factory_id: 1,
                knot_id: 1,
                workShop_id: 1,
            }
        ],
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
                id: 9,
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
        reserves1(state) {
            let reserves1 = state.reserves1;
            if (localStorage.getItem('reserves1'))
                reserves1 = JSON.parse(localStorage.getItem('reserves1'));

            return reserves1;
        },
        reserves2(state, getters) {
            let reserves2 = JSON.parse(JSON.stringify(state.reserves2));
            if (localStorage.getItem('reserves2'))
                reserves2 = JSON.parse(localStorage.getItem('reserves2'));

            return reserves2.map(item => {
                item.reserve1 = getters.reserves1.filter(i => i.id === item.reserv1_id)[0].name;
                return item;
            })
        },
        organisations(state) {
            return state.organisations;
        },
        companies(state) {
            return state.companies;
        },
        factories(state) {

            return state.factories;
        },
        workshops(state, getters) {
            let workshops = state.workshops;
            if (localStorage.getItem('workshops'))
                workshops = JSON.parse(localStorage.getItem('workshops'));

            let newObj = JSON.parse(JSON.stringify(workshops));
            let factories = JSON.parse(JSON.stringify(getters.factories));
            newObj.map((item) => {
                let breaks = [];
                let smenas = [];
                item.ranges.filter(item => item.is_active).forEach(el => {
                    smenas.push((el.start + '-' + el.end).replace(':','.'));
                    el.breaks.filter(e => e.is_active).forEach(b => breaks.push((b.start + '-' + b.end).replace(':','.')));
                });

                item.factory = factories.filter(i => i.id === item.factory_id)[0].name;
                item.smena = smenas.join(';');
                item.break = breaks.join(';');

                return item;
            });

            return newObj;
        },
        knots(state) {
            return state.knots;
        },
        sensors(state) {
            return state.sensors;
        },
        variables(state) {
            return state.variables;
        }
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
        },
        setReserve1(state, option) {
            let reserves1 = JSON.parse(localStorage.getItem('reserves1'));
            if (option.id && reserves1.filter(item => item.id === option.id).length)
                for(let key in reserves1.filter(item => item.id === option.id)[0])
                    reserves1.filter(item => item.id === option.id)[0][key] = option[key];
            else
                reserves1.push(option);

            state.reserves1 = reserves1;
        },
        setReserve2(state, option) {
            let reserves2 = JSON.parse(localStorage.getItem('reserves2'));
            if (option.id && reserves2.filter(item => item.id === option.id).length)
                for(let key in reserves2.filter(item => item.id === option.id)[0])
                    reserves2.filter(item => item.id === option.id)[0][key] = option[key];
            else
                reserves2.push(option);

            state.reserves2 = reserves2;
        },
        setWorkshop(state, option) {
            let workshops = JSON.parse(localStorage.getItem('workshops'));
            if (option.id && workshops.filter(item => item.id === option.id).length)
                for(let key in workshops.filter(item => item.id === option.id)[0])
                    workshops.filter(item => item.id === option.id)[0][key] = option[key];
            else
                workshops.push(option);

            state.workshops = workshops;
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
            localStorage.setItem('clientsObject', null);
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
        },
        updateReserve1(store, option) {
            let reserves1 = [];
            if (localStorage.getItem('reserves1'))
                reserves1 = JSON.parse(localStorage.getItem('reserves1'));
            else if (this.state.settingsGlobal.reserves1)
                reserves1 = JSON.parse(JSON.stringify(this.state.settingsGlobal.reserves1));

            if (option.id) {
                for(let key in reserves1.filter(item => item.id === option.id)[0])
                    reserves1.filter(item => item.id === option.id)[0][key] = option[key];
            } else {
                option.id = new Date().getTime();
                reserves1.push(option);
            }

            localStorage.setItem('reserves1', JSON.stringify(reserves1));
            store.commit('setReserve1', option);
        },
        updateReserve2(store, option) {
            let reserves2 = [];
            if (localStorage.getItem('reserves2'))
                reserves2 = JSON.parse(localStorage.getItem('reserves2'));
            else if (this.state.settingsGlobal.reserves2)
                reserves2 = JSON.parse(JSON.stringify(this.state.settingsGlobal.reserves2));

            if (option.id) {
                for(let key in reserves2.filter(item => item.id === option.id)[0])
                    reserves2.filter(item => item.id === option.id)[0][key] = option[key];
            } else {
                option.id = new Date().getTime();
                reserves2.push(option);
            }

            localStorage.setItem('reserves2', JSON.stringify(reserves2));
            store.commit('setReserve2', option);
        },
        updateWorkshop(store, option) {
            let workshops = [];
            if (localStorage.getItem('workshops'))
                workshops = JSON.parse(localStorage.getItem('workshops'));
            else if (this.state.settingsGlobal.workshops)
                workshops = JSON.parse(JSON.stringify(this.state.settingsGlobal.workshops));

            if (option.id) {
                for(let key in workshops.filter(item => item.id === option.id)[0])
                    workshops.filter(item => item.id === option.id)[0][key] = option[key];
            } else {
                option.id = new Date().getTime();
                workshops.push(option);
            }

            localStorage.setItem('workshops', JSON.stringify(workshops));
            store.commit('setWorkshop', option);
        }
    },
    strict: process.env.NODE_ENV !== 'production'
};
