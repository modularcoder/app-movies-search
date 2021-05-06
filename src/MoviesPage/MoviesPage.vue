<template>
  <div class="MoviesPage">
    <TheHeader />
    <BaseContainer>
      <div class="MoviesListContainer">
        <BaseCard v-for="item in movies" :key="item" />
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import BaseCard from '@/_common/BaseCard/BaseCard.vue'
import BaseContainer from '@/_common/BaseContainer/BaseContainer.vue'
import TheHeader from '@/_common/TheHeader/TheHeader.vue'
// import TheInspector from '@/_common/TheInspector/TheInspector.vue'

const movies = [1, 2, 3, 5, 6, 7, 8, 9, 10]
</script>

<style lang="scss" scoped>
.MoviesPage {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.MoviesListContainer {
  padding: 2rem 0;
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: auto auto auto;
  flex: 1;
}
</style>
