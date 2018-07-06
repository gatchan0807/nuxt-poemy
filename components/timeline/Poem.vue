<template>
  <div>
    <p v-html="contents" :class="{ellipsis: isEllipsis}"></p>
    <button @click="expand">もっと読む</button>
  </div>
</template>

<script>
  export default {
    name: 'poem',
    props: {
      contents: String,
    },
    methods: {
      expand: function () {
        this.isEllipsis = !this.isEllipsis
        console.log(this.isEllipsis)
      }
    },
    data() {
      return {
        isEllipsis: false
      }
    }
  }
</script>

<style scoped>
  .ellipsis {
    height: 4rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>
