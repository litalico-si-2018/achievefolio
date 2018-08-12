<template lang="pug">
.posts
  .posts__item(v-for="post in posts" :key="post.id")
    Avatar.avatar(image="yamada.jpg" imageWidth="50px" imageHeight="50px")
    p.body {{ post.body }}
</template>
<script>
import Avatar from '@/components/Avatar'

export default {
  components: { Avatar },
  props: ['posts'],
  created () {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.posts {
  padding-bottom: 100px;
  overflow: hidden;
  &__item {
    width: 100%;
    border-radius: 5px;
    padding: 20px;
  }
}
.avatar {
  float: left;
}
.body {
  float: left;
  margin: 10px;
}
</style>
