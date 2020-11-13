<template>
  <div class="search-input">
    <form action="">
      <input
        v-model="bookToFind"
        class="search-input__input"
        type="text"
      >
    </form>
    <img
      class="search-input__icon"
      src="/img/search.svg"
      alt="Buscar el libro"
    >
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup () {
    const bookToFind = ref('');

    return {
      bookToFind,
    };
  }
}
</script>

<style scoped>
.search-input__icon {
  position: absolute;
  right: 15px;
  top: 5px;
  height: 45px;
  width: 45px;
}

.search-input__input {
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  font-size: 1.2em;
}
</style>