<template lang="pug">
.achievement
  icon.icon(:name="typeToName[achievement.type]")
  | {{ achievement.id }}
</template>
<script>
export default {
  props: ['achievement'],
  data () {
    return {
      typeToName: {
        string_count: 'align-left'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.achievement {
  width: 60px;
  height: 60px;
  background-color: #ccc;
}
</style>
