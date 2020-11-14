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
      <h2>Versiones</h2>
      <div class="sources__online-read">
        <a class="sources__link center" :href="book?.data?.['book-pdf'].url">
          <img class="sources__icon" src="/img/book.svg" alt="">
          <h3 class="sources__title">Leelo en línea</h3>
        </a>
      </div>
      <div class="sources__audio-book">
        <div class="center sources__header">
          <img class="sources__icon" src="/img/hear.svg" alt="">
          <h3 class="sources__title">Escuchalo en línea</h3>
        </div>
        <div v-html="book?.data?.['book-audio'].html" />
      </div>
      <div class="sources__video">
        <div class="center sources__header">
          <img class="sources__icon" src="/img/see.svg" alt="">
          <h3 class="sources__title">Ve el video</h3>
        </div>
        <div v-html="book?.data?.['book-video'].html" />
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
    console.log('Book: ', book);
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
  height: 100vh;
}

.metainfo__image {
  width: 200px;
}

.metainfo__title {
  padding: 15px;
  text-align: center;
}

.center {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.sources__link {
  text-decoration: none;
  color: var(--black);
}

.sources__icon {
  height: 50px;
  width: 50px;
  margin-right: 15px;
}

.sources__title {
  display: inline-block;
  margin: 0;
  font-size: 1.7em;
}

.sources__header {
  margin-bottom: 20px;
}

.sources__video,
.sources__audio-book {
  display: flex;
  flex-direction: column;
}

.book-page__sources > div {
  margin: 25px;
}
</style>
