
<template>
    <header class="header">
        <div class="content clear">
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
            <div class="login-content">
                <router-link to="login" class="btn login">
                    <fa class="icon" :icon="['fas', 'user-circle']" />
                    會員登入
                </router-link>
            </div>
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
        padding-left: 5%;
        padding-right: 5%;
        background-color: $main_color;

        .content {
            width: 100%;

            .logo-content {
                float: left;
                width: 80px;
                height: 65px;
                line-height: 65px;
                margin-right: 45px;
            }

            .menu-list {
                float: left;
                height: 65px;
                line-height: 65px;

                @media screen and (max-width: 1024px) {
                    display: none;
                }

                .item {
                    color: #ffffff;
                    font-size: 22px;
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

            .login-content {
                float: right;
                height: 65px;
                line-height: 65px;

                @media screen and (max-width: 1024px) {
                    display: none;
                }

                .login {
                    color: #ffffff;
                    font-size: 22px;
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