<template>
  <v-container justify="center">
    <v-row>
      <v-col>
          <v-card-title>
              會員人數:88888
            <v-spacer>
              <v-btn color="primary" dark @click.stop="dialog = true" height="25px">
                查看每日數據
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
            <v-text-field v-model="search" append-icon="mdi-magnify" label="搜尋會員 (請輸入:姓名)" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="memebers" :items="desserts"  :single-expand="singleExpand"
            :expanded.sync="expanded" item-key="name" show-expand class="elevation-1" :search="search">
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                <span>登入方式: FACEBOOK</span>
                <span>會員姓名:{{item.name}}</span>
                <v-col>
                <v-btn text small>封鎖會員</v-btn>
                <v-btn text small>刪除會員</v-btn>
                <v-btn text small>會員留言</v-btn>
                <v-btn text small>發送訊息</v-btn>
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
            text: '會員暱稱',
            align: 'center',
            sortable: false,
            value: 'name',
          },
          {
            text: '電子郵件',
            value: 'email',
            align: 'center',
          },
          {
            text: '會員等級',
            value: 'grade',
            align: 'center',
          },
          {
            text: '會員積分',
            value: 'point',
            align: 'center',
          },
          {
            text: '升級到期',
            value: 'update',
            align: 'center',
          },
          {
            text: '最後登入',
            value: 'login',
            align: 'center',
          },
          {
            text: '編輯',
            width: '100px',
            align: 'center',
            value: 'data-table-expand',

          }


        ],
        desserts: [{
            name: 'AAA',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'BBB',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'CCC',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'DDD',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'EEE',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'FFF',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'GGG',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'HHH',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'III',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'JJJ',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'KKK',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'LLL',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'MMM',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'NNN',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'OOO',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
            login: '2020/08/21 12:00'
          },
          {
            name: 'PPP',
            email: 'AAA@gmail.com',
            grade: 'LV01 新生兒',
            point: '99999',
            update: '未升級',
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
