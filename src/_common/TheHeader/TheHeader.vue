<template>
  <div class="TheHeader">
    <BaseContainer class="HeaderContainer">
      <BaseLogo class="HeaderLogo" />
      <BaseInput
        class="HeaderSearch"
        placeholder="Search movies..."
        name="search"
        @input="handleSearchUpdate"
      />
    </BaseContainer>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

import BaseLogo from '../BaseLogo/BaseLogo.vue'
import BaseContainer from '../BaseContainer/BaseContainer.vue'
import BaseInput from '../BaseInput/BaseInput.vue'

export default defineComponent({
  components: {
    BaseLogo,
    BaseContainer,
    BaseInput,
  },
  props: {},
  emits: ['inputSearch'],
  setup(props, { emit }) {
    let headerSearchDebounceTimeout: ReturnType<typeof setTimeout>

    const handleSearchUpdate = (e: any) => {
      if (headerSearchDebounceTimeout) {
        clearTimeout(headerSearchDebounceTimeout)
      }

      headerSearchDebounceTimeout = setTimeout(() => {
        emit('inputSearch', e.target.value)
      }, 500)
    }

    return {
      handleSearchUpdate,
    }
  },
})
</script>

<style scoped lang="scss">
.TheHeader {
  position: sticky;
  top: 0;
  flex: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.692);

  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  backdrop-filter: blur(16px);
  display: flex;

  .HeaderContainer {
    padding: 1.6rem 0;
    display: flex;
    align-items: center;
  }

  .HeaderLogo {
    margin-right: 3rem;
    flex: 0;
  }

  .HeaderSearch {
    flex: 1;
  }
}
</style>
