<script>
export default {
  name: 'App',
  data() {
    return {
      token: localStorage.getItem('token')
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('token')
      this.token = null
      this.$router.push('/login')
    }
  },
  mounted() {
    this.token = localStorage.getItem('token')
  },
}
</script>

<template>
  <header>
    <v-card color="basil">
      <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
        <v-tab to="/"> Feed </v-tab>
        <v-tab to="/profile"> Profile </v-tab>
        <v-card>
          <v-tab v-if="token" @click="handleLogout()">Logout</v-tab>
          <v-tab v-else to="/login">Login</v-tab>
        </v-card>
      </v-tabs>
    </v-card>
  </header>

  <RouterView />
</template>

<style>
header {
  width: 100%;
}
</style>
