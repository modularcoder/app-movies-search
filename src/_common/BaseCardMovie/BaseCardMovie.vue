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
      <div class="MovieDetails"></div>
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
  }
}
</style>
