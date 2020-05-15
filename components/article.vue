<template>
    <div class="article">
        <div class="image">
            <img :data-src="resources.image" :alt="resources.title" v-lazy-load>
        </div>
        <div class="title">
            <router-link :to="resources.link">{{ resources.title }}</router-link>
        </div>
        <div class="subtitle">{{ resources.subtitle }}</div>
        <div class="browse">瀏覽次數：{{ resources.browse }}</div>
        <div class="date">日期：{{ resources.date }}</div>
    </div>
</template>

<script>
	export default {
        props: {
            resources: {
                type: Object,
                required: true
            }
        }
	}
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';
    
    .article {
        float: left;
        text-align: left;
        max-width: 300px;
        min-height: 245px;
        margin-right: 20px;
        vertical-align: top;
        border-radius: 5px;
        text-overflow : ellipsis;
        border: 1px solid #ababab;

        &[data-type="teach"] {
            .title {
                color: #FF88C2;
            }
        }

        &[data-type="travel"] {
            .title {
                color: rgb(250, 169, 46);
            }
        }

        &[data-type="food"] {
            .title {
                color: rgb(78, 190, 49);
            }
        }

        &[data-type="topic"] {
            .title {
                color: rgb(71, 182, 209);
            }
        }

        &[data-type="health"] {
            .title {
                color: rgb(115, 43, 182);
            }
        }

        @media screen and (max-width: 1280px) {
            &:nth-last-child(1) {
                display: none;
            }
        }

        @media screen and (max-width: 960px) {
            margin: 0px 5px;
        }

        .image {
            height: 0px;
            padding-bottom: 55%;
            overflow: hidden;

            img {
                vertical-align: middle;
            }
        }

        .title {                                
            font-size: 16px;
            font-weight: 500;
            padding: 10px 10px 8px 10px;
            margin-bottom: 10px;
            border-left: 4px solid;

            a {
                min-height: 36px;
                color: #000000;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }

        .subtitle {
            color: #707070;
            font-size: 14px;
            padding: 0px 10px;
            margin-bottom: 10px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .browse, .date {
            font-size: 14px;
            padding: 0px 10px 5px 10px;
        }
    }
</style>
