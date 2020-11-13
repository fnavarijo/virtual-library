<template>
  <div class="app-header">
    <div class="app-header__background"/>
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
import SearchComponent from './components/SearchInput.vue'
import BookGrid from './components/BookGrid.vue';
import BookCard from './components/BookCard.vue';

export default {
  name: 'App',
  components: {
    SearchComponent,
    BookGrid,
    BookCard,
  },
}
</script>

<style scoped>
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
  filter: blur(1px);
}

.app-header__search {
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  width: 50%;
}

.app-content {
  padding: 50px 25px 0 25px;
}
</style>