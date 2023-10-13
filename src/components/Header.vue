<template>
  <header
    class="self-stretch bg-cadetblue flex flex-row items-end justify-start text-left text-21xl text-primary-main-1 font-roboto-mono"
  >
    <div
      class="flex-1 h-[600px] flex flex-row items-start justify-between pt-[30px] px-10 pb-2.5 box-border"
    >
      <div
        class="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between"
      >
        <div class="relative font-medium">Hi !</div>
        <b class="self-stretch relative uppercase text-71xl">
          <p class="m-0">Harold</p>
          <p class="m-0">
            <span>Cano</span>
            <span class="text-[89.38px]"> </span>
          </p>
        </b>
      </div>
      <div
        class="w-[247px] flex flex-row flex-wrap items-start justify-end gap-[30px] text-base md:flex-col md:gap-[40px] md:items-start md:justify-start"
        :style="navStyle"
      >
        <div
          class="flex-1 relative font-medium lg:cursor-auto md:flex-[unset] md:self-stretch"
        >
          Home
        </div>
        <div
          class="flex-1 relative font-medium md:flex-[unset] md:self-stretch"
        >
          Works
        </div>
        <div class="relative font-medium">Contact</div>
      </div>
    </div>
  </header>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Header",
    props: {
      navAlignContent: { type: String },
    },
    computed: {
      navStyle() {
        return {
          alignContent: this.navAlignContent,
        };
      },
    },
  });
</script>
