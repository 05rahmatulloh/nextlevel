<script setup>
import section1 from "./components/section1.vue";
import section2 from "./components/section2.vue";

import section3 from "./components/section3.vue";

import navbar from "./components/navbar.vue";
import navbar2 from "./components/navbar2.vue";

import terahir from "./components/footer.vue";
</script>

<template>
  <div class="w-screen">
    <navbar2 />
    <section1 />
    <section2 />
    <section3 />
    <terahir />

    <a
      href="https://wa.me/6281338613704?text=Halo%20saya%20ingin%20bertanya%20tentang%20produk%20Anda."
    >
      <div
        class="w-20 h-20 lg:w-28 lg:h-28 bg-contain fixed right-2 bottom-2"
        style="background-image: url(/wa.png); background-repeat: no-repeat"
      ></div
    ></a>
  </div>
</template>
