<template>
	<div class="category-section">
		<div class="content">
            <div class="category">
                <div class="category-content" v-for="(category, index) in categoryList" :key="index">
                    <div class="subject clear">
                        <div class="title">{{ category.title }}</div>
                        <router-link :to="category.id" class="more" v-if="category.more">看更多</router-link>
                    </div>
                    <div class="detail clear">
                        <v-article v-for="(data, index) in category.data" :key="index" :resources="data" />
                    </div>
                </div>
            </div>

            <v-recommend />
        </div>
	</div>
</template>

<script>
    import article from "~/components/article.vue";
    import recommend from "~/components/recommend.vue";

	export default {
        components: {
            vArticle: article,
			vRecommend: recommend
		},
        data() {
            return {
                categoryList: null
            }
        },
		created() {
            let _this = this;
            
            _this.categoryList = [{
                title: '精選話題',
                id: '',
                more: false,
                data: [
                    {
                        title: '小朋友學英語五個迷思? 幾歲學英文比較好，專家建議家庭雙語環境！',
                        subtitle: '現代人小孩生得少相對的精力都放在少數的小孩身上，國際化的課程年齡降低，都讓爸媽更重視和焦慮孩子的英語教育。今年九月小一生開學沒多久，臉書國小社團每幾天就會出現類似的貼文「大家的孩子都是幾歲補英文的呢？」「小一到底要不要補英文？」總結上述問題的討論，專家建議出以下五點分享。',
                        image: 'https://static.wixstatic.com/media/944c5ac5831d4c72a3be8ffc2d88b20e.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/944c5ac5831d4c72a3be8ffc2d88b20e.webp',
                        browse: '46',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '孩子老是愛問「為什麼」　家長可如何引導孩子思考',
                        subtitle: '隨着孩子日漸成長，他們對世界的好奇心亦隨之而增加，但原來每當孩子問：「為什麼？」時，都是激發他們思考能力的絕佳機會。就看看以下這本書的分享吧！',
                        image: 'https://static.wixstatic.com/media/84ee5e_cc6c49f7f8b44afebcc03bdf3cae58b8~mv2.jpg/v1/fill/w_740,h_416,al_c,q_90,usm_0.66_1.00_0.01/84ee5e_cc6c49f7f8b44afebcc03bdf3cae58b8~mv2.webp',
                        browse: '8',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '「父母不○○XX，孩子就AABB」　專家真的做得到親子教養書上寫的？',
                        subtitle: '現代父母十分重視教養孩子，並常常為此尋求專家的意見。教養專家陳其正（醜爸）對教養孩子有着截然不同的看法，當中以專注父母的狀態為首，各位新手爸媽請看醜爸的分享吧！以下內容節錄自《教養不必糾結於最理想方式：放過自己，也放心讓孩子飛的解放之書》。',
                        image: 'https://static.wixstatic.com/media/84ee5e_44c9a92ab4a24467bd6ba5e03e5b2772~mv2.jpg/v1/fill/w_740,h_416,al_c,q_90,usm_0.66_1.00_0.01/84ee5e_44c9a92ab4a24467bd6ba5e03e5b2772~mv2.webp',
                        browse: '3',
                        date: '109.02.20',
                        link: '/'
                    }
                ]
            },{
                title: '親子教育',
                id: '',
                more: true,
                data: [
                    {
                        title: '小朋友學英語五個迷思? 幾歲學英文比較好，專家建議家庭雙語環境！',
                        subtitle: '現代人小孩生得少相對的精力都放在少數的小孩身上，國際化的課程年齡降低，都讓爸媽更重視和焦慮孩子的英語教育。今年九月小一生開學沒多久，臉書國小社團每幾天就會出現類似的貼文「大家的孩子都是幾歲補英文的呢？」「小一到底要不要補英文？」總結上述問題的討論，專家建議出以下五點分享。',
                        image: 'https://static.wixstatic.com/media/944c5ac5831d4c72a3be8ffc2d88b20e.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/944c5ac5831d4c72a3be8ffc2d88b20e.webp',
                        browse: '46',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '孩子老是愛問「為什麼」　家長可如何引導孩子思考',
                        subtitle: '隨着孩子日漸成長，他們對世界的好奇心亦隨之而增加，但原來每當孩子問：「為什麼？」時，都是激發他們思考能力的絕佳機會。就看看以下這本書的分享吧！',
                        image: 'https://static.wixstatic.com/media/84ee5e_cc6c49f7f8b44afebcc03bdf3cae58b8~mv2.jpg/v1/fill/w_740,h_416,al_c,q_90,usm_0.66_1.00_0.01/84ee5e_cc6c49f7f8b44afebcc03bdf3cae58b8~mv2.webp',
                        browse: '8',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '「父母不○○XX，孩子就AABB」　專家真的做得到親子教養書上寫的？',
                        subtitle: '現代父母十分重視教養孩子，並常常為此尋求專家的意見。教養專家陳其正（醜爸）對教養孩子有着截然不同的看法，當中以專注父母的狀態為首，各位新手爸媽請看醜爸的分享吧！以下內容節錄自《教養不必糾結於最理想方式：放過自己，也放心讓孩子飛的解放之書》。',
                        image: 'https://static.wixstatic.com/media/84ee5e_44c9a92ab4a24467bd6ba5e03e5b2772~mv2.jpg/v1/fill/w_740,h_416,al_c,q_90,usm_0.66_1.00_0.01/84ee5e_44c9a92ab4a24467bd6ba5e03e5b2772~mv2.webp',
                        browse: '3',
                        date: '109.02.20',
                        link: '/'
                    }
                ]
            },{
                title: '親子旅遊',
                id: '',
                more: true,
                data: [
                    {
                        title: '親子共遊好趣處 兆豐農場生態之旅一日遊',
                        subtitle: '來到兆豐農場絕不能錯過的，就是豐富完整的生態園區，以及得天獨厚的「美人泉」湯浴，等你來盡情享受！',
                        image: 'https://static.wixstatic.com/media/84ee5e_74409193bb11479e85ee67d695d7e672~mv2.jpg/v1/fill/w_600,h_406,al_c,lg_1,q_90/84ee5e_74409193bb11479e85ee67d695d7e672~mv2.webp',
                        browse: '1',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '振興觀光旅遊兼顧防疫 8大主題戶外景點一網打盡',
                        subtitle: '疫情重創全球經濟，在一片哀嚎聲中，各國紛紛加大紓困規模，但仍不敵疫情，各行各業正在醞釀一波一波倒閉潮，彰化縣政府為振興地方觀光旅遊，同時提倡走出戶外提升免疫力，規劃8大主題戶外景點，包括「賞花打卡新亮點」、「登山步道」、「戶外休閒遊憩」、「文化人文之旅」、「海線體驗營」、「休閒農場」、「彰化市漫活輕旅行」、「單車漫遊自行車道」，不論你是想拍網美照、親子出遊、登山享受大自然的驚喜，或是騎乘單車享受御風而行的樂趣，通通一網打盡。',
                        image: 'https://static.wixstatic.com/media/84ee5e_02a9de6e7f014b118d8df0cff53379f9~mv2.png/v1/fill/w_684,h_457,al_c,lg_1,q_90/84ee5e_02a9de6e7f014b118d8df0cff53379f9~mv2.webp',
                        browse: '1',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '台南療癒一日遊！自然系美拍出遊放鬆',
                        subtitle: '現忙碌的工作讓人喘不過氣來，假日就想出門走走逃離城市的喧囂，而台南不僅擁有豐富的美食，還有各式隱藏版的夢幻山湖美景，以下自然系景點，週末出遊就來去大拍美照，療癒一波吧。',
                        image: 'https://static.wixstatic.com/media/84ee5e_0d870296ff4948b6a0e31f7261b6ea4e~mv2.jpg/v1/fill/w_720,h_480,al_c,lg_1,q_90/84ee5e_0d870296ff4948b6a0e31f7261b6ea4e~mv2.webp',
                        browse: '2',
                        date: '109.02.20',
                        link: '/'
                    }
                ]
            },{
                title: '親子美食',
                id: '',
                more: true,
                data: [
                    {
                        title: '「2020台灣燈會在台中」童趣滿滿 中市府邀爸媽順道造訪親子餐廳',
                        subtitle: '「2020台灣燈會在台中」場地將根據特色分為3大主軸，其中副展區位於文心森林公園，將以「童趣樂園」為主題。市府經發局特別推薦具特色的親子餐廳給所有爸媽，提供大家遊「2020台中燈會」同時順道造訪，享受甜蜜親子時光。',
                        image: 'https://static.wixstatic.com/media/84ee5e_1c9a6eb761074c6e9361e0d3b92c14dd~mv2.jpg/v1/fill/w_637,h_477,al_c,lg_1,q_90/84ee5e_1c9a6eb761074c6e9361e0d3b92c14dd~mv2.webp',
                        browse: '9',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '樹林火鍋控要吃！北歐風親子火鍋店「童鍋」插旗樹林秀泰，網美系溜滑梯、波波池打造樹林最強親子餐廳',
                        subtitle: '不論春夏秋冬「吃火鍋」永遠是台灣美食最熱門的關鍵字，麻辣鍋、石頭火鍋、酸菜白肉鍋、浮誇痛風鍋等各式各樣火鍋，都是超高人氣的選項。但是說到「火鍋親子餐廳」卻幾乎沒有，現在位於樹林秀泰特別推出全台首間火鍋親子餐廳「童鍋」，以北歐風格搶攻樹林人的親子時光。',
                        image: 'https://static.wixstatic.com/media/84ee5e_c45d92484bc042dba07a134ef8744b87~mv2.jpg/v1/fill/w_740,h_740,al_c,q_90,usm_0.66_1.00_0.01/84ee5e_c45d92484bc042dba07a134ef8744b87~mv2.webp',
                        browse: '2',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '最夯的「10大親子餐廳」！免費遊樂設施讓隋棠一家也玩上癮',
                        subtitle: '週末假期一到，許多父母就開始苦惱要帶小孩去哪放電？好吃又好玩的親子餐廳，堪稱是家庭聚會的好選擇！統計出2019最受網友親睞，瀏覽量最多的台北市十大親子餐廳，不僅附設遊戲區廣受歡迎，提供手作體驗、網美風的用餐空間更讓全家人玩得盡興！',
                        image: 'https://static.wixstatic.com/media/84ee5e_aecf093b00f34028b293d02ef26a97ea~mv2.jpg/v1/fill/w_740,h_459,al_c,q_90,usm_0.66_1.00_0.01/84ee5e_aecf093b00f34028b293d02ef26a97ea~mv2.webp',
                        browse: '3',
                        date: '109.02.20',
                        link: '/'
                    }
                ]
            },{
                title: '育兒話題',
                id: '',
                more: true,
                data: [
                    {
                        title: '2至6歲幼兒入園率　教育部：未來4年達72%',
                        subtitle: '營造友善育兒環境，減輕家庭養育負擔，政府自民國107年起推動「少子女化對策計畫」。對於2至未滿6歲的部分，教育部今天表示，希望未來4年能達到入園率72%，平價教保服務達70%。',
                        image: 'https://static.wixstatic.com/media/782b72fcacf9403594939a4586ef1042.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/782b72fcacf9403594939a4586ef1042.webp',
                        browse: '13',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '防疫不能出門 親子不抓狂育兒術公開',
                        subtitle: '新冠肺炎疫情全球蔓延，已經有多個國家宣布學校停課。台灣雖然尚未面臨全面停課，但在不宜外出群聚的情況下，也讓爸媽和孩子們快要受不了。Yahoo TV《爸媽有事嗎？》節目請到五寶媽、艾薇，分享她們的在家育兒術。',
                        image: 'https://static.wixstatic.com/media/84ee5e_3157cf55624f412a9d5cad45d89f921e~mv2.jpg/v1/fill/w_720,h_401,al_c,lg_1,q_90/84ee5e_3157cf55624f412a9d5cad45d89f921e~mv2.webp',
                        browse: '2',
                        date: '109.02.20',
                        link: '/'
                    },
                    {
                        title: '新手媽媽不怕 台東開辦免費到宅育兒指導服務',
                        subtitle: '「妳生孩子，縣府幫妳輕鬆坐月子」台東縣開辦免費到宅育兒指導服務，給生產後6個月內的媽媽及寶寶有更好的照護，內容包括提供嬰幼兒照顧技巧指導及陪同就醫、回診等，今啟動；台東縣長饒慶鈴表示，縣府明年開始實施產後媽媽月子餐的服務，提供更多元的照顧，讓新手產婦坐月子不再手忙腳亂。',
                        image: 'https://static.wixstatic.com/media/84ee5e_4daaba6198e14350849cea9f666805c4~mv2.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/84ee5e_4daaba6198e14350849cea9f666805c4~mv2.webp',
                        browse: '1',
                        date: '109.02.20',
                        link: '/'
                    }
                ]
            },{
                title: '家庭健康',
                id: '',
                more: true,
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
                        subtitle: '臺灣兒童蛀牙情況嚴重，據統計，臺灣兒童齲齒高達2.5顆，遠高於世界兒童平均的1.67顆。很多家長認為，反正乳牙會掉不用在意，但事實並非如此，孩子6歲到12歲是乳牙和恆牙的換脫期，在這之前，乳牙負責切斷、撕裂、磨碎食物，如果孩子經常牙痛，咀嚼能力受影響，腸胃消化吸收能力當然也會變差，等於直接影響到孩子成長發育的關鍵期。',
                        image: 'https://static.wixstatic.com/media/84ee5e_b3e6624644f1474c8f07c2e4c7403f8b~mv2.jpg/v1/fill/w_720,h_480,al_c,lg_1,q_90/84ee5e_b3e6624644f1474c8f07c2e4c7403f8b~mv2.webp',
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
    
    .category-section {
        padding: 50px 0px;

        .content {            
            max-width: 1280px;
            margin: auto;
            text-align: center;

            .category {
                display: inline-block;
                vertical-align: top;
                text-align: left;

                .category-content {
                    margin-bottom: 20px;

                    @media screen and (max-width: 960px) {
                        padding: 0px 5px;
                    }

                    &:nth-child(1) {
                        .title {
                            color: #FF0088;
                        }
                    }

                    &:nth-child(2) {
                        .title {
                            color: #FF88C2;
                        }
                    }

                    &:nth-child(3) {
                        .title {
                            color: rgb(250, 169, 46);
                        }
                    }

                    &:nth-child(4) {
                        .title {
                            color: rgb(78, 190, 49);
                        }
                    }

                    &:nth-child(5) {
                        .title {
                            color: rgb(71, 182, 209);
                        }
                    }

                    &:nth-child(6) {
                        .title {
                            color: rgb(115, 43, 182);
                        }
                    }

                    .subject {
                        min-height: 55px;
                        line-height: 55px;
                        margin-bottom: 8px;
                        padding-right: 20px;

                        @media screen and (max-width: 960px) {
                            padding: 0px 5px;
                        }

                        .title {
                            float: left;
                            font-size: 30px;
                            font-weight: bold;
                        }

                        .more {
                            float: right;
                            font-size: 18px;
                            font-weight: bold;
                            color: #000000;
                            text-decoration: none;
                        }
                    }

                    .detail {
                        position: relative;
                        display: flex;
                        justify-content: space-evenly;
                    }
                }
            }
        }
    }
</style>
