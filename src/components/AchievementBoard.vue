<template lang="pug">
.achievementBoard
  .achievementWrap
    Achievement.achievement(v-for="(achievement, i) in leftAchievements"
      :achievement="achievement" :key="achievement.id" :achieved="i < 3 || (4 < i && i <= 9)")
  .achievementWrap
    Achievement.achievement(v-for="achievement in middleAchievements"
      :achievement="achievement" :key="achievement.id")
  .achievementWrap
    Achievement.achievement(v-for="achievement in middleAchievements"
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
      middleAchievements: [],
      rightAchievements: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.leftAchievements = this.achievements.slice(0, 12)
      this.middleAchievements = this.achievements.slice(12, 24)
      this.rightAchievements = this.achievements.slice(24, 36)
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
.achievementBoard {
  width: calc(100% - 150px);
  .achievement {
    float: left;
    margin: 5px;
    &Wrap {
      float: left;
      width: 250px;
      &:not(last-child) {
        margin-right: 20px;
      }
    }
  }
}
</style>
