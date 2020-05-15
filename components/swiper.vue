
<template>
    <swiper class="swiper" :options="swiperOption" ref="swiper">
        <swiper-slide>
            <img src="~/assets/image/banner/CPC-banner05.jpg">
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
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
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
    .swiper {
        max-width: 1280px;
    }
</style>