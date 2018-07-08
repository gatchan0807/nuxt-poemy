<template>
  <div>
    <p v-html="escapedContents" v-if="lineFeedNumber < 4"></p>
    <p v-html="escapedContents" v-if="lineFeedNumber > 4" :class="{ellipsis: isEllipsis}"></p>
    <button v-if="lineFeedNumber > 4" @click="expand">
      <span v-if="isEllipsis">もっと読む</span>
      <span v-if="!isEllipsis">折りたたむ</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'poem',
    props: {
      contents: String,
    },
    computed: {
      lineFeedNumber: function () {
        return this.contents.split('\n').length
      },
      escapedContents: function () {
        let contents = this.contents

        contents = contents.replace(/ /g, '&nbsp;')
        contents = contents.replace(/</g, '&lt;')
        contents = contents.replace(/>/g, '&gt;')
        contents = contents.replace(/\n/g, '<br>')

        return contents
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
