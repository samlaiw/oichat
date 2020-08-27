<template>
  <v-col>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="30" :rules="nameRules" label="請輸入文章標題" required></v-text-field>

      <v-file-input label="請點擊上傳文章圖片" prepend-icon="" append-outer-icon="mdi-camera"></v-file-input>


      <v-textarea name="input-7-1" filled label="請輸入文章內文" auto-grow></v-textarea>

      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="確認無誤?" required>
      </v-checkbox>
      <v-row align="center" justify="center">
        <v-btn color="warning" class="mr-4" @click="resetValidation">
          預覽文章
        </v-btn>

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
      name: '',
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      includeFiles: true,
      enabled: false,
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
