<template>
    <div class="message-table">
		<div class="content">
            <div class="table">
                <div class="table-content">
                    <select class="category">
                        <option value="all">所有類別</option>
                        <option value="change">二手用品交換</option>
                        <option value="question">新手爸媽發問</option>
                    </select>
                    
                    <div class="input-search">
                        <fa class="icon" :icon="['fas', 'search']" />
                        <input type="text" placeholder="搜尋">
                    </div>
                </div>
                <div class="message-list">
                    <div class="list-top">
                        <div class="pages">20筆 / 頁</div>
                        <div class="sort">
                            <label for="sort">排序方式：</label>
                            <select id="sort">
                                <option value="activity">最近活動</option>
                                <option value="new">最新</option>
                                <option value="message">最多留言</option>
                                <option value="browse">最多瀏覽</option>
                                <option value="like">最多讚數</option>
                            </select>
                        </div>
                        <div class="create-post">
                            <div class="text">建立貼文</div>
                            <fa class="icon" :icon="['fas', 'chevron-down']" />
                        </div>
                    </div>
                   <table class="table-list">
                       <thead>
                           <tr>
                               <th>標題</th>
                               <th><fa class="icon" :icon="['fas', 'comment-alt']" /></th>
                               <th><fa class="icon" :icon="['fas', 'heart']" /></th>
                               <th><fa class="icon" :icon="['fas', 'eye']" /></th>
                               <th>最近活動</th>
                               <th></th>
                           </tr>
                       </thead>
                       <tbody>
                            <tr>
                                <td>
                                    <div class="photo"></div>
                                    <div class="value">
                                        <div class="title">台北有推薦的親子餐廳嗎</div>
                                        <div class="guide">
                                            <div class="user">
                                                <div class="name">Kenji Lin Tpe</div>
                                                <div class="dialog"></div>
                                            </div>
                                            <fa class="icon" :icon="['fas', 'circle']" />
                                            <div class="level">LV.01新生兒</div>
                                            <fa class="icon" :icon="['fas', 'circle']" />
                                            <div class="type">問題</div>
                                            <fa class="icon" :icon="['fas', 'circle']" />
                                            <div class="category">新手爸媽發問</div>
                                        </div>
                                    </div>
                                </td>
                                <td>1</td>
                                <td>1</td>
                                <td>5</td>
                                <td>幾秒前</td>
                                <td><fa class="icon" :icon="['fas', 'ellipsis-v']" /></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="photo"></div>
                                    <div class="value">
                                        <div class="title">台北有推薦的親子餐廳嗎</div>
                                        <div class="guide">
                                            <div class="user">
                                                <div class="name">Kenji Lin Tpe</div>
                                                <div class="dialog"></div>
                                            </div>
                                            <fa class="icon" :icon="['fas', 'circle']" />
                                            <div class="level">LV.01新生兒</div>
                                            <fa class="icon" :icon="['fas', 'circle']" />
                                            <div class="type">問題</div>
                                            <fa class="icon" :icon="['fas', 'circle']" />
                                            <div class="category">新手爸媽發問</div>
                                        </div>
                                    </div>
                                </td>
                                <td>1</td>
                                <td>1</td>
                                <td>5</td>
                                <td>幾秒前</td>
                                <td><fa class="icon" :icon="['fas', 'ellipsis-v']" /></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="photo"></div>
                                    <div class="value">
                                        <div class="title">台北有推薦的親子餐廳嗎</div>
                                        <div class="guide">
                                            <div class="user">
                                                <div class="name">Kenji Lin Tpe</div>
                                                <div class="dialog"></div>
                                            </div>
                                            <fa class="icon" :icon="['fas', 'circle']" />
                                            <div class="level">LV.01新生兒</div>
                                            <fa class="icon" :icon="['fas', 'circle']" />
                                            <div class="type">問題</div>
                                            <fa class="icon" :icon="['fas', 'circle']" />
                                            <div class="category">新手爸媽發問</div>
                                        </div>
                                    </div>
                                </td>
                                <td>1</td>
                                <td>1</td>
                                <td>5</td>
                                <td>幾秒前</td>
                                <td><fa class="icon" :icon="['fas', 'ellipsis-v']" /></td>
                            </tr>
                       </tbody>
                   </table>
                   <no-ssr>
                        <infinite-loading spinner="spiral" ref="infiniteLoading"></infinite-loading>
                    </no-ssr>
                </div>
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

            }
        }
	}
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';

    .message-table {
        padding: 20px 0px;

        .content {
            max-width: 1280px;
            margin: auto;
            
            .table {
                .table-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 25px 20px;

                    .category {
                        border-radius: 5px;
                    }

                    .input-search {
                        border-bottom: 1px solid;

                        input {
                            border: none;
                            padding: 5px;

                            &:focus {
                                outline: none;
                            }
                        }
                    }
                }

                .message-list {
                    width: 100%;
                    border: 1px solid;
                    padding: 0px 20px;

                    .list-top {
                        display: flex;
                        align-items: center;
                        padding: 10px 20px;
                        margin: 0px -20px;
                        margin-bottom: 20px;
                        border-bottom: 1px solid;

                        .pages {
                            flex: 1;
                        }

                        .sort {
                            margin-right: 20px;
                        }

                        .create-post {
                            color: #ffffff;
                            padding: 10px 15px;
                            background-color: #173ec0;
                            cursor: pointer;

                            .text {
                                display: inline-block;
                            }
                        }
                    }

                    .table-list {
                        width: 100%;
                        padding: 20px;
                        border-collapse: collapse;

                        tr {
                            border-bottom: 1px solid;
                        }

                        th, td {
                            text-align: left;
                            padding: 15px;
                        }

                        .photo {
                            border: 1px solid;
                            border-radius: 100%;
                            width: 50px;
                            height: 50px;
                            display: inline-block;
                            vertical-align: middle;
                            margin-right: 20px;
                        }

                        .value {
                            display: inline-block;
                            vertical-align: middle;

                            .title {
                                margin-bottom: 5px;
                            }

                            .guide {
                                display: flex;
                                align-items: center;
                                font-size: 13px;

                                .icon {
                                    font-size: 5px;
                                    margin: 0px 7px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

