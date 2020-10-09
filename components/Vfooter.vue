<<template>
    <div class="wraper_footer">

      <div
        class="headTable"
        v-on:click="changeShow"
        v-bind:class="dataHead.status"
      >
        <IconifyIcon
          :class="[{'arrow-up': !showTable},{'arrow': true}, {'left-arrow': true}, {'arrow-down':true}]"
          icon="baselineKeyboardArrowDown"
          :style="{fontSize: '24px'}" />


        {{ dataHead.title }}
        <IconifyIcon
          :class="[{'arrow-up': !showTable},{'arrow': true}, {'right-arrow': true}, {'arrow-down':true}]"
          icon="baselineKeyboardArrowDown"
          :style="{fontSize: '24px'}" />


      </div>

    <transition name="slide">

      <div class="bodyTable" v-show="showTable">
        <table>
          <tbody>
            <tr
              v-for="(msg, index) in DevMsgs"
              :key="index"
              v-bind:class="msg.status"
            >
              <td>
                {{ msg.device }}
              </td>
              <td>
                {{ msg.driver }}
              </td>
              <td>
                {{ msg.msg }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </transition>

    </div>
</template>
<script>

import { mapGetters } from "vuex";

export default {

  data() {
    return {
      showTable: false
    };
  },
  computed: {
    ...mapGetters("Messages", {
      DevMsgs: "currentDevMessages"
    }),
    
    dataHead() {
      let statusDev = "ok";

      let allDev = this.DevMsgs.length;

      let arrOkDev = this.DevMsgs.filter(item => item.status == "ok");

      let dngDev = this.DevMsgs.find(item => item.status == "dng");

      let okDev = arrOkDev.length;

      if (dngDev !== undefined) {
        statusDev = "dng";
      } else if (okDev / allDev < 0.5) {
        statusDev = "alert";
      }

      return {
        title: `${okDev} из ${allDev} устройства в сети`,
        status: statusDev
      };
    }
  },

  mounted() {
    this.$store.dispatch('Messages/getCurrentDevMessages');
  },

  methods: {
    changeShow: function() {
      this.showTable = !this.showTable;
    }
  }
};
</script>

<style scoped>
/* анимация */
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;

}
.slide-enter-active {
     max-height: 40vh;
}
.slide-enter,
.slide-leave-active {
    max-height: 0;
}
.slide-leave {
    max-height:  40vh;
}
/* анимация */
.wraper_footer {
  z-index: 10;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}

.headTable {
  background: #000;

  font-size: 12px;
  font-weight: 500;
  width: 100%;
  height: 24px;
  text-align: center;

  display: flex;
  align-items: center;
  text-align: center;

  transition-property:  all;
   transition-duration: 0.3s;


}



.arrow {
  transition: 0.3s;

}

.left-arrow {
  margin-right: auto;
  margin-left: 20px;
}

.right-arrow {
  margin-left: auto;
  margin-right: 20px;
}

.arrow-up {
  transform: matrix(1, 0, 0, -1, 0, 0);
}

.bodyTable {
  width: 100%;
  max-height: 40vh;
  overflow: auto;
  transition: 0.2s;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td {
  background: none;
  padding-left: 20px;
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  width: auto;
  height: 48px;

  color: #155724;
}

.dng {
  background: #f7dcdf;
  color: #721C24;
}
.alert {
  background: #fff3cd;
  color: #856404;
}
.ok {
  background: #d4edda;
  color: #155724;
}
</style>
