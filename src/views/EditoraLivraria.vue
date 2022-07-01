<script>
export default {
    data() {
        return {
            editoras: [
                { nome: "Livro 1", editora: "Editora 1" },
            ],
            novo_livro: "",
            nova_editora: "",
        };
    },
    methods: {
        add() {
            this.editoras.push({
                nome: this.novo_livro,
                editora: this.nova_editora,
            });
        },
        excluir(editora) {
            const indice = this.editoras.indexOf(editora);
            this.editoras.splice(indice, 1);
        },
    },
};
</script>
<template>
    <div class="container">
        <div class="title">
            <h2>Girenciamento de Editoras</h2>
        </div>
        <div class="form_input">
            <input type="text" v-model="novo_livro" placeholder="informe o livro" />
            <input type="text" v-model="nova_editora" placeholder="informe a editora" />
            <button @click="add">Add</button>
        </div>
        <div class="list_editora">
            <table>
                <thead>
                    <tr>
                        <th>LIVRO</th>
                        <th>EDITORA</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="editora in editoras" :key="editora.id">
                        <td>{{ editora.nome }}</td>
                        <td>{{ editora.editora }}</td>
                        <td>
                            <button @click="excluir(editora)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>