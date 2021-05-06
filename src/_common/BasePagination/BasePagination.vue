<template>
  <nav class="BasePagination">
    <a
      v-for="page in pages"
      :key="page"
      :class="['PaginationItem', value === page && 'is-active']"
      href="#"
      >{{ page }}</a
    >
  </nav>
</template>

<script lang="ts">
import { ref, toRefs, defineComponent, PropType, computed } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Number as PropType<number>,
      required: true,
    },
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
    const { total, perPage } = toRefs(props)

    const numPages = computed(() => Math.ceil(total.value / perPage.value))
    const pages = computed(() => {
      return new Array(numPages.value)
        .fill(null)
        .map((item, index) => index + 1)
    })

    return {
      pages,
      numPages,
    }
  },
})
</script>

<style lang="scss" scoped>
.BasePagination {
  display: inline-flex;
  text-align: center;

  .PaginationItem {
    display: inline-flex;
    padding: 0.5em;
    background: #fff;
    border-radius: 0.3em;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin: 0.3em;
    min-width: 35px;
    font-weight: bold;

    &.is-active {
      color: #000;
      pointer-events: none;
    }
  }
}
</style>
