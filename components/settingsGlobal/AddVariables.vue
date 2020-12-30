<template>
  <div class="overlay">
    <div class="modal-created">
      <div class="variables">
        <div class="variables-header">
          <div class="title-header">Добавление переменной</div>
        </div>
        <div class="variables-body">
          <div class="variables-body-box">
            <div class="first-step-object">
              <input v-model.lazy="form.name" placeholder="Имя переменной" autocomplete="off"
                     type="text"/>
              <label>Имя переменной</label>
            </div>
            <select type="text" v-model="form.reserve1"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 1).length"
            >
              <option value="0" disabled>Название резерва1</option>
              <option :value="item.id" :key="item.id" v-for="item in reserves1">{{ item.name }}</option>
            </select>
            <select type="text" v-model="form.reserve2"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 2).length"
            >
              <option value="0" disabled>Название резерва2</option>
              <option :value="item.id" :key="item.id" v-for="item in reserves2">{{ item.name }}</option>
            </select>
            <select type="text" v-model="form.organisation"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 3).length"
            >
              <option value="0" disabled>Название организации</option>
              <option :value="item.id" :key="item.id" v-for="item in organisations">{{ item.name }}</option>
            </select>
            <select type="text" v-model="form.company"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 4).length"
            >
              <option value="0" disabled>Название предприятия</option>
              <option :value="item.id" :key="item.id" v-for="item in companies">{{ item.name }}</option>
            </select>
            <select type="text" v-model="form.factory"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 5).length"
            >
              <option value="0" disabled>Название завода</option>
              <option :value="item.id" :key="item.id" v-for="item in factories">{{ item.name }}</option>
            </select>
            <select type="text" v-model="form.workshop"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 6).length"
            >
              <option value="0" disabled>Название цеха</option>
              <option :value="item.id" :key="item.id" v-for="item in workshops">{{ item.name }}</option>
            </select>
            <select type="text" v-model="form.knot"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 7).length"
            >
              <option value="0" disabled>Название узла</option>
              <option :value="item.id" :key="item.id" v-for="item in knots">{{ item.name }}</option>
            </select>
            <select type="text" v-model="form.sensor"
                    v-if="this.clientsObject.currentStructureObject.filter(item => item.id === 8).length"
            >
              <option value="0" disabled>Название датчика</option>
              <option :value="item.id" :key="item.id" v-for="item in sensors">{{ item.name }}</option>
            </select>
          </div>
          <div class="variables-body-box">
            <select type="text" v-model="form.connect" disabled v-if="id">
              <option :value="form.connect" selected>{{ form.connect }}</option>
            </select>
            <select type="text" v-model="form.connect" v-if="!id">
              <option value="" disabled>Название соединения</option>
              <option :value="item.connect" v-for="item in connections">{{ item.connect }}</option>
            </select>
            <select type="text" v-model="form.variablee">
              <option value="0" disabled>Название переменной</option>
              <option v-for="item in variableess">{{ item.name }}</option>
            </select>
            <select type="text" v-model="form.unit">
              <option value="" disabled>Единицы измерения</option>
              <option :value="item" v-for="item in units">{{ item }}</option>
            </select>
          </div>

          <div class="limits-body-box">
            <h3 class="title">Пределы</h3>
            <div class="form-group">
              <div class="first-step-object col-6">
                <input v-model.lazy="form.limitMinWarn" placeholder="Нижн. предупредительный" autocomplete="off"
                       type="number"/>
                <label>Нижн. предупредительный</label>
              </div>
              <div class="first-step-object col-6">
                <input v-model.lazy="form.limitMaxWarn" placeholder="Верхн. предупредительный" autocomplete="off"
                       type="number"/>
                <label>Верхн. предупредительный</label>
              </div>
              <!--              <input type="text" class="col-6" v-model="form.limitMinWarn" placeholder="Нижн. предупредительный">-->
              <!--              <input type="text" class="col-6" v-model="form.limitMaxWarn" placeholder="Верхн. предупредительный">-->
            </div>
            <div class="form-group">
              <div class="first-step-object col-6">
                <input v-model.lazy="form.limitMinСrash" placeholder="Нижн. аварийный" autocomplete="off"
                       type="number"/>
                <label>Нижн. аварийный</label>
              </div>
              <div class="first-step-object col-6">
                <input v-model.lazy="form.limitMaxСrash" placeholder="Верхн. аварийный" autocomplete="off"
                       type="number"/>
                <label>Верхн. аварийный</label>
              </div>
<!--              <input type="text" class="col-6" v-model="form.limitMinСrash" placeholder="Нижн. аварийный">-->
<!--              <input type="text" class="col-6" v-model="form.limitMaxСrash" placeholder="Верхн. аварийный">-->
            </div>
            <div class="form-group">
              <div class="first-step-object">
                <input v-model.lazy="form.limitSpead" placeholder="Аварийная скорость изменения переменной" autocomplete="off"
                       type="number"/>
                <label>Аварийная скорость изменения переменной</label>
              </div>
<!--              <input type="text" v-model="form.limitSpead" placeholder="Аварийная скорость изменения переменной">-->
            </div>
          </div>
          <div class="variables-body-box-row">
          </div>
        </div>
        <div class="variables-footer">
          <button class="btn-center" @click="save">Применить</button>
        </div>
      </div>
      <button class="btn_icon2">
        <div class="btn-bg" @click="$parent.$emit('closeAddForm', 'addVariables')"></div>
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AddVariables",
  props: [
    'id'
  ],
  created() {
    if (this.id) {
      let variables = this.variables.filter(item => item.id === this.id);
      this.id = variables[0].id;
      this.form.name = variables[0].name;

      this.form.reserve1 = variables[0].reserve1_id;
      this.form.reserve2 = variables[0].reserve2_id;
      this.form.organisation = variables[0].organisation_id;
      this.form.company = variables[0].company_id;
      this.form.factory = variables[0].factory_id;
      this.form.workshop = variables[0].workshop_id;
      this.form.knot = variables[0].knot_id;
      this.form.sensor = variables[0].sensor_id;

      this.form.unit = variables[0].unit;
      this.form.connect = variables[0].connect;
      this.form.variablee = variables[0].variablee;

      this.form.limitMinWarn = variables[0].limitMinWarn;
      this.form.limitMaxWarn = variables[0].limitMaxWarn;
      this.form.limitMinСrash = variables[0].limitMinСrash;
      this.form.limitMaxСrash = variables[0].limitMaxСrash;
      this.form.limitSpead = variables[0].limitSpead;
    }
  },
  data() {
    return {
      form: {
        name: '',
        reserve1: 0,
        reserve2: 0,
        organisation: 0,
        company: 0,
        factory: 0,
        workshop: 0,
        knot: 0,
        sensor: 0,
        connect: "",
        variablee: 0,
        unit: "",
        limitMinWarn: "",
        limitMaxWarn: "",
        limitMinСrash: "",
        limitMaxСrash: "",
        limitSpead: "",
      },
      variableess: [
        {
          id: 1,
          name: "переменная 1"
        }
      ],
      units: [
        'бит',
        'грамм',
        'килограмм',
        'тонн',
        'миллиметр',
        'метр',
        'ампер',
        'ом',
        'цельсий',
        'фаренгейт',
      ],
    }
  },
  methods: {
    ...mapActions('settingsGlobal', {
      updateVariables: 'updateVariables',
    }),
    save() {
      let data = {
        id: this.id,
        name: this.form.name,
        reserve1_id: this.form.reserve1,
        reserve2_id: this.form.reserve2,
        organisation_id: this.form.organisation,
        company_id: this.form.company,
        factory_id: this.form.factory,
        workshop_id: this.form.workshop,
        knot_id: this.form.knot,
        sensor_id: this.form.sensor,
        connect: this.form.connect,
        variablee: this.form.variablee,
        unit: this.form.unit,

        limitMinWarn: this.form.limitMinWarn,
        limitMaxWarn: this.form.limitMaxWarn,
        limitMinСrash: this.form.limitMinСrash,
        limitMaxСrash: this.form.limitMaxСrash,
        limitSpead: this.form.limitSpead,
      }

      for (let key in data)
        if (!data[key] && key !== 'id') {
          if (key === 'limitMinWarn' || key === 'limitMaxWarn' || key === 'limitMinСrash' || key === 'limitMaxСrash' || key === 'limitSpead')
            continue;

          if (!this.clientsObject.currentStructureObject.filter(item => item.id === 1).length && key === 'reserv1_id')
            continue;

          if (!this.clientsObject.currentStructureObject.filter(item => item.id === 2).length && key === 'reserv2_id')
            continue;

          if (!this.clientsObject.currentStructureObject.filter(item => item.id === 3).length && key === 'organisation_id')
            continue;

          if (!this.clientsObject.currentStructureObject.filter(item => item.id === 4).length && key === 'company_id')
            continue;

          if (!this.clientsObject.currentStructureObject.filter(item => item.id === 5).length && key === 'factory_id')
            continue;

          if (!this.clientsObject.currentStructureObject.filter(item => item.id === 6).length && key === 'workshop_id')
            continue;

          if (!this.clientsObject.currentStructureObject.filter(item => item.id === 7).length && key === 'knot_id')
            continue;

          if (!this.clientsObject.currentStructureObject.filter(item => item.id === 8).length && key === 'sensor_id')
            continue;

          this.$parent.$emit('showAttentionInput');
          return;
        }

      this.updateVariables(data);
      this.$parent.$emit('closeAddForm', 'addVariables')
    }
  },
  computed: {
    ...mapGetters('settingsGlobal', {
      reserves1: 'reserves1',
      reserves2: 'reserves2',
      organisations: 'organisations',
      companies: 'companies',
      factories: 'factories',
      workshops: 'workshops',
      knots: 'knots',
      sensors: 'sensors',
      variables: 'variables',
      clientsObject: 'clientsObject',
    }),
    ...mapGetters('Messages', {
      connections: 'currentDevMessages',
    }),
  }
}
</script>

<style lang="scss" scoped>
h3.title {
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(127, 145, 162, 0.6);
  margin-bottom: 12px;
}

.modal-created input {
  color: #49617B !important;
}

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

  max-width: 400px;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: #F7F8FA;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

  .variables {
    width: 100%;

    .variables-header {
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

    .variables-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;

      font-size: 12px;
      line-height: 15px;

      .variables-body-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 12px;

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
          background: #F7F8FA;

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
          background: #F7F8FA;

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
      }

      input {
        width: 376px;
        height: 24px;

        padding: 3px 6px;

        display: flex;
        align-items: center;

        border: 1px solid #9098AF;
        box-sizing: border-box;
        border-radius: 4px;
        background: #F7F8FA;

        outline: none;
      }

      ::placeholder {
        font-weight: normal;
        font-size: 12px;

        color: #9098AF;
      }
    }

    .variables-footer {
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

.form-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  .col-6 {
    width: calc(50% - 3px) !important;
  }
}

.form-group:last-child {
  margin-bottom: 0;
}

.first-step-object {
  margin-top: 0;
  border: none;
  width: 376px;
  margin-bottom: 12px;
}

.first-step-object.last {
  margin-bottom: 0;
}

.col-6 {
  margin-bottom: 0;
}

.col-6 input {
  width: 100% !important;
}
</style>
