<template>
  <div id="app" class="flex_parent">
    <h1>График</h1>
    <div class="chart">
      <chart-coffee></chart-coffee>
    </div>
    <div class="select"><select-form></select-form></div>
  </div>
</template>

<script>
import ChartCoffee from './components/ChartCoffee.vue';
import SelectForm from './components/SelectForm.vue';
export default {
  name: 'App',
  components: {
    ChartCoffee,
    SelectForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex_parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
body {
  margin: 0;
}
.chart {
  min-width: 50%;
}
</style>
