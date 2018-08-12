<template lang="pug">
.achievement(:class="{ achieved: achieved }")
  icon.icon(:name="typeToName[achievement.status]")
  .achievement__description {{ achievement.secret ? '???' : achievement.description }}
  icon.achieved__icon(v-if="achievement.achieved || achieved" name="check")
</template>
<script>
export default {
  props: ['achievement', 'achieved'],
  data () {
    return {
      typeToName: {
        string_count: 'align-left',
        sequence_post: 'grip-vertical',
        daily_post_count: 'adjust'
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
  &.achieved {
    background-color: lightgreen;
  }
}
.achieved__icon {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 5px;
  left: 5px;
}
</style>
