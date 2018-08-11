<template lang="pug">
img(:src="require(`@/assets/${image}`)")
</template>
<script>
export default {
  props: ['image', 'imageWidth', 'imageHeight'],
  data () {
    return {
      width: 200,
      height: 200
    }
  },
  created () {
    if (this.imageWidth) {
      this.width = this.imageWidth
    }
    if (this.imageHeight) {
      this.height = this.imageHeight
    }
  }
}
</script>
<style lang="scss" scoped>
img {
  border-radius: 5px;
  box-shadow: 0 0 3px 0 #333;
  width: 100px;
  height: 100px;
}
</style>
