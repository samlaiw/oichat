<template>
  <v-container justify="center">
    <v-row class="point">
      <v-col>
          <v-card-title>
              <v-text>
                留言篇數:88888
              </v-text>
            <v-spacer>
            <v-btn color="primary" dark @click.stop="dialog = true" height="25px">
                新增版塊
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
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="memebers" :items="desserts"  :single-expand="singleExpand"
            :expanded.sync="expanded" item-key="title" show-expand class="elevation-1" :search="search">
            <template   v-slot:expanded-item="{ headers}" >
              <td :colspan="headers.length">
                <v-col>
                <v-btn text small>修改版塊</v-btn>
                <v-btn text small>刪除版塊</v-btn>
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

        items: [{
            title: 'Click Me'
          },
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me'
          },
          {
            title: 'Click Me 2'
          },
        ],

        memebers: [{
            text: '版塊類別',
            align: 'center',
            sortable: false,
            value: 'title',
          },
          {
            text: '留言篇數',
            value: 'number',
            align: 'center',
          },
          {
            text: '建立日期',
            value: 'date',
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
            title: '二手用品交易',
            number: '999篇',
            date: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            title: 'sample1',
            number: '999篇',
            date: '2020/08/21',
            login: '2020/08/22 12:00'
          },
          {
            title: 'sample2',
            number: '999篇',
            date: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            title: 'sample3',
            number: '999篇',
            date: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            title: 'sample4',
            number: '999篇',
            date: '2020/08/21',
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
