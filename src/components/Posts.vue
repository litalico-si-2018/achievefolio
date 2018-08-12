<template lang="pug">
.posts
  .posts__item(v-for="post in posts" :key="post.id" :class="{ approved: true }")
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
  overflow: hidden;
  width: 100%;
  &__item {
    width: 100%;
    border-radius: 5px;
    padding: 20px;
    padding-bottom: 10px;
    background-color: white;
    border: 1px solid #ccc;
    overflow: hidden;
    margin: 10px 0;
  }
}
.avatar {
  float: left;
}
.body {
  float: left;
  margin: 10px;
  width: calc(100% - 70px);
}
.approved {
  background-color: #09d3ff;
}
</style>
