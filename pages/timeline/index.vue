<template>
  <section class="container">
    <ul>
      <li v-for="poem in poems" v-bind:key="poem.id">
        <p v-html="poem.contents" class="ellipsis"></p>
        <button>もっと読む</button>
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

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
  li {
    height: 8rem;
    border-bottom: 1px solid #7f828b;
  }

  p {
    height: 4.5rem;
    overflow: hidden;
  }

  .ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>
