<template>
  <div class="app-header">
    <div class="app-header__background"/>
    <h1 class="app-header__title">
      Biblioteca virtual
    </h1>
    <SearchComponent
      class="app-header__search"
    />
  </div>
  <div class="app-content">
    <BookGrid>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </BookGrid>
  </div>
</template>

<script>
import SearchComponent from '../components/SearchInput.vue'
import BookGrid from '../components/BookGrid.vue';
import BookCard from '../components/BookCard.vue';

export default {
  name: 'Home',
  components: {
    SearchComponent,
    BookGrid,
    BookCard,
  },
}
</script>

<style>
.app-header {
  height: 30vh;
  position: relative;
}

.app-header__background {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url('/img/library.jpg');
  background-size: cover;
  /* TODO: check post css features */
  filter: blur(4px);
  transform: scale(1.1);
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

.app-content {
  padding: 75px 25px 0 25px;
}
</style>