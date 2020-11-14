<template>
  <div class="book-card">
    <RouterLink :to="`/book/${id}`" class="book-card__link" >
      <img
        class="book-card__cover"
        :src="coverImage"
        alt="Portada del libro"
      >
        <h3>{{ title }}</h3>
      <div class="book-card__info">
        <span>{{ author }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>
.book-card {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  /* box-shadow: 2px 4px 5px 0px rgba(153,153,153,0.39); */
}

.book-card__cover {
  width: 75%;
}

.book-card__link {
  text-decoration: none;
  color: var(--black);
}
</style>