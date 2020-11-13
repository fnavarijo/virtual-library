<template>
  <div class="book-card">
    <img
      class="book-card__cover"
      src="/img/libro.jpg"
      alt="Portada del libro"
    >
    <h3>El principito</h3>
    <div class="book-card__info">
      <span>Carlos Villagran</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.book-card {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  box-shadow: 2px 4px 5px 0px rgba(153,153,153,0.39);
}

.book-card__cover {
  width: 75%;
}
</style>