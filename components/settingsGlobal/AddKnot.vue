<template>
  <div class="overlay">
    <div class="modal-created">
      <div class="attention-close">
        <div class="attention-header">
          <div class="title-header">Добавление узла</div>
        </div>
        <div class="attention-body">
          <input type="text" placeholder="Название узла" v-model="form.name">
          <select type="text" v-model="form.reserve1">
            <option value="0" disabled>Название резерва1</option>
            <option :value="item.id" :key="item.id" v-for="item in reserves1">{{ item.name }}</option>
          </select>
          <select type="text" v-model="form.reserve2">
            <option value="0" disabled>Название резерва2</option>
            <option :value="item.id" :key="item.id" v-for="item in reserves2">{{ item.name }}</option>
          </select>
          <select type="text" v-model="form.organisation">
            <option value="0" disabled>Название организации</option>
            <option :value="item.id" :key="item.id" v-for="item in organisations">{{ item.name }}</option>
          </select>
          <select type="text" v-model="form.company">
            <option value="0" disabled>Название предприятия</option>
            <option :value="item.id" :key="item.id" v-for="item in companies">{{ item.name }}</option>
          </select>
          <select type="text" v-model="form.factory">
            <option value="0" disabled>Название предприятия</option>
            <option :value="item.id" :key="item.id" v-for="item in factories">{{ item.name }}</option>
          </select>
          <select type="text" v-model="form.workshop">
            <option value="0" disabled>Название цеха</option>
            <option :value="item.id" :key="item.id" v-for="item in workshops">{{ item.name }}</option>
          </select>
        </div>
        <div class="attention-footer">
          <button class="btn-center" @click="save">Применить</button>
        </div>
      </div>
      <button class="btn_icon2">
        <div class="btn-bg" @click="$parent.$emit('closeAddForm', 'addKnot')"></div>
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AddKnot",
  props: [
    'id'
  ],
  created() {
    if(this.id) {
      let knots = this.knots.filter(item => item.id === this.id);
      this.id = knots[0].id;
      this.form.name = knots[0].name;
      this.form.reserve1 = knots[0].reserv1_id;
      this.form.reserve2 = knots[0].reserv2_id;
      this.form.organisation = knots[0].organisation_id;
      this.form.company = knots[0].company_id;
      this.form.factory = knots[0].factory_id;
      this.form.workshop = knots[0].workshop_id;
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
      }
    }
  },
  methods: {
    ...mapActions('settingsGlobal', {
      updateKnots: 'updateKnots',
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
      }

      for(let key in data)
        if(!data[key] && key !== 'id') {
          this.$parent.$emit('showAttentionInput');
          return;
        }

      this.updateKnots(data);
      this.$parent.$emit('closeAddForm', 'addKnot')
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
    }),
  }
}
</script>

<style lang="scss" scoped>

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

  .attention-close {
    width: 100%;

    .attention-header {
      width: 100%;
      height: 24px;
      padding-top: 3px;
      margin-bottom: 26px;
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

    .attention-body {
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

    .attention-footer {
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

  .box-modal {
    position: relative;

    width: 468px;
    height: 392px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .attention {
      width: 300px;
      height: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
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
</style>
