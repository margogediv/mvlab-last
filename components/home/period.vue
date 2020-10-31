<template>
  <div class="period">
    <button
        class="btn text"
        :class="{active: periodActive[0]}"
    >сутки
    </button>
    <button
        class="btn text"
        :class="{active: periodActive[1]}"
    >смена
    </button>
    <button
        class="btn num"
        :class="{active: periodActive[2]}"
    >1
    </button>
    <button
        class="btn num"
        :class="{active: periodActive[3]}"
    >2
    </button>
    <button
        class="btn num"
        :class="{active: periodActive[4]}"
    >3
    </button>
  </div>
</template>

<script>
export default {
name: "period",

  data() {
    return {
      periodActive: [false, true, false, false, false, false],
    }
  },
}
</script>

<style lang="scss" scoped>

  .period {
    display: flex;
    justify-content: center;
    align-items: center;

  .btn {
    cursor: pointer;
    outline: none;
    height: 23px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 12px;
    padding: 0 6px;

    border: 1px solid #ECEDF4;
    border-radius: 3px;
    background: #FFFFFF;

    font-weight: 500;
    font-size: 12px;
    color: #42435F;

  &:hover {
     border: 1px solid #272848;
   }
  }

  .text {
    width: 52px;

  }

  .btn.text:nth-child(3) {
    margin-right: 6px;
  }

  .num {
    width: 42px;
    background: #FFFFFF;
    margin-right: 6px;
  }

  .active {
    background: #272848;
    color: #BFC0C9;
    text-align: center;
  }

  button:last-child {
    margin-right: 0;
  }
}

</style>
