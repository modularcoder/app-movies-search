<template>
  <nav class="BasePagination">
    <a
      v-for="page in pages"
      :key="page"
      :class="['PaginationItem', value === page && 'is-active']"
      href="#"
      @click="handlePageClick($event, page)"
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
  emits: {
    input(payload: number) {
      return true
    },
  },
  setup(props, { emit }) {
    const { value, total, perPage } = toRefs(props)

    const numPages = computed(() => Math.ceil(total.value / perPage.value))
    const pages = computed(() => {
      const pagesVisible = []
      const lastPageIndex = numPages.value

      for (let i = 1; i <= lastPageIndex; i++) {
        if (i === 1 || i === lastPageIndex || Math.abs(value.value - i) < 5) {
          pagesVisible.push(i)
        }
      }

      return pagesVisible
    })

    const handlePageClick = (e: MouseEvent, val: number) => {
      e.preventDefault()

      emit('input', val)
    }

    return {
      pages,
      numPages,
      handlePageClick,
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
