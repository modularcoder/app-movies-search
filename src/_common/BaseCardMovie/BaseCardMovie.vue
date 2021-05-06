<template>
  <BaseCard class="BaseCardMovie">
    <BaseCardHeader class="MovieHeader">
      {{ movie.title }}
    </BaseCardHeader>
    <BaseCardBody class="MovieBody"></BaseCardBody>
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
}
</style>
