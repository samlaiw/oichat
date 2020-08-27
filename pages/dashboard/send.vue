<template>
  <v-col>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-radio-group v-model="column" column>
        <v-radio label="全站發送" value="radio-1">

          <v-text-field v-model="name" :counter="100" :rules="nameRules" label="請輸入獎勵描述" required></v-text-field>
        </v-radio>
        <v-radio label="Option 2" value="radio-2">
          <v-text-field v-model="number" :rules="numberRules" label="請輸入所需積分" required></v-text-field>

        </v-radio>
      </v-radio-group>

      <v-textarea name="input-7-1" filled label="請輸入文字" auto-grow></v-textarea>

      <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="確認無誤?" required>
      </v-checkbox>


      <v-btn color="error" class="mr-4" @click="reset">
        重新輸入
      </v-btn>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        確認送出
      </v-btn>
    </v-form>
  </v-col>
</template>

<script>
  export default {
    layout: 'dashboard',
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
