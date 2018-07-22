<template>
  <div class="modal is-active" v-if="detailId !== ''">
    <div class="modal-background" @click="closeDetail"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"></p>
        <button class="delete" aria-label="close" @click="closeDetail"></button>
      </header>
      <section class="modal-card-body">
        <p v-if="detail.contents !== ''" v-html="escapedContents"></p>
        <p v-if="detail.contents === ''" class="is-loading"></p>
      </section>
      <footer class="modal-card-foot">
        <p>
          User Detail
          <button class="button is-primary is-rounded">お気に入りする</button>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { escapeContents } from '@/lib/modules/escapeContents'
  import axios from 'axios'

  export default {
    name: 'DetailModal',
    mounted: async function () {
      let response = await axios.get(`http://localhost:3030/poems/${this.detailId}`)
      this.detail = response.data
    },
    computed: {
      ...mapGetters({
        detailId: 'poems/detail'
      }),
      escapedContents: function () {
        return escapeContents(this.detail.contents)
      }
    },
    data() {
      return {
        detail: {
          contents: ''
        }
      }
    },
    methods: {
      ...mapActions({
        closeDetail: 'poems/closeDetail'
      }),
    },

  }
</script>

<style scoped lang="scss">
  @import "~assets/values";
  @import "~bulma/bulma";

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

  .modal-card {
    border: 2px $base-color solid;
    border-radius: $modal-radius;
    background-color: $white;
  }

  .modal-card-head, .modal-card-foot {
    background-color: $white;
    border: 0;
  }

  .modal-card-head {
    padding-bottom: 0;
  }

  .modal-card-foot {
    border-top: 2px $base-color solid;
  }
</style>
