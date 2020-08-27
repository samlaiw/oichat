<template>
  <v-container justify="center">
    <v-row class="point">
      <v-col>
        <v-card>
          <v-card-title>
              <v-text>
                留言篇數:88888
              </v-text>
            <v-spacer>
            <v-menu transition="slide-x-transition" bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn  color="primary" dark v-bind="attrs" v-on="on" height="25">
                  選擇版塊
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            </v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="memebers" :items="desserts"  :single-expand="singleExpand"
            :expanded.sync="expanded" item-key="title" show-expand class="elevation-1" :search="search">
            <template   v-slot:expanded-item="{ headers}" >
              <td :colspan="headers.length">
                <v-col>
                <v-btn text small>瀏覽留言</v-btn>
                <v-btn text small>刪除留言</v-btn>
                </v-col>
              </td>
            </template>
          </v-data-table>
        </v-card>
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
            text: '留言版塊',
            align: 'center',
            sortable: false,
            value: 'title',
          },
          {
            text: '留言內容',
            value: 'content',
            align: 'center',
          },
          {
            text: '日期',
            value: 'date',
            align: 'center',
          },
          {
            text: '瀏覽數',
            value: 'number',
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
            content:'aaa',
            number: '999',
            date: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            title: 'sample1',
            content:'bbb',
            number: '999',
            date: '2020/08/21',
            login: '2020/08/22 12:00'
          },
          {
            title: 'sample2',
            content:'ccc',
            number: '999',
            date: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            title: 'sample3',
            content:'ddd',
            number: '999',
            date: '2020/08/21',
            login: '2020/08/21 12:00'
          },
          {
            title: 'sample4',
            content:'eee',
            number: '999',
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
