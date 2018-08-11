<template lang="pug">
.mypage
  Nav.nav(:user="user")
  .content
    Calendar.calendar
    achievement-board.achievementBoard(:achievements="achievements")
    .posts
      post-form
</template>
<script>
// import api from '@/utils/Api'
import Nav from '@/components/Nav'
import Calendar from '@/components/Calendar'
import AchievementBoard from '@/components/AchievementBoard'
import PostForm from '@/components/PostForm'

export default {
  components: { Nav, Calendar, AchievementBoard, PostForm },
  data () {
    return {
      user: {},
      drops: [],
      achievements: [],
      posts: []
    }
  },
  created () {
    // api(`${process.env.API_ENDPOINT}/pages/mypage`)
    this.user = {
      id: 1,
      name: '山田',
      icon: 'yamada.jpg',
      role: 'general'
    }
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
    this.posts = [
      {
        id: 1,
        comments: [
          {
            id: 1,
            type: 'post_content',
            body: '頑張った！'
          },
          {
            id: 2,
            type: 'comment',
            body: '何を頑張ったの？'
          },
          {
            id: 3,
            type: 'comment',
            body: 'データ入力をミスなく完璧に頑張った！'
          }
        ],
        approved: false,
        mine: true
      }
    ]
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
  height: 100px;
  padding: 20px;
  padding-top: 50px;
}
</style>
