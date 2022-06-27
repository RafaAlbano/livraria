<script>
export default {
  data() {
    return {
      livros: [
        {
          nome: "Os 7 maridos de Evilyn Hugo",
          categoria: "Ficção histórica, romance",
          autor: "Taylor Jenkins Reid",
          editora: "Paralela",
        },
      ],
      novo_livro: "",
      nova_categoria: "",
      novo_autor: "",
      nova_editora: "",
    };
  },
  methods: {
    add() {
      this.livros.push({
        nome: this.novo_livro,
        categoria: this.nova_categoria,
        autor: this.novo_autor,
        editora: this.nova_editora,
      });
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>LIVROS</h2>
    </div>
    <div class="form_input">
      <input type="text" placeholder="Informe nome" v-model="novo_livro" />
      <input
        type="text"
        placeholder="Informe categoria"
        v-model="nova_categoria"
      />
      <input type="text" placeholder="Informe autor" v-model="novo_autor" />
      <input type="text" placeholder="Informe editora" v-model="nova_editora" />
      <button @click="add">Add</button>
    </div>
    <div class="list_livros">
      <table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>CATEGORIA</th>
            <th>AUTOR</th>
            <th>EDITORA</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
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
<style>
.title {
  text-align: center;
  margin: 2rem 0;
}
.form_input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}
.form_input input {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 0.7%;
}
.form_input button {
  padding: 0.5rem;
  width: 15%;
  border: 1px solid rgb(112, 165, 233);
  border-radius: 10px;
  background-color: rgb(112, 165, 233);
  color: aliceblue;
  font-weight: bold;
  margin-left: 1%;
}
.list_times {
  display: flex;
  justify-content: center;
}
table {
  width: 85%;
  border-radius: 1em;
  margin: 0 auto;
  border: 1px solid black;
  font-size: 1.1rem;
  text-align: center;
}
table thead {
  background-color: rgb(103, 159, 207);
  color: white;
}
table tbody tr:nth-child(odd) {
  background-color: rgb(151, 189, 223);
  color: white;
}
</style>
