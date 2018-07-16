<template>
  <div>
    {{id}} /
    <span v-html="escapedContents"></span>
    / {{timestamp}}
  </div>
</template>

<script>
  import axios from 'axios'
  import { escapeContents } from '~/lib/modules/escapeContents'

  export default {
    name: 'poems-id',
    async asyncData({params, error}) {
      const {data} = await axios.get(`http://localhost:3030/poems/${params.id}`)
      return data
    },
    computed: {
      escapedContents: function () {
        return escapeContents(this.contents)
      }
    },
  }
</script>

<style scoped>

</style>
