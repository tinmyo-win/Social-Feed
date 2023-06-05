<script>
import apiService from '../services/apiService'
export default {
  data() {
    return {
      me: {}
    }
  },
  async mounted() {
    this.me = await apiService.getLoggedinUserData()
    this.me.initials = this.generateInitials(this.me.name)
  },
  methods: {
    generateInitials(name) {
      const names = name.split(' ')
      let initials = ''

      for (let i = 0; i < names.length; i++) {
        if (names[i].length > 0 && names[i] !== '') {
          initials += names[i][0].toUpperCase()
        }
      }

      return initials
    }
  }
}
</script>

<template>
  <v-card class="mx-auto" max-width="800">
    <v-img
      class="align-end text-white"
      height="400"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
    </v-img>
    <v-avatar class="avatar" color="info" size="124" b
      ><span class="text-h4"> {{ this.me.initials }}</span>
    </v-avatar>
    <v-card-title>{{ me.name }}</v-card-title>
    <v-card-actions>
      <v-btn color="grey"> <strong>300</strong> Following </v-btn>

      <v-btn color="grey"> <strong>213</strong> Followers </v-btn>
    </v-card-actions>
    <v-card-subtitle class="pt-4">@jakay </v-card-subtitle>

    <v-card-text>
      <div>
        Lives in <strong>{{ me.city }} </strong>
      </div>
      <div>
        Email <strong>{{ me.email }} </strong>
      </div>
      <div>
        Phone <strong>{{ me.phone }} </strong>
      </div>
    </v-card-text>

    <v-card-text>
      <p>
        {{ me.bio }}
      </p>
    </v-card-text>
  </v-card>
</template>
  
  <style>
.avatar {
  position: relative;
  top: 10px;
  left: 100px;
  padding: 2px;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>