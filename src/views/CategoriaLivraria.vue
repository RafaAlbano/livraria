<script>
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return {
      categoria: {},
      categorias: [],
      nome: []

    };
  },
  async created() {
    this.categorias = await categoriasApi.buscarTodosAsCategorias();
  },
  methods: {
    async add() {
      if (this.categoria.id) {
        await categoriasApi.atualizarCategoria(this.categoria);
      } else {
        await categoriasApi.adicionarCategoria(this.categoria);
      }
      this.categorias = await categoriasApi.buscarTodosAsCategorias();
      this.categoria = {};
    },
    async excluir(categoria) {
      await categoriasApi.excluirCategoria(categoria.id);
      this.categorias = await categoriasApi.buscarTodosAsCategorias();
    },
    editar(categoria) {
      Object.assign(this.categoria, categoria);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Categorias</h2>
    </div>
    <div class="form_input">
      <input type="text" placeholder="Categoria" v-model="categoria.nome" @keydown.enter="add" />
      <button @click="add">add</button>
    </div>
    <div class="list_categorias"></div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOME</th>
          <th>AÇÕES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria in categorias" :key="categoria.id">
          <td>{{ categoria.id }}</td>
          <td>{{ categoria.nome }}</td>
          <td>
            <button @click="excluir(categoria)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
