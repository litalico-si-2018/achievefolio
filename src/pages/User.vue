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
</style>
