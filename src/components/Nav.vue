<template lang="pug">
.nav
  Avatar(:image="user.icon")
</template>
<script>
import Avatar from '@/components/Avatar'
export default {
  components: { Avatar },
  props: ['user'],
  created () {
  }
}
</script>
<style lang="scss" scoped>
</style>
