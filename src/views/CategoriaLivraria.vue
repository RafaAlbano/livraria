<script>
import { v4 as uuidv4 } from "uuid";
export default {
    data() {
        return {
            categorias: [
                { id: "9fc3ef4b-eeba-4dac-9b38-ec2388d6da39", nome: "Livro1", categoria: "Categoria1" },
            ],
            novo_livro: "",
            nova_categoria: "",
        };
    },
    methods: {
        add() {
            if (this.nova_categoria !== "") {
                const novo_id = uuidv4();
                this.categorias.push({
                    id: novo_id,
                    nome: this.novo_livro,
                    categoria: this.nova_categoria,
                });
            }
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
            <input type="text" placeholder="Livro" v-model="novo_livro" @keydown.enter="add" />
            <input type="text" placeholder="Categoria" v-model="nova_categoria" @keydown.enter="add" />
            <button @click="add">add</button>
        </div>
        <div class="list_categorias"></div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Categorias</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="categoria in categorias" :key="categoria.id">
                    <td> {{ categoria.id }}</td>
                    <td>{{ categoria.nome }}</td>
                    <td>{{ categoria.categoria }}</td>
                    <td>
                        <button @click="excluir(categoria)">Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>