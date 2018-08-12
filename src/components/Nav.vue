<template lang="pug">
.nav
  .nav__avatar
    Avatar.avatar(:image="user.icon")
  p.nav__name {{ user.name }}
  .nav__menu(v-show="isGeneral")
    router-link.nav__item(to="/") マイページ
    router-link.nav__item(to="#") 設定
  .nav__menu(v-show="!isGeneral")
    router-link.nav__item(to="/users") ユーザー一覧
    router-link.nav__item(to="#") 設定
</template>
<script>
import Avatar from '@/components/Avatar'
export default {
  components: { Avatar },
  props: ['user'],
  data () {
    return {
      isGeneral: true
    }
  },
  created () {
    if (this.user.role === 'admin') {
      this.isGeneral = false
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  color: white;
  background-color: #444;
  text-align: center;
  &__avatar {
    margin-bottom: 10px;
  }
  &__name {
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 50px;
  }
  &__item {
    display: block;
    font-size: 1.4rem;
  }
}
.avatar {
  margin: auto;
  margin-top: 50px;
}
</style>
