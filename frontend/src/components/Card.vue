<script>

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetailPage() {
      let id = this.post.id;
      this.$router.push(`/posts/${id}`)
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
              ><span class="text-h5"> {{ post?.user?.initials }}</span>
            </v-avatar>
          </template>

          <v-list-item-title>{{ post?.user?.name }}</v-list-item-title>

          <v-list-item-subtitle>{{ post?.user?.city }}</v-list-item-subtitle>
        </v-list-item>
      </v-card-actions>

      <!-- <template v-slot:prepend>
        <v-icon size="x-large"></v-icon>
      </template> -->

      <v-card-text class="py-2"> {{ post?.content.slice(0, 50) }} .... </v-card-text>
      <v-btn class="ml-4 readmore-btn" @click="goToDetailPage()"> Read More</v-btn>

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
.v-card-actions {
  width: 600px;
}

.text-h5 {
  font-size: 10px;
}
.about {
  /* min-height: 100vh; */
  font-size: 13px;
  width: 600px;
  display: flex;
  align-items: center;
  margin: 20px;
}

</style>
