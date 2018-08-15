<template>
  <transition name="menu-in">
    <nav :class="{'is-open': isOpen, 'is-close': !isOpen}">
      <div class="nav-main menu">

        <p class="menu-label">
          あなたの・・・
        </p>
        <ul class="menu-list">
          <li>
            <nuxt-link to="/">お気に入りのピジョンさん</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">これまでの軌跡</nuxt-link>
          </li>
        </ul>

        <p class="menu-label">
          また来てね・・・
        </p>
        <ul class="menu-list">
          <li>
            <nuxt-link to="/">ログアウトする</nuxt-link>
          </li>
        </ul>

        <p class="menu-label">
          Poemyを続けるために・・・
        </p>
        <ul class="menu-list">
          <li>
            <nuxt-link to="/">サポートのお願い</nuxt-link>
          </li>
        </ul>
        <div class="ad">
          広告枠
        </div>
      </div>
      <div class="nav-overlay" @click="close"></div>
    </nav>
  </transition>
</template>

<script>
  export default {
    name: 'side-bar',
    props: {
      isOpen: Boolean
    },
    methods: {
      close: function () {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  nav {
    position: fixed;
    left: 0;
    height: 100vh;
    width: 80vw;
    background-color: white;
    z-index: 10;
  }

  .nav-main {
    margin: 5rem 1rem 0;
  }

  .nav-overlay {
    position: fixed;
    right: 0;
    top: 0;
    width: calc(20vw - 1px);
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .is-open {
    display: block;
  }

  .is-close {
    display: none;
  }

  .ad {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    width: 90%;
    height: 200px;
    background-color: gray;
    color: white;
  }
</style>
