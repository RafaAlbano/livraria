<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "51fc8c6f-cf7d-43c0-baca-635197169ef9",
          nome: "Os 7 maridos de Evilyn Hugo",
          categoria: "Ficção histórica, romance",
          autor: "Taylor Jenkins Reid",
          editora: "Paralela"
        },
      ],
      novo_livro: "",
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>LIVROS</h2>
    </div>
    <div class="form_input">
      <input type="text" placeholder="Informe nome" />
      <input type="text" placeholder="Informe categoria" />
      <input type="text" placeholder="Informe autor" />
      <input type="text" placeholder="Informe editora" />
      <button>Add</button>
    </div>
    <div class="list_livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>CATEGORIA</th>
            <th>AUTOR</th>
            <th>EDITORA</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.nome }}</td>
            <td>{{ livro.categoria }}</td>
            <td>{{ livro.autor }}</td>
            <td>{{ livro.editora }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
