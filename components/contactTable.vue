<template>
  <div class="content-table">
		<div class="content">
            <div class='cooperation'>
                <div class='title'>廣告合作</div>
                <div class='description'>想獲得免費曝光機會？<br>本站合作方案<br>提供更多觸及互動<br>為您的商品帶來更多的轉換績效<br><br>歡迎填寫表單<br>我們將盡快回覆</div>
            </div>
            <div class='contact'>
                <div class='title'>聯絡資訊</div>
                <div class='description'>想暸解更多資訊？<br>歡迎與我們聯繫<br>誠摯期待您的訊息<br><br>Owner：<br>星翔數位有限公司<br><br>Phone：<br>0800-010-920</div>
            </div>
            <div class='table'>
                <div class="input-content">
                    <input type="text" placeholder="姓名">
                </div>
                <div class="input-content">
                    <input type="text" placeholder="E-mail">
                </div>
                <div class="input-content">
                    <input type="text" placeholder="聯絡電話">
                </div>
                <div class="input-content">
                    <textarea cos="30" rows="5" placeholder="留下訊息"></textarea>
                </div>
                <div class="input-content">
                    <input type="checkbox" id="statement">
                    <label for="statement">個資聲明同意</label>
                </div>

                <div class="input-content">
                    <input type="button" value="送出">
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
        data() {
            return {

            }
        },
        methods: {

        }
	}
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';

    .content-table {
        padding: 100px 0px;

         @media screen and (max-width: 767px){
            padding: 20px 0px;
        }

        .content {
            max-width: 1280px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            @media screen and (max-width: 1024px){
                padding: 0px 80px;
            }

            @media screen and (max-width: 767px){
                padding: 0px 35px;
            }

            .cooperation, .contact {
                flex: 1 1 30%;
                margin-right: 50px;

                @media screen and (max-width: 1024px){
                    flex: 1 1 45%;
                    margin: 0px 0px 50px 5%;
                }

                @media screen and (max-width: 767px){
                    flex: 1 1 100%;
                    margin: auto;
                    margin-bottom: 30px;
                }

                .title {
                    font-size: 30px;
                    color: $minor_color;
                    margin-bottom: 10px;
                }

                .description {
                    font-size: 30px;
                    line-height: 40px;
                }
            }

            .table {
                flex: 1.5 1 30%;

                @media screen and (max-width: 1024px){
                    flex: 1 1 100%;
                }

                .input-content {
                    width: 90%;
                    margin: auto;
                    margin-bottom: 15px;

                    @media screen and (max-width: 1024px){
                        width: 100%;
                    }

                    input[type="text"],
                    textarea {
                        width: 100%;
                        padding: 5px;
                        border: 1px solid;
                        border-radius: 5px;

                        &:focus {
                            outline: none;
                        }
                    }

                    input[type="checkbox"], label {
                        vertical-align: top;
                    }

                    input[type="button"] {
                        width: 100%;
                        font-size: 18px;
                        font-weight: 500;
                        padding: 10px;
                        color: #ffffff;
                        border: none;
                        border-radius: 5px;
                        text-align: center;
                        letter-spacing: 20px;
                        background-color: $minor_color;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>
