<template>
  <div class="App">
    <MoviesPage />
  </div>
</template>

<script setup lang="ts">
import MoviesPage from './MoviesPage/MoviesPage.vue'
</script>

<style lang="scss">
.App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #edeeae;
  background: linear-gradient(140deg, #edeeae 0%, rgba(131, 166, 208, 1) 100%);
  background-attachment: fixed;
  font-size: 16px;
}

* {
  box-sizing: border-box;
}

a {
  color: $colorPrimary;

  &:hover {
    color: $colorPrimaryDark;
  }
}
</style>
