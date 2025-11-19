<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const count = ref(0);
const textError = ref('Ошибка');
const textWarring = ref('Стоп');
const imgProgressBar = ref('check');
const checkbox = ref(false);
let intervalId;
let checkFlag = false;
let success = false;
let checkError = false;
let checkWarring = false;
let disabled = ref(false);
let lastButtonPressed = '';

onMounted(() => {
  intervalId = setInterval(incrementCounter, 100)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

const test = (status) => {
  if (count.value <= 100 ) {
    if (!checkFlag ) {
      disabled.value = true;
      lastButtonPressed = status;
      status == 'warning' ? imgProgressBar.value = 'warning': imgProgressBar.value = 'error';
      status == 'warning' ? textWarring.value = 'Продолжить': textError.value = 'Продолжить';
      status == 'warning' ? checkWarring = true: checkError = true;
      checkFlag = true
      clearInterval(intervalId)
    } else {
      disabled.value = false;
      imgProgressBar.value = 'check'
      status == 'warning' ? textWarring.value = 'Стоп': textError.value = 'Ошибка';
      status == 'warning' ? checkWarring = false: checkError = false;
      checkFlag = false
      intervalId = setInterval(incrementCounter, 100)
    }
  }
}

const restartProgressBar = () => {
  success = false
  checkFlag = false
  imgProgressBar.value = 'check'
  count.value = 0
  clearInterval(intervalId)
  intervalId = setInterval(incrementCounter, 100)
}

const incrementCounter = () => {
  count.value++
  if (count.value >= 100) {
    checkFlag = true
    success = true
    clearInterval(intervalId)
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div v-show="checkbox">
      <svg width="205" height="205" viewBox="-25.625 -25.625 256.25 256.25" version="1.1" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-82deg);">
        <circle r="92.5" cx="102.5" cy="102.5" fill="transparent" stroke="#f6f7fa" stroke-width="16px"></circle>
        <circle
          :class="{colorError:checkError, colorWarring:checkWarring}"
          :style="{
            stroke: `rgb(${255 - 2.37 * count}, ${73 + 1.33 * count}, ${73 + 0.29 * count})`,
            transition: 'all 0.1s linear'
          }" 
          r="92.5" 
          cx="102.5" 
          cy="102.5" 
          stroke-width="16px" 
          stroke-linecap="round" 
          :stroke-dashoffset="581 - (count * 5.81) + 'px'" 
          fill="transparent" 
          stroke-dasharray="580.9px"
        ></circle>

        <image 
          v-show="imgProgressBar === 'warning' || imgProgressBar === 'error' || (imgProgressBar === 'check' && success)"
          :href="`/${imgProgressBar}.svg`"
          x="75" 
          y="75" 
          width="50" 
          height="50" 
          class="transform-svg" 
        />
        <text 
          v-show="!checkFlag" 
          x="102.5" 
          y="102.5" 
          dominant-baseline="middle" 
          text-anchor="middle" 
          fill="#939395" 
          class="transform-svg" 
          style="font-size: 25px"
        >
          {{ count }}%
        </text>
      </svg>
    </div>

    <div v-show="!checkbox">
      <svg width="205" height="205" viewBox="-25.625 -25.625 256.25 256.25" version="1.1" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-82deg);">
        <circle 
          r="92.5" 
          cx="102.5" 
          cy="102.5" 
          fill="transparent" 
          stroke="#f6f7fa" 
          stroke-width="16px" 
          stroke-linecap="round" 
          stroke-dashoffset="120.9" 
          stroke-dasharray="580.9px" 
          style="transform:rotate(210deg); transform-origin: 103px 102px;"
        ></circle>
        <circle
          :class="{colorError:checkError, colorWarring:checkWarring}"
          :style="{
            stroke: `rgb(${255 - 2.37 * count}, ${73 + 1.33 * count}, ${73 + 0.29 * count})`,
            transition: 'all 0.1s linear'
          }"
          style="transform: rotate(210deg); transform-origin: 103px 102px;" 
          r="92.5" 
          cx="102.5" 
          cy="102.5" 
          stroke-width="16px"
          stroke-linecap="round" 
          :stroke-dashoffset="580.9 - (count * 4.6) + 'px'" 
          fill="transparent" 
          stroke-dasharray="580.9"
        ></circle>

        <image 
          v-show="imgProgressBar === 'warning' || imgProgressBar === 'error' || (imgProgressBar === 'check' && success)"
          :href="`/progress_bar/${imgProgressBar}.svg`"
          x="75" 
          y="75" 
          width="50" 
          height="50" 
          class="transform-svg" 
        />
        <text 
          v-show="!checkFlag" 
          x="102.5" 
          y="102.5" 
          dominant-baseline="middle" 
          text-anchor="middle" 
          fill="#939395" 
          class="transform-svg" 
          style="font-size: 25px"
        >
          {{ count }}%
        </text>
      </svg>
    </div>

    <div class="buttons">
      <button :class="{ 'disabled': disabled && lastButtonPressed !== 'error'}" @click="test('error')">{{ textError }}</button>
      <button :class="{ 'disabled': disabled && lastButtonPressed !== 'warning'}" @click="test('warning')">{{ textWarring }}</button>
      <button @click="restartProgressBar">Рестарт</button>
      <div class="toggleStyle">
        <span>Переключить режим</span>
        <label class="toggle">
          <input v-model="checkbox" type="checkbox" class="toggle__input">
          <span class="toggle__track"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.disabled{
  pointer-events: none;
}
.buttons > button {
  border: none;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  background: #f1f1f1;
}

.buttons > button:hover {
  background: #cfcece;
}
.buttons > button:disabled{
  background: #838080;
}
.transform-svg {
  transform: rotate(82deg) translate(20px, -187px);
}

.colorError {
  stroke: #ff4a4a !important;
}

.colorWarring {
  stroke: #e7a23d !important;
}
.toggle {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
.toggleStyle{
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.toggle__input {
  display: none;
}

.toggle__track {
  position: relative;
  width: 60px;
  height: 30px;
  background-color: #ccc;
  border-radius: 15px;
  transition: background-color 0.3s;
}

.toggle__track::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.toggle__input:checked + .toggle__track {
  background-color: #03a9f4;
}

.toggle__input:checked + .toggle__track::before {
  transform: translateX(30px);
}

</style>