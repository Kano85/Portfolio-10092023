<template>
  <main
    class="relative w-full overflow-hidden flex flex-col items-start justify-start"
  >
    <header navAlignContent="end" />
    <About /><MyRecentWork /><Contact />
    <footer
      class="self-stretch bg-base-white overflow-hidden flex flex-col items-start justify-start py-2.5 px-[40.999359130859375px] text-left text-38xl-4 text-primary-main-1 font-roboto-mono"
    >
      <b class="self-stretch relative">I can help with that !</b>
    </footer>
  </main>
</template>
<script>
  import { defineComponent } from "vue";
  import Header from "../components/Header.vue";
  import About from "../components/About.vue";
  import MyRecentWork from "../components/MyRecentWork.vue";
  import Contact from "../components/Contact.vue";

  export default defineComponent({
    name: "Portfolio10092023",
    components: { Header, About, MyRecentWork, Contact },
  });
</script>
