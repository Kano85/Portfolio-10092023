<template>
  <section
    class="self-stretch h-px overflow-hidden shrink-0 flex flex-col items-end justify-start text-left text-38xl-4 text-primary-main-1 font-roboto-mono"
  >
    <div
      class="flex-1 w-[431px] flex flex-col items-end justify-start py-[20.499679565429688px] px-[50px] box-border gap-[47.56px]"
    >
      <b class="relative">Contact</b>
      <div
        class="relative text-[16.45px] tracking-[0.01em] leading-[20.99px] font-medium text-right"
      >
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
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Contact",
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
