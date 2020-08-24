<template>
	<section class="container">
        <div class="section-head">
            <div class="title">狀態：未儲存</div>
            <select>
                <option value="">類別ㄧ</option>
                <option value="">類別二</option>
                <option value="">類別三</option>
                <option value="">類別四</option>
            </select>
            <div class="right-content">
                <div class="watch">瀏覽文章</div>
                <div class="sumit">發布排程</div>
            </div>
        </div>
        <div class="section-content">
            <input  type="text" placeholder="文章標題(30中文字)">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <div class="btn-bottom">
                <div class="save">儲存草稿</div>
                <div class="now">立即發布</div>
            </div>
        </div>
	</section>
</template>

<script>
	export default {
        layout: 'dashboard',
		components: {

		}
	}
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';

    .section-head {
        width: calc(100% - 250px);
        margin-left: 250px;
        padding: 100px;

        .title {
            display: inline-block;
            margin-right: 20px;
            font-size: 25px;
        }

        .right-content {
            float: right;

            .watch, .sumit {
                border: 1px solid;
                border-radius: 5px;
                color: #ffffff;
                background-color: #a7a7a7;
                padding: 10px;
                display: inline-block;
                margin: 0px 10px;
                cursor: pointer;
            }
        }
    }

    .section-content {
        width: calc(100% - 250px);
        margin-left: 250px;
        padding: 20px;

        input {
            width: 100%;
            height: 30px;
            margin-bottom: 20px;
        }

        textarea {
            width: 100%;
            height: 500px;
        }

        .btn-bottom {
            text-align: center;

            .save, .now {
                border: 1px solid;
                border-radius: 5px;
                color: #ffffff;
                background-color: #a7a7a7;
                padding: 10px;
                display: inline-block;
                margin: 0px 10px;
                cursor: pointer;
            }
        }
    }
</style>
