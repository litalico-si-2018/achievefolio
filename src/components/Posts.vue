<template lang="pug">
.posts
  .posts__item(v-for="(post, i) in posts" :key="post.id" :class="{ approved: post.approved }")
    Avatar.avatar(image="yamada.jpg" imageWidth="50px" imageHeight="50px")
    p.body {{ post.body }}
    icon.icon(@click.native="approve(i)" name="check" v-show="admin && !post.approved")
    p.date {{ `${post.year}-${post.month}-${post.date}` }}
</template>
<script>
import Avatar from '@/components/Avatar'
import api from '@/utils/Api'

export default {
  components: { Avatar },
  props: ['posts', 'admin'],
  created () {
  },
  methods: {
    approve (i) {
      if (window.confirm('この投稿を承認しますか？')) {
        api('PATCH',
          `${process.env.API_ENDPOINT}/approved`,
          { post_id: this.posts[i].id }
        ).then(response => {
        })
      }
    }
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
    position: relative;
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
.icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: lightgreen;
  width: 30px;
  height: 30px;
}
</style>
