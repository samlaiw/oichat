<template>
    <div class="recommend">
        <div class="sponsor-content">
            <div class="subject clear">
                <div class="title">贊助廣告</div>
            </div>
            <div class="detail">
                <div class="item">
                    <div class="image">
                        <img data-src="~/assets/image/category/advertis.jpg" v-lazy-load>
                    </div>
                </div>
                <div class="item">
                    <div class="image">
                        <img data-src="~/assets/image/category/advertis.jpg" v-lazy-load>
                    </div>
                </div>
            </div>
        </div>
        <div class="recommend-content" v-for="(recommend, index) in recommendList" :key="index">
            <div class="subject clear">
                <div class="title">{{ recommend.title }}</div>
            </div>
            <div class="detail">
                <div class="item" v-for="(data, index) in recommend.data" :key="index + '-data'">
                    <div class="image">
                        <div class="height-limit">
                            <img :data-src="data.image" :alt="data.title" v-lazy-load>
                        </div>
                    </div>
                    <div class="title">
                        <router-link :to="data.link">{{ data.title }}</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="sponsor-content">
            <div class="subject clear">
                <div class="title">贊助廣告</div>
            </div>
            <div class="detail">
                <div class="item">
                    <div class="image">
                        <img data-src="~/assets/image/category/advertis.jpg" v-lazy-load>
                    </div>
                </div>
                <div class="item">
                    <div class="image">
                        <img data-src="~/assets/image/category/advertis.jpg" v-lazy-load>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        data() {
            return {
                recommendList: null
            }
        },
		created() {
            let _this = this;
            
            _this.recommendList = [{
                title: '熱門文章',
                id: 'hot-article',
                more: false,
                data: [
                    {
                        title: '開學在即 防疫備戰 侯友宜：三級防護策略健康五原則',
                        subtitle: '下週二(25日)就要開學了，新北市長侯友宜今(19)日到蘆洲區仁愛國小視察校園防疫演練，提出三級防護策略及五大健康原則，籲請家長配合政府措施，加入防疫行列，並盤點7,300支額溫槍、64萬片備用口罩、漂白水等防疫資源全力備戰。',
                        image: 'https://static.wixstatic.com/media/84ee5e_ee7c8952366a4fa9b4eed41aa306c9b3~mv2.jpg/v1/fill/w_740,h_494,al_c,q_90,usm_0.66_1.00_0.01/84ee5e_ee7c8952366a4fa9b4eed41aa306c9b3~mv2.webp',
                        browse: '23',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '全民防疫有成 1、2月流感重症數也逆勢大降八成',
                        subtitle: '根據衛生福利部疾病管制署「傳染病資料查詢系統」，今年1月到2月之全國流感併發重症本土病例及境外移入病例數資料，是近五年首次出現降幅，且降幅高達八成，反觀另外四年同期，病例數都是持平甚至微升。專家認為，這應該是為了防範新冠肺炎，邊境流動人員減少、全民落實個人防護的附加效益。',
                        image: 'https://static.wixstatic.com/media/84ee5e_c1ca99bca5e748aaa79ce6ae19f7e63b~mv2.jpg/v1/fill/w_740,h_986,al_c,q_90,usm_0.66_1.00_0.01/84ee5e_c1ca99bca5e748aaa79ce6ae19f7e63b~mv2.webp',
                        browse: '7',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '台兒童常有爛牙！專家曝蛀牙率「遠高於世界平均」...勤刷牙超重要',
                        subtitle: '',
                        image: 'https://static.wixstatic.com/media/84ee5e_b3e6624644f1474c8f07c2e4c7403f8b~mv2.jpg/v1/fill/w_720,h_480,al_c,lg_1,q_90/84ee5e_b3e6624644f1474c8f07c2e4c7403f8b~mv2.webp',
                        browse: '1',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '3C育兒？5歲低頭族近視飆350度',
                        subtitle: '5歲的黃小弟為家中獨生子，平日父母忙於工作無法陪伴，因此買了一台平板給他玩遊戲、看卡通打發時間，他下課回家後除了看電視以外，其他時間就是躺著玩平板，父母覺得黃小弟不吵不鬧，非常乖巧，不料學校視力檢查時發現，黃小弟雙眼近視350度且視差高達0.2以上。',
                        image: 'https://static.wixstatic.com/media/84ee5e_f9df94a755f14111bd5df1c88c30bf77~mv2.png/v1/fill/w_740,h_416,al_c,lg_1,q_90/84ee5e_f9df94a755f14111bd5df1c88c30bf77~mv2.webp',
                        browse: '1',
                        date: '109.02.20',
                        link: '/'
                    }
                ]
            },{
                title: '活動情報',
                id: 'intelligence',
                more: false,
                data: [
                    {
                        title: '開學在即 防疫備戰 侯友宜：三級防護策略健康五原則',
                        subtitle: '下週二(25日)就要開學了，新北市長侯友宜今(19)日到蘆洲區仁愛國小視察校園防疫演練，提出三級防護策略及五大健康原則，籲請家長配合政府措施，加入防疫行列，並盤點7,300支額溫槍、64萬片備用口罩、漂白水等防疫資源全力備戰。',
                        image: 'https://static.wixstatic.com/media/84ee5e_ee7c8952366a4fa9b4eed41aa306c9b3~mv2.jpg/v1/fill/w_740,h_494,al_c,q_90,usm_0.66_1.00_0.01/84ee5e_ee7c8952366a4fa9b4eed41aa306c9b3~mv2.webp',
                        browse: '23',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '全民防疫有成 1、2月流感重症數也逆勢大降八成',
                        subtitle: '根據衛生福利部疾病管制署「傳染病資料查詢系統」，今年1月到2月之全國流感併發重症本土病例及境外移入病例數資料，是近五年首次出現降幅，且降幅高達八成，反觀另外四年同期，病例數都是持平甚至微升。專家認為，這應該是為了防範新冠肺炎，邊境流動人員減少、全民落實個人防護的附加效益。',
                        image: 'https://static.wixstatic.com/media/84ee5e_c1ca99bca5e748aaa79ce6ae19f7e63b~mv2.jpg/v1/fill/w_740,h_986,al_c,q_90,usm_0.66_1.00_0.01/84ee5e_c1ca99bca5e748aaa79ce6ae19f7e63b~mv2.webp',
                        browse: '7',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '台兒童常有爛牙！專家曝蛀牙率「遠高於世界平均」...勤刷牙超重要',
                        subtitle: '',
                        image: 'https://static.wixstatic.com/media/84ee5e_b3e6624644f1474c8f07c2e4c7403f8b~mv2.jpg/v1/fill/w_720,h_480,al_c,lg_1,q_90/84ee5e_b3e6624644f1474c8f07c2e4c7403f8b~mv2.webp',
                        browse: '1',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '3C育兒？5歲低頭族近視飆350度',
                        subtitle: '5歲的黃小弟為家中獨生子，平日父母忙於工作無法陪伴，因此買了一台平板給他玩遊戲、看卡通打發時間，他下課回家後除了看電視以外，其他時間就是躺著玩平板，父母覺得黃小弟不吵不鬧，非常乖巧，不料學校視力檢查時發現，黃小弟雙眼近視350度且視差高達0.2以上。',
                        image: 'https://static.wixstatic.com/media/84ee5e_f9df94a755f14111bd5df1c88c30bf77~mv2.png/v1/fill/w_740,h_416,al_c,lg_1,q_90/84ee5e_f9df94a755f14111bd5df1c88c30bf77~mv2.webp',
                        browse: '1',
                        date: '109.02.20',
                        link: '/'
                    }
                ]
            }]
        }
	}
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';

    .recommend {
        display: inline-block;
        vertical-align: top;
        position: -webkit-sticky;
        position: sticky;
        top: 0px;

        @media screen and (max-width: 960px) {
            max-width: 620px;
        }

        @media screen and (max-width: 620px) {
            text-align: center;
        }

        .recommend-content {
            margin-bottom: 20px;

            @media screen and (max-width: 960px) {
                display: inline-block;
            }

            @media screen and (max-width: 620px) {
                display: block;
                padding: 0px 10px;
            }

            .subject {
                min-height: 55px;
                line-height: 55px;
                margin-bottom: 8px;

                .title {
                    float: left;
                    color: #707070;
                    font-size: 30px;
                    font-weight: bold;
                }
            }

            .detail {
                position: relative;

                .item {
                    display: flex;
                    align-items: center;
                    max-width: 300px;
                    vertical-align: top;
                    border-radius: 5px;
                    text-overflow: ellipsis;
                    margin-bottom: 15px;
                    text-align: left;

                    @media screen and (max-width: 620px) {
                        max-width: 100%;
                    }

                    .image {
                        width: 40%;
                        max-width: 220px;
                        margin-right: 10px;

                        .height-limit {
                            height: 0px;
                            padding-bottom: 70%;
                            overflow: hidden;

                            img {
                                width: 100%;
                            }
                        }
                    }

                    .title {
                        font-size: 16px;
                        font-weight: 500;
                        vertical-align: middle;
                        flex: 2;

                        a {
                            color: #000000;
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                        }
                    }
                }
            }
        }

        .sponsor-content {
            margin-bottom: 20px;    

            @media screen and (max-width: 620px) {
                display: inline-block;
                padding: 0px 10px;
            }        

            .subject {
                min-height: 55px;
                line-height: 55px;
                margin-bottom: 8px;

                .title {
                    float: left;
                    color: #707070;
                    font-size: 30px;
                    font-weight: bold;
                }
            }

            .detail {
                position: relative;

                .item {
                    vertical-align: top;
                    border-radius: 5px;
                    margin-bottom: 10px;

                    @media screen and (max-width: 960px) {
                        display: inline-block;
                    }

                    .image {
                        width: 300px;
                        height: 250px;
                    }
                }
            }
        }
    }
</style>
