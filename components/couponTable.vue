<template>
  <div class="coupon-table">
		<div class="content">
            <div class="table">
                <div class="table-content">
                    <div class="title">積分兌換中心</div>
                    <div class="item" :class="{active: isActive === 'general'}" @click="changeSwitch" data-type="general">白銀獎勵(一般會員)</div>
                    <div class="item" :class="{active: isActive === 'sponsor'}" @click="changeSwitch" data-type="sponsor">黃金獎勵(贊助會員)</div>
                    <div class="item" :class="{active: isActive === 'record'}" @click="changeSwitch" data-type="record">兌換紀錄</div>
                </div>
                <div class="login-reminder">立即<router-link to="login">登入</router-link>oichat會員，就有機會獲得免費英語親子線上課程</div>
                <div class="coupon-content">
                    <div class="coupon" v-for="(resources, index) in couponList" :key="index">
                        <div class="image">
                            <img data-src="~/assets/image/coupon/coming.jpg" :alt="resources.title" v-lazy-load>
                        </div>
                        <div class="title">{{ resources.title }}</div>
                        <div class="point">所需積分：{{ resources.point }}</div>
                        <input type="button" value="兌換">
                    </div>
                </div>
                <no-ssr>
                    <infinite-loading spinner="spiral" @infinite="infiniteScroll"  ref="infiniteLoading"></infinite-loading>
                </no-ssr>
            </div>
        </div>
	</div>
</template>

<script>
    import InfiniteLoading from 'vue-infinite-loading';

	export default {
		components: {
			InfiniteLoading: InfiniteLoading
        },
        data() {
            return {
                couponList: [
                    {
                        couponId: '01',
                        image: 'coming.jpg',
                        title: '兒童英語線上課程 1 堂',
                        point: '300'
                    },
                    {
                        couponId: '02',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 2 堂',
                        point: '500'
                    },
                    {
                        couponId: '03',
                        image: './assets/image/coupon/coming.jpg',
                        title: '可愛兒童英語繪本',
                        point: '700'
                    },
                    {
                        couponId: '04',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 3 堂',
                        point: '1100'
                    },
                    {
                        couponId: '01',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 1 堂',
                        point: '300'
                    },
                    {
                        couponId: '02',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 2 堂',
                        point: '500'
                    },
                    {
                        couponId: '03',
                        image: './assets/image/coupon/coming.jpg',
                        title: '可愛兒童英語繪本',
                        point: '700'
                    },
                    {
                        couponId: '04',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 3 堂',
                        point: '1100'
                    },
                    {
                        couponId: '01',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 1 堂',
                        point: '300'
                    },
                    {
                        couponId: '02',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 2 堂',
                        point: '500'
                    },
                    {
                        couponId: '03',
                        image: './assets/image/coupon/coming.jpg',
                        title: '可愛兒童英語繪本',
                        point: '700'
                    },
                    {
                        couponId: '04',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 3 堂',
                        point: '1100'
                    },
                    {
                        couponId: '01',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 1 堂',
                        point: '300'
                    },
                    {
                        couponId: '02',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 2 堂',
                        point: '500'
                    },
                    {
                        couponId: '03',
                        image: './assets/image/coupon/coming.jpg',
                        title: '可愛兒童英語繪本',
                        point: '700'
                    },
                    {
                        couponId: '04',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 3 堂',
                        point: '1100'
                    },
                    {
                        couponId: '01',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 1 堂',
                        point: '300'
                    },
                    {
                        couponId: '02',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 2 堂',
                        point: '500'
                    },
                    {
                        couponId: '03',
                        image: './assets/image/coupon/coming.jpg',
                        title: '可愛兒童英語繪本',
                        point: '700'
                    },
                    {
                        couponId: '04',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 3 堂',
                        point: '1100'
                    }
                ],
                isActive: 'general',
                page: 1
            }
        },
        methods: {
            changeSwitch(event) {
                let _this = this;
                let target = event.target;
                let type = target.dataset.type;

                _this.isActive = type;
            },
            infiniteScroll($state) {
                let _this = this;
                
                setTimeout(() => {
                    let data = [
                    {
                        couponId: '01',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 1 堂',
                        point: '300'
                    },
                    {
                        couponId: '02',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 2 堂',
                        point: '500'
                    },
                    {
                        couponId: '03',
                        image: './assets/image/coupon/coming.jpg',
                        title: '可愛兒童英語繪本',
                        point: '700'
                    },
                    {
                        couponId: '04',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 3 堂',
                        point: '1100'
                    },{
                        couponId: '01',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 1 堂',
                        point: '300'
                    },
                    {
                        couponId: '02',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 2 堂',
                        point: '500'
                    },
                    {
                        couponId: '03',
                        image: './assets/image/coupon/coming.jpg',
                        title: '可愛兒童英語繪本',
                        point: '700'
                    },
                    {
                        couponId: '04',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 3 堂',
                        point: '1100'
                    },{
                        couponId: '01',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 1 堂',
                        point: '300'
                    },
                    {
                        couponId: '02',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 2 堂',
                        point: '500'
                    },
                    {
                        couponId: '03',
                        image: './assets/image/coupon/coming.jpg',
                        title: '可愛兒童英語繪本',
                        point: '700'
                    },
                    {
                        couponId: '04',
                        image: './assets/image/coupon/coming.jpg',
                        title: '兒童英語線上課程 3 堂',
                        point: '1100'
                    }]
                    
                    if(_this.page <= 3) {
                        _this.page += 1;

                         data.forEach( item => {
                            _this.couponList.push(item);
                        })

                        $state.loaded();
                    }
                    else {
                        $state.complete();
                    }
                }, 500);
            }
        }
	}
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';
    
    .coupon-table {
        padding: 50px 0px;

        @media screen and (max-width: 1024px) {
            padding: 0px;
        }

        .content {            
            max-width: 1280px;
            margin: auto;

            @media screen and (max-width: 1280px) {
                padding: 0px 20px;
            }

            .table {
                text-align: center;
                
                .table-content {
                    padding: 10px;
                    border: 1px solid #3b3b3b;
                    border-radius: 5px;

                    @media screen and (max-width: 960px) {
                        margin: 0px 10px 5px 10px;
                    }

                    .title {
                        font-size: 40px;
                        font-weight: bold;
                        margin-bottom: 20px;

                        @media screen and (max-width: 375px) {
                            font-size: 30px;
                        }
                    }

                    .item {
                        width: 30%;
                        display: inline-block;
                        font-size: 18px;
                        padding: 5px;
                        border-right: 1px solid #3b3b3b;
                        cursor: pointer;
                        vertical-align: middle;

                        @media screen and (max-width: 375px) {
                            font-size: 15px;
                        }

                        &:nth-last-child(1) {
                            border: none;
                        }

                        &:hover,
                        &.active {
                            color: #566FB8;
                        }
                    }
                }

                .login-reminder {
                    font-size: 26px;
                    margin: 20px 0px;

                    @media screen and (max-width: 768px) {
                        font-size: 22px;
                    }

                    @media screen and (max-width: 680px) {
                        font-size: 18px;
                    }

                    @media screen and (max-width: 414px) {
                        padding: 0px 10px;
                        font-size: 16px;
                    }
                }

                .coupon-content {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    @media screen and (max-width: 960px) {
                        &:after {
                            content: '';
                            flex: 0 0 30%;
                        }
                    }

                    .coupon {
                        flex: 0 0 24%;
                        margin-bottom: 15px;
                        border-radius: 5px;
                        text-overflow : ellipsis;
                        border: 1px solid #ababab;

                        @media screen and (max-width: 960px) {
                            flex: 0 0 30%;
                        }

                        @media screen and (max-width: 620px) {
                            flex: 0 0 45%;
                        }

                        @media screen and (max-width: 375px) {
                            flex: 0 0 100%;
                        }

                        .image {
                            margin-bottom: 5px;
                        }

                        .title {
                            color: #3f65d8;
                            margin: 10px 0px;
                            font-size: 18px;
                            font-weight: bold;

                            @media screen and (max-width: 620px) {
                                font-size: 16px;
                            }
                        }

                        .point {
                            margin: 5px 0px;
                        }
                        
                        input[type="button" ] {
                            cursor: pointer;
                            width: 50%;
                            color: #ffffff;
                            font-size: 16px;
                            background-color: $minor_color;
                            border: 1px solid $minor_color;
                            border-radius: 5px;
                            outline: none;
                            padding: 5px 0px;
                            margin: 5px 0px 10px 0px;
                            letter-spacing: 10px;
                            text-indent: 10px;
                            text-align: center;
                            font-weight: bold;
                        }
                    }

                    .infinite-loading-container {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
