<template>
  <div class="BaseCard">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.BaseCard {
  width: 100%;
  min-height: 200px;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background: #fff;
}
</style>
