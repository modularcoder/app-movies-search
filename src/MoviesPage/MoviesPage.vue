<template>
  <div class="MoviesPage">
    <TheHeader @inputSearch="requestMovies" />
    <BaseContainer>
      <div class="MoviesListContainer">
        <BaseCardMovie v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>

      <BasePagination :total="itemsCount" :per-page="itemsPerPage" />
    </BaseContainer>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import BaseCardMovie from '@/_common/BaseCardMovie/BaseCardMovie.vue'
import BaseContainer from '@/_common/BaseContainer/BaseContainer.vue'
import BasePagination from '@/_common/BasePagination/BasePagination.vue'
import TheHeader from '@/_common/TheHeader/TheHeader.vue'

import api from '@/_api/'

export default defineComponent({
  components: {
    BaseCardMovie,
    BaseContainer,
    BasePagination,
    TheHeader,
  },
  setup() {
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

    return {
      movies,
      requestMovies,
      itemsPerPage,
      itemsCount,
      page,
    }
  },
})
</script>

<style lang="scss" scoped>
.MoviesPage {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.MoviesListContainer {
  padding: 2rem 0 4rem;
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  flex: 1;
}
</style>
