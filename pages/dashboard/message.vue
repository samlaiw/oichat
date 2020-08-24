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
          <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
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

        headers: [{
            text: '留言板塊',
            align: 'center',
            sortable: false,
            value: 'name',
          },
          {
            text: '留言內容',
            value: 'time',
            align: 'center',
          },
          {
            text: '日期',
            value: 'time',
            align: 'center',
          },
          {
            text: '瀏覽數',
            value: 'time',
            align: 'center',
          },
          {
            text: '編輯',
            value: 'fat',
            align: 'center',
          }
        ],
        desserts: [{
            name: '記得到兌換中心兌換您的積分獎勵喔',
            time: '2020/08/21',
            fat: 6.0,
            iron: '1%',
          },
          {
            name: '記得到兌換中心兌換您的積分獎勵喔',
            time: '2020/08/21',
            fat: 9.0,
            iron: '1%',
          },
          {
            name: '記得到兌換中心兌換您的積分獎勵喔',
            time: '2020/08/21',
            fat: 16.0,
            iron: '7%',
          },
          {
            name: '記得到兌換中心兌換您的積分獎勵喔',
            time: '2020/08/21',
            fat: 3.7,
            iron: '8%',
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
