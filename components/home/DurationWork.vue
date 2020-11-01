<template>
  <div class="chart first">
    <div class="chart-header">
      <div class="box-header">
        <div class="title">Продолжительность работы,ч</div>
        <div class="bul">
          <span></span>
        </div>
      </div>
<!--      <period title="DurationWork"></period>-->
    </div>
    <div class="chart-content">
      <div class="line" v-for="itam in lineDataFirst">
        <div class="box-line">
          <div class="bg" :style="'width: ' + itam.progress + '%'">
            <div class="start">{{ itam.start }}</div>
            <div class="end">{{ itam.end }}</div>
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
  components: {
    period: Period,
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

}
</script>

<style lang="scss" scoped>

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

    .box-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 9px;
    }

    .period {

      .btn {
        margin-right: 6px;
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
          display: none;
        }

        &:hover {
          .start,
          .end {
            display: flex;
          }
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
  padding: 2px 12px;

  .title {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #000000;
  }

  .bul {
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

</style>
