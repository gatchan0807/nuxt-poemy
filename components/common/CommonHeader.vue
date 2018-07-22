<template>
  <nav class="navbar is-white">
    <div class="navbar-brand">
      <div class="navbar-end">
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="is-logo navbar-item">
        <nuxt-link to="/">
          <img src="/logo.png" alt="">
        </nuxt-link>
      </div>

      <div class="navbar-item">
        <p class="control">
          <a class="button is-primary" href="">
            <span class="icon">
              <i class="fas fa-download"></i>
            </span>
          </a>
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'common-header',
  }
</script>

<style scoped lang="scss">
  .navbar, .navbar-burger, .navbar-end, .navbar-item {
    height: 4rem;
  }

  .navbar-burger {
    width: 4rem;
  }

  .is-logo {
    flex-grow: 1;
    flex-direction: column;
    max-height: 4rem;
    & a {
      display: flex;
      justify-content: center;
      height: 3rem;
      max-width: 3rem;
    }
    & img {
      max-height: 3rem;
      max-width: 3rem;
    }
  }
</style>
