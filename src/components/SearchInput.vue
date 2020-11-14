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
import _ from 'lodash';
import { ref } from '@vue/reactivity';

export default {
  /* TODO: check w composition */
  // setup () {
  //   const bookToFind = ref('');

  //   return {
  //     bookToFind,
  //   };
  // },
  data () {
    return {
      bookToFind: '',
    };
  },
  methods: {
    emitFindEvent: _.debounce(function (newBook) {
      this.$emit('find', newBook);
    }, 500, {
      leading: true,
    }),
  },
  watch: {
    bookToFind(newBook) {
      this.emitFindEvent(newBook);
    },
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
  border: none;
  box-shadow: 1px 3px 5px 0px rgba(0,0,0,0.14);
}
</style>