<template>
  <v-container justify="center">
    <v-row>
      <v-col>
          <v-card-title>
            廣告則數: 88888
            <v-spacer>
              <v-btn color="primary" dark @click.stop="dialog = true" height="25px">
                上架廣告
              </v-btn>
              <v-dialog v-model="dialog" max-width="290" eager>
                <v-card height="100%">
                  <v-card-title class="headline">Use Google's location service?</v-card-title>

                  <v-card-text>
                    Let Google help apps determine location. This means sending anonymous location data to Google, even
                    when no apps are running.
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="dialog = false">
                      Disagree
                    </v-btn>

                    <v-btn color="green darken-1" text @click="dialog = false">
                      Agree
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="搜尋" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="memebers" :items="desserts"  :single-expand="singleExpand"
            :expanded.sync="expanded" item-key="article" show-expand class="elevation-1" :search="search">
            <template   v-slot:expanded-item="{ headers}" >
              <td :colspan="headers.length">
                <v-col>
                <v-btn text small>編輯廣告</v-btn>
                <v-btn text small>廣告發佈</v-btn>
                <v-btn text small>廣告下架</v-btn>
                <v-btn text small>廣告刪除</v-btn>
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
            text: '廣告圖片',
            align: 'center',
            sortable: false,
            value: 'article',
          },
          {
            text: '廣告描述',
            value: 'content',
            align: 'center',
          },
          {
            text: '廣告版位',
            value: 'account',
            align: 'center',
          },
          {
            text: '尺寸',
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
            article: 'sample',
            content: '小朋友學英文',
            account: '首頁上方AD',
            date: '1200*600',
            GREAT: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            article: 'sample1',
            content: '小朋友學英文',
            account: '首頁上方AD',
            date: '1200*600',
            GREAT: '2020/08/21',
            login: '2020/08/22 12:00'
          },
          {
            article: 'sample2',
            content: '小朋友學英文',
            account: '首頁上方AD',
            date: '1200*600',
            GREAT: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            article: 'sample3',
            content: '小朋友學英文',
            account: '首頁上方AD',
            date: '1200*600',
            GREAT: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            article: 'sample4',
            content: '小朋友學英文',
            account: '首頁上方AD',
            date: '1200*600',
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
