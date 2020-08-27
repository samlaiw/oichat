<template>
  <v-container>
    <v-row >
      <v-col>
        <v-card>
          <v-card-title>
            快訊列表
            <v-spacer>
              <v-btn color="primary" dark @click.stop="dialog = true" height="25px">
                新增訊息
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
            :expanded.sync="expanded" item-key="name" show-expand class="elevation-1" :search="search">
            <template   v-slot:expanded-item="{ headers}" >
              <td :colspan="headers.length">
                <v-col>
                <v-btn text small>修改訊息</v-btn>
                <v-btn text small>刪除訊息</v-btn>
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

        memebers: [{
            text: '快訊名稱',
            align: 'center',
            sortable: false,
            value: 'name',
          },
          {
            text: '建立時間',
            value: 'time',
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
            name: '記得到兌換中心兌換您的積分獎勵喔1',
            time: '2020/08/21',
          },
          {
            name: '記得到兌換中心兌換您的積分獎勵喔2',
            time: '2020/08/21',
          },
          {
            name: '記得到兌換中心兌換您的積分獎勵喔3',
            time: '2020/08/21',
          },
          {
            name: '記得到兌換中心兌換您的積分獎勵喔4',
            time: '2020/08/21',
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
