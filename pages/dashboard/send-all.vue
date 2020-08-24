<template>
  <section class="container">
    <div class="section-search">
      <div class="search">
        <label>
          <input type="radio" name="radio">
          全站會員發送
        </label>
        <label>
          <input type="radio" name="radio">
          <input type="text" placeholder="輸入多個會員帳號 請用「,」號分隔" >
        </label>
      </div>
      <div class="title">發送內容</div>
      <textarea class="area" cols="30" rows="10"></textarea>
      <div class="send-btn">送出</div>
    </div>
  </section>
</template>

<script>
  export default {
    layout: 'dashboard',
    components: {

    }
  }

</script>

<style lang="scss">
  @import '~/assets/css/global/config.scss';



  .section-search {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;

    label {
      display: block;
      width: 100%;
      font-size: 20px;
      margin-bottom: 15px;

      input[type="radio"] {
        margin-right: 20px;
        width: 10%;
        cursor: pointer;
      }
      input[type="text"]{
        width: 500px;
      }
    }

    .title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .area {
      width: 100%;
      height: 100%;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    .send-btn {
      text-align: center;
      font-size: 18px;
      width: 25%;
      margin: auto;
      border: 1px solid;
      border-radius: 5px;
      padding: 10px;
      color: #ffffff;
      background-color: #a7a7a7;
      margin-top: 20px;
      cursor: pointer;
    }
  }

</style>
