<template>
      <v-container
        class="fill-height"
        fluid
        justify="center"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
             <v-form>
                  <v-text-field
                    label="帳號"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="密碼"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" link to="roster" @click="title = '會員名單'">登入</v-btn>
              </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
  export default {
    layout:'dashboard',

  }
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';


</style>
