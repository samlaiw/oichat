<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            草稿篇數:8
            <v-spacer>
              <v-btn color="primary" dark @click.stop="dialog = true" height="25px">
                發表文章
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
                <v-btn text small>瀏覽文章</v-btn>
                <v-btn text small>編輯文章</v-btn>
                <v-btn text small>複製文章</v-btn>
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

        memebers: [{
            text: '文章圖片',
            align: 'center',
            sortable: false,
            value: 'name',
          },
          {
            text: '文章標題',
            value: 'title',
            align: 'center',
          },
          {
            text: '排程時間',
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
            name: 'sample1',
            title: 'aaa',
            date: '2020/08/24',
          },
          {
            name: 'sample2',
            title: 'bbb',
            date: '2020/08/24',
          },
          {
            name: 'sample3',
            title: 'ccc',
            date: '2020/08/24',
          },
          {
            name: 'sample4',
            title: 'ddd',
            date: '2020/08/24',
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
