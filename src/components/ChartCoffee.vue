<template>
  <div class="chart">
    <apexchart
      width="100%"
      type="line"
      :options="this.$store.getters.getDataCategories"
      :series="this.$store.getters.getDataSeries"
    ></apexchart>
    <div class="toggle">
      <button class="btn btn-secondary" @click="setFlag('Hour')">День</button>
      <button class="btn btn-secondary" @click="setFlag('Month')">Месяц</button>
      <button class="btn btn-secondary" @click="setFlag('Year')">Год</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    setFlag(value) {
      this.$store.commit('setActive', value);
    },
  },
};
</script>

<style scoped>
.btn {
  margin: 10px;
  margin-top: 20px;
}
</style>
