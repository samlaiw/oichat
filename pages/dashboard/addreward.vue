<template>
<v-col>
   <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
   <v-file-input
    label="請點擊上傳獎勵圖片"
    prepend-icon=""
    append-outer-icon ="mdi-camera"
  ></v-file-input>

    <v-text-field
      v-model="name"
      :counter="100"
      :rules="nameRules"
      label="請輸入獎勵描述"
      required
    ></v-text-field>

    <v-text-field
      v-model="number"
      :rules="numberRules"
      label="請輸入所需積分"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="請選擇獎勵等級"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="確認無誤?"
      required
    ></v-checkbox>
  <v-row align="center" justify="center">
     <v-btn

      class="mr-4"
      color="warning"
      @click="resetValidation"
    >
      預覽獎勵
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      重新輸入
    </v-btn>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      確認送出
    </v-btn>
  </v-row>
  </v-form>
</v-col>
</template>

<script>
  export default {
    layout:'dashboard',
    data: () => ({
      valid: true,
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
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style lang="scss">
    @import '~/assets/css/global/config.scss';


</style>
