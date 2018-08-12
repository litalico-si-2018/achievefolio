<template lang="pug">
.calendar
  .year
    .week(v-for="i in weekCount")
      .date(v-for="j in 7" :class="{ water: existsWater(i, j) }")
        .date__description {{ calcDate(i, j) }}
</template>
<script>
export default {
  props: ['drops'],
  data () {
    return {
      weekCount: 41
    }
  },
  methods: {
    calcDate (i, j) {
      const daysAgo = (this.weekCount - i + 1) * 7 - j
      const date = new Date(Date.now() - 24 * 3600 * 1000 * daysAgo)
      return `${date.getMonth() + 1}月 ${date.getDate()}日`
    },
    existsWater (i, j) {
      const daysAgo = (this.weekCount - i + 1) * 7 - j
      const date = new Date(Date.now() - 24 * 3600 * 1000 * daysAgo)
      const month = date.getMonth() + 1
      const day = date.getDate()
      let exists = false
      this.drops.forEach(drop => {
        if (month === drop.month && day === drop.date) {
          exists = true
        }
      })
      return exists
    }
  }
}
</script>
<style lang="scss" scoped>
.year {
  width: 150px;
}
.week {
  height: 15px;
  padding-top: -5px;
  margin-bottom: 2px;
}
.date {
  width: 15px;
  height: 15px;
  background-color: #ccc;
  &.water {
    background-color: blue;
  }
  margin: 0 1px;
  float:left;
  position: relative;
  cursor: pointer;
  &__description {
    position: absolute;
    background-color: #37619c;
    top: 15px;
    left: 10px;
    padding: 10px;
    z-index: 1;
    display: none;
    width: 100px;
    text-align: center;
    border-radius: 5px;
    color: white;
  }
  &:hover {
    .date__description {
      display: inline-block;
    }
  }
}
</style>
