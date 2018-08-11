<template lang="pug">
.postForm
  textarea.postForm__textarea(placeholder="今日学んだ新しいことは？")
  button.postForm__button 送信
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.postForm {
  &__textarea {
    border: none;
    display: block;
    width: 100%;
    height: 150px;
    padding: 12px;
    font-size: 16px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    &:focus {
      outline: none;
      border-color: #37619c;
    }
  }
  &__button {
    cursor: pointer;
    background-color: #37619c;
    color: white;
    border-radius: 5px;
    width: 80px;
    height: 35px;
    padding: 5px;
    text-align: center;
    float: right;
    font-size: 14px;
    &:hover {
      background-color: #6084b7;
    }
  }
}
</style>
