<template>
  <main
    class="relative w-full overflow-hidden flex flex-col items-start justify-start"
  >
    <header navAlignContent="end" />
    <About /><MyRecentWork /><Contact />
    <footer />
  </main>
</template>
<script>
  import { defineComponent } from "vue";
  import Header from "../components/Header.vue";
  import About from "../components/About.vue";
  import MyRecentWork from "../components/MyRecentWork.vue";
  import Contact from "../components/Contact.vue";
  import Footer from "../components/Footer.vue";

  export default defineComponent({
    name: "Portfolio10092023",
    components: { Header, About, MyRecentWork, Contact, Footer },
  });
</script>
