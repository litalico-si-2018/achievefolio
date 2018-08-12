<template lang="pug">
.postForm
  textarea.postForm__textarea(placeholder="今日学んだ新しいことは？" v-model="text")
  button.postForm__button(@click="submit") 送信
</template>
<script>
import api from '@/utils/Api'
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    submit () {
      api('POST',
        `${process.env.API_ENDPOINT}/posts`,
        {
          body: this.text
        }
      ).then(respones => {
        // console.log(respones.data)
      })
    }
  }
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
