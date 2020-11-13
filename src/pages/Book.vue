<template>
  <h1>{{ book?.data?.['book-title'] || '' }}</h1>
</template>

<script>
import { getSingleBook } from '../api/book/getSingleBook';

export default {
  name: 'Book',
  data () {
    return {
      book: {
        type: Object,
      }
    };
  },
  async mounted () {
    const { id } = this.$route.params;
    const book = await getSingleBook(id);
    this.book = book;
  }
}
</script>
