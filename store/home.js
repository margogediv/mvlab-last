export default {
    namespaced: true,

    state: () => ({
        lineDataFirst: {
            interval: [],
            sum: 0,
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
    },
    mutations: {
        setLineDataFirst(state, data) {
            state.lineDataFirst = data;
        },
    },
    actions: {
        async getLineDataFirst(store, option) {
            console.log(option);
            let data = {
                interval: [],
                sum: 0,
            };

            try {
                // if (!option.smena)
                //     data = await this.$axios.$get(`/dashboard/duration/${option.date}/day/`);
                // else
                //     data = await this.$axios.$get(`/dashboard/duration/${option.date}/shift/${option.smena}`);
            } catch (e) {
                console.error("getLineDataFirst axios");
            }

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
        }
    },
    strict: process.env.NODE_ENV !== 'production'
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
