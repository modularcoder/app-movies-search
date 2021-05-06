<template>
  <div class="BasePagination"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    total: {
      type: Number as PropType<number>,
      required: true,
    },
    perPage: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  setup(props, { emit }) {
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
