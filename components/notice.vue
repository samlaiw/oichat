<template>
	<div class="notice clear">
        <div class="content">
             <div class="title">
                <fa class="icon" :icon="['fas', 'bullhorn']" />
                <div class="text">快訊：</div>
            </div>
            <swiper class="notice-swiper" :options="swiperOption" ref="swiper">
                <swiper-slide>
                    <router-link to='/' class="text">[育兒話題] 2至6歲幼兒入園率　教育部：未來4年達72%</router-link>
                </swiper-slide>
                <swiper-slide>
                    <router-link to='/' class="text">[親子教育] 小朋友學英語五個迷思? 幾歲學英文比較好，專家建議這麼說</router-link>
                </swiper-slide>
                <swiper-slide>
                    <router-link to='/' class="text">[家庭健康] 開學在即 防疫備戰 侯友宜：三級防護策略健康五原則</router-link>
                </swiper-slide>
            </swiper>
        </div>
	</div>
</template>

<script>
	export default {
		data() {
            return {
                swiperOption: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    }
                }
            }
        },
        mounted() {
            let _this = this;

            _this.$refs.swiper.$el.onmouseover = function() {
                let target = this;

                target.swiper.autoplay.stop();
            };

            _this.$refs.swiper.$el.onmouseout = function() {
                let target = this;

                target.swiper.autoplay.start();
            };
        }
	}
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';

    .notice {
        max-width: 1280px;
        margin: auto;
        margin-top: -5px;
        padding: 10px 0px;
        background-color: $minor_color;

        .content {
            display: flex;
            align-items: center;
            max-width: 1440px;
            margin: auto;

            @media screen and (max-width: 1024px) {
                flex-wrap: wrap;
            }

            .title {
                flex: 1;
                text-align: right;
                font-size: 30px;
                font-weight: bold;
                color: #ffffff;

                @media screen and (max-width: 1024px) {
                    flex: 0 0 90%;
                    text-align: left;
                    margin: auto;
                    margin-bottom: 10px;
                    font-size: 25px;
                }

                .icon {
                    display: inline-block;
                }

                .text {
                    display: inline-block;
                }
            }

            .notice-swiper {
                flex: 3;
                text-align: left;
                font-size: 20px;

                @media screen and (max-width: 1024px) {
                    flex: 0 0 90%;
                    font-size: 20px;
                }

                a {
                    color: #ffffff;
                    text-decoration: none;
                }
            }
        }
    }
</style>
