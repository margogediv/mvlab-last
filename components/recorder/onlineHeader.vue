<template>
  <div>
    <div class="title-panel">
      <div class="headMenu">
        <button class="btn-workspace-green">
          Добавить рабочее пространство
        </button>
        <button class="btn-workspace-blue">
          Добавить рабочую область
        </button>
        <select v-model ="selectedfactory" class="headMenu_item btn_icon">
          <option
              v-for="factory in factories"
              :key="factory.factoryid"
              :value="factory"
          >{{ factory.name }}</option>
        </select>
      </div>

      <div class="select-period">
        <button
            v-on:click="setRange({period:1, id: 0})"
            class="btn-period"
            :class="{ active: periodActive[0] }"
        >час</button>
        <button
            v-on:click="setRange({period:8, id: 1})"
            class="btn-period"
            :class="{ active: periodActive[1] }"
        >смена</button>
        <button
            v-on:click="setRange({period:24, id: 2})"
            class="btn-period"
            :class="{ active: periodActive[2] }"
        >день</button>
        <button
            v-on:click="setRange({period:168, id: 3})"
            class="btn-period"
            :class="{ active: periodActive[3] }"
        >неделя</button>
        <button
            v-on:click="setRange({period:5040, id: 4})"
            class="btn-period"
            :class="{ active: periodActive[4] }"
        >месяц</button>
      </div>

      <div>
        <button v-on:click="hideCharts" class="btn_icon btn-submenu">
          <IconifyIcon icon="baselineViewHeadline" :style="{fontSize: '30px'}" />
        </button>
      </div>
      <div>
        <button v-on:click="showedCharts" class="btn_icon btn-submenu">
          <IconifyIcon icon="baselineViewStream" :style="{fontSize: '30px'}" />
        </button>
      </div>
      <div class="select-showing">
        <button v-on:click="showVchartBoxVisible" class="btn_icon btn-submenu">
          <IconifyIcon icon="baselineExtension" :style="{fontSize: '30px'}" />
        </button>
      </div>
    </div>
    <div class="sub-panel">
      <div class="subMenu" v-for="shop in selectedshops" :key="shop.shopid">
        <button href="#"
                class="subMenu_item btn_icon"
                :class="{ actived: shop.shopid == activeshop.shopid }"
                @click="setActiveshop(shop)"
        >
          {{shop.name}}
        </button>
      </div>
    </div>
    <div class="recorder-items">
      <div class="recorder-menu">
        <div class="recorder-spease">Рабочая область 1</div>
        <div class="menu">
          <div class="menu-svg addrem"></div>
          <div class="menu-svg type"></div>
          <div class="menu-svg online"></div>
          <div class="menu-svg gannt"></div>
          <div class="menu-svg formule"></div>
          <div class="menu-svg resize"></div>
          <div class="menu-svg bulity"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "onlineHeader",
  data() {
    return {
      periodActive: [false, true, false, false, false],
    };
  },

  computed: {

    ...mapGetters("oeecharts", {
      selectedshops: "selectedshops",
      factories: "factories",
      shops: "shops",
      activeshop: "activeshop",
    }),

    selectedfactory:  {
      get () {
        let item = this.$store.getters['oeecharts/selectedfactory']
        return item
      },
      set (value) {
        console.log(value);
        this.$store.dispatch('oeecharts/setSelectedfactory', value)
      }

    },
  },

  getters: {
    factories(state) {
      return state.factories;
    },
  },

  methods: {

    ...mapActions("oeecharts", {
      setSelectedfactory: "setSelectedfactory",
      setActiveshop: "setActiveshop",
      setChart: "setChart",
      setshowCharts: "setshowCharts",
    }),
    ...mapActions("users", {
      setActiveTabHeader: "setActiveTabHeader",
      setActiveTabSidebar: "setActiveTabSidebar",
    }),

    setRange(sel) {
      this.range = sel.period * 1000 * 3600;
      this.periodActive = this.periodActive.map((item) => false);
      this.periodActive.splice(sel.id, 1, true);

      this.opt.start = this.opt.end - sel.period * 3600;
      if (sel.period === 8)
        this.opt.smena = 1;
      else
        this.opt.smena = 0;
      this.getTimeStatus(this.opt);
      this.getReason(this.opt);
      this.getBasicData(this.opt);
      this.getTableOEE(this.opt);
    },

    hideCharts() {
      let arrShow = this.showCharts.map((item) => false);
      this.setshowCharts(arrShow);

    },
  },

}
</script>

<style lang="scss" scoped>

.title-panel {
  background-repeat: no-repeat;
  border-bottom: 1px solid hsl(220, 33%, 88%);
  background: #F9FAFC;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  align-items: center;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  width: 100%;
  /* width: 1780px; */
  /* left: 120px; */
  left: 0;
  height: 48px;

  position: absolute;
  top: 49px;

  .headMenu {
    display: flex;
    margin-left: 150px;
    margin-right: auto;

    .btn_icon {
      display: none;
    }

    .btn-workspace-green {
      width: 148px;
      height: 26px;

      display: flex;
      align-items: center;
      text-align: center;

      margin-right: 24px;
      padding: 2px 12px;
      border: 1px solid #01C587;
      background: #FFFFFF;

      font-weight: normal;
      font-size: 10px;
      line-height: 10px;
      color: #01C587;
    }

    .btn-workspace-blue {
      width: 148px;
      height: 26px;

      display: flex;
      align-items: center;
      text-align: center;

      padding: 2px 12px;
      border: 1px solid #00B0FF;
      background: #FFFFFF;

      font-weight: 500;
      font-size: 10px;
      line-height: 10px;
      color: #00B0FF;
    }
  }


  .select-showing {
    margin-left: 24px;
    margin-right: 12px;
  }

  .select-period {
    display: flex;
    margin-right: 155px;

    .btn-period {
      cursor: pointer;
      border: none;

      outline: none;

      width: 80px;
      height: 24px;
      margin: 0 3px;

      background: #eaeef7;
      border-radius: 4px;

      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      color: #7b879d;
    }

    .btn-period:hover {
      border: 1px solid #ff7167;
      color: #ff7167;
    }

    .active {
      background-color: inherit;
      border: 1px solid #ff7167;
      color: #ff7167;
    }
  }

  .btn_icon {
    background: none;
    border: none;

    display: flex;
    justify-content: baseline;
    outline: none;
  }

  .btn-submenu {
    color: #3f51b5;
  }
  .btn-submenu:hover {
    color: hsl(231, 48%, 45%);
  }
}

.sub-panel {
  background-repeat: no-repeat;
  border-bottom: 1px solid hsl(220, 33%, 88%);
  /* background: #f9fafc; */

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  align-items: center;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: flex-start;
  /* width: 1640px; */
  /* left: 260px; */
  margin-left: 15%;

  width: 85%;
  height: 48px;

  position: absolute;
  top: 96px;
  left: 0;

  .subMenu {
    width: 140px;
    height: 48px;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #49617b;

    position: relative;

    .subMenu_item {
      text-decoration: none;

      display: block;
      transition: 0.3s;
    }

    .subMenu_item:hover:before {
      content: "";
      width: 100%;
      border-bottom: 1px solid #2dc2fa;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .subMenu_item.actived:before {
      content: "";
      width: 100%;
      border-bottom: 1px solid #2dc2fa;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}

.recorder-items {
  padding-top: 96px;
  padding-left: 12px;
  padding-right: 24px;
  .recorder-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 24px;

    .recorder-spease {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.05em;
      color: #46627D;

    }

    .menu {
      display: flex;
      align-items: center;
      justify-content: center;

      .menu-svg {
        cursor: pointer;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        margin-left: 12px;
      }

      .addrem {
        background-image: url("~assets/svg/recorder/addRemoveGraph.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        &:hover {
          background-image: url("~assets/svg/recorder/addRemoveGraphAct.svg");
        }
      }

      .type {
        background-image: url("~assets/svg/recorder/typeGraph.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        &:hover {
          background-image: url("~assets/svg/recorder/hovTypeGraph.svg");
        }
      }

      .online {
        background-image: url("~assets/svg/recorder/onlinePlay.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        &:hover {
          background-image: url("~assets/svg/recorder/hovOnlinePlay.svg");
        }
      }

      .gannt {
        background-image: url("~assets/svg/recorder/DiagrGannt.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        &:hover {
          background-image: url("~assets/svg/recorder/hovDiagrammGrannt.svg");
        }
      }

      .formule {
        background-image: url("~assets/svg/recorder/formule.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        &:hover {
          background-image: url("~assets/svg/recorder/hovFormule.svg");
        }
      }

      .resize {
        background-image: url("~assets/svg/recorder/resizeGraph.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        &:hover {
          background-image: url("~assets/svg/recorder/hovResizeGraph.svg");
        }
      }

      .bulity {
        background-image: url("~assets/svg/recorder/menu.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        &:hover {
          background-image: url("~assets/svg/recorder/hovAddicationMenu.svg");
        }
      }
    }
  }
}

</style>
