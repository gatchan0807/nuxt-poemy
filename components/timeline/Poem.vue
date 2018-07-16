<template>
  <div>
    <nuxt-link :to="'/poems/' + poemId">詳細</nuxt-link>
    <p v-html="escapedContents" v-if="lineFeedNumber < 4"></p>
    <p v-html="escapedContents" v-if="lineFeedNumber > 4" :class="{ellipsis: isEllipsis}"></p>
    <button v-if="lineFeedNumber > 4" @click="expand">
      <span v-if="isEllipsis">もっと読む</span>
      <span v-if="!isEllipsis">折りたたむ</span>
    </button>
  </div>
</template>

<script>
  import { escapeContents } from '~/lib/modules/escapeContents'

  export default {
    name: 'poem',
    props: {
      contents: String,
      poemId: String,
    },
    computed: {
      lineFeedNumber: function () {
        return this.contents.split('\n').length
      },
      escapedContents: function () {
        return escapeContents(this.contents)
      }
    },
    methods: {
      expand: function () {
        this.isEllipsis = !this.isEllipsis
      }
    },
    data() {
      return {
        isEllipsis: true
      }
    }
  }
</script>

<style scoped>
  .ellipsis {
    height: 4.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>
