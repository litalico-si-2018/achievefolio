<template lang="pug">
.achievementBoard
  .achievementWrap
    Achievement.achievement(v-for="achievement in leftAchievements"
      :achievement="achievement" :key="achievement.id")
  .achievementWrap
    Achievement.achievement(v-for="achievement in rightAchievements"
      :achievement="achievement" :key="achievement.id")
</template>
<script>
import Achievement from '@/components/Achievement'
export default {
  components: { Achievement },
  props: ['achievements'],
  data () {
    return {
      leftAchievements: [],
      rightAchievements: []
    }
  },
  created () {
    this.leftAchievements = this.achievements.slice(0, 12)
    this.rightAchievements = this.achievements.slice(12, 24)
  }
}
</script>
<style lang="scss" scoped>
.achievementBoard {
  width: 600px;
  .achievement {
    float: left;
    margin: 5px;
    &Wrap {
      float: left;
      width: 280px;
      margin-right: 20px;
    }
  }
}
</style>
