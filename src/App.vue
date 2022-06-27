<script setup>
import HeaderComp from "./components/HeaderComp.vue";
</script>
<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
</template>
<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  height: 95vh;

  font-weight: normal;
}
a {
  color: inherit;
  text-decoration: none;
}
.router-link-active {
  font-weight: bold;
}
main {
  height: 85%;
}
</style>
