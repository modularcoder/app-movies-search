<template>
  <div class="MoviesPage">
    <TheHeader @inputSearch="handleSearchChange" />
    <BaseContainer>
      <!-- Movies list -->
      <div v-if="movies.length > 0" class="MoviesListContainer">
        <BaseCardMovie
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
          :highlight="search"
        />
      </div>
      <!-- Pagination -->
      <div v-if="itemsCount > itemsPerPage" class="MoviesPaginationContainer">
        <BasePagination
          :value="page"
          :total="itemsCount"
          :per-page="itemsPerPage"
          @input="handlePageChange"
        />
      </div>
      <!-- Not Found  -->
      <div
        v-if="status !== 'pending' && !movies.length"
        class="MoviesNotFoundContainer"
      >
        couldn't find any movie by search "{{ search }}" :(
      </div>
    </BaseContainer>
  </div>
</template>

<script lang="ts">
import { ref, watchEffect, defineComponent } from 'vue'
import BaseCardMovie from '@/_common/BaseCardMovie/BaseCardMovie.vue'
import BaseContainer from '@/_common/BaseContainer/BaseContainer.vue'
import BasePagination from '@/_common/BasePagination/BasePagination.vue'
import TheHeader from '@/_common/TheHeader/TheHeader.vue'

import { Movie } from '@/_types/Movie'

import api from '@/_api/'

export default defineComponent({
  components: {
    BaseCardMovie,
    BaseContainer,
    BasePagination,
    TheHeader,
  },
  setup() {
    const status = ref('pending')
    const statusMessage = ref('')

    const page = ref(1)
    const search = ref('')
    const searchBy = ref('everything')
    const movies = ref<Movie[]>([])
    const itemsPerPage = ref(9)
    const itemsCount = ref(0)

    const handlePageChange = (newPage: number) => {
      page.value = newPage
    }

    const handleSearchChange = (searchValue: string) => {
      search.value = searchValue
      page.value = 1
    }

    const requestMovies = async () => {
      status.value = 'pending'

      try {
        const { movies: moviesRes, count } = await api.movies.getList({
          limit: itemsPerPage.value,
          offset: itemsPerPage.value * (page.value - 1),
          search: search.value,
          searchBy: searchBy.value,
        })

        movies.value = moviesRes
        itemsCount.value = count

        status.value = 'idle'
      } catch (err) {
        status.value = 'error'
        statusMessage.value = err.message
      }
    }

    watchEffect(() => requestMovies())

    return {
      status,
      statusMessage,
      movies,
      itemsPerPage,
      itemsCount,
      page,
      search,
      handlePageChange,
      handleSearchChange,
    }
  },
})
</script>

<style lang="scss" scoped>
.MoviesPage {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
}
.MoviesListContainer {
  padding: 2rem 0;
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  flex: 1;
}

.MoviesPaginationContainer {
  display: flex;
  width: 100%;
  justify-content: center;
}

.MoviesNotFoundContainer {
  min-height: 500px;
  color: #2b3717;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
