<template>
  <div class="form_add">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1"
        >Введите количество чашек</span
      >
      <input
        type="text"
        v-model="value"
        @input="onChangeValue"
        class="form-control"
        placeholder="Количество"
        aria-describedby="basic-addon1"
      />
      <button class="btn btn-secondary send" @click="changeCount">
        Отправить!
      </button>
    </div>

    <div class="select_form">
      <span>Выберите время</span>
      <select
        class="form-select"
        v-if="this.$store.state.flagsActive.hours"
        v-model="checkedObj.checkedHour"
      >
        <option v-for="(hour, id) in Hours" :key="id">{{ hour }}</option>
      </select>
      <select
        class="form-select"
        v-if="this.$store.state.flagsActive.month"
        v-model="checkedObj.checkedMonth"
      >
        <option v-for="(day, id) in Days" :key="id">{{ day }}</option>
      </select>
      <select
        class="form-select"
        v-if="this.$store.state.flagsActive.year"
        v-model="checkedObj.checkedYear"
      >
        <option v-for="(month, id) in Months" :key="id">{{ month }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      checkedObj: {
        checkedYear: 'Январь',
        checkedMonth: 1,
        checkedHour: '00:00',
      },
      Months: this.$store.getters.getKeysOfYear,
      Hours: this.$store.getters.getKeysOfHour,
      Days: this.$store.getters.getKeysOfMonth,
    };
  },
  methods: {
    onChangeValue(e) {
      this.value = +e.target.value.replace(/\D/, '');
    },
    changeCount() {
      const data = {
        value: this.value,
        checked: { ...this.checkedObj },
      };
      this.$store.commit('setDataState', data);
    },
  },
};
</script>

<style scoped>
.form-select {
  max-width: 200px;
  text-align: center;
  margin-top: 10px;
}
.select_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.form_add {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.send {
  background-color: #fabd2f;
  border-color: aliceblue;
}
</style>
