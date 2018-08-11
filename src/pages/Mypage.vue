<template lang="pug">
.mypage
  Nav.nav(:user="user")
  .content
    Calendar
</template>
<script>
// import api from '@/utils/Api'
import Nav from '@/components/Nav'
import Calendar from '@/components/Calendar'
export default {
  components: { Nav, Calendar },
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
  }
}
</script>
<style lang="scss" scoped>
</style>
