<template>
  <form action="">
    <input type="text" v-model="bookToFind">
  </form>
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