<template>
  <!-- <div class="overlay" v-on:click="$emit('changeShow')"> -->
  <div class="overlay">
    <div class="modal-created">
      <div class="title">Мастер создания объектов</div>

      <div class="steps">
        <div
          class="first-step step active"
          :class="{ active: arrActiveStep.firstStep, done: arrDoneStep.firstStep }"
        >1</div>
        <div class="ellipsis">
          <div
            class="small-point"
            :class="{ active: arrActiveStep.secondStep, done: arrDoneStep.secondStep }"
          ></div>
          <div
            class="small-point"
            :class="{ active: arrActiveStep.secondStep, done: arrDoneStep.secondStep }"
          ></div>
          <div
            class="small-point"
            :class="{ active: arrActiveStep.secondStep, done: arrDoneStep.secondStep }"
          ></div>
        </div>
        <div
          class="second-step step"
          :class="{ active: arrActiveStep.secondStep, done: arrDoneStep.secondStep }"
        >2</div>
        <div class="ellipsis">
          <div
            class="small-point"
            :class="{ active: arrActiveStep.thirdStep, done: arrDoneStep.thirdStep }"
          ></div>
          <div
            class="small-point"
            :class="{ active: arrActiveStep.thirdStep, done: arrDoneStep.thirdStep }"
          ></div>
          <div
            class="small-point"
            :class="{ active: arrActiveStep.thirdStep, done: arrDoneStep.thirdStep }"
          ></div>
        </div>
        <div
          class="third-step step"
          :class="{ active: arrActiveStep.thirdStep, done: arrDoneStep.thirdStep }"
        >3</div>
      </div>

      <div class="description-steps">
        <div class="description-step first-description">Описание объекта</div>
        <div class="description-step second-description">Структура объекта</div>
        <div class="description-step third-description">Заполнение структуры</div>
      </div>
      <hr />

      <div class="first-step-objects" v-show="arrActiveStep.firstStep">
        <div class="first-step-object">
          <input v-model.lazy="currentProject.projectName" placeholder="Название объекта" id="name" type="text"/>
          <label for="name">Название объекта</label>
        </div>
        <div class="first-step-object">
          <input v-model.lazy="currentProject.clientName" placeholder="Заказчик" id="client" type="text"/>
          <label for="client">Заказчик</label>
        </div>
        <div class="first-step-object">
          <input v-model.lazy="currentProject.clientContract" placeholder="Договор" id="contract" type="text"/>
          <label for="contract">Договор</label>
        </div>
      </div>

      <div class="second-step-objects" v-show="arrActiveStep.secondStep">
        <div class="second-step-object">
          <div
            class="structure-object"
            v-for="(structureItem, idx) in currentStructureObject"
            :key="idx"
          >
            <div class="level-name level">Уровень {{idx}}</div>

            <select
              class="level-value level"
              v-model="currentStructureObject[idx]"
              :disabled="idx < currentStructureObject.length-1"
            >
              <option
                v-for="type in typeStructured"
                :value="type.value"
                :disabled="type.disabled"
                :key="type.value"
              >{{ type.text }}</option>
            </select>

            <button
              class="level-remove level btn_icon level-btn btn_icon-panel"
              @click="removeLevel"
              :disabled="idx < currentStructureObject.length-1 || idx==0"
            >
              <IconifyIcon icon="baselineRemove" :style="{fontSize: '24px'}" />
            </button>

            <button
              class="level-add level btn_icon level-btn btn_icon-panel"
              @click="addLevel"
              :disabled=" idx >= (typeStructured.length-2) || currentStructureObject[idx]=='' || currentStructureObject.length !== (idx+1)"
            >
              <IconifyIcon icon="addIcon" :style="{fontSize: '24px'}" />
            </button>
          </div>
        </div>
      </div>

      <div class="third-step-objects" v-show="arrActiveStep.thirdStep">
        <div class="sub-panel">
          <div class="structure-items">
            <div
              class="structure-item"
              v-for="(structureItem, idx) in currentStructureObject"
              :key="idx"
            >{{structureItem}}</div>
            <div class="panel-btn-box">
              <button class=" level btn_icon level-btn btn_icon-panel">
                <IconifyIcon icon="bxSearchAlt2" :style="{color: '#4A627A', fontSize: '24px'}" :horizontal-flip="true" />
              </button>
              <button class=" level btn_icon level-btn btn_icon-panel">
                <IconifyIcon icon="baselineRemove" :style="{color: '#FF6F64', fontSize: '24px'}" />
              </button>
              <button class=" level btn_icon level-btn btn_icon-panel">
                <img src="~/assets/svg/ant-design_edit-outlined.svg" alt="edit" />
                <!-- <IconifyIcon icon="editOutlined" :style="{color: '#c4b70c', fontSize: '24px'}" /> -->
              </button>
              <button class=" level btn_icon btn_icon-panel level-btn">
                <IconifyIcon icon="addIcon" :style="{color: '#01C587', fontSize: '24px'}" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="tabfoot">
        <button class="tabfoot-left btn_icon">
          <div class="tabfoot_title" v-on:click="prevStep">{{this.prevbtn}}</div>
        </button>
        <button class="tabfoot-right btn_icon">
          <div class="tabfoot_title" v-on:click="nextStep">{{this.nextbtn}}</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  
  data() {
    return {
      arrActiveStep: {
        firstStep: true,
        secondStep: false,
        thirdStep: false
      },

      arrDoneStep: {
        firstStep: false,
        secondStep: false,
        thirdStep: false
      },
      currentProject: {},
      typeStructured: [
        { text: "Выбор типа узла", value: "", disabled: true },
        { text: "Холдинг", value: "Холдинг", disabled: false },
        { text: "Завод", value: "Завод", disabled: false },
        { text: "Цех", value: "Цех", disabled: false },
        { text: "Узел", value: "Узел", disabled: false },
        {
          text: "Технологические группы",
          value: "Технологические группы",
          disabled: false
        }
      ],
      selected: "",
      currentStructureObject: [""]
    };
  },

  computed: {
    nextbtn() {
      let title = this.arrActiveStep.thirdStep
        ? "Создать объект"
        : "Следующий шаг";

      return title;
    },
    prevbtn() {
      let title = this.arrActiveStep.firstStep
        ? "Вернуться к объектам"
        : "Предыдущий шаг";

      return title;
    }
  },
  methods: {
    ...mapActions("Clients", {
      updateCurrentClient: "updateCurrentClient",
      updateCurrentStructureObject: "updateCurrentStructureObject"
    }),

    nextStep() {
      if (this.arrActiveStep.firstStep) {
        this.arrActiveStep.firstStep = false;
        this.arrActiveStep.secondStep = true;
        this.arrActiveStep.thirdStep = false;

        this.arrDoneStep.firstStep = true;
        this.arrDoneStep.secondStep = false;
        this.arrDoneStep.thirdStep = false;
      } else if (this.arrActiveStep.secondStep) {
        this.arrActiveStep.firstStep = false;
        this.arrActiveStep.secondStep = false;
        this.arrActiveStep.thirdStep = true;

        this.arrDoneStep.firstStep = true;
        this.arrDoneStep.secondStep = true;
        this.arrDoneStep.thirdStep = false;
      } else {
        this.arrActiveStep.firstStep = true;
        this.arrActiveStep.secondStep = false;
        this.arrActiveStep.thirdStep = false;

        this.arrDoneStep.firstStep = false;
        this.arrDoneStep.secondStep = false;
        this.arrDoneStep.thirdStep = false;

        this.$emit("changeShow");
      }
    },
    prevStep() {
      if (this.arrActiveStep.thirdStep) {
        this.arrActiveStep.firstStep = false;
        this.arrActiveStep.secondStep = true;
        this.arrActiveStep.thirdStep = false;

        this.arrDoneStep.firstStep = true;
        this.arrDoneStep.secondStep = false;
        this.arrDoneStep.thirdStep = false;
      } else if (this.arrActiveStep.secondStep) {
        this.arrActiveStep.firstStep = true;
        this.arrActiveStep.secondStep = false;
        this.arrActiveStep.thirdStep = false;

        this.arrDoneStep.firstStep = false;
        this.arrDoneStep.secondStep = false;
        this.arrDoneStep.thirdStep = false;
      } else {
        this.$emit("changeShow");
      }
    },
    addLevel() {
      this.currentStructureObject.push("");
    },
    removeLevel() {
      this.currentStructureObject.pop();
    },

    noChange() {
      1 + 1;
    }
  }
};
</script>

<style scoped>

.sub-panel{
    margin-left: 66px;
}
.structure-items {

  width: 813px;
  display: flex;
  flex-direction: row;

  border-bottom: 1px solid #dde4ee;
}
.panel-btn-box {
  margin-left: auto;
  margin-right: 12px;
  display: flex;
  flex-direction: row;
}
.structure-item {
  height: 24px;
  min-width: 72px;

  margin-left: 6px;

  padding: 0 6px;

  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #8496aa;

  cursor: pointer;

  position: relative;
}
.structure-item:hover:before {
  content: "";
  width: 100%;
  border-bottom: 1px solid #2dc2fa;
  position: absolute;
  bottom: -1px;
  left: 0;
  
}

.active-item:before {
  content: "";
  width: 100%;
  border-bottom: 1px solid #2dc2fa;
  position: absolute;
  bottom: -1px;
  left: 0;
  
}

.structure-object {
  display: flex;
  flex-direction: row;
  margin-top: 24px;
}
.level-name {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #00c484;
  width: 100px;
  height: 24px;
}
.level-value {
  width: 246px;
  height: 24px;

  border: 1px solid #9098af;
  border-radius: 4px;

  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;

  color: #778a9c;
}
.level-add {
  color: #01c587;
}
.level-remove {
  color: #ff6f64;
}
.level-btn {
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-left: 6px;

  border-radius: 4px;
}

.btn_icon {
  background: none;
  border: none;

  display: flex;
  justify-content: baseline;

  outline: none;
}
.btn_icon-panel {
  align-items: center;
}
.tabfoot {
  margin-top: auto;

  width: 100%;
  display: flex;
  flex-direction: row;
}
button{
  padding: 0;
  font-style: 24px;
}

.tabfoot button {
  padding: 0;
  width: 50%;
  height: 36px;
}
.tabfoot button:hover {
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
}

.tabfoot-left {
  background-color: hsl(211, 100%, 90%);
}
.tabfoot-left:hover {
  background-color: hsl(211, 100%, 87%);
}
.tabfoot-right {
  background-color: hsl(134, 41%, 88%);
}
.tabfoot-right:hover {
  background-color: hsl(134, 41%, 85%);
}

.tabfoot_title {
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding-top: 9px;
  text-align: center;
}

.third-step-objects {
  width: 100%;
  background: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  justify-content: center;
}
.second-step-objects {
  width: 100%;
  background: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  justify-content: center;
}
.second-step-object {
  margin-top: 24px;
  margin-left: 72px;
}

.first-step-objects {
  width: 100%;
  background: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.first-step-object {
  position: relative;
  margin-top: 24px;
  height: 24px;
  width: 740px;
  background: inherit;

  border: 1px solid #9098af;
  border-radius: 4px;

  font-size: 12px;
  line-height: 15px;

  color: #9098af;

  outline: none;
}
input {
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 4px;
  border: none;

  padding: 0 5px;

  transition: 0.1s;
}

input + label {
  position: absolute;
  top: -24px;
  left: 20px;
  transition: all 0.1s;
  opacity: 1;
  background: white;

  padding: 0 5px;
  transform: translateY(calc(50% + 2px));
}

input:placeholder-shown + label {
  opacity: 0;
  transform: translateY(100%);
}


input:focus + label {
  opacity: 1;
  transform: translateY(calc(50% + 2px));
  color: #00c484;
  
}

input:focus:placeholder-shown {
  -webkit-text-fill-color: transparent;
}

hr {
  border: none; /* Убираем границу для браузера Firefox */
  width: 100%;
  height: 1px;
  margin-top: 36px;
  background-color: #778a9c;
  color: #778a9c;
}
.first-description {
  margin-left: auto;
}
.second-description {
  margin-left: 162px;
  margin-right: 140px;
}
.third-description {
  margin-right: auto;
}
.description-steps {
  margin-top: 6px;

  height: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #778a9c;
}
.small-point {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #c3cbd7;
}

.ellipsis {
  display: flex;
  width: 30px;
  height: 8px;
  justify-content: space-between;
}

.step {
  width: 56px;
  height: 56px;
  border-radius: 28px;

  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  color: #c3cbd7;
  border: 1px solid #c3cbd7;
}

.steps {
  margin-top: 24px;
  width: 660px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
}

.title {
  width: 368px;
  height: 38px;

  margin-top: 24px;

  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #4a627a;
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
  top: 200px;
  left: 550px;

  width: 880px;
  height: 550px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: #f7f8fa;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}

.active {
  background: #2ec3fb;
  border-color: #2ec3fb;
  color: #ffffff;
}

.done {
  background: #00c484;
  border-color: #00c484;
  color: #ffffff;
}
</style>