<template>
  <div>
    {{id}} /
    <span v-html="escapedContents"></span>
    / {{timestamp}}
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'poems-id',
    computed: {
      escapedContents: function () {
        let contents = this.contents

        contents = contents.replace(/ /g, '&nbsp;')
        contents = contents.replace(/</g, '&lt;')
        contents = contents.replace(/>/g, '&gt;')
        contents = contents.replace(/\n/g, '<br>')

        return contents
      }
    },
    async asyncData({params, error}) {
      const {data} = await axios.get(`http://localhost:3030/poems/${params.id}`)
      return data
    },
  }
</script>

<style scoped>

</style>
