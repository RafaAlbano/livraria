import { createRouter, createWebHistory } from "vue-router";
import CategoriaLivrariaVue from "../views/CategoriaLivraria.vue";
import HomeView from "../views/HomeView.vue";
import LivroLivraria from "../views/LivroLivraria.vue";
import AutorLivraria from "../views/AutorLivraria.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/livros",
      name: "livro",
      component: LivroLivraria,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path:"/categorias",
      name:"categoria",
      component: CategoriaLivrariaVue,
    },
    {
      path:"/autores",
      name:"autor",
      component: AutorLivraria,
    }
  ],
});

export default router;
