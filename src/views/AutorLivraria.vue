<script>
import AutoresApi from '../api/autores';
const autoresApi = new AutoresApi();
export default {
  data() {
    return {
      livro: {},
      autor: {},
      autores: [],
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async add() {
      if (this.autor.id) {
        await autoresApi.atualizarAutor(this.autor);
      } else {
        await autoresApi.adicionarAutor(this.autor);
      }
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.autor = {}; autoror(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Autores</h2>
    </div>
    <div class="form_input">
      <input type="text" v-model="autor.livro" @keydown.enter="add" placeholder="Informe o livro">
      <input type="text" v-model="autor.autor" @keydown.enter="add" placeholder="Informe o autor">
      <button @click="add">Add</button>
    </div>
    <div class="list_autores">
      <table>
        <thead>
          <tr>
            <th>LIVRO</th>
            <th>AUTOR</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>{{ autor.livro }}</td>
            <td>{{ autor.autor }}</td>
            <td>
              <button @click="excluir(autor)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>