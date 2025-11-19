<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<script>
export default{
  data() {
    return {
      checkWinners: false,
      fieldValue: 'X',
      table: [],
      winCombos: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      fieldX: [],
      fieldO: [],
      cloneTableBot:[],
      filterTableBot: [],
      data: [],
      winCombosClone:[],
    }
  },
  computed:{
    tableRestart(){
      return [
          [
            {
              value: '',
              filled: false,
              idCell: 0
            },
            {
              value: '',
              filled: false,
              idCell: 1
            },
            {
              value: '',
              filled: false,
              idCell: 2
            }
          ],
          [
            {
              value: '',
              filled: false,
              idCell: 3
            },
            {
              value: '',
              filled: false,
              idCell: 4
            },
            {
              value: '',
              filled: false,
              idCell: 5
            }
          ],
          [
            {
              value: '',
              filled: false,
              idCell: 6
            },
            {
              value: '',
              filled: false,
              idCell: 7
            },
            {
              value: '',
              filled: false,
              idCell: 8
            }
          ]
      ]
    }
  },
  methods: {
    async switchFieldValue(indexRow, indexCell, filledCell, idCell) {
      if (filledCell == false) { 
        this.table[indexRow][indexCell].value = this.fieldValue;
        this.table[indexRow][indexCell].filled = true;
        if (this.fieldValue == 'X'){  
          this.fieldValue = 'O';
          this.fieldX.push(idCell);
          if (this.fieldX.length >= 3){
            this.checkingEndGame(this.fieldX, 'X');
          }          
        } 
        
        //  Запуск бота
        this.cloneTableBot = [];
        this.filterTableBot = [];
        this.cloneTableBot = JSON.parse(JSON.stringify(this.table));
        for (let j of this.cloneTableBot){
          this.filterTableBot = [...this.filterTableBot, ...j];
        }

        // Ввод ноликов в поле
        this.checkСombBot();
        if (this.fieldO.length >= 3){
            this.checkingEndGame(this.fieldO, 'O');
          }   
      }
    },

    checkСombBot(){
      for (let combBot of this.gameBot(this.filterTableBot)){
          for (let i of this.table){
            for (let j of i){
              if (j.idCell === combBot && j.filled === false){
                j.filled = true;
                j.value = 'O';
                this.fieldO.push(j.idCell);
                return;
              }
            }
          }
        }
      for (let i of this.table){
            for (let j of i){
              if (j.filled === false){
                j.filled = true;
                j.value = 'O';
                this.fieldO.push(j.idCell);
                return;
              }
            }
      }
    },

    gameBot(table, fieldXBot=[], fieldOBot=[]){
      // Проверка на заполнение таблицы
      for (let i of table){
        if (i.filled === true){
          if (i.value === 'X'){
            fieldXBot.push(i.idCell);
          }
          else {
            fieldOBot.push(i.idCell);
          }
          table = table.filter(item => item.idCell !== i.idCell);
        }
      }

      // Насрать врагу 
       if (this.checkingDanger(this.fieldX) === true){
        this.fieldValue = 'X';
        return this.data;
      }

      else {
        // Нахождение лучшего маршрута 
        for (let i of table){
          i.filled = true;
          i.value = this.fieldValue;
          table = table.filter(item => item.filled !== true);
          if (this.fieldValue === 'O'){
            fieldOBot.push(i.idCell);
            if (fieldOBot.length >= 3){
                if (this.checkingEndGameBote(fieldOBot, this.fieldValue) === '10'){
                  this.fieldValue = 'X';
                  return fieldOBot;
                }
            }
            this.fieldValue = 'X';
          }
          else if (this.fieldValue === 'X'){
            fieldXBot.push(i.idCell);
            this.fieldValue = 'O';
          }
          if (table.length === 0 && this.checkingEndGameBote(fieldOBot, 'O') != 10){
            if (this.fieldValue === 'X'){
              this.fieldValue = 'O';
            }
            else {
              this.fieldValue = 'X';
            }
            return fieldOBot;
          }
        }
      }
    },

    checkingEndGameBote(field, value){
      for (let i of this.winCombos){
        if (i.every((element) => field.includes(element)) === true){
          if (value === 'O'){
            return '10';
          }
          else{
            return '-10';
          }
        }
        else {
          return '0';
        }
      }
    },

    checkingDanger(field){
        for (let i of this.winCombos){
          let sus = 0;
          for (let j of field){
              if (i.includes(j) === true && sus <= 2){
                sus += 1;
              }
              if (sus === 2){
                this.removeSubArray(this.winCombosClone, i)
                this.data = i;
                return true;
              }
          }
        }
        return;
    },

    removeSubArray(source, sub) {
      let i = source.length;
      while(i--) {
        if (source[i].length === sub.length && sub.every((n, j) => n === source[i][j])) {
          source.splice(i, 1);
        }
      }
    },

    checkingEndGame(field, value){
      for (let i of this.winCombos){
        if (i.every((element) => field.includes(element)) === true){
          this.checkWinners = true;
          this.fieldValue = value; 
          // alert('Победил ' + value);
          // this.restartGame();
        }
      }
      
    },
    restartGame(){
      this.table = this.tableRestart,
      this.winCombosClone = this.winCombos,
      this.checkWinners = false,
      this.fieldValue = 'X',
      this.fieldX = [],
      this.fieldO = [],
      this.cloneTableBot = [],
      this.filterTableBot = []
      this.data = [],
      this.winCombosClone = []
    }
  },
  mounted() {
    this.restartGame();
  }
}
</script>

<template>
  <main>
    
    <div v-if="checkWinners" class="popUp">
      <div class="textWinner">
            Победил {{ fieldValue }}!
      </div>
      <button class="but" @click="restartGame">RESTART</button>
    </div>

    <div class="table">
      <div 
        v-for="(row, indexRow) in table" 
        class="row"
        :key=indexRow
      >
        <div 
          v-for="(cell, indexCell) in row" 
          class="cell"
          :key=indexCell
          @click="switchFieldValue(indexRow, indexCell, cell.filled, cell.idCell)"
        > 
          <div v-if="cell.value === 'X'">
            <img src="/public/tic_tac_toe/cross.png" alt="X">
          </div>
          <div v-else-if="cell.value === 'O'">
            <img src="/public/tic_tac_toe/zero.png" alt="O">
          </div>
        </div>
      </div>
      <button class="but" @click="restartGame">RESTART</button>
    </div>
  </main>
</template>

<style scoped>
.textWinner{
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 50%;
  height: 50%;
  border-radius: 20px;
}
.popUp{
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.7);
  flex-direction: column;
}
.but{
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 150px;
  padding: 10px 22px;
  font-size: 17px;
  font-weight: bold;
  color: #149fdf;
  border: 1px solid #149fdf;
  background: white;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.but:hover{
  background-color: #149fdf;
  color: white;
  border: 1px solid white;
}
.but:active{
  outline: none;
  background-color: #0d506e;
}
.table{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row {
  display: flex;
}
.cell {
  margin: 4px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 0px;
  width: 50px;
  height: 50px;
  border: 1px solid #149fdf;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.cell:hover{
  border: 3px solid #0d506e;
}
</style>


