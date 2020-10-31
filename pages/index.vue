<template>
  <div>
    <div>
      <main>
        <button class="btn-rnd btn-plus">+</button>
      </main>
      <div class="menu-bul">
        <div class="hide">Скрыть</div>
        <div class="show">Обновить</div>
      </div>
    </div>
    <section class="calender">
      <div class="calender-box">
        <div class="day" v-for="calender in calenders">
          <div class="title">{{ calender.title }}</div>
          <div class="number">{{ calender.number }}</div>
        </div>
        <div class="day new">now</div>
      </div>
    </section>
    <section class="charts">
      <div class="block-1">
        <div class="chart first">
          <div class="chart-header">
            <div class="box-header">
              <div class="title">Продолжительность работы,ч</div>
              <div class="bul">
                <span></span>
              </div>
            </div>
            <period />
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
        <div class="chart second">
          <div class="chart-header">
            <div class="title">Остатки на складах</div>
            <div class="bul">
              <span></span>
            </div>
          </div>
          <div class="chart-content">
            <div class="box" v-for="el in lineDataSecond">
              <div class="name-block">{{ el.box }}</div>
              <div class="block-content" v-for="elem in el.data">
                <div class="title-position">{{ elem.titlePosition }}</div>
                <div class="group">
                  <div class="number-lit" v-for="i in elem.capacitys">{{ i.value }}л
                    <div class="line-progress">
                      <div class="data-progress" :style="'width: ' + i.remainder + '%'"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chart-footer">
            <div class="title">Итого - ISO: <b>100л</b>; POL: <b>100л</b>; PEN: <b>100л</b></div>
          </div>
        </div>
      </div>
      <div class="block-2">
        <div class="chart-data panel-release">
          <div class="chart-header">
            <div class="title">Выпуск панелей</div>
            <period />
            <div class="bul">
              <span></span>
            </div>
          </div>
          <div class="chart-content">
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
        <div class="chart-data consumption">
          <div class="chart-header">
            <div class="title">Сумарный расход</div>
            <period />
            <div class="bul">
              <span></span>
            </div>
          </div>
          <div class="chart-content">
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
        <div class="chart-data-min energy-consumption">
          <div class="chart-header">
            <div class="title">Расход энергоресурсов</div>
            <period />
            <div class="bul">
              <span></span>
            </div>
          </div>
          <div class="chart-content">
            <div class="item">
              <div class="data">
                <div class="quantity">1000000</div>
                <div class="subtitle">Ввод1, кВт</div>
              </div>
              <div class="icon">
                <div class="circle" style="background: #EDBE45"></div>
              </div>
            </div>
            <div class="item">
              <div class="data">
                <div class="quantity">11110000</div>
                <div class="subtitle">Ввод2, кВт</div>
              </div>
              <div class="icon">
                <div class="circle" style="background: #EDBE45"></div>
              </div>
            </div>
            <div class="item">
              <div class="data">
                <div class="quantity">111010101</div>
                <div class="subtitle">Газ, м3</div>
              </div>
              <div class="icon">
                <div class="circle" style="background:  #FC7A7A"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-3">
        <div class="chart-data consumption">
          <div class="chart-header">
            <div class="title">Удельный расход на км</div>
            <period />
            <div class="bul">
              <span></span>
            </div>
          </div>
          <div class="chart-content">
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
        <div class="chart-data comparison-module">
          <div class="chart-header">
            <div class="title">Модуль сравнения</div>
            <div class="bul">
              <span></span>
            </div>
          </div>
          <div class="chart-content">
            <div class="content-box">
              <div class="calender-period">
                <div class="select-date">
                  <input type="datetime-local"/>
                </div>
              </div>
              <period />
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
              <div class="calender-period">
                <div class="select-date">
                  <input type="datetime-local"/>
                </div>
              </div>
              <period />
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
      </div>
    </section>
  </div>
</template>

<script>

import { mapActions } from "vuex";
import Period from "@/components/home/period";

export default {
  layout: "header_footer",

  created() {
    this.setActiveTabHeader("HOME");
    this.setActiveTabSidebar("Dashboard");
  },

  data() {
    return {
      periodActive: [false, true, false, false, false, false],
      // showBul: false,
    }
  },

  components: {
    period: Period,
  },

  computed: {
    calenders() {
      return [
        {
          title: "Пн",
          number: 31,
        },
        {
          title: "Вт",
          number: 1,
        },
        {
          title: "Ср",
          number: 2,
        },
        {
          title: "Чт",
          number: 3,
        },
        {
          title: "Пт",
          number: 4,
        },
        {
          title: "Сб",
          number: 5,
        },
        {
          title: "Вс",
          number: 6,
        },
        {
          title: "Пн",
          number: 7,
        },
        {
          title: "Вт",
          number: 8,
        },
        {
          title: "Ср",
          number: 9,
        },
        {
          title: "Чт",
          number: 10,
        },
        {
          title: "Пт",
          number: 11,
        },
        {
          title: "Сб",
          number: 12,
        },
        {
          title: "Вс",
          number: 13,
        },
        {
          title: "Пн",
          number: 14,
        },
        {
          title: "Вт",
          number: 15,
        },
        {
          title: "Ср",
          number: 16,
        },
        {
          title: "Чт",
          number: 17,
        },
        {
          title: "Пт",
          number: 18,
        },
        {
          title: "Сб",
          number: 19,
        },
        {
          title: "Вс",
          number: 20,
        },
        {
          title: "Пн",
          number: 21,
        },
      ]
    },
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
    lineDataSecond() {
      return [
        {
          box: "Скалад 1",
          data: [
            {
              titlePosition: 'Изоционат',
              capacitys: [
                {
                  value: 40,
                  remainder: 30,
                },
                {
                  value: 50,
                  remainder: 60,
                }
              ],
            },
            {
              titlePosition: 'Полиол',
              capacitys: [
                {
                  value: 25,
                  remainder: 30,
                },
                {
                  value: 45,
                  remainder: 60,
                }
              ],
            }
          ]
        },
        {
          box: "Скалад 2",
          data: [
            {
              titlePosition: 'Пентан',
              capacitys: [
                {
                  value: 25,
                  remainder: 30,
                }
              ],
            },
          ]
        },
        {
          box: "Скалад 3",
          data: [
            {
              titlePosition: 'Изоционат',
              capacitys: [
                {
                  value: 100,
                  remainder: 10,
                },
                {
                  value: 25,
                  remainder: 50,
                },
                {
                  value: 25,
                  remainder: 80,
                }
              ],
            },
            {
              titlePosition: 'Полиол',
              capacitys: [
                {
                  value: 45,
                  remainder: 60,
                },
                {
                  value: 25,
                  remainder: 10,
                },
              ]
            },
          ]
        },
      ];
    },
  },

   methods: {
     ...mapActions("users", {
       setActiveTabHeader: "setActiveTabHeader",
       setActiveTabSidebar: "setActiveTabSidebar",
     }),
     // changeShowBul () {
     //   this.ShowBul = !this.ShowBul;
     // }
   }
};
</script>

<style lang="scss" scoped>

.calender {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 24px 0;

  .calender-box {
    width: calc(100% - 242px);
    display: flex;
    //justify-content: flex-end;
    align-items: center;
    overflow: auto;

    .day {
      height: 80px;
      width: 56px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 9px 12px;
      background: #FFFFFF;
      border: 2px solid #ECEDF4;
      border-radius: 11px;
      margin-right: 12px;
      margin-bottom: 6px;

      .title {
        font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        color: #B1B1BC;
        margin-bottom: 7px;
      }

      .number {
        font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 24px;
        font-weight: 500;
        text-align: center;
        color: #42435F;
      }

      &.new {
        border: 2px solid #3F51B5;
        margin-right: 0;
      }
    }

    .new {
      font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      color: #42435F;
      text-transform: uppercase;
    }

    &::before {
      content: '';
      position: absolute;
      top: 44px;
      left: 57px;
      width: 40px;
      height: 40px;
      background-image: url("~assets/img/arrow_prew.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &::after {
      content: '';
      position: absolute;
      top: 44px;
      right: 57px;
      width: 40px;
      height: 40px;
      background-image: url("~assets/img/arrow_next.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
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
  flex-wrap: wrap;
  padding: 0 36px 52px;

  .block-1 {
    width: 280px;
    margin-right: 36px;

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

      .chart.second {
        height: 358px;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .chart-header {
          padding: 3px 12px;
        }
        .chart-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          overflow: auto;
          .box {
            display: flex;
            flex-direction: column;
            padding: 6px 8px 6px 12px;
            font-weight: normal;
            font-size: 10px;
            line-height: 12px;
            color: #000000;
            border-bottom: 1px solid #E9E9E9;
            .name-block {
              margin-bottom: 6px;
            }
            .block-content {
              display: flex;
              flex-direction: column;
              padding-left: 12px;
              margin-bottom: 6px;

              .title-position {
                font-weight: normal;
                font-size: 10px;
                line-height: 12px;
                color: #000000;
              }

              .group {
                display: flex;
                flex-direction: column;
                .number-lit {
                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 15px;
                  color: #000000;
                }

                .line-progress {
                  width: 178px;
                  height: 8px;
                  background: #ECEDF4;
                  border-radius: 2px;
                  margin-left: 6px;

                  .data-progress {
                    height: 8px;
                    background: #3F51B5;
                    border-radius: 2px;
                    z-index: 2;
                  }
                }
              }
            }
          }
        }
      }
    }

  .block-2 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 48px;
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
        padding: 0 12px;
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

  .block-3 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 48px;
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
          border-right:  1px solid #E9E9E9;
          .calender-period {
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

  .index  {
    margin-right: 4px;
  }
}

.chart-data {
  width: 628px;
  height: 246px;
  border: 2px solid #E9E9E9;
  border-radius: 9px;
  margin-bottom: 37px;
}

.chart {
  width: 284px;
  border: 2px solid #E9E9E9;
  border-radius: 9px;
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

main{
  width: 100%;
  height: 100%;
}
.btn-rnd {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 30px;
  background-color: hsl(160, 98%, 39%);
  outline: none;
  color: #fff;
  font-weight: 500;
  font-size: 66.4615px;
  line-height: 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;

  position: absolute;
  bottom: 48px;
  right: 48px ;
}
.btn-rnd:hover{
  background-color: hsl(160, 98%, 36%);
}

.menu-bul {
  display: none;
  height: 80px;
  width: 110px;
  //display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F7F8FA;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px 0px 4px 4px;
}
</style>
