export default {
    namespaced: true,

    state: () => ({
        lineDataFirst: {
            interval: [],
            sum: 0,
        },
        comparisonModule: {
            suitable1: 0,
            change_suitable1: 0,
            suitable2: 0,
            substandard1: 0,
            change_substandard1: 0,
            substandard2: 0,
            defect1: 0,
            change_defect1: 0,
            defect2: 0,
            flooded1: 0,
            change_flooded1: 0,
            flooded2: 0,
            sum1: 0,
            change_sum1: 0,
            sum2: 0,
            isQuery1: false,
            isQuery2: false,
        },
    }),
    getters: {
        lineDataFirst(state) {
            let lineDataFirst = JSON.parse(JSON.stringify(state.lineDataFirst));
            let intervalNew = [];
            lineDataFirst.interval.forEach((item) => {
                item.progress = Math.floor((item.duration / lineDataFirst.sum) * 100);
                item.duration = item.duration.toFixed(2);

                intervalNew.push(item);
            });

            lineDataFirst.interval = intervalNew;

            return lineDataFirst;
        },
        comparisonModule(state) {
            return state.comparisonModule;
        },
    },
    mutations: {
        setLineDataFirst(state, data) {
            state.lineDataFirst = data;
        },
        setComparisonModule(state, data) {
            state.comparisonModule = data;
        },
    },
    actions: {
        async getLineDataFirst(store, option) {
            let data = {
                interval: [],
                sum: 0,
            };

            // try {
            //     if (option.smena)
            //         data = await this.$axios.$get(`/dashboard/duration/${option.date}/shift/${option.smena}`);
            //     else
            //         data = await this.$axios.$get(`/dashboard/duration/${option.date}/day/`);
            //
            // } catch (e) {
            //     console.error("getLineDataFirst axios");
            // }

            //later remove
            //start block
            data.sum = 23;
            let start = "";
            let end = "";
            for (let i = 0; i < 10; i++) {
                start = new Date(2020, 1, 11, getRandomInt(12), getRandomInt(59), 0, 0);
                end = new Date(2020, 1, 11, getRandomInt(12) + 11, getRandomInt(59), 0, 0);
                data.interval.push({
                    start: start.getHours() + ':' + start.getMinutes(),
                    end: end.getHours() + ':' + end.getMinutes(),
                    duration: Math.random() * 23,
                });
            }
            //end block

            store.commit('setLineDataFirst', data);
        },
        async getComparisonModule(store, option) {
            let data = null;
            // try {
            //     if (option.date1 && option.date2) {
            //         if (option.id1 && option.id2)
            //             data = await this.$axios.$get(`/dashboard/comparison/shift/${option.date1}/${option.id1}/${option.date2}/${option.id2}`);
            //         else if (option.isType1 === 'day')
            //             data = await this.$axios.$get(`/dashboard/comparison/day/${option.date1}/${option.date2}`);
            //         else if (option.isType1 === 'month')
            //             data = await this.$axios.$get(`/dashboard/comparison/month/${option.date1}/${option.date2}`);
            //
            //         data.isQuery1 = true;
            //         data.isQuery2 = true;
            //     } else if (option.date1 && !option.date2) {
            //         if (option.id1)
            //             data = await this.$axios.$get(`/dashboard/comparison/shift/${option.date1}/${option.id1}`);
            //         else if (option.isType1 === 'day')
            //             data = await this.$axios.$get(`/dashboard/comparison/day/${option.date1}`);
            //         else if (option.isType1 === 'month')
            //             data = await this.$axios.$get(`/dashboard/comparison/month/${option.date1}`);
            //
            //         data.isQuery1 = true;
            //     }
            // } catch (e) {
            //     console.error("getComparisonModule axios");
            // }

            //latter remove
            //start block
            data = {
                suitable1: getRandomInt(300) + 200,
                change_suitable1: 0,
                suitable2: getRandomInt(300) + 200,

                substandard1: getRandomInt(100),
                change_substandard1: 0,
                substandard2: getRandomInt(100),

                defect1: getRandomInt(70),
                change_defect1: 0,
                defect2: getRandomInt(70),

                flooded1: getRandomInt(100000) + 10000,
                change_flooded1: 0,
                flooded2: getRandomInt(100000) + 10000,

                sum1: getRandomInt(900) + 100,
                change_sum1: 0,
                sum2: getRandomInt(900) + 100,
            };

            if (option.date1 && option.date2) {
                data.change_suitable1 = ((data.suitable1 / data.suitable2) * 100).toFixed();
                data.change_substandard1 = ((data.substandard1 / data.substandard2) * 100).toFixed();
                data.change_defect1 = ((data.defect1 / data.defect2) * 100).toFixed();
                data.change_flooded1 = ((data.flooded1 / data.flooded2) * 100).toFixed();
                data.change_sum1 = ((data.sum1 / data.sum2) * 100).toFixed();
                data.isQuery1 = true;
                data.isQuery2 = true;
            }
             else if (option.date1 && !option.date2)
                data.isQuery1 = true;
            //end block

            store.commit('setComparisonModule', data);
        }
    },
    strict: process.env.NODE_ENV !== 'production'
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
