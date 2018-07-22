<template>
  <section class="section">
    <div class="container" v-if="poems.length <= 0">
      <div class="is-loading"></div>
    </div>
    <ul class="container" v-if="poems.length > 0">
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
  @import "~bulma/bulma";

  section {
    background-color: lighten($base-color, 55%);
  }

  .is-loading {
    padding: 6rem;
    position: relative;
    pointer-events: none;
    &:after {
      @include loader;
      position: absolute;
      top: calc(50% - 1.5rem);
      left: calc(50% - 1.5rem);
      width: 3rem;
      height: 3rem;
      border-width: 0.25em;
    }
  }
</style>
