<template lang="pug">
.posts
</template>
<script>
export default {
  props: ['posts'],
  created () {
    console.log(this.posts)
  }
}
</script>
<style lang="scss" scoped>
</style>
