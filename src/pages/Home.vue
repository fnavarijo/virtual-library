<template>
  <div class="app-header">
    <div class="app-header__background"/>
    <a href="https://drive.google.com/drive/folders/1VHzmY4WobAUOJOThJUGGq38x6xqrfyNn?usp=sharing" target="_blank" class="app-header__resources">
      <img class="app-header__resources-icon" src="/img/gear.svg" alt="">
      <span class="app-header__resources-text">Recursos</span>
    </a>
    <h1 class="app-header__title">
      Leamos juntos
    </h1>
    <SearchComponent
      class="app-header__search"
      @find="handleBooksSearch"
    />
  </div>
  <div class="app-content">
    <BookGrid>
      <BookCard
        v-for="(book, index) in books"
        :key="index"
        v-bind="book"
      />
    </BookGrid>
  </div>
</template>

<script>
import SearchComponent from '../components/SearchInput.vue'
import BookGrid from '../components/BookGrid.vue';
import BookCard from '../components/BookCard.vue';

import { getBooks } from '../api/book/getBooks';
import { getBooksByName } from '../api/book/getBooksByName';

export default {
  name: 'Home',
  components: {
    SearchComponent,
    BookGrid,
    BookCard,
  },
  data () {
    return {
      books: [],
    };
  },
  async mounted () {
    await this.findAllBooks();
  },
  methods: {
    async findBooks (bookToFind) {
      console.log('BookToFind', bookToFind);
      const books = await getBooksByName(bookToFind);
      const transformedBooks = books.results.map(({ data, id }) => ({
        title: data['book-title'],
        author: data['book-author'],
        coverImage: data['book-cover'].url,
        id,
      }));
      this.books = transformedBooks;
    },
    async findAllBooks () {
      const books = await getBooks();
      const transformedBooks = books.map(({ data, id }) => ({
        title: data['book-title'],
        author: data['book-author'],
        coverImage: data['book-cover'].url,
        id,
      }));
      this.books = transformedBooks;
    },
    async handleBooksSearch (bookToFind) {
      /* TODO: not my proudtest conditional */
      const searchMethod = bookToFind ? this.findBooks: this.findAllBooks;
      await searchMethod(bookToFind);
    }
  }
}
</script>

<style>
.app-header {
  height: 40vh;
  position: relative;
}

.app-header__background {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url('/img/library.jpg');
  background-size: cover;
}

.app-header__background::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  /* TODO: check post css features */
  backdrop-filter: blur(5px);
}

.app-header__title,
.app-header__search {
  position: absolute;
}

.app-header__search {
  bottom: -40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  width: 50%;
}

.app-header__title {
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  color: var(--white);
  font-size: 4em;
  transform: translateY(-50%);
}

.app-header__resources {
  position: absolute;
  top: 1.25rem;
  right: 1.5625rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.625rem;
  text-decoration: none;
}

.app-header__resources-text {
  color: #000;
}

.app-header__resources-icon {
  height: 3.125rem;
  width: 3.125rem;
  margin-right: 0.625rem;
}

.app-content {
  padding: 75px 25px 0 25px;
}

/* TODO: reuse media queries */
@media screen and (max-width: 1023px) {
  .app-header {
    height: 60vh;
  }

  .app-header__title {
    font-size: 2.5em;
    /* Not liking this is here */
    padding: 15px;
  }
}
</style>