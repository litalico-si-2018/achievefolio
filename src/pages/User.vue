<template lang="pug">
.user
  Nav.nav(:user="user")
  .content
</template>
<script>
import Nav from '@/components/Nav'
export default {
  components: { Nav },
  data () {
    return {
      user: {}
    }
  },
  created () {
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
