<template>
  <div class="field">
    <textarea class="textarea is-primary" v-model="value" name="post" id="post" @keyup="count"></textarea>
    <span>{{counter}}</span>
    <button @click="submit" class="button is-primary">詩う</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      poems: 'poems/all'
    }),

    name: 'post',
    data() {
      return {
        value: '',
        counter: 0
      }
    },
    methods: {
      submit: function () {
        this.$store.commit('poems/add', {contents: this.value})
        console.log(this.poems)
      },
      count: function () {
        this.counter = this.value.length
      },
    }
  }
</script>

<style scoped>

</style>
