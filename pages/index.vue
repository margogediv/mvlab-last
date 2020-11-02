<template>
  <div>
    <div class="btn-group">
      <main>
        <button class="btn-rnd btn-plus"
                @click="ShowModalPlus.modalBul=!ShowModalPlus.modalBul">+
        </button>
        <div class="plus-form" v-if="ShowModalPlus.modalBul">
          <div class="plus-form-item">Продолжительность работы</div>
          <div class="plus-form-item">Остатки на складах</div>
          <div
              class="plus-form-item"
              @click="showCartItem('PanelRelease'); ShowModalPlus.modalBul=false;"
          >Выпуск панелей
          </div>
          <div
              class="plus-form-item"
              @click="showCartItem('TotalСonsumption'); ShowModalPlus.modalBul=false;"
          >Суммарный расход
          </div>
          <div
              class="plus-form-item"
              @click="showCartItem('EnergyConsumption'); ShowModalPlus.modalBul=false;"
          >Расход электроэнергии
          </div>
          <div
              class="plus-form-item"
              @click="showCartItem('SpecificConsumption'); ShowModalPlus.modalBul=false;"
          >Удельный расход на км
          </div>
          <div
              class="plus-form-item"
              @click="showCartItem('ComparisonModule'); ShowModalPlus.modalBul=false;"
          >Модуль сравнения
          </div>
        </div>
      </main>
    </div>
    <calendar></calendar>
    <section class="charts">
      <div class="block-1">
        <durationWork></durationWork>
        <stockBalances></stockBalances>
      </div>
      <div class="block-2">
        <div
            class="chart-data panel-release"
            v-if="PanelRelease.cardShow"
        >
          <div class="chart-header">
            <div class="title">Выпуск панелей</div>
            <period title="PanelRelease"></period>
            <div
                class="bul"
                @click="PanelRelease.modalBul=!PanelRelease.modalBul"
            >
              <span></span>
            </div>
          </div>
          <div class="chart-content">
            <div
                class="menu-bul"
                v-if="PanelRelease.modalBul"
            >
              <div
                  class="btn-bul"
                  @click="PanelRelease.cardShow=!PanelRelease.cardShow; PanelRelease.modalBul=false"
              >Скрыть
              </div>
              <div class="btn-bul">Обновить</div>
            </div>
            <div class="diagram">
              <highcharts
                  :options="chartOptionsPio"
                  :constructor-type="'stockChart'"
              ></highcharts>
            </div>
            <div class="content-box">
              <div class="indicators">
                <div class="module">
                  <div class="index">500</div>
                  <div class="resul">
                    <div class="result-ok">10%</div>
                    <div class="result-minus"></div>
                    <div class="resul-null"></div>
                  </div>
                </div>
                <div class="data-list">
                  <div class="list">
                    <div class="item">
                      <div class="circle" style="background: #4BBEAA"></div>
                      <div class="title">годно</div>
                    </div>
                    <div class="data">
                      <div class="index">450</div>
                      <div class="resul">
                        <div class="result-ok">+5%</div>
                        <div class="result-minus"></div>
                        <div class="resul-null"></div>
                      </div>
                    </div>
                  </div>
                  <div class="list">
                    <div class="item">
                      <div class="circle" style="background: #2D9AD8"></div>
                      <div class="title">некондиция</div>
                    </div>
                    <div class="data">
                      <div class="index">25</div>
                      <div class="resul">
                        <div class="result-ok"></div>
                        <div class="result-minus"></div>
                        <div class="resul-null">-0%</div>
                      </div>
                    </div>
                  </div>
                  <div class="list">
                    <div class="item">
                      <div class="circle" style="background: #FC7A7A"></div>
                      <div class="title">брак</div>
                    </div>
                    <div class="data">
                      <div class="index">25</div>
                      <div class="resul">
                        <div class="result-ok"></div>
                        <div class="result-minus">-3%</div>
                        <div class="resul-null"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="indicators-footer">
                  <div class="title">Залито метров</div>
                  <div class="data">
                    <div class="index">100000</div>
                    <div class="resul">
                      <div class="result-ok">+10%</div>
                      <div class="result-minus"></div>
                      <div class="resul-null"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="chart-data consumption"
            v-if="SpecificConsumption.cardShow"
        >
          <div class="chart-header">
            <div class="title">Удельный расход на км</div>
            <period title="SpecificConsumption"></period>
            <div
                class="bul"
                @click="SpecificConsumption.modalBul=!SpecificConsumption.modalBul"
            >
              <span></span>
            </div>
          </div>
          <div class="chart-content">
            <div
                class="menu-bul"
                v-if="SpecificConsumption.modalBul"
            >
              <div
                  class="btn-bul"
                  @click="SpecificConsumption.cardShow=!SpecificConsumption.cardShow; SpecificConsumption.modalBul=false"
              >Скрыть
              </div>
              <div class="btn-bul">Обновить</div>
            </div>
            <div class="iteam-group">
              <div class="item">
                <div class="data">
                  <div class="quantity">5,5</div>
                  <div class="subtitle">Изоцианат, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #2D9AD8">
                    <div class="title">ISO</div>
                    <div class="subtitle">km</div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">3,2</div>
                  <div class="subtitle">Полиол, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #FC7A7A">
                    <div class="title">POL</div>
                    <div class="subtitle">km</div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">1,3</div>
                  <div class="subtitle">Пентан, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #4BBEAA">
                    <div class="title">PEN</div>
                    <div class="subtitle">km</div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">0,8</div>
                  <div class="subtitle">Катализатор1, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #2D9AD8">
                    <div class="title">K1</div>
                    <div class="subtitle">km</div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">3,5</div>
                  <div class="subtitle">Катализатор2, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #FC7A7A">
                    <div class="title">K2</div>
                    <div class="subtitle">km</div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">2,1</div>
                  <div class="subtitle">Катализатор3, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #4BBEAA">
                    <div class="title">K3</div>
                    <div class="subtitle">km</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="chart-data consumption"
            v-if="TotalСonsumption.cardShow"
        >
          <div class="chart-header">
            <div class="title">Сумарный расход</div>
            <period title="TotalСonsumption"></period>
            <div
                class="bul"
                @click="TotalСonsumption.modalBul=!TotalСonsumption.modalBul"
            >
              <span></span>
            </div>
          </div>
          <div class="chart-content">
            <div
                class="menu-bul"
                v-if="TotalСonsumption.modalBul"
            >
              <div
                  class="btn-bul"
                  @click="TotalСonsumption.cardShow=!TotalСonsumption.cardShow; TotalСonsumption.modalBul=false"
              >Скрыть
              </div>
              <div class="btn-bul">Обновить</div>
            </div>
            <div class="iteam-group">
              <div class="item">
                <div class="data">
                  <div class="quantity">400</div>
                  <div class="subtitle">Изоцианат, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #2D9AD8">ISO</div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">250</div>
                  <div class="subtitle">Полиол, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #FC7A7A">POL</div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">100</div>
                  <div class="subtitle">Пентан, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #4BBEAA">PEN</div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">24</div>
                  <div class="subtitle">Катализатор1, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #2D9AD8">K1</div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">10</div>
                  <div class="subtitle">Катализатор2, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #FC7A7A">K2</div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">5</div>
                  <div class="subtitle">Катализатор3, л</div>
                </div>
                <div class="icon">
                  <div class="circle" style="background: #4BBEAA">K3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="chart-data comparison-module"
            v-if="ComparisonModule.cardShow"
        >
          <div class="chart-header">
            <div class="title">Модуль сравнения</div>
            <div
                class="bul"
                @click="ComparisonModule.modalBul=!ComparisonModule.modalBul"
            >
              <span></span>
            </div>
          </div>
          <div class="chart-content">
            <div
                class="menu-bul"
                v-if="ComparisonModule.modalBul"
            >
              <div
                  class="btn-bul"
                  @click="ComparisonModule.cardShow=!ComparisonModule.cardShow; ComparisonModule.modalBul=false"
              >Скрыть
              </div>
              <div class="btn-bul">Обновить</div>
            </div>
            <div class="content-box">
              <div class="calendar-period">
                <div class="select-date">
                  <input type="datetime-local"/>
                </div>
              </div>
              <period title="ComparisonModuleStart"></period>
              <div class="indicators">
                <div class="module">
                  <div class="index">500</div>
                  <div class="resul">
                    <div class="result-ok">10%</div>
                    <div class="result-minus"></div>
                    <div class="resul-null"></div>
                  </div>
                </div>
                <div class="data-list">
                  <div class="list">
                    <div class="item">
                      <div class="circle" style="background: #4BBEAA"></div>
                      <div class="title">годно</div>
                    </div>
                    <div class="data">
                      <div class="index">450</div>
                      <div class="resul">
                        <div class="result-ok">+5%</div>
                        <div class="result-minus"></div>
                        <div class="resul-null"></div>
                      </div>
                    </div>
                  </div>
                  <div class="list">
                    <div class="item">
                      <div class="circle" style="background: #2D9AD8"></div>
                      <div class="title">некондиция</div>
                    </div>
                    <div class="data">
                      <div class="index">25</div>
                      <div class="resul">
                        <div class="result-ok"></div>
                        <div class="result-minus"></div>
                        <div class="resul-null">-0%</div>
                      </div>
                    </div>
                  </div>
                  <div class="list">
                    <div class="item">
                      <div class="circle" style="background: #FC7A7A"></div>
                      <div class="title">брак</div>
                    </div>
                    <div class="data">
                      <div class="index">25</div>
                      <div class="resul">
                        <div class="result-ok"></div>
                        <div class="result-minus">-3%</div>
                        <div class="resul-null"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="indicators-footer">
                  <div class="title">Залито метров</div>
                  <div class="data">
                    <div class="index">100000</div>
                    <div class="resul">
                      <div class="result-ok">+10%</div>
                      <div class="result-minus"></div>
                      <div class="resul-null"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-box">
              <div class="calendar-period">
                <div class="select-date">
                  <input type="datetime-local"/>
                </div>
              </div>
              <period title="ComparisonModuleEnd"></period>
              <div class="indicators">
                <div class="module">
                  <div class="index">445</div>
                </div>
                <div class="data-list">
                  <div class="list">
                    <div class="item">
                      <div class="circle" style="background: #4BBEAA"></div>
                      <div class="title">годно</div>
                    </div>
                    <div class="data">
                      <div class="index">430</div>
                    </div>
                  </div>
                  <div class="list">
                    <div class="item">
                      <div class="circle" style="background: #2D9AD8"></div>
                      <div class="title">некондиция</div>
                    </div>
                    <div class="data">
                      <div class="index">25</div>
                    </div>
                  </div>
                  <div class="list">
                    <div class="item">
                      <div class="circle" style="background: #FC7A7A"></div>
                      <div class="title">брак</div>
                    </div>
                    <div class="data">
                      <div class="index">22</div>
                    </div>
                  </div>
                </div>
                <div class="indicators-footer">
                  <div class="title">Залито метров</div>
                  <div class="data">
                    <div class="index">95000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="chart-data-min energy-consumption"
            v-if="EnergyConsumption.cardShow"
        >
          <div class="chart-header">
            <div class="title">Расход энергоресурсов</div>
            <period title="EnergyConsumption"></period>
            <div
                class="bul"
                @click="EnergyConsumption.modalBul=!EnergyConsumption.modalBul"
            >
              <span></span>
            </div>
          </div>
          <div class="chart-content">
            <div
                class="menu-bul"
                v-if="EnergyConsumption.modalBul"
            >
              <div
                  class="btn-bul"
                  @click="EnergyConsumption.cardShow=!EnergyConsumption.cardShow; EnergyConsumption.modalBul=false"
              >Скрыть
              </div>
              <div class="btn-bul">Обновить</div>
            </div>
            <div class="iteam-group">
              <div class="item">
                <div class="data">
                  <div class="quantity">1000000</div>
                  <div class="subtitle">Ввод1, кВт</div>
                </div>
                <div class="icon">
                  <div class="circle"></div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">11110000</div>
                  <div class="subtitle">Ввод2, кВт</div>
                </div>
                <div class="icon">
                  <div class="circle"></div>
                </div>
              </div>
              <div class="item">
                <div class="data">
                  <div class="quantity">111010101</div>
                  <div class="subtitle">Газ, м3</div>
                </div>
                <div class="iconLast">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import {mapActions} from "vuex";
import Period from "@/components/home/period";
import Calendar from "@/components/home/calendar";
import DurationWork from "@/components/home/DurationWork";
import StockBalances from "@/components/home/StockBalances";

export default {
  layout: "header_footer",

  created() {
    this.setActiveTabHeader("HOME");
    this.setActiveTabSidebar("Dashboard");
  },

  data() {
    return {
      ShowModalPlus: {
        modalBul: false,
      },
      PanelRelease: {
        modalBul: false,
        cardShow: true,
      },
      TotalСonsumption: {
        modalBul: false,
        cardShow: true,
      },
      EnergyConsumption: {
        modalBul: false,
        cardShow: true,
      },
      SpecificConsumption: {
        modalBul: false,
        cardShow: true,
      },
      ComparisonModule: {
        modalBul: false,
        cardShow: true,
      },
    }
  },

  components: {
    period: Period,
    calendar: Calendar,
    durationWork: DurationWork,
    stockBalances: StockBalances,

  },

  computed: {
    chartOptionsPio() {
      return {
        chart: {
          height: 210,
          margin: 0,
          type: 'pie'
        },
        credits: {
          enabled: false,
          style: {
            text: null,
          },
        },
        title: {
          text: '500',
          style: {
            'font-family': '"Montserrat", sans-serif',
            'color': '#000000',
            'font-size': '24px',
            'font-weight': '500'
          },
          align: 'center',
          verticalAlign: 'middle',
          y: 30,
        },
        tooltip: {
          // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          split: false,
          shared: false,
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            slicedOffset: 0,
            size: 170,
            center: [140, 110],
            dataLabels: {
              enabled: false,
            },
          }
        },
        navigator: {
          enabled: false,
        },
        exporting: {
          enabled: false,
        },
        rangeSelector: {
          enabled: false
        },
        legend: false,
        xAxis: {
          visible: false,
        },
        yAxis: {
          visible: false,
        },
        series: [{
          name: 'ghvhvg',
          innerSize: '70%',
          data: [
            {name: 'Chrome', y: 61.41, color: '#4BBEA9'},
            {name: 'Internet Explorer', y: 11.84, color: ' #FC7A7A'},
            {name: 'Firefox', y: 10.85, color: '#2D9AD8'}
          ]
        }]
      }
    },
  },

  methods: {
    ...mapActions("users", {
      setActiveTabHeader: "setActiveTabHeader",
      setActiveTabSidebar: "setActiveTabSidebar",
    }),
    showCartItem (name) {
      this[name].cardShow = true;
    },
  }
};
</script>

<style lang="scss" scoped>

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E9E9E9;
  padding: 2px 8px 0 12px;

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
    width: 25px;
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

.indicators {
  padding-right: 44px;

  .module {
    display: flex;
    align-items: baseline;
    padding-left: 68px;
    padding-top: 12px;
    margin-bottom: 12px;

    .index {
      font-size: 24px;
      font-weight: 500;
      margin-right: 9px;
    }

    .resul {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #000000;
    }
  }

  .data-list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .list {
      max-width: 207px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      font-size: 14px;

      .item {
        display: flex;
        align-items: center;
        font-weight: 500;

        .circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-right: 6px;
        }
      }
    }
  }

  .indicators-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      margin-left: 9px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
    }

    .data {
      display: flex;
      align-items: baseline;

      .index {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
      }
    }
  }
}

.charts {
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 36px;

  .block-1 {
    width: 280px;
    margin-right: 36px;
  }

  .block-2 {
    display: flex;
    flex-wrap: wrap;

    .panel-release {
      .chart-content {
        display: flex;

        .diagram {
          width: 45%;
        }

        .content-box {
          width: 55%;
          padding-top: 25px;

          .indicators {
            .module {
              padding-left: 17px;
            }

            .data-list {
              align-items: end;
              margin-bottom: 8px;
            }

            .indicators-footer {
              .title {
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                margin-left: 0;
              }
            }
          }
        }
      }
    }

    .consumption {
      .chart-content {
        .iteam-group {
          padding-bottom: 12px;
          display: flex;
          flex-wrap: wrap;
          .item {
            width: 192px;
            height: 90px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding-bottom: 6px;
            padding-right: 6px;
            padding-left: 12px;
            border: 2px solid #ECEDF4;
            box-sizing: border-box;
            border-radius: 12px;
            margin-right: 12px;
            margin-top: 11px;

            .data {
              width: 116px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              margin-right: 6px;
              margin-top: 6px;

              .quantity {
                font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, "Helvetica Neue", Arial, sans-serif;
                font-weight: 500;
                font-size: 48px;
                color: #000000;
              }

              .subtitle {
                width: 100%;
                font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, "Helvetica Neue", Arial, sans-serif;
                font-weight: 500;
                font-size: 12px;
                color: #B1B1BC;
              }
            }

            .icon {
              font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, "Helvetica Neue", Arial, sans-serif;
              font-weight: 500;
              font-size: 16px;
              color: #FFFFFF;

              .circle {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }

            &:nth-child(3n) {
              margin-right: 0;
            }
          }
        }
      }
    }

    .chart-data-min {
      width: 628px;
      height: 144px;
      border: 2px solid #E9E9E9;
      border-radius: 9px;
      margin-bottom: 36px;

      .chart-content {
        padding: 0 12px;
        display: flex;
        flex-wrap: wrap;

        .iteam-group {
          display: flex;
          flex-wrap: wrap;
          .item {
            width: 192px;
            height: 90px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding-bottom: 6px;
            padding-right: 6px;
            padding-left: 12px;
            border: 2px solid #ECEDF4;
            box-sizing: border-box;
            border-radius: 12px;
            margin-right: 12px;
            margin-top: 11px;

            .data {
              width: 116px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              margin-right: 6px;
              margin-top: 6px;

              .quantity {
                height: 60px;
                text-align: center;
                display: flex;
                align-items: center;
                font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, "Helvetica Neue", Arial, sans-serif;
                font-weight: 500;
                font-size: 24px;
                color: #000000;
              }

              .subtitle {
                width: 100%;
                font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, "Helvetica Neue", Arial, sans-serif;
                font-weight: 500;
                font-size: 12px;
                color: #B1B1BC;
              }
            }

            .icon {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background-image: url("~assets/img/lightning.png");
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;

              .circle {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }

            .iconLast {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background-image: url("~assets/img/fire.png");
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;

              .circle {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }

            &:nth-child(3n) {
              margin-right: 0;
            }
          }
        }
      }
    }

    .consumption {
      .chart-content {
        padding: 0 12px;
        display: flex;
        flex-wrap: wrap;

        .item {
          width: 192px;
          height: 90px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding-bottom: 6px;
          padding-right: 6px;
          padding-left: 12px;
          border: 2px solid #ECEDF4;
          box-sizing: border-box;
          border-radius: 12px;
          margin-right: 12px;
          margin-top: 11px;

          .data {
            width: 116px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-right: 6px;
            margin-top: 6px;

            .quantity {
              font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, "Helvetica Neue", Arial, sans-serif;
              font-weight: 500;
              font-size: 48px;
              color: #000000;
            }

            .subtitle {
              width: 100%;
              font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, "Helvetica Neue", Arial, sans-serif;
              font-weight: 500;
              font-size: 12px;
              color: #B1B1BC;
            }
          }

          .icon {
            .circle {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;

              .title {
                font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, "Helvetica Neue", Arial, sans-serif;
                font-weight: 500;
                font-size: 16px;
                color: #FFFFFF;
                text-align: center;
              }

              .subtitle {
                font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, "Helvetica Neue", Arial, sans-serif;
                font-weight: 500;
                font-size: 12px;
                color: #FFFFFF;
                text-align: center;
              }
            }
          }

          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
    }

    .comparison-module {
      font-size: 14px;

      .chart-content {
        display: flex;
        width: 100%;
        height: calc(100% - 21px);
        padding: 6px 3px;

        .content-box {
          width: 50%;
          height: 100%;
          margin-right: 3px;
          border-right: 1px solid #E9E9E9;

          .calendar-period {
            padding: 6px 0;

            .select-date {
              height: 20px;
              margin-left: 12px;
              font-weight: 600;
              font-size: 12px;
              line-height: 15px;
              text-align: left;
              color: #9098AF;
            }

            .select-date input {
              height: 20px;
              padding-left: 3px;
              outline: none;
              font-weight: normal;
              font-size: 12px;
              line-height: 15px;
              color: #9098AF;
              border: 1px solid #9098AF;
              border-radius: 4px;
            }
          }

          .period {
            button {
              margin-right: 6px;
            }

            button:last-child {
              margin-right: 3px;
            }
          }
        }
      }

      .content-box:last-child {
        border-right: none;
        margin-right: 0;
      }
    }
  }
}

.data {
  display: flex;

  .index {
    margin-right: 4px;
  }
}

.chart-data {
  width: 628px;
  height: 246px;
  border: 2px solid #E9E9E9;
  border-radius: 9px;
  margin-bottom: 37px;
  margin-right: 48px;
}

.resul {
  .result-ok {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #7CD420;
  }

  .result-minus {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #F3345D;
  }

  .resul-null {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #96A2B0;
  }
}

.btn-group {

  main {
    width: 100%;
    height: 100%;
  }

  .btn-rnd {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 2px #FF7167 solid;
    outline: none;
    cursor: pointer;
    background:  #FFFFFF;
    color: #FF7167;
    font-weight: 500;
    font-size: 48.4615px;
    line-height: 81px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;

    position: absolute;
    bottom: 48px;
    right: 48px;
    z-index: 2;
  }

  .btn-rnd:hover {
    background: #FF7167;
    color: #FFFFFF;
    transition: 0.2s linear;
  }

  .plus-form {
    width: 244px;
    height: auto;
    background: #FFFFFF;
    border: 2px solid #F3F3F3;
    border-radius: 5px;

    position: absolute;
    bottom: 112px;
    right: 48px;

    z-index: 2;

    .plus-form-item {
      cursor: pointer;
      height: 36px;
      padding-left: 24px;
      padding-right: 24px;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: #BABABA;
      border-bottom: 2px solid #F3F3F3;

      &:hover {
        color: #727272;
        transition: 0.2s linear;
      }
    }

    .plus-form-item:last-child {
      border-bottom: none;
    }
  }
}

.chart-content {
  position: relative;
}

.menu-bul {
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  position: absolute;
  top: 0;
  right: 0;
  height: auto;
  width: 110px;
  display: flex;
  flex-direction: column;
  background: #F7F8FA;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px 0px 4px 4px;

  .btn-bul {
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
    }
  }
}

</style>
