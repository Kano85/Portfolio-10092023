<template>
  <div
    class="self-stretch flex flex-row items-end justify-start text-left text-25xl text-primary-main-1 font-poppins"
  >
    <div
      class="flex-1 h-[600px] flex flex-row items-start justify-between py-[32.79948806762695px] px-[40.999359130859375px] box-border"
    >
      <div
        class="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-between"
      >
        <b class="relative">Hola!</b>
        <b class="self-stretch relative text-[89.38px] font-roboto-mono">
          <p class="m-0">Harold</p>
          <p class="m-0">Cano</p>
        </b>
      </div>
      <div
        class="w-[312px] flex flex-row flex-wrap items-start justify-start gap-[40px] text-[17.17px] font-roboto-mono md:flex-col md:gap-[40px] md:items-start md:justify-start"
        :style="navStyle"
      >
        <div class="flex-1 relative md:flex-[unset] md:self-stretch">Home</div>
        <div class="flex-1 relative md:flex-[unset] md:self-stretch">Works</div>
        <div class="flex-1 relative md:flex-[unset] md:self-stretch">
          Contact
        </div>
      </div>
    </div>
  </div>
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
