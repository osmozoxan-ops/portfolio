<script setup>
import { RouterLink, RouterView} from 'vue-router'
import { ref, onMounted, useTemplateRef, computed } from 'vue'
import HomeWindow from '@/components/HomeWindow.vue'
import Game from '@/views/game.vue'  
import Home from '@/views/background.vue' 
import Inventory from '@/views/inventory.vue' 
import ProgressBar from '@/views/progressBar.vue' 
import PieChart from '@/views/pieChart.vue'

// Начальные координаты элемента
let myId = 0
let isDragging = false // Флаг, определяющий состояние перетаскивания
let lastZ = 1

let myApp = ref([{
    height: 495,
    width: 820,
    x: 150,
    y: 150,
    flag: false,
    id: 0,
    z: 0,
    img: '/public/icons/background.png',
    text: 'Обои'
  },
  {
    height: 400,
    width: 500,
    x: 150,
    y: 150,
    flag: false,
    id: 1,
    z: 0,
    img: '/public/icons/cros.png',
    text: 'Крестики нолики'
  },
  {
    height: 570,
    width: 550,
    x: 150,
    y: 150,
    flag: false,
    id: 2,
    z: 0,
    img: '/public/icons/re4.png',
    text: 'Инвентарь'
  },
  {
    height: 450,
    width: 450,
    x: 150,
    y: 150,
    flag: false,
    id: 3,
    z: 0,
    img: '/public/icons/progress.svg',
    text: 'Прогресс бар'
  },
  {
    height: 720,
    width: 1110,
    x: 150,
    y: 150,
    flag: false,
    id: 4,
    z: 0,
    img: '/public/icons/pie.svg',
    text: 'Диаграмма'
  }
])
let bottomBar = ref([])
const size = ref({w: 200, h: 200}) 
let isResizing = false
let resizingDir = 'top'

function startResizing(dir, i) {
  isResizing = true;
  resizingDir = dir;
  myId = i
}

// Функция обработки начала перетаскивания
function handleMouseDown(e, i) {
  isDragging = true
  myId = i
  myApp.value[myId].z += lastZ
}

// Перемещение элемента при движении мыши измение размера
function handleMouseMove(e) {

  if (isDragging) {
    myApp.value[myId].y += e.movementY
    myApp.value[myId].x += e.movementX
  
  }
  
  if (isResizing) {
    if (resizingDir == 'left' && myApp.value[myId].width - e.movementX >= 200){
      const oldX = myApp.value[myId].x
      const newX = myApp.value[myId].x + e.movementX
      myApp.value[myId].x = Math.max(Math.min(newX, window.innerWidth - myApp.value[myId].width), 0)

      const newW = myApp.value[myId].width - (myApp.value[myId].x - oldX)
      myApp.value[myId].width = Math.max(Math.min(newW, window.innerWidth), 200)
    }

    if (resizingDir == 'top' && myApp.value[myId].height - e.movementY >= 200 ){
      const oldY = myApp.value[myId].y
      const newY = myApp.value[myId].y + e.movementY
      myApp.value[myId].y = Math.max(Math.min(newY, window.innerHeight - myApp.value[myId].height), 0)

      const newH = myApp.value[myId].height - (myApp.value[myId].y - oldY)
      myApp.value[myId].height = Math.max(Math.min(newH, window.innerHeight), 200)
    }

    if (resizingDir == 'right'){
      const newH = myApp.value[myId].width + e.movementX
      myApp.value[myId].width = Math.max(Math.min(newH, window.innerWidth - myApp.value[myId].x), 200)
    }

    if (resizingDir == 'bottom'){
      const newH = myApp.value[myId].height + e.movementY
      myApp.value[myId].height = Math.max(Math.min(newH, window.innerHeight - myApp.value[myId].y), 200)
    }
  }
}

// Завершение перетаскивания
function handleMouseUp() {
  isDragging = false
  isResizing = false
  if (lastZ <  myApp.value[myId].z){
    lastZ = myApp.value[myId].z
  } 
}

function checkFlafBottomBar(s){
  for(let i of bottomBar.value){
    if (i.id == s){
      return true
    }
  }
  return false
}

const myAppFilter = computed(() => {
  return myApp.value.filter((e) => e.flag == true);
})

onMounted(() => {
  // Подписываемся на события мыши
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  document.body.style.backgroundImage = `url(/background/1.jpg)`
})
</script>

<template>
  <header>
    <div class="flex p-4 pl-10 pr-10 mb-2 text-sm">
        <ul class="flex justify-between gap-4">
          <div @click="checkFlafBottomBar(index) ? myApp[index].flag = false : myApp[index].flag = true" class="cursor-pointer Desktop-icon justify-center flex flex-col items-center p-2 text-white transition ease-in-out hover:bg-white/20 rounded-md "
           v-for="(item, index) in myApp" :key="index">
            <img class="h-[48px] mb-2" :src="item.img" alt="">
            <p>{{ item.text }}</p>
          </div>
        </ul>
    </div>

  </header>
  <div 
    v-for="i in myAppFilter" 
    :key="i.id" 
    class="draggable-div pt-10 overflow-hidden drop-shadow-xl bg-white" 
    :style="{left: `${i.x}px`, top: `${i.y}px`, width: `${i.width}px`, height: `${i.height}px`, zIndex: `${i.z}`}">
    <div @mousedown="handleMouseDown($event, i.id)" ref="windowTop" class="window-top w-full h-[40px] bg-blue-500 absolute top-0 cursor-move z-1">
        <ul class="flex items-center h-full justify-end p-2 gap-2">
          <img @click="bottomBar.push({id: i.id, flag: i.flag, img: i.img}); i.flag = !i.flag" class="cursor-pointer h-full w-6 flex justify-center items-bottom hover:bg-white/20" src="/public/iconsWindow/remove.png" alt="">
          <img @click="i.flag = !i.flag" class="cursor-pointer flex justify-center items-center hover:bg-red-500 transition ease-in-out" src="/public/iconsWindow/close.png" alt="">
        </ul>
    </div>

    <HomeWindow @start-resizing="startResizing" :id="i.id">
      <Home v-if="i.id === 0"></Home>
      <Game v-if="i.id === 1"></Game>
      <Inventory v-if="i.id === 2"></Inventory>
      <ProgressBar v-if="i.id === 3"></ProgressBar>
      <PieChart v-if="i.id === 4"></PieChart>
    </HomeWindow>

  </div>
  <div class="fixed inset-x-0 bottom-0 bg-white/20 backdrop-blur-md h-12 items-center flex">
    <div class="cursor-pointer w-12 h-full mr-1 scale-x-80 hover:border-blue-500 border-b-4 border-blue-400 flex items-center justify-center hover:bg-white/20 transition ease-in-out" v-for="j in bottomBar" 
    :key="j.id"
    @click="myApp[j.id].flag = !myApp[j.id].flag; bottomBar.splice(bottomBar.indexOf(j), 1)" 
    > 
      <img class="h-7" :src='`${j.img}`' alt="">
    </div>
  </div>
</template>

<style scoped>
.draggable-div {
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: absolute;
}
</style>


