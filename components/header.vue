
<template>
    <header class="header">
        <div class="content">
            <div class="logo-content">
                <router-link to="/">
                    <img src="~/assets/image/logo.png" alt="oichat" class="logo">
                </router-link>
            </div>
            <div class="menu-list">
                <router-link to="/" class="item">首頁</router-link>
                <router-link to="discuss" class="item">親子討論</router-link>
                <router-link to="course" class="item">免費課程</router-link>
                <router-link to="coupon" class="item">兌換中心</router-link>
                <router-link to="message" class="item">留言交流</router-link>
                <router-link to="contact" class="item">聯絡我們</router-link>
            </div>
            <div class="search-content">
                <input type="text" class="search" placeholder="搜尋">
            </div>
            <div class="login-content">
                <router-link to="login" class="btn login">
                    <fa class="icon" :icon="['fas', 'user-circle']" />
                    會員登入
                </router-link>
            </div>
            <!-- <div class="facbook">
              <img src="~/assets/image/fb-icon.png" alt="" class="icon">
              <link rel="stylesheet" href="https://www.facebook.com/OiKID/">
            </div> -->
            <div class="bar-content">
                <fa @click="navbar" class="icon bar" :icon="['fas', 'bars']" />
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        methods:{
             navbar() {
                let _this = this;

                _this.$store.commit('navbar/open');
            }
        }
    };
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';

    .header {
        width: 100%;
        height: 65px;
        font-weight: 900;
        padding-left: 5%;
        padding-right: 5%;
        background-color: $main_color;
        position: fixed;
        z-index: 100;


        .content {
            width: 100%;

            .logo-content {
                float: left;
                width: 80px;
                height: 65px;
                // line-height: 65px;
                margin-right: 45px;
                display: flex;
                align-items: center;

                @media screen and (max-width: 1024px) {
                    width: 20%;
                    margin-right:20px;
                }
            }

            .menu-list {
                float: left;
                width: 50%;
                height: 65px;
                line-height: 65px;

                @media screen and (max-width: 1024px) {
                    display: none;
                }

                .item {
                    color: #ffffff;
                    font-size: 2.5vmin;
                    margin: 10px;
                    text-decoration: none;
                    transition: 0.5s ease;

                    &.nuxt-link-exact-active {
                        color: #566FB8;
                    }

                    &:hover {
                        color: #566FB8;
                    }
                }
            }
            .search-content{
              float:left;
              width: 20%;
              height:65px;
              text-align: center;
              margin: auto 0px;
              outline: none;

              @media screen and (max-width: 1024px) {
                    width: 50%;
                }
              .search{
                width: 100%;
                padding: 15px;
                border-radius: 20px;
                border-width: 0px;
                margin-top: 10px;
                 outline: none;

              }
            }

            .login-content {
                float: right;
                width: 13%;
                height: 65px;
                line-height: 65px;

                @media screen and (max-width: 1024px) {
                    display: none;
                }

                .login {
                    color: #ffffff;
                    font-size: 2.5vmin;
                    text-decoration: none;
                    vertical-align: middle;
                    transition: 0.5s ease;

                    .icon {
                        margin-right: 5px;
                    }

                    &:hover {
                        color: #566FB8;
                    }
                }
            }
            .facebook{
              width: 25px;
              height:25px;
              .icon{
                width: 25px;
                height: 25px;
              }
            }

            .bar-content {
                float: right;
                width: 65px;
                height: 65px;
                text-align: center;
                display: none;
                cursor: pointer;

                @media screen and (max-width: 1024px) {
                    display: block;
                }

                .bar {
                    font-size: 35px;
                    color: #ffffff;
                    height: 65px;
                }
            }
        }
    }
</style>
