<template>
  <header class="BaseCardHeader">
    <slot></slot>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.BaseCardHeader {
  border-radius: 1rem 1rem 0 0;
  padding: 0.8rem 1rem;
  background-color: #efefef;
  font-size: 0.9em;
}
</style>
