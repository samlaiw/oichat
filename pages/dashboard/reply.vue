<template>
  <v-container justify="center">
    <v-row>
      <v-col>
          <v-card-title>
            <v-text>
              所有回覆
            </v-text>
            <v-spacer>
            </v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="搜尋" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="memebers" :items="desserts"  :single-expand="singleExpand"
            :expanded.sync="expanded" item-key="account" show-expand class="elevation-1" :search="search">
            <template   v-slot:expanded-item="{ headers, item }" >
              <td :colspan="headers.length">
                <span>留言會員:{{item.account}}</span>
                <v-col>
                <v-btn text small>瀏覽留言</v-btn>
                <v-btn text small>刪除留言</v-btn>
                </v-col>
              </td>
            </template>
          </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    layout: 'dashboard',
    data() {
      return {
        search: '',

        dialog: false,

        expanded: [],
        singleExpand: true,

        memebers: [{
            text: '留言文章',
            align: 'center',
            sortable: false,
            value: 'article',
          },
          {
            text: '留言內容',
            value: 'content',
            align: 'center',
          },
          {
            text: '會員帳號',
            value: 'account',
            align: 'center',
          },
          {
            text: '日期',
            value: 'date',
            align: 'center',
          },
          {
            text: '按讚數',
            value: 'GREAT',
            align: 'center',
          },
          {
            text: '編輯',
            value: 'data-table-expand',
            width: '100px',
            align: 'center'

          }


        ],
        desserts: [{
            article: 'STEAK',
            content: '讚',
            account: 'AAA',
            date: '2020/08/21',
            GREAT: '999',
            login: '2020/08/21 12:00'
          },
          {
            article: 'STEAK',
            content: '棒',
            account: 'BBB',
            date: '2020/08/22',
            GREAT: '999',
            login: '2020/08/22 12:00'
          },
          {
            article: 'STEAK',
            content: '太神了',
            account: 'CCC',
            date: '2020/08/23',
            GREAT: '999',
            login: '2020/08/21 12:00'
          },
          {
            article: 'STEAK',
            content: '猛',
            account: 'DDD',
            date: '2020/08/24',
            GREAT: '999',
            login: '2020/08/21 12:00'
          },
          {
            article: 'STEAK',
            content: '厲害',
            account: 'EEE',
            date: '2020/08/25',
            GREAT: '999',
            login: '2020/08/21 12:00'
          }

        ],
      }
    },
  }

</script>
<style lang="scss">
  .point {
    height: 300px;
  }

</style>
