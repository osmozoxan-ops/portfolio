<script>
export default{
  data() {
    return {
      mouse: {
        left: 0,
        top: 0
      },
      toggl: false,
      inventory: [
        [
          {
              filled: true,
              idCell: 0,
              figure: 'fish',
              img: '/portfolio/pic/riba.png',
              summImgHorizon: 3,
              summImgvertical: 1,
              rotate: 90
          },
          {
              filled: true,
              idCell: 1,
              figure: 'herb',
              img: '/portfolio/pic/herb.png',
              summImgHorizon: 2,
              summImgvertical: 1,
              rotate: 0
          },
          {
              filled: true,
              idCell: 2,
              figure: 'herb',
              img: '',
              summImgHorizon: 2,
              summImgvertical: 1,
              rotate: 0
          },
          {
              filled: true,
              idCell: 3,
              figure: 'egg',
              img: '/portfolio/pic/egg.png',
              summImgHorizon: 1,
              summImgvertical: 1,
              rotate: 0
          },
          {
              filled: false,
              idCell: 4,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 5,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 6,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 7,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
        ],
        [
          {
              filled: true,
              idCell: 8,
              figure: 'fish',
              img: '',
              summImgHorizon: 3,
              summImgvertical: 1,
              rotate: 90
          },
          {
              filled: false,
              idCell: 9,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 10,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: true,
              idCell: 11,
              figure: 'grenade',
              img: '/portfolio/pic/grenade.png',
              summImgHorizon: 2,
              summImgvertical: 1,
              rotate: 0
          },
          {
              filled: true,
              idCell: 12,
              figure: 'grenade',
              img: '',
              summImgHorizon: 2,
              summImgvertical: 1,
              rotate: 0
          },
          {
              filled: false,
              idCell: 13,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 14,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 15,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
        ],
        [
          {
              filled: true,
              idCell: 16,
              figure: 'fish',
              img: '',
              summImgHorizon: 3,
              summImgvertical: 1,
              rotate: 90
          },
          {
              filled: false,
              idCell: 17,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 18,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 19,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: true,
              idCell: 20,
              figure: 'gun',
              img: '/portfolio/pic/gun.png',
              summImgHorizon: 3,
              summImgvertical: 2,
              rotate: 0
          },
          {
              filled: true,
              idCell: 21,
              figure: 'gun',
              img: '',
              summImgHorizon: 3,
              summImgvertical: 2,
              rotate: 0
          },
          {
              filled: true,
              idCell: 22,
              figure: 'gun',
              img: '',
              summImgHorizon: 3,
              summImgvertical: 2,
              rotate: 0
          },
          {
              filled: true,
              idCell: 23,
              figure: 'herbMix',
              img: '/portfolio/pic/herbMix.png',
              summImgHorizon: 2,
              rotate: 90
          },
        ],
        [
          {
              filled: false,
              idCell: 24,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 25,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 26,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 27,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: true,
              idCell: 28,
              figure: 'gun',
              img: '',
              summImgHorizon: 3,
              summImgvertical: 2,
              rotate: 0
          },
          {
              filled: true,
              idCell: 29,
              figure: 'gun',
              img: '',
              summImgHorizon: 3,
              summImgvertical: 2,
              rotate: 0
          },
          {
              filled: true,
              idCell: 30,
              figure: 'gun',
              img: '',
              summImgHorizon: 3,
              summImgvertical: 2,
              rotate: 0
          },
          {
              filled: true,
              idCell: 31,
              figure: 'herbMix',
              img: '',
              summImgHorizon: 2,
              summImgvertical: 1,
              rotate: 90
          },
        ],
      ],
      inventoryBack: [],
      rotateSound: null,
      pickupSound: null,
      dropSound: null
    }
  },
  computed:{
    inventoryBackOffset(){
      return this.inventoryBack
        .map((row, i) => (
          row.map((cell, j) => cell.figure != '' ? [i, j] : null)
        ))
        .flat()
        .find(item => item !== null);
    },
    inventoryRestart(){
      return [
        [
          {
              filled: true,
              idCell: 0,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 900
          },
          {
              filled: false,
              idCell: 1,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 2,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: true,
              idCell: 3,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 4,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 5,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 6,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 7,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
        ],
        [
          {
              filled: true,
              idCell: 8,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 9,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 10,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: true,
              idCell: 11,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: true,
              idCell: 12,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 13,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 14,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 15,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
        ],
        [
          {
              filled: true,
              idCell: 16,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 17,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 18,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 19,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 20,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 21,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 22,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 23,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
        ],
        [
          {
              filled: false,
              idCell: 24,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 25,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 26,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 27,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 28,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 29,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 30,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
          {
              filled: false,
              idCell: 31,
              figure: '',
              img: '',
              summImgHorizon: 0,
              summImgvertical: 0,
              rotate: 0
          },
        ],
      ]
    }
  },
  methods: {
    handleKeyDown(event) {
      if (this.toggl && (event.key === 'К' || event.key === 'к' || event.key === 'R' || event.key === 'r')) {
        this.turnInventory();
        if (this.rotateSound) {
          this.rotateSound.currentTime = 0;
          this.rotateSound.play();
        }
      }
    },

    turnInventory(){
      let cacheTable = [];
      for (let i = 0; i < this.inventoryBack[0].length; i++){
        cacheTable.push([]);
        for (let j = 0; j < this.inventoryBack.length; j++){
          cacheTable[i].push(this.inventoryBack[j][i]);
          // вращение рыб
          if (cacheTable[i][j].figure) {
            cacheTable[i][j].rotate = cacheTable[i][j].rotate === 0 ? 90 : 0;
          }
        }
      }
      
      this.inventoryBack = cacheTable;
      return this.inventoryBack;
    },

    removeFigure(inventory, figure, img, summImgHorizon, summImgvertical, rotate){
      let counter = 0;
      if (img === ''){
        for (let i of inventory){
          for (let j of i){
            if (j.figure === figure && j.img != ''){
              img = j.img;
              break;
            }
          }
        }
      }
      for (let [indexOne, i] of inventory.entries()) {
        for (let [indexTwo, j] of i.entries()) {
          if (j.figure === figure){
            j.filled = false;
            j.figure = '';
            this.inventoryBack[indexOne][indexTwo].filled = true;
            this.inventoryBack[indexOne][indexTwo].figure = figure;
            this.inventoryBack[indexOne][indexTwo].img = '';
            this.inventoryBack[indexOne][indexTwo].summImgHorizon = summImgHorizon;
            this.inventoryBack[indexOne][indexTwo].summImgvertical = summImgvertical;
            this.inventoryBack[indexOne][indexTwo].rotate = rotate;
            if (counter === 0){
              this.inventoryBack[indexOne][indexTwo].img = img;
            }
            counter += 1;
            if (this.pickupSound) {
              this.pickupSound.currentTime = 0;
              this.pickupSound.play();
            }
          }
        }
      }
    },

    addFigure(inventory, idCell){
      let mainFigure = '';
      let mainImg = [];
      let mainSumm = 0;
      let mainSummvertical = 0;
      let arr = [];
      let mainRotate = 0;
      for (let [indexRow, i] of inventory.entries()) {
        for (let [indexCell, j] of i.entries()) {
          if (j.figure != ''){
            mainFigure = j.figure;
            mainImg.push(j.img);
            mainSumm = j.summImgHorizon;
            mainSummvertical = j.summImgvertical;
            mainRotate = j.rotate;
            // стартовый индекс
            arr.push([indexRow, indexCell]); 
          }
        }
      }
      mainImg.reverse();
      for (let [indexRow, i] of this.inventory.entries()) {
        for (let [indexCell, j] of i.entries()) {
          if (j.idCell === idCell){
            let numbOne = [indexRow - arr[0][0], indexCell - arr[0][1]];
            arr = arr.reverse();
            // проверка на уже заполненые ячейки и границы
            let arr2 = []
            for (let i of arr) {
              arr2.push([numbOne[0] + i[0], numbOne[1] + i[1]]);
              //  
              if (numbOne[0] + i[0] >= this.inventory.length || numbOne[1] + i[1] >= this.inventory[0].length || this.inventory[numbOne[0] + i[0]][numbOne[1] + i[1]].filled == true){
                this.toggl = !this.toggl;
                return console.log('объект не помещается');
              }
            }
            // заполнение инветаря
            for (let [indexRow, i] of arr2.entries()){
              this.inventory[i[0]][i[1]].figure = mainFigure;
              this.inventory[i[0]][i[1]].filled = true;
              this.inventory[i[0]][i[1]].img = mainImg[indexRow];
              this.inventory[i[0]][i[1]].summImgHorizon = mainSumm;
              this.inventory[i[0]][i[1]].summImgvertical = mainSummvertical;
              this.inventory[i[0]][i[1]].rotate = mainRotate;
            }
          }
        }
      }
      this.inventoryBack = this.inventoryRestart;
      if (this.dropSound) {
        this.dropSound.currentTime = 0;
        this.dropSound.play();
      }
    }
  },
  mounted() {
    this.inventoryBack = this.inventoryRestart;
    this.rotateSound = new Audio('/portfolio/sound/rotate.wav');
    this.pickupSound = new Audio('/portfolio/sound/pickup.wav');
    this.dropSound = new Audio('/portfolio/sound/drop.wav');
    document.addEventListener('mousemove', e => {
      const Bounds = this.$refs?.inventoryRoot?.getBoundingClientRect?.();
      if(!Bounds){
        return
      }
      this.mouse.left = e.clientX - Bounds.left;
      this.mouse.top = e.clientY - Bounds.top;
    });
    window.addEventListener('keydown', this.handleKeyDown);
  }
}
</script>

<template>
  <div>
    <div class="inventory" ref="inventoryRoot">
      <div class="table" style="margin-left: 40px;"> 
        <div 
          v-for="rowInventoryRow in inventory" 
          class="row"
          :key=rowInventoryRow>
          <div
            v-for="cellInventory in rowInventoryRow" 
            class="cellInventory"
            :key=cellInventory
          >
            <div v-if="cellInventory.filled && !toggl" 
              @click="
                removeFigure(inventory, cellInventory.figure, cellInventory.img, cellInventory.summImgHorizon, cellInventory.summImgvertical, cellInventory.rotate); 
                toggl = !toggl
              " 
              class="red" 
              >
              <img
              :class="{'cellLeft': cellInventory.summImgvertical > 1 && cellInventory.rotate === 90}"
              v-if="cellInventory.img != ''" :src="cellInventory.img"
              :style="{ 'width': 100 * cellInventory.summImgHorizon + '%',
              'height': 100 * cellInventory.summImgvertical + '%',
              'transform': 'rotate(' + cellInventory.rotate + 'deg)'}">
            </div>
            <div v-if="cellInventory.filled && toggl" 
              class="red">
              <img
              :class="{'cellLeft': cellInventory.summImgvertical > 1 && cellInventory.rotate === 90}"
              v-if="cellInventory.img != ''" :src="cellInventory.img"
              :style="{ 'width': 100 * cellInventory.summImgHorizon + '%',
              'height': 100 * cellInventory.summImgvertical + '%',
              'transform': 'rotate(' + cellInventory.rotate + 'deg)'}">
            </div>
            <div v-if="toggl && !cellInventory.filled" @click="addFigure(inventoryBack, cellInventory.idCell); toggl = !toggl" class="green">
            </div>
          </div>
        </div>
      </div>
      <div v-if="toggl" class="table mouse"
      :style="{
        left: mouse.left - 50 * inventoryBackOffset[1] + 'px',
        top: mouse.top - 50 * inventoryBackOffset[0] + 'px'
      }"
      > 
        <div 
          v-for="rowInventoryRow in inventoryBack" 
          class="row"
          :key=rowInventoryRow>
          <div
            v-for="cellInventory in rowInventoryRow" 
            class="cellBackInventory"
            :class="{'cellHide': cellInventory.figure === ''}"
            :key=cellInventory
          >
            <div v-if="cellInventory.filled && toggl" 
              class="red">
              <img
              :class="{'cellLeft': cellInventory.summImgvertical > 1 && cellInventory.rotate === 90}"
              class="color" v-if="cellInventory.img != ''" :src="cellInventory.img"
              :style="{ 'width': 100 * cellInventory.summImgHorizon + '%',
              'height': 100 * cellInventory.summImgvertical + '%',
              'transform': 'rotate(' + cellInventory.rotate + 'deg)'}">
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="hint">
      <h3>Упраление:</h3>
      ЛКМ — брать/класть предмет. R — вращать объект
    </div>
  </div>
</template>

<style scoped>
h3{
  font-size: 20px;
  font-weight: bold;
}
.hint{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
}
*{
  max-width: 500%;
}
.inventory{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../public/pic/inventory.png') no-repeat center center;
  background-size: cover;
  width: 520px;
  height: 370px;    
}
.cellHide{
  opacity: 0;
}
.cellLeft{
  left: 50px !important;
}
.mouse{
  top: 0;
  left: 0;
  display: inline-block;
  position: absolute;
  pointer-events: none;
}
.green{
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
}
.red{
  width: 50px;
  height: 50px;
  position: relative;
  /* overflow: hidden; */
}
.red img{
  position: absolute;
  top: 0;
  left: 0;
  background-size: contain;
  transform-origin: 25px 25px;
}
.color{
  background: rgba(96, 138, 85, 0.6);
}
.table{
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
}
.cellInventory{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 0px;
  width: 50px;
  height: 50px;
  border: 1px solid rgb(95 95 93);
  margin: 1px;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
.cellBackInventory{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 0px;
  width: 50px;
  height: 50px;
  /* border: 1px solid rgb(95 95 93);
  margin: 1px; */
  text-align: center;
  cursor: pointer;
  user-select: none;
}
</style>

