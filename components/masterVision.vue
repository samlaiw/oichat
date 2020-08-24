
<template>
    <div class="vision">
        <div class="content">
            <div class="title-content">
                <div class="title">OiChat</div>
                <div class="subtitle">我愛聊</div>
            </div>
            <div class="narrative">
                <div class="line-one">爸比媽咪</div>
                <div class="line-two">親子</div>
                <div class="line-three">討論站</div>
            </div>
            <!-- <div class="search-content">
                <input type="text" class="search" placeholder="搜尋關鍵字(親子、教育、育兒、家庭)">
            </div> -->
        </div>
    </div>
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

    .vision {
        width: 100%;
        text-align: center;
        padding-top: 60px;
        padding-bottom: 20px;

        @media screen and (max-width: 1024px) {
            padding-top: 80px;
            // padding-left:60px;

        }

        .content {
            width: 100%;

            .title-content {
                display: inline-block;
                color: $main_color;
                font-size: 200px;
                margin-right: 70px;
                margin-bottom: 20px;
                vertical-align: middle;

                @media screen and (max-width: 1200px) {
                    font-size: 150px;
                    margin-right: 50px;
                }

                @media screen and (max-width: 1024px) {
                    font-size: 50px;
                    margin-right: auto;
                    margin-bottom: auto;
                }

                .title {
                    display: inline-block;
                    -webkit-font-family: 'Archivo Black', sans-serif;;
                    -moz-font-family: 'Archivo Black', sans-serif;;
                    -ms-font-family: 'Archivo Black', sans-serif;;
                    -o-font-family: 'Archivo Black', sans-serif;;
                    font-family: 'Archivo Black', sans-serif;;
                }

                .subtitle {
                    display: inline-block;
                    margin-left: -40px;
                    font-size: 70px;

                    @media screen and (max-width: 1200px) {
                        font-size: 50px;
                    }

                    @media screen and (max-width: 1024px) {
                        font-size: 30px;
                        margin-left: -10px;
                    }
                }
            }

            .narrative {
                display: inline-block;
                height: 120px;
                color: $minor_color;
                font-weight: bold;
                vertical-align: middle;
                font-size: 25px;
                text-align-last: left;
                padding-left: 20px;
                border-left: 5px solid $minor_color;

                @media screen and (max-width: 1024px) {
                    display: none;
                }
            }

            // .search-content {
            //     width: 100%;
            //     text-align: center;

            //     .search {
            //         width: 30%;
            //         padding: 10px;
            //         border-radius: 10px;
            //         border: 2px solid #707070;

            //         @media screen and (max-width: 960px) {
            //             width: 80%;
            //             margin-top: 10px;
            //             border: 1px solid #707070;
            //         }

            //         &:focus {
            //             outline : 0;
            //         }
            //     }
            // }
        }
    }
</style>
