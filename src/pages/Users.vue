<template lang="pug">
.users
  Nav.nav(:user="user")
  .content
    div.users__item(v-for="guser in users")
      router-link(:to="{ name: 'User', params: { id: guser.id } }")
        Avatar.users__avatar(:image="guser.icon" :imageWidth="'50px'", :imageHeight="'50px'")
        p.users__name {{ guser.name }}

</template>
<script>
import Nav from '@/components/Nav'
import Avatar from '@/components/Avatar'
export default {
  components: { Nav, Avatar },
  data () {
    return {
      user: {
        id: 2,
        name: '山本',
        icon: 'yamamoto.jpg',
        role: 'admin'
      },
      users: [
        {
          id: 1,
          name: '山田',
          icon: 'yamada.jpg',
          role: 'general'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.users {
  &__item {
    overflow: hidden;
  }
  &__avatar {
    float: left;
    margin-right: 10px;
  }
  &__name {
    float: left;
    display: block;
    height: 50px;
    line-height: 50px;
  }
}
</style>
