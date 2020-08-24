<template>
  <section class="container">
    <div class="level-title">
      <div class="LV">LV等級</div>
      <div class="nickname">稱號</div>
      <div class="elo">積分區間設定</div>
    </div>
    <div class="level-table">
      <input type="text" v-model="clickedItems.level">
      <input type="text" v-model="clickedItems.title">
      <input type="text" v-model="clickedItems.number1">
      ~
      <input type="text" v-model="clickedItems.number2">
      <button @click="() => handleClick(member)">增加</button>
      <div v-for="(member1 ,index) in  member" :key="index">
        <!-- <li >
          <span>{{member1.level}}</span>
        </li> -->
        <input type="text" v-model="member1.level">
        <input type="text" v-model="member1.title">
        <input type="text" v-model="member1.number1">
        ~
        <input type="text" v-model="member1.number2">
        <button>編輯</button>
        <button @click="() => deleteClick(index)">刪除</button>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    layout: 'dashboard',
    components: {

    },
    data() {
      return {
        member: [{
            level: '1',
            title: '新生兒',
            number1: '0',
            number2: '50'
          },
          {
            level: '2',
            title: '幼幼班',
            number1: '51',
            number2: '100'
          },
          {
            level: '3',
            title: '小學生',
            number1: '101',
            number2: '500'
          },
          {
            level: '4',
            title: '國中生',
            number1: '510',
            number2: '1000'
          },
          {
            level: '5',
            title: '高中生',
            number1: '1001',
            number2: '2000'
          },
          {
            level: '6',
            title: '大學生',
            number1: '2001',
            number2: '3000'
          },
          {
            level: '7',
            title: '研究生',
            number1: '3001',
            number2: '8000'
          }, {
            level: '8',
            title: '博士生',
            number1: '8001',
            number2: '12000'
          },
          {
            level: '9',
            title: '教授',
            number1: '12001',
            number2: '20000'
          },
          {
            level: '10',
            title: '校長',
            number1: '20001',
            number2: '99999'
          }
        ],
        clickedItems: [{
          level: '',
          title: '',
          number1: '',
          number2: ''
        }],

      }
    },
    methods: {
      handleClick(member) {
        this.member.push(this.clickedItems);
        console.log(this.member)
      },
      deleteClick(index){
        this.member.splice (index,1);
        console.log(this.member)
      }
    }
  }

</script>
<style lang="scss">
  @import '~/assets/css/global/config.scss';


  .level-title {
    width: calc(100% - 250px);
    margin-left: 250px;
    padding: 100px;
    font-size: 30px;

    .LV {
      width: 15%;
      float: left;
      text-align: center;
    }

    .nickname {
      width: 27%;
      float: left;
      text-align: center;
    }

    .elo {
      width: 40%;
      float: left;
      text-align: center;
    }
  }

  .level-table {
    width: calc(100% - 250px);
    margin-left: 250px;
    padding: 50px;

    input[type="text"] {
      width: 20%;
      height: 50px;
      text-align: center;
      border-width:2px;
      margin: 1px;
    }
  }

  // .push-level {
  //   width: 100px;
  //   height: 100px;
  //   font-size: 50px;
  //   margin-left: 250px;
  // }

</style>
