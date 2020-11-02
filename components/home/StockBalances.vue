<template>
  <div class="chart second">
    <div class="chart-header">
      <div class="title">Остатки на складах</div>
      <div class="bul"  @click="StockBalances.modalBul=!StockBalances.modalBul">
        <span></span>
      </div>
      <div
          class="menu-bul"
          v-if="StockBalances.modalBul"
      >
        <div
            class="btn-bul"
            @click="StockBalances.modalBul=false"
        >Скрыть
        </div>
        <div class="btn-bul">Обновить</div>
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
</template>

<script>
export default {
  name: "StockBalances",
  data() {
    return {
      StockBalances: {
        modalBul: false,
        cardShow: true,
      },
    }
  },
  computed: {
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

}
</script>

<style lang="scss" scoped>

.chart {
  width: 284px;
  border: 2px solid #E9E9E9;
  border-radius: 9px;
}
.chart.second {
  height: 358px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
.chart-header {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E9E9E9;
  padding: 3px 6px 3px 12px;

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
