<template>
  <div class="chart first">
      <div class="chart-header">
        <div class="box-header">
          <div class="title">Продолжительность работы,ч</div>
          <div class="bul" @click="DurationWork.modalBul=!DurationWork.modalBul">
            <span></span>
          </div>
          <div
              class="menu-bul"
              v-if="DurationWork.modalBul"
          >
            <div
                class="btn-bul"
                @click="$parent.$emit('hideCartItem','DurationWork')"
              ><span class="show"></span>
              <span>Скрыть</span>
            </div>
            <div class="btn-bul">
              <span class="new"></span>
              <span>Обновить</span>
            </div>
          </div>
        </div>
        <div class="period">
          <button
              v-on:click="setPeriod(1)"
              class="btn text"
              :class="{active: periodActive[1]}"
          >сутки
          </button>
          <button
              v-on:click="setPeriod(2)"
              class="btn text"
              :class="{active: periodActive[2] || periodActive[3] || periodActive[4]}"
          >смена
          </button>
          <button
              v-on:click="setPeriod(2)"
              class="btn num"
              :class="{active: periodActive[2]}"
          >1
          </button>
          <button
              v-on:click="setPeriod(3)"
              class="btn num"
              :class="{active: periodActive[3]}"
          >2
          </button>
          <button
              v-on:click="setPeriod(4)"
              class="btn num"
              :class="{active: periodActive[4]}"
          >3
          </button>
        </div>
      </div>
      <div class="chart-content">
        <div class="line" v-for="itam in lineDataFirst">
          <div class="box-line">
            <div class="bg" :style="'width: ' + itam.progress + '%'">
              <div class="start" v-if="itam.progress >= 50">{{ itam.start }}</div>
              <div class="end" v-if="itam.progress >= 50">{{ itam.end }}</div>
            </div>
          </div>
          <div class="data-line">{{ itam.dataLine }}</div>
        </div>
      </div>
      <div class="chart-footer">
        <div class="title">Общее рабочее время за день</div>
        <div class="view">23</div>
      </div>
    </div>
</template>

<script>

import Period from "@/components/home/period";
import Calendar from "~/components/home/calendar";

export default {
  name: "DurationWork",
  data() {
    return {
      DurationWork: {
        modalBul: false,
      },
      periodActive: [false, true, false, false, false],
    }
  },
  computed: {
    lineDataFirst() {
      return [
        {
          progress: 0,
          start: '8:10',
          end: '17:23',
          dataLine: 0.75,
        },
        {
          progress: 20,
          start: '4:10',
          end: '23:23',
          dataLine: 3.75,
        },
        {
          progress: 50,
          start: '8:10',
          end: '17:23',
          dataLine: 8.75,
        },
        {
          progress: 80,
          start: '8:10',
          end: '17:23',
          dataLine: 9.75,
        },
        {
          progress: 0,
          start: '8:10',
          end: '17:23',
          dataLine: 0.75,
        },
        {
          progress: 20,
          start: '4:10',
          end: '23:23',
          dataLine: 3.75,
        },
        {
          progress: 50,
          start: '8:10',
          end: '17:23',
          dataLine: 8.75,
        },
        {
          progress: 80,
          start: '8:10',
          end: '17:23',
          dataLine: 9.75,
        },
        {
          progress: 20,
          start: '4:10',
          end: '23:23',
          dataLine: 3.75,
        },
        {
          progress: 50,
          start: '8:10',
          end: '17:23',
          dataLine: 8.75,
        },
        {
          progress: 50,
          start: '8:10',
          end: '17:23',
          dataLine: 8.75,
        },
        {
          progress: 80,
          start: '8:10',
          end: '17:23',
          dataLine: 9.75,
        },
      ];
    },
  },
  methods: {
    setPeriod (id) {
      let arr = [false, false, false, false, false];
      arr[id] = true;
      this.periodActive = arr;
    }
  },

}
</script>

<style lang="scss" scoped>

.period {
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    cursor: pointer;
    outline: none;
    height: 23px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 12px;
    padding: 0 6px;

    border: 1px solid #ECEDF4;
    border-radius: 3px;
    background: #FFFFFF;

    font-weight: 500;
    font-size: 12px;
    color: #42435F;

    &:hover {
      border: 1px solid #272848;
    }
  }

  .text {
    width: 52px;

  }

  .btn.text:nth-child(3) {
    margin-right: 6px;
  }

  .num {
    width: 42px;
    background: #FFFFFF;
    margin-right: 6px;
  }

  .active {
    background: #272848;
    color: #BFC0C9;
    text-align: center;
  }

  button:last-child {
    margin-right: 0;
  }
}
.chart {
  width: 284px;
  border: 2px solid #E9E9E9;
  border-radius: 9px;
}
.chart.first {
  height: 324px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .chart-header {
    padding-bottom: 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .box-header {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 9px;
      padding-left: 12px;
      padding-right: 6px;
    }

    .period {
      padding-left: 12px;
      padding-right: 6px;
      .btn {
        margin-right: 6px;

        &:nth-child(1) {
          margin-right: 12px;
        }
      }
    }
  }

  .chart-content {
    height: 100%;
    padding: 12px 6px;
    justify-content: flex-start;
    overflow: auto;

    .line {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 12px;

      .box-line {
        width: 100%;
        font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        color: #000000;

        .bg {
          padding: 0 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 16px;
          background: #ECEDF4;

          .start {
            margin-right: 10px;
          }
        }

        .start,
        .end {
          display: flex;
        }
      }

      .data-line {
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
      }
    }
  }
}
.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E9E9E9;
  padding: 2px 0;

  .title {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #000000;
  }

  .bul {
    cursor: pointer;
    width: 15px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      position: relative;
      background-color: #CFCDCD;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      font-size: 0;
      left: -10px;
    }

    span:before {
      position: absolute;
      left: 5px;
      top: 0;
      content: '';

      background-color: #CFCDCD;
      font-size: 0;
      width: 3px;
      height: 3px;
      border-radius: 50%;
    }

    span:after {
      position: absolute;
      left: 10px;
      top: 0;
      content: '';
      background-color: #CFCDCD;
      font-size: 0;
      width: 3px;
      height: 3px;
      border-radius: 50%;
    }
  }
}
.chart-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #E9E9E9;
  padding: 2px 24px 0;

  .title {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 10px;
    color: #3F51B5;
  }

  .view {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
    font-size: 10px;
    color: #3F51B5;
  }
}
.menu-bul {
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  position: absolute;
  top: 25px;
  right: 0;
  height: auto;
  width: 110px;
  display: flex;
  flex-direction: column;
  background: #F7F8FA;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px 0px 4px 4px;

  .btn-bul {
    position: relative;
    width: 100%;
    height: 40px;
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #BABABA;

    &:hover {
      color: #727272;
      transition: 0.2s linear;

      .show {
        background-image: url('https://api.iconify.design/ant-design:eye-invisible-outlined.svg?color=%23727272');
      }

      .new {
        background-image: url('https://api.iconify.design/ic:baseline-update.svg?color=%23727272');
      }
    }
  }

  .show {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    background-image: url('https://api.iconify.design/ant-design:eye-invisible-outlined.svg?color=%23BABABA');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .new {
    content: '';
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    background-image: url('https://api.iconify.design/ic:baseline-update.svg?color=%23BABABA');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}

</style>
