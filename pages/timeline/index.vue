<template>
  <section class="section">
    <ul class="container">
      <li v-for="poem in poems" v-bind:key="poem.id">
        <poem :contents="poem.contents" :poemId="poem.id" :timestamp="poem.timestamp"></poem>
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Poem from '~/components/poem/Poem.vue'

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

<style scoped lang="scss">
  @import "~assets/values";

  section {
    background-color: lighten($base-color, 55%);
  }
</style>
