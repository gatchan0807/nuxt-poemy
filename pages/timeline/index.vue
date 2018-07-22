<template>
  <section class="section">
    <ul class="container">
      <li v-for="poem in poems" v-bind:key="poem.id">
        <poem :contents="poem.contents" :poemId="poem.id" :timestamp="poem.timestamp"></poem>
      </li>
    </ul>
    <detail-modal v-if="detailId !== ''"></detail-modal>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Poem from '~/components/poem/Poem.vue'
  import DetailModal from '~/components/poem/DetailModal'

  export default {
    name: 'index',
    components: {
      Poem,
      DetailModal
    },
    computed: {
      ...mapGetters({
        poems: 'poems/all',
        detailId: 'poems/detail'
      }),
    },
    mounted: function () {
      this.getPoems()
    },
    data() {
      return {}
    },
    methods: {
      ...mapActions({
        getPoems: 'poems/list',
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
