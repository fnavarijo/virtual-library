<template>
  <div class="book-grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BookGrid'
}
</script>

<style>
.book-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 15px;
  column-gap: 15px;
}
</style>