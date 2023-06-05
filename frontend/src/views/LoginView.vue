<script>
import apiService from '../services/apiService'

export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async submitLogin(event) {
      event.preventDefault()
      const result = await apiService.login(this.email, this.password)
      if (result.status === 200) {
        this.$router.push('/profile')
      }

    }
  }
}
</script>
<template>
  <v-contaienr class="container">
    <v-sheet width="400">
      <h2 :class="`mt-n1 headline font-weight-bold ml-5 mb-4`">Login to Social App</h2>
      <v-form fast-fail @submit.prevent @submit="submitLogin">
        <v-text-field v-model="email" label="Email"></v-text-field>

        <v-text-field v-model="password" type="password" label="Password"></v-text-field>

        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
  </v-contaienr>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
</style>