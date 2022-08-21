import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataYear: {
      Январь: 0,
      Февраль: 0,
      Март: 0,
      Апрель: 0,
      Май: 0,
      Июнь: 0,
      Июль: 0,
      Август: 0,
      Сентябрь: 0,
      Октябрь: 0,
      Ноябрь: 0,
      Декабрь: 0,
    },
    dataMonth: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0,
      24: 0,
      25: 0,
      26: 0,
      27: 0,
      28: 0,
      29: 0,
      30: 0,
      31: 0,
    },
    dataHour: {
      '00:00': 0,
      '01:00': 0,
      '02:00': 0,
      '03:00': 0,
      '04:00': 0,
      '05:00': 0,
      '06:00': 0,
      '07:00': 0,
      '08:00': 0,
      '09:00': 0,
      '10:00': 0,
      '11:00': 0,
      '12:00': 0,
      '13:00': 0,
      '14:00': 0,
      '15:00': 0,
      '16:00': 0,
      '17:00': 0,
      '18:00': 0,
      '19:00': 0,
      '20:00': 0,
      '21:00': 0,
      '22:00': 0,
      '23:00': 0,
    },
    flagsActive: {
      hours: true,
      month: false,
      year: false,
    },
  },
  // геттер отправляющий данные по временному промежутку в зависимости от включенной кнопки
  getters: {
    getDataCategories(state, getters) {
      const newDataObject = {
        chart: {
          id: 'vuechart-example',
          type: 'bar',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
        },
        colors: ['#fabd2f'],
        xaxis: {
          categories: [],
          title: {
            text: 'За последние сутки',
          },
        },
        yaxis: {
          title: {
            text: 'Количество',
          },
        },
      };
      if (state.flagsActive.hours === true) {
        newDataObject.xaxis.categories = getters.getKeysOfHour;
        return newDataObject;
      }
      if (state.flagsActive.month === true) {
        newDataObject.xaxis.categories = getters.getKeysOfMonth;
        newDataObject.xaxis.title.text = 'За последний месяц';
        return newDataObject;
      }
      if (state.flagsActive.year === true) {
        newDataObject.xaxis.categories = getters.getKeysOfYear;
        newDataObject.xaxis.title.text = 'За последний год';
        newDataObject.chart.type = 'line';
        return newDataObject;
      }
    },
    // геттер отправляющий данные по количеству чашек в зависимости от включенной кнопки
    getDataSeries(state, getters) {
      const newDataObj = [
        {
          name: 'чашек',
          data: [],
        },
      ];
      if (state.flagsActive.hours === true) {
        newDataObj[0].data = getters.getValueOfHour;
        return newDataObj;
      }
      if (state.flagsActive.month === true) {
        newDataObj[0].data = getters.getValueOfMonth;
        return newDataObj;
      }
      if (state.flagsActive.year === true) {
        newDataObj[0].data = getters.getValueOfYear;
        return newDataObj;
      }
    },
    // геттер получения ключей за год
    getKeysOfYear(state) {
      const years = state.dataYear;
      return Object.keys(years);
    },
    // геттер получения ключей за сутки
    getKeysOfHour(state) {
      const hours = state.dataHour;
      return Object.keys(hours);
    },
    // геттер получения ключей за месяц
    getKeysOfMonth(state) {
      const month = state.dataMonth;
      return Object.keys(month);
    },
    // геттер получения количества за год
    getValueOfYear(state) {
      const year = state.dataYear;
      return Object.values(year);
    },
    // геттер получения количества за месяц
    getValueOfMonth(state) {
      const month = state.dataMonth;
      return Object.values(month);
    },
    // геттер получения количества за сутки
    getValueOfHour(state) {
      const hour = state.dataHour;
      return Object.values(hour);
    },
  },
  mutations: {
    // мутатор изменяющий флаги активности у кнопок день, месяц, год
    setActive(state, value) {
      if (value === 'Hour') {
        state.flagsActive.hours = true;
        state.flagsActive.month = false;
        state.flagsActive.year = false;
      }
      if (value === 'Month') {
        state.flagsActive.hours = false;
        state.flagsActive.month = true;
        state.flagsActive.year = false;
      }
      if (value === 'Year') {
        state.flagsActive.hours = false;
        state.flagsActive.month = false;
        state.flagsActive.year = true;
      }
    },
    // мутатор изменяющий количество чашек по времени
    setDataState(state, payload) {
      if (state.flagsActive.hours === true) {
        state.dataHour[payload.checked.checkedHour] = payload.value;
      }
      if (state.flagsActive.month === true) {
        state.dataMonth[payload.checked.checkedMonth] = payload.value;
      }
      if (state.flagsActive.year === true) {
        state.dataYear[payload.checked.checkedYear] = payload.value;
      }
    },
  },
});
