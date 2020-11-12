<template>
  <div class="overlay">
    <div class="modal-created">
      <div class="workshop-close">
        <div class="workshop-header">
          <div class="title-header">Добавление цеха</div>
        </div>
        <div class="workshop-body">
          <div class="first-block">
            <input type="text" placeholder="Название завода">
            <input type="text" placeholder="Местоположение">
          </div>

          <div class="second-block">
            <div class="title">Смены</div>
            <div class="shift-selection">
              <div class="time-smena_1">
                <div class="box-time">
                  <input type="text" placeholder="08:00">
                  <input type="text" placeholder="16:00">
                </div>
                <div class="box-active">
                  <input class="custom-checkbox" type="checkbox">
                  <div class="use">Использовать</div>
                  <div class="break"></div>
                </div>
              </div>
              <div class="time-smena_1">
                <div class="box-time">
                  <input type="text" placeholder="08:00">
                  <input type="text" placeholder="16:00">
                </div>
                <div class="box-active">
                  <input class="custom-checkbox" type="checkbox">
                  <div class="use">Использовать</div>
                  <div class="break"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="workshop-footer">
          <button class="btn-center" @click="$parent.$emit('closeVobjectCreated')">Применить</button>
        </div>
      </div>
      <button class="btn_icon2">
        <div class="btn-bg" @click="showAddFactory = true"></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddFactory",
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
          .time-smena_1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            .box-time {
              width: 60%;
              display: flex;
              justify-content: space-between;
              margin-right: 12px;

              input {
                width: 100px;
                height: 24px;

                padding: 3px 12px;

                font-weight: normal;
                font-size: 12px;
                line-height: 15px;
                text-align: center;
                color: #9098AF;

                border: 1px solid #9098AF;
                border-radius: 4px;

                ::placeholder {
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 15px;
                  text-align: center;
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

              .use {
                font-weight: normal;
                font-size: 10px;
                line-height: 24px;
                margin-right: 19px;
                color: #4F6072;
              }

              .break {
                width: 8px;
                height: 10px;
                background-image: url("~assets/svg/setting/time_arrow.svg");
              }
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
    left: -29px;
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
</style>
