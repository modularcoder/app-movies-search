<template>
  <div class="MoviesPage">
    <TheHeader @inputSearch="requestMovies" />
    <BaseContainer>
      <div class="MoviesListContainer">
        <BaseCard v-for="movie in movies" :key="movie.id">
          {{ movie.name }}
        </BaseCard>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from '@/_common/BaseCard/BaseCard.vue'
import BaseContainer from '@/_common/BaseContainer/BaseContainer.vue'
import TheHeader from '@/_common/TheHeader/TheHeader.vue'

import api from '@/_api/'

const page = ref(1)
const search = ref('')
const movies = ref()
const itemsPerPage = ref(9)
const itemsCount = ref(0)

const requestMovies = async () => {
  const { movies: moviesRes, count } = await api.movies.getList({
    limit: itemsPerPage.value,
    offset: itemsPerPage.value * (page.value - 1),
    search: search.value,
  })

  movies.value = moviesRes
  itemsCount.value = count
}

requestMovies()
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
