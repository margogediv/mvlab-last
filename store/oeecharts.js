const date = new Date();
import Highcharts from "highcharts";
export default {
    namespaced: true,

    state: () => ({

        factories: [
            {name: "Завод нефтепродуктов г. Мозырь", factoryid: "20"},
            {name: "Завод нефтепродуктов г. Гомель", factoryid: "10"},
            {name: "Завод нефтепродуктов г. Полоцк", factoryid: "30"},
        ],

        selectedfactory: {},

        shops: [
            {name: "Цех ковки тяжелых конструкций и древесины г. Гомель", shopid: "2", factoryid: "10"},
            {name: "Цех ковки тяжелых конструкций и древесины г. Мозырь", shopid: "4", factoryid: "20"},
            {name: "Цех ковки тяжелых конструкций и древесины г. Полоцк", shopid: "6", factoryid: "30"},
            {name: "Цех отлива тяжелых конструкций и древесины г. Гомель", shopid: "8", factoryid: "10"},
            {name: "Цех отлива тяжелых конструкций и древесины г. Мозырь", shopid: "3", factoryid: "20"},
            {name: "Цех отлива тяжелых конструкций и древесины г. Полоцк", shopid: "5", factoryid: "30"},

        ],
        selectedshops: [],

        activeshop: {name: "Цех ковки тяжелых конструкций и древесины г. Гомель", shopid: "2", factoryid: "10"},

        showCharts: [],

        selectChart: 0,

        arrPoint: [],

        basicData: [],

        basicOptions: {},

        reason: [],

        timeStatus: {
            all: 0,
            idle: 0,
            crash: 0,
            off: 0,
            working: 0,
        },

        loader: false,

    }),

    getters: {
        loader(state) {
            return state.loader;
        },
        factories(state) {
            return state.factories;
        },

        selectedfactory(state) {
            return state.selectedfactory;
        },

        shops(state) {
            return state.shops;
        },

        selectedshops(state) {
            return state.selectedshops;
        },
        activeshop(state) {
            return state.activeshop;
        },

        showCharts(state) {
            return state.showCharts;
        },

        selectChart(state) {
            return state.selectChart;
        },

        arrPoint(state) {
            return state.arrPoint;
        },

        currentArrPoint(state) {
            let arr = state.arrPoint.filter(item => item.machineid === state.selectChart);
            return arr;
        },
        lengthArrPoint(state, idx) {
            let arr = state.arrPoint.filter(item => item.machineid === state.selectChart);
            return arr.length;
        },

        basicData(state) {
            let arrayData = [];

            if (!state.basicData.length)
                return arrayData;

            arrayData = state.basicData.map((x) => x);
            arrayData.push(state.basicData[4].filter((item) => item[1] === "работает").map(function (item){
                return [item[0][0], item[0][1], 1, item[1], item[2]];
            }));
            arrayData.push(state.basicData[4].filter((item) => item[1] === "простой").map(function (item){
                return [item[0][0], item[0][1], 1, item[1], item[2]];
            }));

            arrayData.push(state.basicData[4].filter((item) => item[1] === "выключен").map(function (item){
                return [item[0][0], item[0][1], 1, item[1], item[2]];
            }));

            arrayData.push(state.basicData[4].filter((item) => item[1] === "авария").map(function (item){
                return [item[0][0], item[0][1], 1, item[1], item[2]];
            }));

            return arrayData;
        },

        basicOptions(state) {
            return state.basicOptions;
        },

        reason(state) {
            return state.reason;
        },

        timeStatus(state) {
            return state.timeStatus;
        },
    },
    mutations: {

        setLoader(state, loader) {
            state.loader = loader;
        },

        setChart(state, idx) {
            state.selectChart = idx;
        },

        nextChart(state) {

            if (state.selectChart < state.basicData.length - 1) {
                state.selectChart++
            } else {
                state.selectChart = 0
            }
        },
        prevChart(state) {

            if (state.selectChart > 0) {
                state.selectChart--
            } else {
                state.selectChart = state.basicData.length - 1
            }
        },

        setshowCharts(state, arr) {
            state.showCharts = arr.slice();
        },

        setSelectedfactory(state, factory) {
            state.selectedfactory = factory;
            // store.commit('setSelectedshops', idx);
        },

        setActiveshop(state, shop) {
            state.activeshop = shop;
        },

        setSelectedshops(state, idx) {
            let filterShops = state.shops.filter(function (item) {
                return item.factoryid == idx;
            });
            state.selectedshops = filterShops;
            state.activeshop = filterShops[0];
        },
        removePoint(state, point) {
            let indexPoint = state.arrPoint.findIndex(state => state.id == point.id);
            if (indexPoint !== -1) {
                state.arrPoint.splice(indexPoint, 1);
            }
        },
        addPoint(state, point) {

            let indexPoint = state.arrPoint.findIndex(state => state.id == point.id);
            if (indexPoint == -1) {
                state.arrPoint.push(point);
            }
        },
        clearData(state) {
            state.basicData = [];
        },
        loadData(state, data) {
            data.map((el, index) => {
                if (index === 3) {
                    el.map((item) => {
                        item[0] *= 1000;
                        return item;
                    })
                } else if (index === 4) {
                    el.map((item) => {
                        item[0][0] *= 1000;
                        item[0][1] *= 1000;
                        return item;
                    })
                }
                return el;
            });

            state.basicData = data;
        },
        loadDataA(state, data) {
            data.map((item) => {
                item[0] *= 1000;
                return item;
            })
            state.basicData.map(function (item, index) {
                if (index === 0) {
                    item = [];
                    data.map(function (elem) {
                        item.push(elem);
                    })
                }
                return item;
            });
        },
        loadDataP(state, data) {
            data.map((item) => {
                item[0] *= 1000;
                return item;
            })
            state.basicData.map(function (item, index) {
                if (index === 1) {
                    item = [];
                    data.map(function (elem) {
                        item.push(elem);
                    })
                }
                return item;
            });
        },
        loadDataQ(state, data) {
            data.map((item) => {
                item[0] *= 1000;
                return item;
            })
            state.basicData.map(function (item, index) {
                if (index === 2) {
                    item = [];
                    data.map(function (elem) {
                        item.push(elem);
                    })
                }
                return item;
            });
        },
        loadBasicOptions(state, data) {
            state.basicOptions = data;
        },

        updateTimeStatus(state, payload) {
            state.timeStatus = payload;
        },

        updateReason(state, payload) {
            state.reason = payload;
        },

    },
    actions: {

        setLoader(store, loader) {
            store.commit('setLoader', loader);
        },

        setChart(store, idx) {
            store.commit('setChart', idx);
        },

        setshowCharts(store, arr) {
            store.commit('setshowCharts', arr);
        },

        setActiveshop(store, shop) {
            store.commit('setActiveshop', shop);
        },

        setSelectedshops(store, idx) {
            store.commit('setSelectedshops', idx);
        },

        setSelectedfactory(store, factory) {
            store.commit('setSelectedfactory', factory);
            store.commit('setSelectedshops', factory.factoryid);
        },
        nextChart(store) {
            store.commit('nextChart');
        },
        prevChart(store) {
            store.commit('prevChart');
        },
        addPoint(store, point) {
            store.commit('addPoint', point);
        },
        removePoint(store, point) {
            store.commit('removePoint', point);
        },
        loadBasicOptions(store) {
            let data = getBasicOptions();
            store.commit('loadBasicOptions', data);
        },
        async getTimeStatus(store, opt) {
            let data = await this.$axios.$get(`/api/time_status/${opt.idx}/${opt.start}/${opt.end}`);
            store.commit('updateTimeStatus', data.timeStatus);
        },
        async getReason(store, opt) {
            let data = await this.$axios.$get(`/api/top_stop_line/${opt.idx}/${opt.start}/${opt.end}`);
            store.commit('updateReason', data.reason);
        },
        async getBasicData(store, opt) {
            let t = setTimeout(function () {
                store.commit('setLoader', true);
            }, 1000);
            let data = await this.$axios.$get(`/api/basic_data/${opt.idx}/${opt.start}/${opt.end}/1`);
            store.commit('loadData', data.basicData);
            clearTimeout(t);
            setTimeout(function () {
                store.commit('setLoader', false);
            }, 250);
        },
        async getBasicDataAPQ(store, opt) {
            if (!opt || !opt.chart)
                return;
            let t = setTimeout(function () {
                store.commit('setLoader', true);
            }, 1000);
            let data = [];
            // let data = await this.$axios.$get(`/api/basic_data_${opt.chart}/${opt.idx}/${opt.start}/${opt.end}/0`);
            if (opt.chart === 'A') {
                data = {
                    "A":
                        [
                            [
                                173908134,
                                0.5179454851156219,
                                "A0"
                            ],
                            [
                                173908434,
                                0.21849786259045767,
                                "A1"
                            ],
                        ],
                };
                store.commit('loadDataA', data.A);
            } else if (opt.chart === 'P') {
                data = {
                    "P":
                        [
                            [
                                163908134,
                                0.5179454851156219,
                                "P0"
                            ],
                            [
                                173908434,
                                0.21849786259045767,
                                "P1"
                            ],
                        ],
                };
                store.commit('loadDataP', data.P);
            } else if (opt.chart === 'Q') {
                data = {
                    "Q": [
                        [1602600845000, 0.7751018544626425, "Q0"],
                        [1602601145000, 0.7350879283376235, "Q1"],
                        [1602601445000, 0.9065823947197456, "Q2"],
                        [1602601745000, 0.6755087168263354, "Q3"],
                        [1602602045000, 0.553478890195452, "Q4"],
                        [1602602345000, 0.6122787139409325, "Q5"],
                        [1602602645000, 0.3029264313762152, "Q6"],
                        [1602602945000, 0.6127672227439824, "Q7"],
                        [1602603245000, 0.5904189366441793, "Q8"],
                        [1602603545000, 0.32883888130004046, "Q9"], [1602603845000, 0.9200207472468449, "Q10"],
                        [1602604145000, 0.5210324911163917, "Q11"], [1602604445000, 0.9981373894026501, "Q12"],
                        [1602604745000, 0.7321623731195128, "Q13"], [1602605045000, 0.3332876023524096, "Q14"],
                        [1602605345000, 0.06522278630514511, "Q15"], [1602605645000, 0.5504587273874976, "Q16"],
                        [1602605945000, 0.5167788784396529, "Q17"], [1602606245000, 0.9448903703897268, "Q18"], [1602606545000, 0.76874244493294, "Q19"], [1602606845000, 0.07325659748119806, "Q20"], [1602607145000, 0.7887355832091708, "Q21"], [1602607445000, 0.780553169372812, "Q22"], [1602607745000, 0.6455693761916398, "Q23"], [1602608045000, 0.06364493519771286, "Q24"], [1602608345000, 0.7730255649800984, "Q25"], [1602608645000, 0.5516638501686979, "Q26"], [1602608945000, 0.11903627541968742, "Q27"], [1602609245000, 0.9101618468579756, "Q28"], [1602609545000, 0.3000882891152371, "Q29"], [1602609845000, 0.8223100933024542, "Q30"], [1602610145000, 0.6442337348679544, "Q31"], [1602610445000, 0.07373780323403256, "Q32"], [1602610745000, 0.6125931412216847, "Q33"], [1602611045000, 0.5233664369232027, "Q34"], [1602611345000, 0.36345414636137485, "Q35"], [1602611645000, 0.4507103060431489, "Q36"], [1602611945000, 0.7695970499560428, "Q37"], [1602612245000, 0.47705235602693896, "Q38"], [1602612545000, 0.7204465606381885, "Q39"], [1602612845000, 0.9720772707451383, "Q40"], [1602613145000, 0.40195497779769507, "Q41"], [1602613445000, 0.20511148460122142, "Q42"], [1602613745000, 0.04008655955441487, "Q43"], [1602614045000, 0.737437575621703, "Q44"], [1602614345000, 0.2128500059081858, "Q45"], [1602614645000, 0.7986076727574121, "Q46"], [1602614945000, 0.2502769942149382, "Q47"], [1602615245000, 0.7081346534355548, "Q48"], [1602615545000, 0.8208176346907199, "Q49"], [1602615845000, 0.9316319414336507, "Q50"], [1602616145000, 0.7458609087533528, "Q51"], [1602616445000, 0.31765983338206627, "Q52"], [1602616745000, 0.7488878990310369, "Q53"], [1602617045000, 0.45712283748324967, "Q54"], [1602617345000, 0.5035023581197099, "Q55"], [1602617645000, 0.7781472346887355, "Q56"], [1602617945000, 0.9334193772861642, "Q57"], [1602618245000, 0.3591063329410472, "Q58"], [1602618545000, 0.24848076733926883, "Q59"], [1602618845000, 0.8299340716339283, "Q60"], [1602619145000, 0.06900966065009939, "Q61"], [1602619445000, 0.9612808592942302, "Q62"], [1602619745000, 0.8293513901162335, "Q63"], [1602620045000, 0.79718301492149, "Q64"], [1602620345000, 0.02603421690811103, "Q65"], [1602620645000, 0.002566173824075646, "Q66"], [1602620945000, 0.094790604700692, "Q67"], [1602621245000, 0.6842657067871751, "Q68"], [1602621545000, 0.8928380368489153, "Q69"], [1602621845000, 0.5783711898953688, "Q70"], [1602622145000, 0.8085603418374139, "Q71"], [1602622445000, 0.615984889187053, "Q72"], [1602622745000, 0.5504663604335035, "Q73"], [1602623045000, 0.7297120400741224, "Q74"], [1602623345000, 0.27545410937038917, "Q75"], [1602623645000, 0.44466929029088187, "Q76"], [1602623945000, 0.36876410561071116, "Q77"], [1602624245000, 0.5229311750021448, "Q78"], [1602624545000, 0.6620210512334866, "Q79"], [1602624845000, 0.4218235879787984, "Q80"], [1602625145000, 0.26684321185854487, "Q81"], [1602625445000, 0.795313823527651, "Q82"], [1602625745000, 0.5087587349679384, "Q83"], [1602626045000, 0.29084231542100547, "Q84"], [1602626345000, 0.03945994999549263, "Q85"], [1602626645000, 0.016159108325269234, "Q86"], [1602626945000, 0.2975939839153051, "Q87"], [1602627245000, 0.1694793827675336, "Q88"], [1602627545000, 0.2290576565911312, "Q89"], [1602627845000, 0.4172020703413831, "Q90"], [1602628145000, 0.35412871055599726, "Q91"], [1602628445000, 0.8845883759244068, "Q92"], [1602628745000, 0.6853589357230879, "Q93"], [1602629045000, 0.17768011194798794, "Q94"], [1602629345000, 0.8584537114838218, "Q95"],
                        [1602629645000, 0.897143920181472, "Q96"]
                    ]
                };
                data.Q.map((item) => {
                    item[0] = parseInt(item[0] / 1000);
                    return item;
                })
                store.commit('loadDataQ', data.Q);
            }

            clearTimeout(t);
            setTimeout(function () {
                store.commit('setLoader', false);
            }, 250);
        },
    },
    strict: process.env.NODE_ENV !== 'production'
};

function getBasicOptions() {
    let basicOptions = {

        title: {
            text: "APQ"
        },
        titleOEE: {
            text: "OEE"
        },
        chart: {
            zoomType: 'x'
        },

        legend: {
            enabled: true,
            align: 'left',
            layout: 'proximate'
        },
        legendAll: {
            enabled: true,
            verticalAlign: 'top',

        },

        scrollbar: {
            enabled: false
        },
        yAxis: [
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },

                lineWidth: 1,
                max: 1,
                top: '20%',
                height: '18%',
                offset: 0,

                resize: {
                    enabled: true
                }

            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },

                lineWidth: 1,
                max: 1,
                top: '40%',
                height: '18%',
                offset: 0,

                resize: {
                    enabled: true
                }

            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },

                lineWidth: 1,
                max: 1,
                top: '60%',
                height: '18%',
                offset: 0,

                resize: {
                    enabled: true
                }

            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },

                lineWidth: 1,
                max: 2,
                top: '80%',
                height: '20%',
                offset: 0,

                resize: {
                    enabled: true
                }

            }],

        yAxisOne: [{
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: ''
            },

            lineWidth: 1,
            max: 1,

            height: '78%',
            offset: 0,

            resize: {
                enabled: true
            }

        }, {
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: ''
            },

            lineWidth: 1,
            max: 2,
            top: '80%',
            height: '20%',
            offset: 0,

            resize: {
                enabled: true
            }

        }],

        yAxisAll: [
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },

                lineWidth: 1,
                max: 1,

                height: '78%',
                offset: 0,

                resize: {
                    enabled: true
                }

            },
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },

                lineWidth: 1,
                max: 1,

                height: '78%',
                offset: 0,

                resize: {
                    enabled: true
                }

            },
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },

                lineWidth: 1,
                max: 1,

                height: '78%',
                offset: 0,

                resize: {
                    enabled: true
                }

            },
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },

                lineWidth: 1,
                max: 1,

                height: '78%',
                offset: 0,

                resize: {
                    enabled: true
                }

            },
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },


                lineWidth: 1,
                max: 2,
                top: '80%',
                height: '20%',
                offset: 0,

                resize: {
                    enabled: true
                }
            },
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },

                lineWidth: 1,
                max: 2,
                top: '80%',
                height: '20%',
                offset: 0,

                resize: {
                    enabled: true
                }
            },
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },

                lineWidth: 1,
                max: 2,
                top: '80%',
                height: '20%',
                offset: 0,

                resize: {
                    enabled: true
                }
            },
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: ''
                },

                lineWidth: 1,
                max: 2,
                top: '80%',
                height: '20%',
                offset: 0,

                resize: {
                    enabled: true
                }
            },
        ],

        navigator: {
            enabled: true
        },


        tooltip: {

            formatter: function () {

                return this.points.reduce(function (s, point) {
                    if (point.x2 === undefined) {
                        return s + '<br/>' + point.series.name + ': ' +
                            point.y;
                    } else {
                        return s + '<br/>' + point.series.name;
                    }
                }, '<b>' + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '</b>');
            },

            shared: true,

        },

        xAxis: {
            type: 'datetime',
            minRange: 30000
        }
    };
    return basicOptions;

}
