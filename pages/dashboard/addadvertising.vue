<template>
  <section class="container">
    <div class="header">
      <div class="title">上架編輯</div>
      <div class="right-contet">
        <div class="adm">管理者：oic000</div>
        <div class="logout">登出</div>
      </div>
    </div>
    <div class="box">
      <div class="box-title">獎勵內容</div>
      <div class="box-table">
        <p>獎勵圖片</p>
        <input type="text">
        <p>獎勵描述</p>
        <input type="text">
        <p>所需積分</p>
        <input type="text">
        <p>獎勵等級</p>
        <input type="text">
      </div>
      <div class="box-button">
        <button>
          aaa
        </button>
        <button>
          bbb
        </button>
      </div>
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

  .header {
    width: calc(100% - 250px);
    margin-left: 250px;
    background-color: #a7a7a7;

    .title {
      display: inline-block;
      font-size: 30px;
      line-height: 65px;
    }

    .right-contet {
      float: right;

      .adm {
        display: inline-block;
        line-height: 65px;
        margin: 0px 15px;
      }

      .logout {
        display: inline-block;
        border: 1px solid;
        border-radius: 5px;
        font-size: 20px;
        margin: 0px 15px;
        padding: 5px;
        cursor: pointer;
      }
    }
  }

  .box {
    width: calc(100% - 250px);
    margin-left: 250px;

    .box-title{
      display: inline-block;
      font-size: 30px;
      line-height: 65px;
    }
  }

</style>
