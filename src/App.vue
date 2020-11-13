<template>
  <div class="header">
    <SearchComponent class="header__search" />
  </div>
  <div class="content">
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
.header {
  background-color: blue;
  height: 20vh;
  position: relative;
}

.header__search {
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
}

.content {
  background-color: #f3f3f3;
  padding-top: 50px;
}
</style>