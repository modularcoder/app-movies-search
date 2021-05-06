<template>
  <div class="TheHeader">
    <BaseContainer class="HeaderContainer">
      <BaseLogo class="HeaderLogo" />
      <BaseInput class="HeaderSearch" placeholder="Search movies..." />
    </BaseContainer>
  </div>
</template>

<script setup lang="ts">
import BaseLogo from '../BaseLogo/BaseLogo.vue'
import BaseContainer from '../BaseContainer/BaseContainer.vue'
import BaseInput from '../BaseInput/BaseInput.vue'
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
