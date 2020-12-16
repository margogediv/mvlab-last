<template>
  <div class="overlay">
    <div class="modal-created">
      <div class="workshop-close">
        <div class="workshop-header">
          <div class="title-header">Добавление цеха</div>
        </div>
        <div class="workshop-body">
          <div class="first-block">
            <input type="text" v-model="workshop" placeholder="Название цеха">
            <select type="text" v-model="reserve1"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 1).length"
            >
              <option value="0" disabled>Название резерва1</option>
              <option :value="item.id" :key="item.id" v-for="item in reserves1">{{ item.name }}</option>
            </select>
            <select type="text" v-model="reserve2"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 2).length"
            >
              <option value="0" disabled>Название резерва2</option>
              <option :value="item.id" :key="item.id" v-for="item in reserves2">{{ item.name }}</option>
            </select>
            <select type="text" v-model="organisation"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 3).length"
            >
              <option value="0" disabled>Название организации</option>
              <option :value="item.id" :key="item.id" v-for="item in organisations">{{ item.name }}</option>
            </select>
            <select type="text" v-model="company"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 4).length"
            >
              <option value="0" disabled>Название предприятия</option>
              <option :value="item.id" :key="item.id" v-for="item in companies">{{ item.name }}</option>
            </select>
            <select type="text" v-model="factory"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 5).length"
            >
              <option value="0" disabled>Название завода</option>
              <option :value="item.id" :key="item.id" v-for="item in factories">{{ item.name }}</option>
            </select>
          </div>

          <!--Смена-->
          <div class="second-block">
            <div class="title">Смены</div>
            <div class="shift-selection">

              <div class="time-smena_iteam">
                <div class="box-time">
                  <el-time-select
                      placeholder="08:00"
                      v-model="ranges[0].start"
                      prefix-icon="false"
                      :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        }">
                  </el-time-select>
                  <el-time-select
                      placeholder="18:00"
                      v-model="ranges[0].end"
                      prefix-icon="false"
                      :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        minTime: ranges[0].start
                      }">
                  </el-time-select>
                </div>
                <div class="box-active">
                  <input id="cb1" class="custom-checkbox" type="checkbox" v-model="ranges[0].is_active">
                  <label for="cb1" class="use">Использовать</label>
                  <div
                      class="break"
                      @click="showBreakForm(0)"
                      :class="{'turn-arrow': ranges[0].showBreaks}"
                  ></div>
                </div>
              </div>
              <div class="time-smena_iteam">
                <div class="box-time">
                  <el-time-select
                      placeholder="16:00"
                      v-model="ranges[1].start"
                      prefix-icon="false"
                      :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        }">
                  </el-time-select>
                  <el-time-select
                      placeholder="00:00"
                      v-model="ranges[1].end"
                      prefix-icon="false"
                      :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        minTime: ranges[1].start
                      }">
                  </el-time-select>
                </div>
                <div class="box-active">
                  <input id="cb2" class="custom-checkbox" type="checkbox" v-model="ranges[1].is_active">
                  <label for="cb2" class="use">Использовать</label>
                  <div
                      class="break"
                      @click="showBreakForm(1)"
                      :class="{'turn-arrow': ranges[1].showBreaks}"
                  ></div>
                </div>
              </div>
              <div class="time-smena_iteam">
                <div class="box-time">
                  <el-time-select
                      placeholder="00:00"
                      v-model="ranges[2].start"
                      prefix-icon="false"
                      :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        }">
                  </el-time-select>
                  <el-time-select
                      placeholder="08:00"
                      v-model="ranges[2].end"
                      prefix-icon="false"
                      :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        minTime: ranges[2].start
                      }">
                  </el-time-select>
                </div>
                <div class="box-active">
                  <input id="cb3" class="custom-checkbox" type="checkbox" v-model="ranges[2].is_active">
                  <label for="cb3" class="use">Использовать</label>
                  <div
                      class="break"
                      @click="showBreakForm(2)"
                      :class="{'turn-arrow': ranges[2].showBreaks}"
                  ></div>
                </div>
              </div>
              <div class="time-smena_iteam">
                <div class="box-time">
                  <el-time-select
                      placeholder="08:00"
                      v-model="ranges[3].start"
                      prefix-icon="false"
                      :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        }">
                  </el-time-select>
                  <el-time-select
                      placeholder="08:00"
                      v-model="ranges[3].end"
                      prefix-icon="false"
                      :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        minTime: ranges[3].start
                      }">
                  </el-time-select>
                </div>
                <div class="box-active">
                  <input id="cb4" class="custom-checkbox" type="checkbox" v-model="ranges[3].is_active">
                  <label for="cb4" class="use">Использовать</label>
                  <div
                      class="break"
                      @click="showBreakForm(3)"
                      :class="{'turn-arrow': ranges[3].showBreaks}"
                  ></div>
                </div>
              </div>

              <!--Перерывы-->
              <div class="breaks" v-if="showTime">
                <div class="dreak-title">Перерывы</div>
                <div class="time-smena_iteam section-time">
                  <div class="box-time">
                    <el-time-select
                        placeholder="08:00"
                        v-model="ranges[currentIndexRange].breaks[0].start"
                        prefix-icon="false"
                        :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        }">
                    </el-time-select>
                    <el-time-select
                        placeholder="18:00"
                        v-model="ranges[currentIndexRange].breaks[0].end"
                        prefix-icon="false"
                        :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        minTime: ranges[currentIndexRange].breaks[0].start
                      }">
                    </el-time-select>
                  </div>
                  <div class="box-active">
                    <input id="cb12" class="custom-checkbox" type="checkbox"
                           v-model="ranges[currentIndexRange].breaks[0].is_active">
                    <label for="cb12" class="use">Использовать</label>
                  </div>
                </div>
                <div class="time-smena_iteam section-time">
                  <div class="box-time">
                    <el-time-select
                        placeholder="08:00"
                        v-model="ranges[currentIndexRange].breaks[1].start"
                        prefix-icon="false"
                        :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        }">
                    </el-time-select>
                    <el-time-select
                        placeholder="16:00"
                        v-model="ranges[currentIndexRange].breaks[1].end"
                        prefix-icon="false"
                        :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        minTime: ranges[currentIndexRange].breaks[1].start
                      }">
                    </el-time-select>
                  </div>
                  <div class="box-active">
                    <input id="cb22" class="custom-checkbox" type="checkbox"
                           v-model="ranges[currentIndexRange].breaks[1].is_active">
                    <label for="cb22" class="use">Использовать</label>
                  </div>
                </div>
                <div class="time-smena_iteam section-time">
                  <div class="box-time">
                    <el-time-select
                        placeholder="08:00"
                        v-model="ranges[currentIndexRange].breaks[2].start"
                        prefix-icon="false"
                        :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        }">
                    </el-time-select>
                    <el-time-select
                        placeholder="16:00"
                        v-model="ranges[currentIndexRange].breaks[2].end"
                        prefix-icon="false"
                        :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        minTime: ranges[currentIndexRange].breaks[2].start
                      }">
                    </el-time-select>
                  </div>
                  <div class="box-active">
                    <input id="cb32" class="custom-checkbox" type="checkbox"
                           v-model="ranges[currentIndexRange].breaks[2].is_active">
                    <label for="cb32" class="use">Использовать</label>
                  </div>
                </div>
                <div class="time-smena_iteam section-time">
                  <div class="box-time">
                    <el-time-select
                        placeholder="08:00"
                        v-model="ranges[currentIndexRange].breaks[3].start"
                        prefix-icon="false"
                        :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        }">
                    </el-time-select>
                    <el-time-select
                        placeholder="16:00"
                        v-model="ranges[currentIndexRange].breaks[3].end"
                        prefix-icon="false"
                        :picker-options="{
                          start: '00:00',
                          step: '00:30',
                          end: '23:59',
                        minTime: ranges[currentIndexRange].breaks[3].start
                      }">
                    </el-time-select>
                  </div>
                  <div class="box-active">
                    <input id="cb42" class="custom-checkbox" type="checkbox"
                           v-model="ranges[currentIndexRange].breaks[3].is_active">
                    <label for="cb42" class="use">Использовать</label>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="workshop-footer">
            <button class="btn-center" @click="save">Применить</button>
          </div>
        </div>
      </div>
      <button class="btn_icon2">
        <div class="btn-bg" @click="$parent.$emit('closeAddWorkshop')"></div>
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AddWorkshop",

  data() {
    return {
      showTime: false,
      currentIndexRange: 0,
      workshop: '',
      reserve1: 0,
      reserve2: 0,
      organisation: 0,
      company: 0,
      factory: 0,
      ranges: [
        {
          start: null,
          end: null,
          is_active: null,
          showBreaks: false,
          breaks: [
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            }
          ]
        },
        {
          start: null,
          end: null,
          is_active: null,
          showBreaks: false,
          breaks: [
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            }
          ]
        },
        {
          start: null,
          end: null,
          is_active: null,
          showBreaks: false,
          breaks: [
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            }
          ]
        },
        {
          start: null,
          end: null,
          is_active: null,
          showBreaks: false,
          breaks: [
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            },
            {
              start: null,
              end: null,
              is_active: false,
            }
          ]
        },
      ],
    }
  },

  props: [
      'id'
  ],

  created() {
    if(this.id) {
      let workshop = this.workshops.filter(item => item.id === this.id);
      this.id = workshop[0].id;
      this.workshop = workshop[0].name;
      this.reserve1 = workshop[0].reserv1_id;
      this.reserve2 = workshop[0].reserv2_id;
      this.organisation = workshop[0].organisation_id;
      this.company = workshop[0].company_id;
      this.factory = workshop[0].factory_id;
      this.ranges = workshop[0].ranges;
    }
  },

  methods: {
    ...mapActions('settingsGlobal', {
      updateWorkshop: 'updateWorkshop',
    }),
    showBreakForm(index) {
      this.currentIndexRange = index;
      for (let i = 0; i !== index && i < 4; i++)
        this.ranges[i].showBreaks = false;

      this.ranges[index].showBreaks = !this.ranges[index].showBreaks;
      this.showTime = this.ranges[index].showBreaks;

    },
    save() {
      let data = {
            id: this.id,
            name: this.workshop,
            reserv1_id: this.reserve1,
            reserv2_id: this.reserve2,
            organisation_id: this.organisation,
            company_id: this.company,
            factory_id: this.factory,
            ranges: this.ranges,
      };

      for(let key in data)
        if(!data[key] && key !== 'id') {
          if(!this.clientsObject.currentStructureObject.filter(item => item.id === 1).length && key === 'reserv1_id')
            continue;

          if(!this.clientsObject.currentStructureObject.filter(item => item.id === 2).length && key === 'reserv2_id')
            continue;

          if(!this.clientsObject.currentStructureObject.filter(item => item.id === 3).length && key === 'organisation_id')
            continue;

          if(!this.clientsObject.currentStructureObject.filter(item => item.id === 4).length && key === 'company_id')
            continue;

          if(!this.clientsObject.currentStructureObject.filter(item => item.id === 5).length && key === 'factory_id')
            continue;

          if(!this.clientsObject.currentStructureObject.filter(item => item.id === 6).length && key === 'workshop_id')
            continue;

          if(!this.clientsObject.currentStructureObject.filter(item => item.id === 7).length && key === 'knot_id')
            continue;

          if(!this.clientsObject.currentStructureObject.filter(item => item.id === 8).length && key === 'sensor_id')
            continue;
          this.$parent.$emit('showAttentionInput');
          return;
        }

      this.updateWorkshop(data);
      this.$parent.$emit('closeAddWorkshop');
    },
  },
  computed: {
    ...mapGetters('settingsGlobal', {
      reserves1: 'reserves1',
      reserves2: 'reserves2',
      organisations: 'organisations',
      companies: 'companies',
      factories: 'factories',
      workshops: 'workshops',
      clientsObject: 'clientsObject',
    }),
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

        select, option {
          width: 376px;
          height: 24px;

          margin-bottom: 12px;
          padding: 3px 6px;

          display: flex;
          align-items: center;

          border: 1px solid #9098AF;
          box-sizing: border-box;
          border-radius: 4px;

          font-weight: normal;
          font-size: 12px;

          color: #9098AF;

          outline: none;
        }

        input {
          width: 376px;
          height: 24px;

          margin-bottom: 12px;
          padding: 3px 9px;

          display: flex;
          align-items: center;

          border: 1px solid #9098AF;
          box-sizing: border-box;
          border-radius: 4px;

          font-weight: normal;
          font-size: 12px;

          color: #9098AF;

          outline: none;
        }

        ::placeholder {
          font-weight: normal;
          font-size: 12px;

          color: #9098AF;
        }

        .box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;

          font-size: 12px;
          line-height: 15px;

          .select {
            position: relative;

            option[disabled="disabled"] {
              background: #e1dbdb;
            }

            &::before {
              content: "";
              display: block;
              background-image: url('~assets/svg/setting/select_arrow.svg');
              background-repeat: no-repeat;
              background-size: 100%;
              width: 10px;
              height: 6px;
              position: absolute;
              top: 50%;
              right: 20px;
              transform: translateY(-50%);
              z-index: 1;
            }
          }
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

<style lang="scss">
//datetime
.el-input__inner {
  width: 100px;
  height: 24px;
  font-size: 12px;
}

.el-popper {
  margin-top: 6px !important;
}

.el-picker-panel.time-select.el-popper {
  z-index: 10;
}
</style>
