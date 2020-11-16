<template>
  <div class="overlay">
    <div class="modal-created">
      <div class="workshop-close">
        <div class="workshop-header">
          <div class="title-header">Добавление цеха</div>
        </div>
        <div class="workshop-body">
          <div class="first-block">
            <input type="text" placeholder="Название цеха">
            <input type="text" placeholder="Название завода">
          </div>

          <!--Смена-->
          <div class="second-block">
            <div class="title">Смены</div>
            <div class="shift-selection">

              <div class="time-smena_iteam">
                <div class="box-time">
                  <div class="btn time-data">08:00</div>
                  <div class="btn time-data">16:00</div>
                </div>
                <div class="box-active">
                  <input id="cb1" class="custom-checkbox" type="checkbox">
                  <label for="cb1" class="use">Использовать</label>
                  <div
                      class="break"
                      @click="showTime = !showTime"
                      :class="arrowRotate"
                  ></div>
                </div>
              </div>
              <div class="time-smena_iteam">
                <div class="box-time">
                  <div class="btn time-data">16:00</div>
                  <div class="btn time-data">00:00</div>
                </div>
                <div class="box-active">
                  <input id="cb2" class="custom-checkbox" type="checkbox">
                  <label for="cb2" class="use">Использовать</label>
                  <div
                      class="break"
                      @click="showTime = !showTime"
                      :class="arrowRotate"
                  ></div>
                </div>
              </div>
              <div class="time-smena_iteam">
                <div class="box-time">
                  <div class="btn time-data">00:00</div>
                  <div class="btn time-data">08:00</div>
                </div>
                <div class="box-active">
                  <input id="cb3" class="custom-checkbox" type="checkbox">
                  <label for="cb3" class="use">Использовать</label>
                  <div
                      class="break"
                      @click="showTime = !showTime"
                      :class="arrowRotate"
                  ></div>
                </div>
              </div>
              <div class="time-smena_iteam">
                <div class="box-time">
                  <div class="btn time-data">08:00</div>
                  <div class="btn time-data">08:00</div>
                </div>
                <div class="box-active">
                  <input id="cb4" class="custom-checkbox" type="checkbox">
                  <label for="cb4" class="use">Использовать</label>
                  <div
                      class="break"
                      @click="showTime = !showTime"
                      :class="arrowRotate"
                  ></div>
                </div>
              </div>

              <!--Перерывы-->
              <div class="breaks" v-if="showTime">
                <div class="dreak-title">Перерывы</div>
                <div class="time-smena_iteam section-time">
                  <div class="box-time">
                    <div class="btn time-data">08:00</div>
                    <div class="btn time-data">16:00</div>
                  </div>
                  <div class="box-active">
                    <input id="cb12" class="custom-checkbox" type="checkbox">
                    <label for="cb12" class="use">Использовать</label>
                </div>
              </div>
                <div class="time-smena_iteam section-time">
                  <div class="box-time">
                    <div class="btn time-data">08:00</div>
                    <div class="btn time-data">16:00</div>
                  </div>
                  <div class="box-active">
                    <input id="cb22" class="custom-checkbox" type="checkbox">
                    <label for="cb22" class="use">Использовать</label>
                  </div>
                </div>
                <div class="time-smena_iteam section-time">
                  <div class="box-time">
                    <div class="btn time-data">08:00</div>
                    <div class="btn time-data">16:00</div>
                  </div>
                  <div class="box-active">
                    <input id="cb32" class="custom-checkbox" type="checkbox">
                    <label for="cb32" class="use">Использовать</label>
                  </div>
                </div>
                <div class="time-smena_iteam section-time">
                  <div class="box-time">
                    <div class="btn time-data">08:00</div>
                    <div class="btn time-data">16:00</div>
                  </div>
                  <div class="box-active">
                    <input id="cb42" class="custom-checkbox" type="checkbox">
                    <label for="cb42" class="use">Использовать</label>
                  </div>
                </div>
            </div>

          </div>
        </div>
        <div class="workshop-footer">
          <button class="btn-center" @click="$parent.$emit('closeVobjectCreated')">Применить</button>
        </div>
      </div>
      </div>
      <button class="btn_icon2">
        <div class="btn-bg" @click="showAddFactory = true"></div>
      </button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "AddFactory",

  data() {
    return {
      showTime: false,
    }
  },

  computed: {
    arrowRotate() {
      let arrow = 'turn-arrow';
      if (this.showTime === true) {
        return arrow;
      }
      return true;
    },
  },
}
</script>

<style lang="scss" scoped>

.overlay {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 19;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.062);
}

.modal-created {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: #F7F8FA;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

  .workshop-close {
    width: 100%;

    .workshop-header {
      width: 100%;
      height: 24px;
      padding-top: 3px;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      .title-header {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #4B6075;
      }
    }

    .workshop-body {
      .first-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;

        font-size: 12px;
        line-height: 15px;

        input {
          width: 376px;
          height: 24px;

          margin-bottom: 12px;
          padding: 3px 6px;

          display: flex;
          align-items: center;

          border: 1px solid #9098AF;
          box-sizing: border-box;
          border-radius: 4px;

          outline: none;
        }

        ::placeholder {
          font-weight: normal;
          font-size: 12px;

          color: #9098AF;
        }
      }

      .second-block {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding-left: 12px;
        padding-right: 12px;

        .title {
          margin-bottom: 12px;
          font-weight: 600;
          font-size: 12px;
          line-height: 15px;
          color: rgba(127, 145, 162, 0.6);
        }

        .shift-selection {
          width: 100%;
          display: flex;
          flex-direction: column;
          .time-smena_iteam {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
          }
        }

        .breaks {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-left: 12px;
          padding-right: 12px;

          .dreak-title {
            padding: 3px;
            margin-bottom: 12px;

            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            color: rgba(127, 145, 162, 0.6);
          }

          .section-time {
            .box-time {
              margin-right: 25px;
            }
          }
        }
      }
    }

    .workshop-footer {
      width: 100%;
      height: 36px;
      display: flex;

      .btn-center {
        width: 100%;
        height: 36px;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 12px;

        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #0B2E13;
        background: #D4EDDA;;

        outline: none;
        cursor: pointer;

        &:hover {
          box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
        }
      }
    }
  }

  .btn_icon2 {
    position: absolute;
    top: 0;
    left: -34px;
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    justify-content: baseline;
    outline: none;

    .btn-bg {
      width: 24px;
      height: 24px;
      background-image: url("~assets/svg/clear_24px.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      &:hover {
        background-image: url("~assets/svg/setting/hovClose.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
}

input[type="checkbox"]:checked,
input[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

input[type="checkbox"]:checked + label,
input[type="checkbox"]:not(:checked) + label {
  display: inline-block;
  position: relative;
  padding-left: 15px;
  line-height: 20px;
  cursor: pointer;
}

input[type="checkbox"]:checked + label:before,
input[type="checkbox"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 2px;
  border: 1px solid #4F6072;
  background-color: #F7F8FA;
}

input[type="checkbox"]:checked + label:before {
  border-radius: 2px;
}

input[type="checkbox"]:checked + label:after,
input[type="checkbox"]:not(:checked) + label:after {
  content: "";
  position: absolute;
}

input[type="checkbox"]:checked + label:after,
input[type="checkbox"]:not(:checked) + label:after {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 2px;
  border: 1px solid #4F6072;
  background-color: #4F6072;
  transition: 0.2s linear;
  outline: none;
}

input[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
}

input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

.box-time {
  width: 60%;
  display: flex;
  margin-right: 12px;

  .btn {
    width: 100px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 3px 12px;
    text-align: center;

    border: 1px solid #9098AF;
    box-sizing: border-box;
    border-radius: 4px;

    &:first-child {
      margin-right: 12px;
    }

    &.time-data {
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;

      color: #9098AF;
    }
  }
}

.box-active {
  width: 40%;
  display: flex;
  align-items: center;

  .custom-checkbox {
    margin-right: 6px;
  }

  .break {
    display: block;
    width: 8px;
    height: 10px;
    background-image: url("~assets/svg/setting/time_arrow.svg");
  }

  .turn-arrow {
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}

.use {
  font-weight: normal;
  font-size: 10px;
  line-height: 24px;
  margin-right: 19px;
  color: #4F6072;
}

.breaks {
  position: absolute;
  top: 0;
  right: -370px;
  width: 400px;
  height: 180px;

  background: #F7F8FA;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}

</style>
