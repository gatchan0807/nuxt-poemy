<template>
  <div class="poem">
    <span class="posted-date">{{escapedPostedTime}}</span>
    <p v-html="escapedContents" v-if="lineFeedNumber <= 4"></p>
    <p v-html="escapedContents" v-if="lineFeedNumber > 4" :class="{ellipsis: isEllipsis}"></p>
    <button class="detail-link">もっと読む</button>
  </div>
</template>

<script>
  import { escapeContents } from '~/lib/modules/escapeContents'
  import moment from 'moment'

  export default {
    name: 'poem',
    props: {
      contents: String,
      poemId: String,
      timestamp: String,
    },
    computed: {
      lineFeedNumber: function () {
        return this.contents.split('\n').length
      },
      escapedContents: function () {
        return escapeContents(this.contents)
      },
      escapedPostedTime: function () {
        return moment(this.timestamp / 1).format('YYYY/MM/DD HH:mm')
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

<style scoped lang="scss">
  @import "~assets/values";
  @import "~bulma/bulma";

  p {
    max-height: 6rem;
  }

  .poem {
    margin-bottom: 1rem;
    padding: 1.25rem 2.5rem 0.5rem 1.5rem;
    border-radius: $notification-radius;
    border-bottom: 2px $base-color solid;
    background-color: $white;
  }

  .ellipsis {
    height: 7.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  .detail-link {
    padding: 0.4rem 0.4rem 0.4rem 0;
    font-size: 1rem;
    color: $base-color;
  }

  .posted-date {
    display: block;
    width: 100%;
    text-align: right;
    font-size: 0.7rem;
    color: $grey;
  }
</style>
