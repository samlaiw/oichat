<template>
  <v-container>
    <v-row  class="point" align="center">
      <v-col cols="12" justify-center align="center">
        <v-dialog v-model="dialog" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <v-btn x-large color="primary" dark v-bind="attrs" v-on="on">
              新增訊息
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Legal first name*" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Legal last name*" hint="example of persistent helper text" persistent-hint
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Password*" type="password" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-autocomplete
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Interests" multiple></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>
            快訊列表
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
            text: '訊息內容',
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
