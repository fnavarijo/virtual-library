<template>
  <div class="book-page">
    <RouterLink to="/">
      <img class="book-page__back" src="/img/back.svg" alt="">
    </RouterLink>
    <div class="book-page__metainfo">
      <h1 class="metainfo__title">{{ book?.data?.['book-title'] || '' }}</h1>
      <img class="metainfo__image" :src="book?.data?.['book-cover'].url || ''" alt="">
    </div>
    <div class="book-page__sources">
      <h2>Recursos</h2>
      <div class="sources__online-read">
        <h3>Leelo en línea</h3>
      </div>
      <div class="sources__audio-book">
        <h3>Escuchalo en línea</h3>
      </div>
      <div class="sources__video">
        <h3>Ve el video</h3>
      </div>
    </div>
  </div>
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

<style scoped>
.book-page {
  display: flex;
  position: relative;
}

.book-page__back {
  position: absolute;
  top: 10px;
  left: 10px;
  height: 50px;
  width: 50px;
}

.book-page__metainfo {
  background-color: #f3f3f3;
  height: 100vh;
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.book-page__sources {
  padding: 30px;
}

.metainfo__image {
  width: 200px;
}

.metainfo__title {
  padding: 15px;
  text-align: center;
}
</style>
