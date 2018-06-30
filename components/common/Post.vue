<template>
  <div class="field">
    <textarea class="textarea is-primary" v-model="value" name="post" id="post" @keyup="count"></textarea>
    <span>{{counter}}</span>
    <button id="poem-post" @click="submit" class="button is-primary">詩う</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as sugar from 'sugar'

  export default {
    name: 'post',
    computed: mapGetters({
      poems: 'poems/all'
    }),
    data() {
      return {
        value: '',
        counter: 0
      }
    },
    methods: {
      submit: function () {
        if (sugar.String.isBlank(this.value)) {
          return
        }

        document.querySelector('#poem-post').classList.add('is-loading')

        this.$store.dispatch('poems/add', {contents: this.value})
          .then(data => {
            document.querySelector('#poem-post').classList.remove('is-loading')

            this.value = ''
            this.counter = 0
          })
      },
      count: function () {
        this.counter = this.value.length
      },
    }
  }
</script>

<style scoped>

</style>
