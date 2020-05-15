
<template>
    <div class="navbar" :data-is-open="listenNavbar" >
        <div class="content">
            <div class="switch">
                <fa @click="navbar" class="icon" :icon="['fas', 'times']" />
            </div>
            <div class="login-content">
                <router-link to="login" class="btn login">
                    <fa class="icon" :icon="['fas', 'user-circle']" />
                    會員登入
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
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: this.$store.state.navbar.isOpen
            }
        },
        computed: {
            listenNavbar() {
                let _this = this;

                return _this.$store.state.navbar.isOpen;
            }
        },
        methods:{
             navbar() {
                let _this = this;
                
                _this.$store.commit('navbar/close');
            }
        }
    };
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';
    
    .navbar {
        opacity: 0;
        position: fixed;
        top: 0px;
        left: 100%;
        right: -100%;
        bottom: 0px;
        z-index: 999;
        padding: 20px 0px;
        background-color: $main_color;
        transition: 0.6s ease-in-out;

        &[data-is-open=true] {
            opacity: 1;
            left: 0px;
            right: 0px;
        }

        .content {
            width: 85%;
            margin: auto;

            .switch {
                color: #fafafa;
                font-size: 30px;
                text-align: right;
            }
        }

        .login-content {
            font-size: 22px;
            margin: 40px 0px;

            .login {
                color: #ffffff;
                font-weight: bold;
                text-decoration: none;
            }
        }

        .menu-list {
            font-size: 22px;

            .item {
                display: block;
                color: #ffffff;
                margin: 20px 0px;
                font-weight: bold;
                text-decoration: none;

                &.nuxt-link-exact-active {
                    color: #566FB8;
                }
            }
        }
    }
</style>