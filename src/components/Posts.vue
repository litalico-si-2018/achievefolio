<template lang="pug">
.posts
  .posts__item(v-for="post in posts" :key="post.id")

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
  &__item {
    background-color: white;
  }
}
</style>
