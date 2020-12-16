<template>
  <div class="overlay">
    <div class="modal-created">
      <div class="sensor">
        <div class="sensor-header">
          <div class="title-header">Добавление датчика</div>
        </div>
        <div class="sensor-body">
          <div class="sensor-body-box">
            <input type="text" v-model="form.name" placeholder="Название датчика">
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
          </div>
          <input type="text" placeholder="Обозначение на схемах" v-model="form.shema">

        </div>
        <div class="sensor-footer">
          <button class="btn-center" @click="save">Применить</button>
        </div>
      </div>
      <button class="btn_icon2">
        <div class="btn-bg" @click="$parent.$emit('closeAddForm', 'addSensor')"></div>
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AddSensor",
  props: [
    'id'
  ],
  created() {
    if(this.id) {
      let sensors = this.sensors.filter(item => item.id === this.id);
      this.id = sensors[0].id;
      this.form.name = sensors[0].name;
      this.form.reserve1 = sensors[0].reserv1_id;
      this.form.reserve2 = sensors[0].reserv2_id;
      this.form.organisation = sensors[0].organisation_id;
      this.form.company = sensors[0].company_id;
      this.form.factory = sensors[0].factory_id;
      this.form.workshop = sensors[0].workshop_id;
      this.form.knot = sensors[0].knot_id;
      this.form.shema = sensors[0].shema;
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
        shema: "",
      }
    }
  },
  methods: {
    ...mapActions('settingsGlobal', {
      updateSensors: 'updateSensors',
    }),
    save() {
      let data = {
        id: this.id,
        name: this.form.name,
        reserv1_id: this.form.reserve1,
        reserv2_id: this.form.reserve2,
        organisation_id: this.form.organisation,
        company_id: this.form.company,
        factory_id: this.form.factory,
        workshop_id: this.form.workshop,
        knot_id: this.form.knot,
        shema: this.form.shema,
      }

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

      this.updateSensors(data);
      this.$parent.$emit('closeAddForm', 'addSensor')
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
      clientsObject: 'clientsObject',
    }),
  }
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

  max-width: 400px;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: #F7F8FA;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

  .sensor {
    width: 100%;
    .sensor-header {
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

    .sensor-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;

      font-size: 12px;
      line-height: 15px;

      .sensor-body-box {
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

        outline: none;
      }

      ::placeholder {
        font-weight: normal;
        font-size: 12px;

        color: #9098AF;
      }
    }

    .sensor-footer {
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
</style>
