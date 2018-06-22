<template>
  <div class="container">
    <h1 class="title" v-if="error.statusCode === 404">
      ページが見つかりません
    </h1>
    <h1 class="title" v-else>
      エラーが発生しました
    </h1>
    <nuxt-link to="/">ホーム</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>

<style scoped>
  .container {
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

</style>
