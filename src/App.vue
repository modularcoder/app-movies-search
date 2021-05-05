<template>
  <TheHeader />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from './_common/TheHeader/TheHeader.vue'
import HelloWorld from '@/_common/HelloWorld/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    HelloWorld,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
