<template>
  <div>
    <onlinePeriod />
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
        <raddChard />
      </div>
      <div class="chart">
        <recorderChart />
      </div>
    </div>
  </div>
</template>
<script>

import { mapActions } from "vuex";

import OnlineHeader from "@/components/recorder/onlineHeader";
import RecorderChart from "@/components/recorder/recorderChart";
import RAddChard from "@/components/recorder/RAddChard";

var nowDate = new Date();

export default {
  layout: "header_footer",


  components: {
    onlinePeriod: OnlineHeader,
    recorderChart: RecorderChart,
    raddChard: RAddChard,
  },

  created() {
    this.setActiveTabHeader("RECORDER");
  },

  methods: {
    ...mapActions("users", {
      setActiveTabHeader: "setActiveTabHeader"
    }),
  },
};
</script>

<style lang="scss" scoped>
/*
.recorder-items {
  padding-top: 96px;
  padding-left: 12px;
  padding-right: 24px;
  .recorder-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 24px;
    margin-bottom: 12px;

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

    .addGraph {
      width: 724px;
      height: 400px;
      background: #F7F8FA;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    }
  }
}
*/
</style>
