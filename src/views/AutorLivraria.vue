<script>
export default {
  data() {
    return {
      autores: [
        {
          nome: "Nome 1",
          autor: "Autor 1",
        },
      ],
      novo_livro: "",
      novo_autor: "",
    };
  },
  methods: {
    add() {
      this.autores.push({
        nome: this.novo_livro,
        autor: this.novo_autor,
      });
    },
    excluir(autor) {
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Autores</h2>
    </div>
    <div class="form_input">
      <input type="text" v-model="novo_livro" @keydown.enter="add" placeholder="Informe o livro">
      <input type="text" v-model="novo_autor" @keydown.enter="add" placeholder="Informe o autor">
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
            <td>{{ autor.nome }}</td>
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