<template lang="pug">
.mypage
  Nav.nav(:user="user")
  .content
    Calendar.calendar
    achievement-board.achievementBoard(:achievements="achievements")
</template>
<script>
// import api from '@/utils/Api'
import Nav from '@/components/Nav'
import Calendar from '@/components/Calendar'
import AchievementBoard from '@/components/AchievementBoard'
export default {
  components: { Nav, Calendar, AchievementBoard },
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
      new Array(24), (_, index) => index + 1
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
</style>
