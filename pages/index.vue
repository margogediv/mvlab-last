<template>
  <div>
    <section class="calender">
      <div class="day">
        <div class="title">Пн</div>
        <div class="number">31</div>
      </div>
      <div class="day">
        <div class="title">Вт</div>
        <div class="number">1</div>
      </div>
      <div class="day">
        <div class="title">Ср</div>
        <div class="number">2</div>
      </div>
      <div class="day">
        <div class="title">Чт</div>
        <div class="number">3</div>
      </div>
      <div class="day">
        <div class="title">Пт</div>
        <div class="number">4</div>
      </div>
      <div class="day">
        <div class="title">Сб</div>
        <div class="number">5</div>
      </div>
      <div class="day">
        <div class="title">Вс</div>
        <div class="number">6</div>
      </div>
      <div class="day">
        <div class="title">Пн</div>
        <div class="number">7</div>
      </div>
      <div class="day">
        <div class="title">Вт</div>
        <div class="number">8</div>
      </div>
      <div class="day">
        <div class="title">Ср</div>
        <div class="number">9</div>
      </div>
      <div class="day active">
        <div class="title">Чт</div>
        <div class="number">10</div>
      </div>
      <div class="day">
        <div class="title">Пт</div>
        <div class="number">11</div>
      </div>
      <div class="day">
        <div class="title">Сб</div>
        <div class="number">12</div>
      </div>
      <div class="day">
        <div class="title">Вс</div>
        <div class="number">13</div>
      </div>
      <div class="day">
        <div class="title">Пн</div>
        <div class="number">14</div>
      </div>
      <div class="day">
        <div class="title">Вт</div>
        <div class="number">15</div>
      </div>
      <div class="day">
        <div class="title">Ср</div>
        <div class="number">16</div>
      </div>
      <div class="day">
        <div class="title">Чт</div>
        <div class="number">17</div>
      </div>
      <div class="day">
        <div class="title">Пт</div>
        <div class="number">18</div>
      </div>
      <div class="day">
        <div class="title">Сб</div>
        <div class="number">19</div>
      </div>
      <div class="day">
        <div class="title">Вс</div>
        <div class="number">20</div>
      </div>
      <div class="day">
        <div class="title">Пн</div>
        <div class="number">21</div>
      </div>
      <div class="day new">new</div>
    </section>
    <section class="charts">
      <div class="block-1">
        <div class="chart first"></div>
        <div class="chart second"></div>
      </div>
      <div class="block-2">
        <div class="chart-data panel-release"></div>
        <div class="chart-data total-consumption"></div>
        <div class="chart-data-min energy-consumption"></div>
      </div>
      <div class="block-3">
        <div class="chart-data specific-consumption"></div>
        <div class="chart-data comparison-module"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  layout: "header_footer",

  created() {
    this.setActiveTabHeader("HOME");
    this.setActiveTabSidebar("Dashboard");
  },

   methods: {
    ...mapActions("users", {
      setActiveTabHeader: "setActiveTabHeader",
      setActiveTabSidebar: "setActiveTabSidebar",
    }),
   }
};
</script>

<style scoped>

.calender {
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 24px 121px;
}

.calender::before {
  content: '';
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  /*background-image: url("/_nuxt/assets/img/arrow_prew.png");*/
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
}

.day {
  height: 80px;
  width: 56px;
  padding: 9px 12px;
  background: #FFFFFF;
  border: 2px solid #ECEDF4;
  border-radius: 11px;
  margin-right: 12px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #B1B1BC;
  margin-bottom: 7px;
}

.number {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #42435F;
}

.new {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #42435F;
  text-transform: uppercase;
}

.day.new {
  border: 2px solid #3F51B5;
  margin-right: 0;
}

.active {
  background: #272848;
  border-radius: 11px;
  color: #BFC0C9;
}

.charts {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 36px 52px;
}

.block-1 {
  width: 280px;
  margin-right: 36px;
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  /*flex-direction: column;*/
}

.chart {
  width: 280px;
  border: 2px solid #E9E9E9;
  border-radius: 9px;
}

.chart.first {
  height: 320px;
  margin-bottom: 24px;
}

.chart.second {
  height: 354px;
}

.block-2 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-right: 48px;
}

.chart-data {
  width: 624px;
  height: 242px;
  border: 2px solid #E9E9E9;
  border-radius: 9px;
  margin-bottom: 37px;
}

.chart-data-min {
  width: 624px;
  height: 139px;
  border: 2px solid #E9E9E9;
  border-radius: 9px;
}

main{
  width: 100%;
  height: 100%;
}
.btn-rnd {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 30px;
  background-color: hsl(160, 98%, 39%);
  outline: none;
  color: #fff;
  font-weight: 500;
  font-size: 66.4615px;
  line-height: 81px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;

  position: absolute;
  bottom: 48px;
  right: 48px ;
}
.btn-rnd:hover{
  background-color: hsl(160, 98%, 36%);
}
</style>
