<template>
  <transition name="menu-in">
    <nav :class="{'is-open': isOpen, 'is-close': !isOpen}">
      <div class="nav-main">
        side bar.
        {{isOpen}}
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
    margin-top: 4rem;
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
</style>
