<template>
  <BaseCard class="BaseCardMovie">
    <BaseCardHeader class="MovieHeader">
      {{ movie.title }}
    </BaseCardHeader>
    <BaseCardBody class="MovieBody">
      <div
        class="MovieThumbnail"
        :style="{ backgroundImage: `url(${movie.img})` }"
      ></div>
      <div class="MovieDetails">
        <div class="MovieDetailSection">
          <label class="MovieDetailLabel"> Actors: </label>

          <div class="MovieDetailContent">
            <span v-for="genre in movie.genres" :key="genre">
              {{ genre }}
            </span>
          </div>
        </div>

        <div class="MovieDetailSection">
          <label class="MovieDetailLabel"> Genres: </label>

          <div class="MovieDetailContent">
            <span v-for="actor in movie.actors" :key="actor">
              {{ actor }}
            </span>
          </div>
        </div>
      </div>
    </BaseCardBody>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Movie } from '@/_types/Movie'

import { BaseCard, BaseCardHeader, BaseCardBody } from '../BaseCard/'

export default defineComponent({
  components: {
    BaseCard,
    BaseCardHeader,
    BaseCardBody,
  },
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
  setup(props) {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.BaseCardMovie {
  .MovieHeader {
    font-weight: bold;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }

  .MovieBody {
    display: flex;
  }

  .MovieThumbnail {
    width: 150px;
    height: 120px;
    border-radius: 0.5rem;
    background-size: cover;
    background-position: center;
    background-color: #ccc;
  }

  .MovieDetails {
    padding: 0 1rem;
  }

  .MovieDetailLabel {
    font-weight: bold;
    font-size: 0.8em;
  }

  .MovieDetailSection {
    margin-bottom: 1rem;
  }

  .MovieDetailContent {
    word-break: break-all;
    font-size: 0.9em;
  }
}
</style>
