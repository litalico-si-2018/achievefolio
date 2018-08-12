<template lang="pug">
.mypage
  Nav.nav(:user="user")
  .content
    Calendar.calendar(:drops="drops")
    achievement-board.achievementBoard(:achievements="achievements")
    .posts
      post-form
      Posts(:posts="posts")
</template>
<script>
import api from '@/utils/Api'
import Nav from '@/components/Nav'
import Calendar from '@/components/Calendar'
import AchievementBoard from '@/components/AchievementBoard'
import PostForm from '@/components/PostForm'
import Posts from '@/components/Posts'

export default {
  components: { Nav, Calendar, AchievementBoard, PostForm, Posts },
  data () {
    return {
      user: {},
      drops: [],
      achievements: [],
      posts: []
    }
  },
  created () {
    api('GET',
      `${process.env.API_ENDPOINT}/pages/mypage`,
      {}
    ).then(response => {
      console.log(response.data)
      this.user = response.data.user
      this.drops = response.data.drops
      this.achievements = response.data.achievements
      this.posts = response.data.posts
    })
    this.achievements = Array.from(
      new Array(36), (_, index) => index + 1
    ).map(i => {
      return {
        id: i,
        type: 'string_count',
        achieved: false,
        icon: '',
        secret: false,
        description: '文字数200文字以上の投稿をする'
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.calendar {
  float: left;
}
.achievementBoard {
  float: left;
}
.posts {
  float: right;
  width: calc(100% - 150px);
  padding: 20px;
  padding-top: 50px;
  overflow: hidden;
}
</style>
