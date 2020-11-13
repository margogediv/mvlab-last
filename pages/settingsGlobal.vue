<template>
  <div>
    <div class="top-panel">
      <div class="project-box">Объекты</div>
            <div class="search-wrapper">
              <input type="text" v-model="search" placeholder="Search title.." />
              <IconifyIcon icon="bxSearchAlt2" :style="{fontSize: '24px'}" class="input-icon" />
            </div>
      <div class="btn-box">
        <button class="btn-project btn-del" v-if="clientsObject">
          <span class="btn-title">Удалить</span>
          <span class="btn-svg"></span>
        </button>
        <button class="btn-project btn-edit" v-if="clientsObject" v-on:click="changeshowCreated">
          <span class="btn-title">Изменить</span>
          <span class="btn-svg"></span>
        </button>
        <button class="btn-project btn-add" v-if="!clientsObject" v-on:click="changeshowCreated">
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
                      <input readonly class="input-td" type="text" v-bind:value="clientsObject.name_object" />
                    </td>
                    <td>
                      <input readonly class="input-td" type="text" v-bind:value="clientsObject.customer" />
                    </td>
                    <td>
                      <input readonly class="input-td" type="text" v-bind:value="clientsObject.contact" />
                    </td>
                    <td>
                      <input readonly class="input-td" type="text" v-bind:value="clientsObject.created_at" />
                    </td>
                    <td>
                      <input readonly class="input-td" type="text" v-bind:value="clientsObject.updated_at" />
                    </td>
                  </tr>
                </tbody>
      </table>
    </div>
    <div class="box">
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
    <VobjectCreated v-if="showCreated" v-on:changeShow="changeshowCreated"></VobjectCreated>
    <addFactory v-if="showAddFactory"></addFactory>
    <addWorkshop v-if="showaddWorkshop"></addWorkshop>
  </div>
</template>

<script>
import VobjectCreated from "@/components/VobjectCreated";
import AddFactory from "@/components/settingsGlobal/AddFactory";
import AddWorkshop from "@/components/settingsGlobal/AddWorkshop";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  layout: "header_footer",

  created() {
    this.setActiveTabHeader("");
    this.setActiveTabSidebar("Setting");

    this.$on('closeVobjectCreated', () => {
      this.showCreated = false;
    });
  },

  components: {
    VobjectCreated,
    addFactory: AddFactory,
    addWorkshop: AddWorkshop,
  },

  data() {
    return {
      search: "",
      showCreated: false,
      showAddFactory: false,
      showaddWorkshop: true,
      currentStructureObject: null,
    };
  },

  computed: {
    ...mapGetters("settingsGlobal", {
      clientsObject: 'clientsObject',
      typeStructured: 'typeStructured',
    }),
    filteredList() {
      // return this.clientsObject.filter((object) => {
      //   return object.name_object.toLowerCase().includes(this.search.toLowerCase());
      // });
    },
  },
  methods: {
    ...mapActions("users", {
      setActiveTabHeader: "setActiveTabHeader",
      setActiveTabSidebar: "setActiveTabSidebar",
    }),
    ...mapActions("settingsGlobal", {

    }),
    changeshowCreated() {
      this.showCreated = !this.showCreated;
    },
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

.search-wrapper{
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

.search-wrapper input{
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

    .structure-item:hover:before {
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
    }
  }
}
</style>
