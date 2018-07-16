<template>
  <section class="container">
    <ul>
      <li v-for="poem in poems" v-bind:key="poem.id">
        <poem :contents="poem.contents" :poemId="poem.id"></poem>
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Poem from '~/components/timeline/Poem.vue'

  export default {
    name: 'index',
    components: {
      Poem
    },
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
      }),
    },
  }
</script>

<style scoped>
  li {
    border-bottom: 1px solid #7f828b;
  }

  p {
    height: 4.5rem;
    overflow: hidden;
  }
</style>
