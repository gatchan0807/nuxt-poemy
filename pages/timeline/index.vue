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
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'index',
    computed: mapGetters({
      poems: 'poems/all'
    }),
    mounted: function () {
      this.getPoems()
    },
    data() {
      return {}
    },
    methods: {
      ...mapActions({
        getPoems: 'poems/list'
      })
    },
  }
</script>

<style scoped>

</style>
