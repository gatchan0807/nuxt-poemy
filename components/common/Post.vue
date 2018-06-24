<template>
  <div>
    <textarea v-model="value" name="post" id="post" cols="30" rows="10" @keyup="count"></textarea>
    <span>{{counter}}</span>
    <button @click="submit">詩う</button>
  </div>
</template>

<script>
  export default {
    name: 'post',
    data() {
      return {
        value: '',
        counter: 0
      }
    },
    methods: {
      submit: function () {
        console.log(this.value)
      },
      count: function () {
        this.counter = this.value.length
      }
    }
  }
</script>

<style scoped>

</style>
