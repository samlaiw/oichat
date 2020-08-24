<template>
  <section class="container">
    <v-vision />
    <v-swiper class="swiper"/>
    <div class="login-place">
      <p class="content1">
        立刻登入oichat會員，就有機會獲得免費英語親子線上課程
      </p>
      <div class="content2">
        <button class="facebook-button">
          FACEBOOK登入
        </button>
      </div>
      <div class="content3">
        <button class="google-button">
          Google+登入
        </button>
      </div>
      <div class="content4">
        <p class="internet-rule" router-link to="login">網站服務條款說明</p>
      </div>
    </div>
  </section>
</template>
<script>
  import vision from "~/components/masterVision.vue";
  import swiper from "~/components/swiper.vue"

  export default {
    components: {
      vVision: vision,
      vSwiper: swiper
    }
  }

</script>
<style lang="scss">
  @import '~/assets/css/global/config.scss';
  .swiper{
    display: none;
    @media screen and (max-width: 1024px) {
      display:block;
    }
  }
  .login-place {
    width: 100%;
    height: 500px;
    padding: 50px;
    border-style: groove;

    .content1 {
      height: 30%;
      font-size: 4vmin;
      font-weight: 800;
      text-align: center;
    }

    .content2 {
      width: 100%;
      height: 30%;

      .facebook-button {
        box-shadow: 1px 3px 5px 0px #9fb4f2;
        background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
        background-color: #7892c2;
        border-radius: 10px;
        border: 1px solid #4e6096;
        cursor: pointer;
        color: #ffffff;
        font-family: Arial;
        font-size: 17px;
        font-weight: bold;
        padding: 13px 43px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #283966;
        width: 50%;
        outline: none;
        text-align: center;
        margin-left: 25%;

        @media screen and (max-width: 1024px) {
                    font-size: 10px;
                }

        &:hover {
          background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
          background-color: #476e9e;
        }

        &:active {
          position: relative;
          top: 1px;
        }
      }

    }

    .content3 {
      width: 100%;
      height: 30%;

      .google-button {
        box-shadow: 1px 3px 5px 0px #3e7327;
        background: linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
        background-color: #77b55a;
        border-radius: 10px;
        border: 1px solid #4b8f29;
        cursor: pointer;
        color: #ffffff;
        font-family: Arial;
        font-size: 17px;
        font-weight: bold;
        padding: 13px 43px;
        text-decoration: none;
        text-shadow: 0px 1px 0px #5b8a3c;
        width: 50%;
        outline: none;
        text-align: center;
        margin-left: 25%;

        @media screen and (max-width: 1024px) {
                    font-size: 10px;
                }


        &:hover {
          background: linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
          background-color: #72b352;
        }

        &:active {
          position: relative;
          top: 1px;
        }
      }

    }
    .content4{
      width: 100%;
      height: 20%;
      text-align: center;
      .internet-rule{
        color:royalblue;
        font-size: 4vmin;
        text-decoration:underline;
        cursor: pointer;
      }
      &:hover{
        font-weight: 600;
        color: blue;

      }
    }
  }

</style>
