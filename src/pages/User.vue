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
      name: '山本',
      icon: 'yamamoto.jpg',
      role: 'admin'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
