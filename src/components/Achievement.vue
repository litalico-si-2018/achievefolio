<template lang="pug">
.achievement
  icon(:name="typeToName[type]")
</template>
<script>
export default {
  props: ['type'],
  data () {
    return {
      "typeToName": {
        string_count: "align-left"
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.achievement {
  width: 50px;
  height: 50px;
}
</style>
