<script>
import apiService from '../services/apiService'
import Card from '../components/Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      posts: []
    }
  },
  async created() {
    this.posts = await apiService.getPosts()
    this.posts.forEach((post) => {
      post.user.initials = this.generateInitials(post.user.name)
    })

    console.log(this.posts)
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
  <main>
    <div class="container">
      <Card v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </main>
</template>

<style>
.container {
  width: 600px;
  margin: auto;
}
</style>
