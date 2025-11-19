<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js'
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

Chart.register(PieController, ArcElement, Tooltip, Legend)

const color = ref('#ff0000');
const checkpopUp = ref(false);
const nameInput = ref('');
const chartRef = ref(null);
const percentInput = ref(null);
const checkEdit = ref(false);
const indexList = ref(0);
let chartInstance = null;

const colors = computed(() =>[
  ['red', 'красный'],
  ['blue', 'синий'],
  ['green', 'зеленый'],
  ['yellow', 'желтый'],
  ['black', 'черный'],
  ['pink', 'розовый']
])


const chartList = ref([
  {
    label:'Сектор-1',
    data: 25,
    color:'#FF6384'
  },
  {
    label:'Сектор-2',
    data: 25,
    color:'#36A2EB'
  },
  {
    label:'Сектор-3',
    data: 25,
    color:'#FFCE56'
  }
])

const getChartData = () => {
  return {
    labels: chartList.value.map(item => item.label),
    datasets: [{
      data: chartList.value.map(item => item.data),
      backgroundColor: chartList.value.map(item => item.color),
      borderWidth: 2,
      borderColor: '#fff',
      hoverOffset: 15
    }]
  }
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      align: 'center',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 12,
        padding: 15,
        font: {
          size: 12
        }
      }
    }
  }
}

const closePopup = () => {
  checkpopUp.value = !checkpopUp.value;
  nameInput.value = '';
  percentInput.value = '';
  color.value = '#000';
}

const deleteLabelFromArray = (index) => {
  chartList.value.splice(index, 1);
  updateChart();
}

const editLabelToArray = (index) => {
  checkpopUp.value = !checkpopUp.value;
  nameInput.value = chartList.value[index].label;
  percentInput.value = chartList.value[index].data;
  color.value = chartList.value[index].color;
  checkEdit.value = true;
  indexList.value = index;
}

const addLabelToArray = () => {
  if (checkEdit.value === true){
    chartList.value.splice(indexList.value, 1, {
      label: nameInput.value,
      data: percentInput.value,
      color: color.value});
  }
  else if (nameInput.value && percentInput.value !== null) {
    chartList.value.push({
      label: nameInput.value,
      data: percentInput.value,
      color: color.value
    })
  }
  nameInput.value = '';
  percentInput.value = null;
  updateChart();
  closePopup();
}

const updateChart = () => {
  if (chartInstance) {
    chartInstance.data = getChartData();
    chartInstance.update();
  }
}

watch(
  () => [...chartList.value], 
  () => {
    updateChart();
  },
  { deep: true }
)

onMounted(() => {
  if (chartRef.value) {
    chartInstance = new Chart(chartRef.value, {
      type: 'pie',
      data: getChartData(),
      options: options
    });
  }
})

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<template>
<div class="containerPie" >
  <div style="display: flex;">
    <div class="chart-menu">
      <div 
        class="pieElement" 
        v-for="(item, index) in chartList" 
        :key="index"
      >
        <div class="pieElement-content">
          <div>{{ item.label }}</div>
          <div class="percent"></div>
          {{ item.data }}
          <div class="percent"></div> 
          <div 
            class="circleColor" 
            :style="{ background: item.color }"
          ></div>
        </div>
        <div class="pieElement-actions">
          <svg 
            @click="editLabelToArray(index)"
            width="19" 
            height="19" 
            viewBox="0 0 19 19" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9.6347 3.36068L11.5122 1.51465C12.5491 0.495117 14.2303 0.495117 15.2673 1.51465L17.1448 3.36068C18.1817 4.38021 18.1817 6.0332 17.1448 7.05273L15.2673 8.89876M9.6347 3.36068L1.98151 10.8855C1.55337 11.3064 1.28442 11.8586 1.21924 12.4505L0.758209 16.6368C0.660685 17.5224 1.474 18.2417 2.35937 18.053L6.18956 17.2366C6.68766 17.1305 7.14416 16.8856 7.50455 16.5313L15.2673 8.89876M9.6347 3.36068L15.2673 8.89876M12.451 17.9099H18.0836" stroke="#99A1B7" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <svg 
            @click="deleteLabelFromArray(index)" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 6.5L15.4558 3.86754C15.1836 3.05086 14.4193 2.5 13.5585 2.5H10.4415C9.58066 2.5 8.81638 3.05086 8.54415 3.86754L8 6.5M6 7.3V8C6 8 6 10.0552 6 11.0823V17.5C6 19.7091 7.79086 21.5 10 21.5H14C16.2091 21.5 18 19.7091 18 17.5V11.0823C18 10.0552 18 8 18 8V7.3M3.75 6.5H20.25" stroke="#99A1B7" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
      <button @click="closePopup()" class="pieButton">Добавить сектор</button> 
    </div>
  </div>

  <div v-show="checkpopUp" class="blackBack" @click.self="checkpopUp = !checkpopUp; checkEdit = false;">
    <div class="popup">
      <h3>Добавления сектора</h3>
      <div class="text-field text-field_floating">
        <input class="text-field__input" type="text" placeholder="Название" v-model="nameInput">
        <label class="text-field__label">Название</label>
      </div>
      <div class="text-field text-field_floating">
        <input class="text-field__input" type="number" placeholder="Значение" v-model.number="percentInput">
        <label class="text-field__label">Значение</label>
      </div>
      <div class="arrow text-field text-field_floating">
        <select class="text-field__input" v-model="color" >
          <option v-for="[colorCode, colorName] in colors" :value="colorCode" :key="colorCode"> {{ colorName }}</option>
        </select>
        <label class="text-field__label">Цвет</label>
        <div class="inputColor">
          <div :style="{
            'width': '25px',
            'height': '25px',
            'border-radius': '25px',
            'margin-right': '20px',
            background: color
          }"></div>
        </div>
      </div>
      <div class="color-picker">
        <color-picker v-model:pureColor="color" pickerType="chrome" isWidget shape="circle" format="name"/>
      </div>
      <button @click="addLabelToArray" class="pieButton">Добавить сектор</button>
    </div>
  </div>
  <div class="chart-container">
    <div class="chart-wrapper">
      <canvas ref="chartRef"></canvas>
    </div>
  </div>
</div>
</template>


<style scoped>
.arrow select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 8px 30px 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
input, select{
  border: 1px solid #DBDFE9;
}
input:focus, select:focus{
  border-color: #1B84FF;
  outline: none;
}
.arrow::after {
  content: "";
  position: absolute;
  top: 20px;
  width: 25px;
  height: 25px;
  right: 10px;
  background-image: url(/arrow.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
h3{
  margin-top: 0;
  font-size: 20px;
  color: #252F4A;
}
.color-picker > *{
  width: 100%;
}

.chart-menu {
  width: 540px;
}

.chart-container {
  width: 500px;  
  height: 500px; 
}

.pieElement {
  background: #DBDFE933;
  padding: 18px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  align-items: center;
}

.pieElement-content {
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
}

.chart-wrapper{
  width: 500px;  
  height: 500px; 
  margin: 0 auto;
}
.pieElement-actions {
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
}
.circleColor {
  width: 20px;
  height: 20px;
  border-radius: 20px;
}

.percent {
  background: #DBDFE9;
  width: 2px;
  height: 14px;
}

.pieButton {
  cursor: pointer;
  background: #1B84FF;
  height: 60px;
  font-size: 16px;
  border-radius: 10px;
  color: white;
  border: none;
  margin-top: 30px;
  width: 100%;
}

.blackBack {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #00000080;
  z-index: 2;
  left: 0;
  top: 0;
}

.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 390px;
  border-radius: 15px;
  background: white;
  padding: 20px;
}

.text-field_floating {
  position: relative;
  margin-bottom: 16px;
}

.text-field_floating .text-field__input {
  height: 60px;
  padding: 25px 20px 10px 20px;
  margin: 0;
  font-size: 16px;
  width: 100%;
  border-radius: 10px;
}

.text-field_floating .text-field__label {
  position: absolute;
  top: 20px;
  left: 18px;
  height: 100%;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity .15s ease-in-out, transform .15s ease-in-out;
}

.text-field_floating .text-field__input::-moz-placeholder {
  color: transparent;
}

.text-field_floating .text-field__input::placeholder {
  color: transparent;
}

.text-field_floating .text-field__input:focus~.text-field__label,
.text-field_floating .text-field__input:not(:placeholder-shown)~.text-field__label {
  color: #99A1B7;
  font-size: 15px;
  transform: scale(.85) translateY(-.75rem) translateX(.15rem);
}

.inputColor{
  position: absolute;
  top: 30%;
  right: 5%;
}
.containerPie{
  display: flex; 
  width: 100%;
  justify-content: space-between;
}
</style>