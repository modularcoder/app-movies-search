<template>
  <div class="TheHeader">Movies Search</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.TheHeader {
  position: sticky;
  top: 0;
  flex: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.692);
  padding: 1.6rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  backdrop-filter: blur(16px);
}
</style>
