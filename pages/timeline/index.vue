<template>
  <section class="container">
    <ul>
      <li v-for="poem in poems" v-bind:key="poem.id">
        {{poem.id}} / {{poem.contents}} / {{poem.timestamp}}
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        poems: 'poems/all'
      })
    },
    mounted: function () {
      console.log(this.poems)
    },
    name: 'index',
    data() {
    }

  }
</script>

<style scoped>

</style>
