<template lang="pug">
.mypage
  Nav.nav(:user="user")
  .content
</template>
<script>
// import api from '@/utils/Api'
import Nav from '@/components/Nav'
export default {
  components: { Nav },
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
