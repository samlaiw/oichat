<template>
  <v-container justify="center">
    <v-row>
      <v-col>
          <v-card-title>
            <span>
            全部獎勵:16
            </span>
            <span>
            白銀獎勵:8
            </span>
            <span>
            黃金獎勵:8
            </span>
            <v-spacer>
            </v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="搜尋" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="memebers" :items="desserts"  :single-expand="singleExpand"
            :expanded.sync="expanded" item-key="article" show-expand class="elevation-1" :search="search">
            <template   v-slot:expanded-item="{ headers}" >
              <td :colspan="headers.length">
                <v-col>
                <v-btn text small>編輯獎勵</v-btn>
                <v-btn text small>獎勵發佈</v-btn>
                <v-btn text small>獎勵下架</v-btn>
                <v-btn text small>獎勵刪除</v-btn>
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
            text: '獎勵圖片',
            align: 'center',
            sortable: false,
            value: 'article',
          },
          {
            text: '獎勵描述',
            value: 'content',
            align: 'center',
          },
          {
            text: '所需積分',
            value: 'account',
            align: 'center',
          },
          {
            text: '獎勵等級',
            value: 'date',
            align: 'center',
          },
          {
            text: '日期',
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
            article: 'sapmle1',
            content: '兒童英語讀本',
            account: '999',
            date: '白銀',
            GREAT: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            article: 'sapmle2',
            content: '免費英文課程1堂',
            account: '999',
            date: '白銀',
            GREAT: '2020/08/21',
            login: '2020/08/22 12:00'
          },
          {
            article: 'sapmle3',
            content: '免費英文課程1堂',
            account: '999',
            date: '黃金',
            GREAT: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            article: 'sapmle4',
            content: '免費英文課程1堂',
            account: '999',
            date: '白銀',
            GREAT: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            article: 'sapmle5',
            content: '免費英文課程1堂',
            account: '999',
            date: '黃金',
            GREAT: '2020/08/21',
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
