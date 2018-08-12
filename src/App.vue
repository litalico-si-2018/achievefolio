<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  background-color: #fafafa;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}
a {
  color: inherit;
}
.nav {
  width: 250px;
  float: left;
  height: 100vh;
  position: fixed;
}
.content {
  margin-left: 300px;
  width: calc(100% - 300px);
  float: left;
  padding: 50px;
}
</style>
