<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            文章篇數:88888
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
            </v-text-field>
          </v-card-title>
          <v-data-table :headers="members" :items="desserts"  :single-expand="singleExpand"
            :expanded.sync="expanded" item-key="article" show-expand class="elevation-1" :search="search">
            <template   v-slot:expanded-item="{ headers}" >
              <td :colspan="headers.length">
                <v-col>
                <v-btn text small>瀏覽文章</v-btn>
                <v-btn text small>編輯文章</v-btn>
                <v-btn text small>設為精選</v-btn>
                <v-btn text small>設為活動</v-btn>
                <v-btn text small>複製文章</v-btn>
                <v-btn text small>還原為草稿</v-btn>
                <v-btn text small>停用留言</v-btn>
                <v-btn text small>刪除文章</v-btn>
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

        members: [{
            text: '文章圖片',
            align: 'center',
            sortable: false,
            value: 'photo',
          },
          {
            text: '文章標題',
            value: 'article',
            align: 'center',
          },
          {
            text: '日期',
            value: 'date',
            align: 'center',
          },
          {
            text: '讚數',
            value: 'great',
            align: 'center',
          },
          {
            text: '瀏覽數',
            value: 'view',
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
            photo: 'sample',
            article: 'aaa',
            date: '2020/08/24',
            great: '999',
            view: '999'
          },
          {
            photo: 'sample',
            article: 'bbb',
            date: '2020/08/24',
            great: '999',
            view: '999'
          },
          {
            photo: 'sample',
            article: 'ccc',
            date: '2020/08/24',
            great: '999',
            view: '999'
          },
          {
            photo: 'sample',
            article: 'ddd',
            date: '2020/08/24',
            great: '999',
            view: '999'
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
