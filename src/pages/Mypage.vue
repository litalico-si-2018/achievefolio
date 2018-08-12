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
      this.user = response.data.user
      this.drops = response.data.drops
      this.achievements = response.data.achievements
      this.posts = response.data.posts
      this.posts = this.posts.reverse()
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
