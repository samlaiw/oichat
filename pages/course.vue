<template>
	<section class="container">
		<v-vision />

        <div class="banner">
            <img data-src="~/assets/image/course/course.png" v-lazy-load>
        </div>

        <div class="olkid-ad">
            <div class="content">
                <div class="right-content clear">
                    <div class="title">精選外教師資</div>
                    <div class="teacher">
                        <div class="photo">
                            <img data-src="~/assets/image/teather/teather_01.jpeg" v-lazy-load>
                        </div>
                        <div class="name">Caitlyn Denise Fraser</div>
                        <div class="introduction">
                            <p class="text">Cait 老師充滿熱忱且有豐富的英語教學經驗，在課堂中喜歡讓學生嘗試不一樣的挑戰，讓他們在語言學習上更上一層樓。</p>
                            <p class="text">這種引導方式不但可以讓孩子慢慢挑戰自己的能力之外，也能為孩子建立更多的自信，希望可以趕快見到你們喔！</p>
                        </div>
                    </div>
                    <div class="teacher">
                        <div class="photo">
                            <img data-src="~/assets/image/teather/teather_02.jpeg" v-lazy-load>
                        </div>
                        <div class="name">Monique de Bruin</div>
                        <div class="introduction">
                            <p class="text">大家好，我是 Monique 老師，我在非母語學習者的英語教學上深耕超過十年，所以對許多初學孩子會遇到的狀況瞭若指掌，因此在帶領他們學習時更能知道如何幫助他們。</p>
                            <p class="text">在這麼多年的教學路上，讓我累積了豐富的教學技巧，並成為一個非常有耐心的老師，相信很快就可以讓孩子的英文越來越好喔！</p>
                        </div>
                    </div>
                    <div class="teacher">
                        <div class="photo">
                            <img data-src="~/assets/image/teather/teather_03.jpeg" v-lazy-load>
                        </div>
                        <div class="name">Ryan Bradbury</div>
                        <div class="introduction">
                            <p class="text">Hello Everyone，我是 Ryan 老師，教孩子們英文是讓我充滿熱忱的一件事。</p>
                            <p class="text">我對兒童及青少年的教學已耕耘多年，想將英文這個語言好好推廣出去，很期待可以趕快在課堂中見到你們喔！</p>
                        </div>
                    </div>
                </div>

                <div class="left-content">
                    <div class="slogan">
                        <p class="text">心動立刻行動！</p>
                        <p class="text">限時免費</p>
                        <p class="text">報名OiKID</p>
                        <p class="text">線上試聽</p>
                    </div>
                    <div class="title">免費1對1兒童英語線上教學</div>
                    <div class="form-content">
                        <label for="name">家長姓名：</label>
                        <input type="text" id="name">
                    </div>
                    <div class="form-content">
                        <label for="phone">手機號碼：</label>
                        <input type="phone" id="phone">
                    </div>
                    <div class="form-content">
                        <label for="age">寶貝年齡：</label>
                        <input type="number" id="age">
                    </div>
                    <div class="form-content">
                        <input type="checkbox" id="statement">
                        <label for="statement">
                            <div class="text">我已閱讀並同意</div>
                            <router-link to="privacy" target="_blank">個資保護聲明</router-link>
                        </label>
                    </div>
                    <div class="form-content">
                        <input type="button" id="sumit" value="立即報名">
                    </div>
                </div>

                <div class="mobile-content">
                    <div class="title">精選外教師資</div>
                    <div class="teacher-content">
                        <div class="teacher">
                            <div class="photo">
                                <img data-src="~/assets/image/teather/teather_01.jpeg" v-lazy-load>
                            </div>
                            <div class="name">Caitlyn Denise Fraser</div>
                            <div class="introduction">
                                <p class="text">Cait 老師充滿熱忱且有豐富的英語教學經驗，在課堂中喜歡讓學生嘗試不一樣的挑戰，讓他們在語言學習上更上一層樓。</p>
                                <p class="text">這種引導方式不但可以讓孩子慢慢挑戰自己的能力之外，也能為孩子建立更多的自信，希望可以趕快見到你們喔！</p>
                            </div>
                        </div>
                        <div class="teacher">
                            <div class="photo">
                                <img data-src="~/assets/image/teather/teather_02.jpeg" v-lazy-load>
                            </div>
                            <div class="name">Monique de Bruin</div>
                            <div class="introduction">
                                <p class="text">大家好，我是 Monique 老師，我在非母語學習者的英語教學上深耕超過十年，所以對許多初學孩子會遇到的狀況瞭若指掌，因此在帶領他們學習時更能知道如何幫助他們。</p>
                                <p class="text">在這麼多年的教學路上，讓我累積了豐富的教學技巧，並成為一個非常有耐心的老師，相信很快就可以讓孩子的英文越來越好喔！</p>
                            </div>
                        </div>
                        <div class="teacher">
                            <div class="photo">
                                <img data-src="~/assets/image/teather/teather_03.jpeg" v-lazy-load>
                            </div>
                            <div class="name">Ryan Bradbury</div>
                            <div class="introduction">
                                <p class="text">Hello Everyone，我是 Ryan 老師，教孩子們英文是讓我充滿熱忱的一件事。</p>
                                <p class="text">我對兒童及青少年的教學已耕耘多年，想將英文這個語言好好推廣出去，很期待可以趕快在課堂中見到你們喔！</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</section>
</template>

<script>
	import vision from "~/components/masterVision.vue";

	export default {
		components: {
			vVision: vision
		}
	}
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';

    .olkid-ad {
        padding: 40px 0px;

        @media screen and (max-width: 960px) {
            padding: 20px 0px;
        }

        .content {
            max-width: 1280px;
            margin: auto;
            display: flex;

            @media screen and (max-width: 1280px) {
                max-width: 960px;
                flex-wrap: wrap;
            }

            @media screen and (max-width: 960px) {
                max-width: 768px;
            }

            @media screen and (max-width: 768px) {
                flex: 0 0 80%;
                justify-content: center;
            }

            .right-content {
                flex: 2;
                display: flex;
                flex-wrap: wrap;

                @media screen and (max-width: 960px) {
                    display: none;
                }

                .title {
                    flex: 0 0 100%;
                    color: $minor_color;
                    font-size: 30px;
                    margin-bottom: 20px;
                }

                .teacher {
                    flex: 0 0 30%;
                    margin-right: 10px;
                    border: 1px solid $minor_color;
                    border-radius: 5px;
                    padding: 5px;

                    .photo {
                        max-height: 305px;
                        overflow: hidden;
                    }

                    .name {
                        display: inline-block;
                        padding: 5px 0px;
                        margin: 10px 0px;
                        border-bottom: 2px solid $minor_color;
                    }

                    .introduction {
                        padding: 5px;

                        .text {
                            line-height: 22px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }

            .left-content {
                flex: 1;

                @media screen and (max-width: 960px) {
                    flex: 0 0 100%;
                }

                @media screen and (max-width: 768px) {
                    flex: 0 0 80%;
                }

                .slogan {
                    color: $minor_color;
                    font-size: 40px;
                    font-weight: bold;
                    line-height: 55px;
                    margin-bottom: 30px;

                    @media screen and (max-width: 375px) {
                        font-size: 35px;
                        line-height: 50px;
                    }
                }

                .title {
                    color: $minor_color;
                    font-size: 30px;
                    margin-bottom: 20px;

                    @media screen and (max-width: 414px) {
                        font-size: 25px;
                    }

                    @media screen and (max-width: 375px) {
                        font-size: 20px;
                    }
                }

                .form-content {
                    margin-bottom: 20px;

                    label {
                        display: block;
                        margin-bottom: 10px;

                        &[for="statement"] {
                            display: inline-block;
                            margin-bottom: 0px;
                            vertical-align: middle;

                            .text {
                                display: inline-block;
                                vertical-align: middle;
                            }

                            a {
                                margin-left: -5px;
                                vertical-align: middle;
                            }
                        }
                    }

                    input {
                        display: block;
                        width: 100%;
                        padding: 10px;
                        border: 1px solid #a8a8a8;
                        border-radius: 5px;

                        &:focus {
                            outline: none;
                        }

                        &[type="checkbox"] {
                            display: inline-block;
                            width: auto;
                            vertical-align: middle;
                        }

                        &[type="button"] {
                            cursor: pointer;
                            color: #ffffff;
                            border: 1px solid $minor_color;
                            background-color: $minor_color;
                        }
                    }
                }
            }

            .mobile-content {
                display: none;
                margin-top: 30px;

                @media screen and (max-width: 960px) {
                    display: block;
                }

                @media screen and (max-width: 768px) {
                    width: 80%;
                    margin-left: auto;
                    margin-right: auto;
                }

                .title {
                    color: $minor_color;
                    font-size: 25px;
                    margin-bottom: 20px;
                }

                .teacher-content {
                    width: 100%;

                    .teacher {
                        display: block;
                        width: 100%;
                        margin-bottom: 5%;
                        border: 2px solid $minor_color;
                        border-radius: 5px;

                        .photo {
                            height: 0px;
                            padding-bottom: 100%;
                            overflow: hidden;
                            margin-bottom: 20px;
                        }

                        .name {
                            display: inline-block;
                            margin-left: 5px;
                            margin-bottom: 15px;
                            border-bottom: 2px solid $minor_color;
                        }

                        .introduction {
                            padding: 0px 5px;

                            .text {
                                line-height: 22px;
                                margin-bottom: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
