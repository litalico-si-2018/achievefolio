<template lang="pug">
.calendar
  .year
    .week(v-for="i in 26")
      .date(v-for="j in 7")
</template>
<script>
export default {
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
  margin: 0 1px;
  float:left;
}
</style>
