<template>
  <header>
    <div class="menuesquerdo">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <span>|</span>
      <span><RouterLink to="/livros">Livro</RouterLink></span>
      <span>|</span>
      <span><RouterLink to="/categorias">Categoria</RouterLink></span>
      <span>|</span>
      <span><RouterLink to="/autores">Autor</RouterLink></span>
      <span>|</span>
      <span><RouterLink to="/editoras">Editora</RouterLink></span>
    </div>
  </header>
</template>
<style>
header {
  height: 9%;
  width: 100%;
  background-color: rgb(123, 169, 209);
  color: rgb(252, 244, 244);
  font-size: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  font-family: 'Times New Roman', Times, serif;
}
header span {
  padding: 0 20px;
}
</style>
