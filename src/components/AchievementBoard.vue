<template lang="pug">
.achievementBoard
  Achievement(v-for="achievement in achievements")
</template>
<script>
import Achievement from '@/components/Achievement'
export default {
  components: { Achievement },
  props: ['achievements']
}
</script>
<style lang="scss" scoped>
.achievementBoard {
}
</style>
