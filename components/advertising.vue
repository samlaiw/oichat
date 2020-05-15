<template>
	<div class="advertising-section">
		<div class="content">
            <div class="advertis-content" v-for="(advertising, index) in advertisingList" :key="index + '-advertising'">
                <div class="subject clear">
                    <div class="title" :data-type="index">{{ advertising.category }}</div>
                </div>
                <div class="detail clear">
                    <div class="item" v-for="(data, index) in advertising.data" :key="index + '-data'">
                        <!-- <adsbygoogle /> -->
                        <div class="image">
                            <img :src="data.image" :alt="data.title" loading="lazy">
                        </div>
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
                advertisingList: null
            }
        },
		created() {
            let _this = this;
            
            _this.advertisingList = [{
                category: '贊助廣告',
                categoryId: 'google-ad',
                more: false,
                data: [
                    {
                        title: '小朋友學英語五個迷思? 幾歲學英文比較好，專家建議家庭雙語環境！',
                        image: '/advertis.jpg',
                        link: '/'
                    },
                    {
                        title: '孩子老是愛問「為什麼」　家長可如何引導孩子思考',
                        image: '/advertis.jpg',
                        link: '/'
                    },
                    {
                        title: '孩子老是愛問「為什麼」　家長可如何引導孩子思考',
                        image: '/advertis.jpg',
                        link: '/'
                    }
                ]
            }]
        }
	}
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';
    
    .advertising-section {
        padding-bottom: 50px;

        .content {            
            max-width: 1440px;
            margin: auto;

            .advertis-content {
                position: relative;
                margin-bottom: 20px;
                max-width: 1280px;
                margin: auto;
                overflow: hidden;

                @media screen and (max-width: 1280px) {
                    max-width: 960px;
                }

                .subject {
                    min-height: 55px;
                    line-height: 55px;
                    margin-bottom: 8px;

                    .title {
                        color: #969696;
                        float: left;
                        font-size: 30px;
                        font-weight: bold;
                        margin-left: 10px;
                    }
                }

                .detail {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-evenly;
                    align-items: center;

                    .item {
                        flex: 1;

                        @media screen and (max-width: 960px) {
                            margin-bottom: 10px;
                            width: 100%;
                            flex: auto;
                        }

                        .image {
                            width: 300px;
                            height: 250px;
                            overflow: hidden;
                            margin: auto;

                            img {
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
