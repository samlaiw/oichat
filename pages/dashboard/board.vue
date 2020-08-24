<template>
  <v-container>
    <v-row  class="point">
      <v-col>
        <v-card>
          <v-card-title>
            文章篇數:88888
            <v-spacer></v-spacer>
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

        headers: [{
            text: '文章圖片',
            align: 'center',
            sortable: false,
            value: 'name',
          },
          {
            text: '文章標題',
            value: 'time',
            align: 'center',
          },
          {
            text: '日期',
            value: 'fat',
            align: 'center',
          },
          {
            text: '讚數',
            value: 'fat',
            align: 'center',
          },
          {
            text: '瀏覽數',
            value: 'fat',
            align: 'center',
          },
          {
            text: '編輯',
            value: 'edit',
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
