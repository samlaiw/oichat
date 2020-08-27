<template>
  <v-col>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row align="center">
        <v-checkbox
          v-model="includeFiles"
          hide-details
          class="shrink mr-2 mt-0"
          label="全站會員發送"
          value="全站會員發送"
        ></v-checkbox>
      </v-row>
      <v-row align="center">
        <v-checkbox
          v-model="enabled"
          hide-details
          class="shrink mr-2 mt-0"
        ></v-checkbox>
        <v-text-field
          :disabled="!enabled"
          label="輸入多個會員帳號 請用「,」分離"
        ></v-text-field>
      </v-row>

      <v-textarea name="input-7-1" filled label="請輸入文字" auto-grow></v-textarea>

      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="確認無誤?" required>
      </v-checkbox>
      <v-row align-center justify="center">
        <v-btn color="error" class="mr-4" @click="reset">
        重新輸入
      </v-btn>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        確認送出
      </v-btn>
      </v-row>


    </v-form>
  </v-col>
</template>

<script>
  export default {
    layout: 'dashboard',
    data: () => ({
      valid: true,
      includeFiles: true,
      enabled: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 100) || '描述需小於100字',
      ],
      number: '',
      numberRules: [
        v => !!v || 'Number is required',
        v => (v && v.length <= 3) || '積分必須小於999',
      ],
      select: null,
      items: [
        '等級 1',
        '等級 2',
        '等級 3',
        '等級 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate() {
        this.$refs.form.validate()
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      },
    },
  }

</script>

<style lang="scss">
  @import '~/assets/css/global/config.scss';

</style>
