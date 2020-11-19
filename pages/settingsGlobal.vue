<template>
  <div>
    <div class="top-panel">
      <div class="project-box">Объекты</div>
      <div class="search-wrapper">
        <input type="text" v-model="search" placeholder="Search title.."/>
        <IconifyIcon icon="bxSearchAlt2" :style="{fontSize: '24px'}" class="input-icon"/>
      </div>
      <div class="btn-box">

        <button
            class="btn-project btn-del"
            v-if="clientsObject"
            @click="changeshowDelObject"
        >
          <span class="btn-title">Удалить</span>
          <span class="btn-svg"></span>
        </button>

        <button
            class="btn-project btn-edit"
            v-if="clientsObject"
            @click="changeshowCreated"
        >
          <span class="btn-title">Изменить</span>
          <span class="btn-svg"></span>
        </button>

        <button
            class="btn-project btn-add"
            v-if="!clientsObject"
            v-on:click="changeshowCreated"
        >
          <span class="btn-title">Добавить</span>
          <span class="btn-svg"></span>
        </button>

      </div>
    </div>
    <div class="table-objects">
      <table>
        <thead>
        <tr class="table-head">
          <th>Название объекта</th>
          <th>Заказчик</th>
          <th>Договор</th>
          <th>Дата создания</th>
          <th>Дата изменения</th>
        </tr>
        </thead>
        <tbody>
        <tr class="table-body" v-if="clientsObject">
          <td>
            <input readonly class="input-td" type="text" v-bind:value="clientsObject.name_object"/>
          </td>
          <td>
            <input readonly class="input-td" type="text" v-bind:value="clientsObject.customer"/>
          </td>
          <td>
            <input readonly class="input-td" type="text" v-bind:value="clientsObject.contact"/>
          </td>
          <td>
            <input readonly class="input-td" type="text" v-bind:value="clientsObject.created_at"/>
          </td>
          <td>
            <input readonly class="input-td" type="text" v-bind:value="clientsObject.updated_at"/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="box" v-if="clientsObject">
      <div class="structure-items">
        <template v-if="clientsObject && clientsObject.hasOwnProperty('currentStructureObject')">
          <div
              class="structure-item"
              :class="{active: currentTab === item.id}"
              v-for="(item, idx) in clientsObject.currentStructureObject"
              :key="idx"
              @click="setTab(item.id)"
          >{{ item.value }}
          </div>
        </template>
        <div class="panel-btn-box">
          <button class=" level btn_icon level-btn btn_icon-panel">
            <span class="search"></span>
            <!--            <IconifyIcon icon="bxSearchAlt2" :style="{color: '#4A627A', fontSize: '24px'}" :horizontal-flip="true" />-->
          </button>
          <button class=" level btn_icon level-btn btn_icon-panel">
            <span class="minus"></span>
            <!--            <IconifyIcon icon="baselineRemove" :style="{color: '#FF6F64', fontSize: '24px'}" />-->
          </button>
          <button class=" level btn_icon level-btn btn_icon-panel">
            <span class="edit"></span>
            <!-- <IconifyIcon icon="editOutlined" :style="{color: '#c4b70c', fontSize: '24px'}" /> -->
          </button>
          <button
              class=" level btn_icon btn_icon-panel level-btn"
              @click=""
          >
            <span class="plus_green" @click="showFormAdd"></span>
            <!--            <IconifyIcon icon="addIcon" :style="{color: '#01C587', fontSize: '24px'}" />-->
          </button>
        </div>
      </div>
    </div>

    <div class="table-objects">
      <table>
        <thead>
        <tr class="table-head">
          <th v-for="(value, key) in filterTypeStructuredTable.data.title">
            {{ value }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="table-body" v-for="row in filterTypeStructuredTable.data.rows">
          <td v-for="(value, key) in row">
            {{ value }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <delObject v-if="showDelObject" :clientObject="clientsObject"></delObject>
    <VobjectCreated v-if="showCreated" v-on:changeShow="changeshowCreated"></VobjectCreated>

    <addFactory v-if="showAddForm.addFactory"></addFactory>
    <addWorkshop v-if="showAddForm.addWorkshop"></addWorkshop>
    <addKnot v-if="showAddForm.addKnot"></addKnot>
    <addSensor v-if="showAddForm.addSensor"></addSensor>
    <addVariables v-if="showAddForm.addVariables"></addVariables>
  </div>
</template>

<script>
import VobjectCreated from "@/components/VobjectCreated";
import AddFactory from "@/components/settingsGlobal/AddFactory";
import AddWorkshop from "@/components/settingsGlobal/AddWorkshop";
import DelObject from "@/components/settingsGlobal/DelObject";
import AddKnot from "@/components/settingsGlobal/AddKnot";
import AddSensor from "@/components/settingsGlobal/AddSensor";
import AddVariables from "@/components/settingsGlobal/AddVariables";

import {mapGetters} from "vuex";
import {mapActions} from "vuex";

export default {
  layout: "header_footer",

  created() {
    this.setActiveTabHeader("");
    this.setActiveTabSidebar("Setting");

    this.getTypeStructured();

    this.$on('closeVobjectCreated', () => {
      this.showCreated = false;
    });

    this.$on('changeshowDelObject', () => {
      this.showDelObject = false;
    });

    this.$on('closeAddForm', (name) => {
      this.showAddForm[name] = false;
    });
  },

  components: {
    VobjectCreated,
    delObject: DelObject,
    addFactory: AddFactory,
    addWorkshop: AddWorkshop,
    addKnot: AddKnot,
    addSensor: AddSensor,
    addVariables: AddVariables,
  },

  data() {
    return {
      search: "",
      showDelObject: false,
      showCreated: false,
      currentTab: 1,
      showAddForm: {
        addFactory: false,
        addWorkshop: true,
        addKnot: false,
        addSensor: false,
        addVariables: false,
      },
    };
  },

  computed: {
    ...mapGetters("settingsGlobal", {
      clientsObject: 'clientsObject',
      typeStructured: 'typeStructured',
      typeStructuredTable: 'typeStructuredTable',
    }),
    filteredList() {
      // return this.clientsObject.filter((object) => {
      //   return object.name_object.toLowerCase().includes(this.search.toLowerCase());
      // });
    },
    filterTypeStructuredTable() {
      return this.typeStructuredTable.filter((item) => {
        return item.id === this.currentTab;
      })[0];
    },
    currentTabName() {
      if(this.currentTab === 5)
        return 'addFactory';

      if(this.currentTab === 6)
        return 'addWorkshop';

      if(this.currentTab === 7)
        return 'addKnot';

      if(this.currentTab === 8)
        return 'addSensor';

      if(this.currentTab === 9)
        return 'addVariables';

      return '';
    }
  },
  methods: {
    ...mapActions("users", {
      setActiveTabHeader: "setActiveTabHeader",
      setActiveTabSidebar: "setActiveTabSidebar",
    }),
    ...mapActions("settingsGlobal", {
      getTypeStructured: 'getTypeStructured',
      updateTypeStructuredTable: 'updateTypeStructuredTable',
    }),
    changeshowCreated() {
      this.showCreated = !this.showCreated;
    },

    changeshowDelObject() {
      this.showDelObject = !this.showDelObject;
    },
    setTab(id) {
      this.currentTab = id;
    },
    changeTypeStructuredTable() {
      return 0;
      let data = [];
      this.updateTypeStructuredTable(data);
    },
    showFormAdd() {
      this.showAddForm.addFactory = false;
      this.showAddForm.addWorkshop = false;
      this.showAddForm.addKnot = false;
      this.showAddForm.addSensor = false;

      this.showAddForm.addVariables = false;

      this.showAddForm[this.currentTabName] = true;
    }
  },
};
</script>

<style lang="scss" scoped>
/* top-panel */

.top-panel {
  position: absolute;
  width: 100%;
  height: 48px;
  left: 0;
  top: 48px;

  border-bottom: 1px solid #dde4ee;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #f9fafc;
}

.search-wrapper {
  position: relative;

  margin-left: 12px;
  margin-right: auto;


  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  width: 210px;
  height: 24px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */

  color: #4a627a;

}

.input-icon {
  position: absolute;
  top: 12px;
  /* left: 24px; */
}

.search-wrapper input {
  outline: none;
  position: absolute;
  top: 12px;
  padding-left: 24px;
  padding-top: 5px;
  border: none;
}

.project-box {
  margin-left: 144px;
  /* margin-right: auto; */

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  width: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #4a627a;
}

.btn-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
}

.btn-project {
  width: 108px;
  height: 24px;

  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 6px;
  color: #ffffff;

  outline: none;
  border: none;
}

.btn-del {
  color: #FF6F64;
  background-color: #ffffff;
  border: 1px solid #FF6F64;
  transition: 0.2s;

  .btn-svg {
    width: 12px;
    height: 12px;
    background-image: url("~assets/svg/setting/del_red.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:hover {
    color: #ffffff;
    background-color: hsl(4, 100%, 67%);

    .btn-svg {
      background-image: url("~assets/svg/setting/del_white.svg");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}

.btn-edit {
  color: #00B0FF;
  margin-left: 12px;
  background-color: #ffffff;
  transition: 0.2s;
  border: 1px solid #00B0FF;

  .btn-svg {
    width: 12px;
    height: 12px;
    background-image: url("~assets/svg/setting/edit_blue.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:hover {
    background-color: hsl(196, 96%, 55%);
    color: #ffffff;

    .btn-svg {
      background-image: url("~assets/svg/setting/edit_white.svg");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}

.btn-add {
  color: #01C587;
  margin-left: 24px;
  background-color: #ffffff;
  transition: 0.2s;
  border: 1px solid #01C587;

  .btn-svg {
    width: 12px;
    height: 12px;
    background-image: url("~assets/svg/setting/plus_green.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:hover {
    background-color: hsl(161, 99%, 36%);
    color: #ffffff;

    .btn-svg {
      background-image: url("~assets/svg/setting/plus_white.svg");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}

/* top-panel */

.table-objects {
  padding-top: 73px;
  padding-left: 24px;
  padding-right: 24px;
  color: #4a627a;
}

tr {
  height: 36px;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
}

th {
  height: 36px;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #4A627A;

  border: 1px solid #4a627a;
}

td {
  border: 1px solid #4a627a;
  padding: 0;
}

.input-td {
  width: 100%;
  height: 36px;
  border: none;
  padding-left: 12px;
  outline: none;
}

tbody {
  display: table;
  border-collapse: collapse;
  margin-top: 5px;
}

thead {
  display: table;
  border-collapse: collapse;
}

td:nth-child(1) {
  width: 472px;
}

td:nth-child(2) {
  width: 470px;
}

td:nth-child(3) {
  width: 470px;
}

td:nth-child(4) {
  width: 170px;
}

td:nth-child(5) {
  width: 170px;
}

th:nth-child(1) {
  width: 472px;
}

th:nth-child(2) {
  width: 470px;
}

th:nth-child(3) {
  width: 470px;
}

th:nth-child(4) {
  width: 170px;
}

th:nth-child(5) {
  width: 170px;
}

.box {
  margin-top: 24px;
  padding: 0 24px;
  width: 100%;
  display: flex;
  flex-direction: row;

  .structure-items {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #dde4ee;

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

    .structure-item:hover:before,
    .structure-item.active::before,
    {
      content: "";
      width: 100%;
      border-bottom: 1px solid #2dc2fa;
      position: absolute;
      bottom: -1px;
      left: 0;
    }

    .panel-btn-box {
      margin-left: auto;
      margin-right: 12px;
      display: flex;
      flex-direction: row;

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

      .plus_green {
        width: 14px;
        height: 14px;
        background-image: url("~assets/svg/setting/box-panel/green_plus.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }

      .edit {
        width: 14px;
        height: 14px;
        background-image: url("~assets/svg/setting/box-panel/edit.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }

      .minus {
        width: 14px;
        height: 14px;
        background-image: url("~assets/svg/setting/box-panel/minus.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }

      .search {
        width: 14px;
        height: 14px;
        background-image: url("~assets/svg/setting/box-panel/search.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
    }
  }
}
</style>
