
<template>
    <swiper class="swiper" :options="swiperOption" ref="swiper">
        <swiper-slide>
            <img data-src="~/assets/image/banner/banner_01.jpeg" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
        <swiper-slide>
            <img data-src="~/assets/image/banner/banner_02.jpeg" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    watchSlidesVisibility: true,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    lazy: {
                        loadPrevNext: true,
                    },
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
    .swiper {
        max-width: 1280px;
    }
</style>
