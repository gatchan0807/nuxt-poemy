<template>
  <section class="section">
    <ul class="container">
      <li v-for="poem in poems" v-bind:key="poem.id">
        <poem :contents="poem.contents" :poemId="poem.id" :timestamp="poem.timestamp"></poem>
      </li>
    </ul>
    <div class="modal is-active" v-if="detailId !== ''">
      <div class="modal-background"></div>
      <div class="modal-card">
        <div class="modal-card-head">
          <button class="delete" @click="closeDetail"></button>
        </div>
        <div class="modal-card-body">
          {{detailId}}
        </div>
      </div>
    </div>
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
        closeDetail: 'poems/closeDetail'
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
