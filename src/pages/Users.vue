<template lang="pug">
.users
  Nav.nav(:user="user")
  .content
    div.users__item(v-for="guser in users")
      router-link(:to="{ name: 'User', params: { id: guser.id } }")
</template>
<script>
import Nav from '@/components/Nav'
export default {
  components: { Nav },
  data () {
    return {
      user: {},
      users: [
        {
          id: 1,
          name: '山田',
          icon: 'yamada.jpg',
          role: 'general'
        }
      ]
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
.nav {
  width: 250px;
  float: left;
  height: 100vh;
}
.content {
  width: calc(100% - 300px);
  float: left;
}
</style>
