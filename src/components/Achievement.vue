<template lang="pug">
.achievement
  icon.icon(:name="typeToName[achievement.type]")
  .achievement__description {{ achievement.secret ? '???' : achievement.description }}
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
  width: 50px;
  height: 50px;
  background-color: #ccc;
  position: relative;
  cursor: pointer;
  &__description {
    position: absolute;
    background-color: #37619c;
    top: 45px;
    left: 30px;
    padding: 10px;
    z-index: 1;
    display: none;
    width: 200px;
    font-size: 15px;
    border-radius: 5px;
    color: white;
  }
  &:hover {
    .achievement__description {
      display: inline-block;
    }
  }
}
</style>
