<template>
  <main
    class="relative w-full overflow-hidden flex flex-col items-start justify-start sm:flex"
  >
    <header navAlignContent="end" />
    <About /><MyRecentWork />
    <section
      class="self-stretch bg-base-white overflow-hidden flex flex-col items-end justify-start py-2.5 px-10 text-left text-38xl-4 text-primary-main-1 font-roboto-mono"
    >
      <div class="w-[431px] flex flex-col items-end justify-start gap-[20px]">
        <b class="relative uppercase">Contact</b>
        <div class="relative text-base tracking-[0.01em] text-right">
          <p class="m-0">Gleimstrasse 3</p>
          <p class="m-0">13355 Berlin</p>
          <p class="m-0">hcanocardenas@gmail.com</p>
          <p class="m-0">+4917627744274</p>
        </div>
        <div
          class="w-[226.32px] flex flex-row items-start justify-start gap-[19.68px]"
        >
          <img
            class="flex-1 relative max-w-full overflow-hidden h-[29.52px] cursor-pointer"
            alt=""
            src="/discord.svg"
            :onClick="onDiscordIconClick"
          />
          <img
            class="flex-1 relative max-w-full overflow-hidden h-[29.52px] cursor-pointer"
            alt=""
            src="/facebook.svg"
            :onClick="onFacebookIconClick"
          />
          <img
            class="flex-1 relative max-w-full overflow-hidden h-[29.52px] cursor-pointer"
            alt=""
            src="/dribbble.svg"
            :onClick="onDribbbleIconClick"
          />
          <img
            class="flex-1 relative max-w-full overflow-hidden h-[29.52px] cursor-pointer"
            alt=""
            src="/nstagram.svg"
            :onClick="onNstagramIconClick"
          />
          <img
            class="flex-1 relative max-w-full overflow-hidden h-[29.52px] cursor-pointer"
            alt=""
            src="/behance.svg"
            :onClick="onBehanceIconClick"
          />
        </div>
      </div>
    </section>
    <footer
      class="self-stretch bg-primary-main-1 overflow-hidden flex flex-col items-start justify-start pt-2.5 px-10 pb-[30px] gap-[20px] text-left text-21xl text-base-white font-roboto-mono"
    >
      <div class="self-stretch relative uppercase font-medium">
        Empowering Your Vison with Functionality
      </div>
      <div class="relative text-base">
        <p class="m-0">
          By the way, I built the Portfolio from scratch with Vue JS, Tailwind,
          Node JS.
        </p>
        <p class="m-0">https://github.com/Kano85</p>
      </div>
    </footer>
  </main>
</template>
<script>
  import { defineComponent } from "vue";
  import Header from "../components/Header.vue";
  import About from "../components/About.vue";
  import MyRecentWork from "../components/MyRecentWork.vue";

  export default defineComponent({
    name: "Portfolio10092023",
    components: { Header, About, MyRecentWork },
    methods: {
      onDiscordIconClick() {
        window.open("https://discord.com/invite/eQxkYTNxSp");
      },
      onFacebookIconClick() {
        window.open("https://www.facebook.com/animaapp/");
      },
      onDribbbleIconClick() {
        window.open("https://dribbble.com/animaapp");
      },
      onNstagramIconClick() {
        window.open("https://www.instagram.com/animaapp/?hl=en");
      },
      onBehanceIconClick() {
        window.open("https://www.behance.net/Anima_design");
      },
    },
  });
</script>
