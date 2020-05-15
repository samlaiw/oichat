
<template>
    <footer class="footer">
        <div class="content">
            <div class="logo-content">
                <img src="~/assets/image/logo.png" alt="oichat" class="logo">
            </div>
            <div class="navigation">
                <ul>
                    <li>首頁</li>
                    <li>親子教育</li>
                    <li>親子旅遊</li>
                    <li>親子美食</li>
                </ul>
                <ul>
                    <li>免費課程</li>
                    <li>育兒心得</li>
                    <li>家庭健康</li>
                    <li>贊助本站</li>
                </ul>
                <div class="terms">服務條款＆隱私權政策</div>
                <div class="explanation">版權說明</div>
            </div>
            <div class="fb-content">
               FB 紛絲專頁 
            </div>
        </div>
        <div class="copyright">Copyright ©星翔數位有限公司All Rights Reserved</div>
    </footer>
</template>

<script>
    export default {};
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';
    
    .footer {
        width: 100%;
        background-color: $main_color;

        .content {
            width: 100%;            
            max-width: 1440px;
            font-size: 18px;
            margin: auto;
            padding: 20px 5%;

            @media screen and (max-width: 1024px) {
                display: none;
            }

            .logo-content {
                display: inline-block;
                width: 300px;
                vertical-align: middle;
            }

            .navigation {
                display: inline-block;
                text-align: center;
                vertical-align: middle;
                margin: 0px 50px;

                ul {
                    display: inline-block;
                    text-align: left;
                    margin-right: 20px;

                    li {
                        color: #ffffff;
                        margin: 10px 0px;
                        cursor: pointer;
                        font-weight: bold;
                    }
                }

                .terms,
                .explanation {
                    color: #ffffff;
                    margin: 10px 0px;
                    cursor: pointer;
                    font-weight: bold;
                }
            }

            .fb-content {
                display: inline-block;
                width: 460px;
                height: 300px;
                border: 1px solid;
                vertical-align: middle;
                text-align: center;
                line-height: 300px;
                color: #ffffff;
                font-size: 26px;
            }
        }

        .copyright {
            color: #ffffff;
            padding: 5px 0px;
            font-size: 16px;
            text-align: center;
            background-color: $minor_color;

            @media screen and (max-width: 1024px) {
                padding: 10px 5%;
                font-size: 14px;
            }
        }
    }
</style>