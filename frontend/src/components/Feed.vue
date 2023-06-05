<script>
import apiService from '../services/apiService'

export default {
  data() {
    return {
      post: {}
    }
  },
  async created() {
    const id = this.$route.params.id
    this.post = await apiService.getPost(id)
    this.post.user.initials = this.generateInitials(this.post.user.name)
    console.log(this.post)
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
  <div class="about">
    <v-card class="mx-auto" color="#26c6da" theme="dark" max-width="800">
      <v-card-actions>
        <v-list-item class="w-100">
          <template v-slot:prepend>
            <v-avatar class="avatar" color="info" size="64" b
              ><span class="text-h5"> {{ post.user?.initials }}</span>
            </v-avatar>
          </template>

          <v-list-item-title>{{ post.user?.name }}</v-list-item-title>

          <v-list-item-subtitle>{{ post.user?.city }}</v-list-item-subtitle>
        </v-list-item>
      </v-card-actions>

      <!-- <template v-slot:prepend>
        <v-icon size="x-large"></v-icon>
      </template> -->

      <v-card-text class="text-h5 py-2">
        {{ post.content }}
      </v-card-text>
      <div class="d-flex justify-space-around">
        <v-list-item>
          <v-icon class="me-1" icon="mdi-heart"></v-icon>
          <span class="subheading me-2">256</span>
        </v-list-item>
        <span class="me-1">·</span>
        <v-list-item>
          <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
          <span class="subheading">45</span>
        </v-list-item>
      </div>
    </v-card>
  </div>
</template>

<style>
  .about {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
