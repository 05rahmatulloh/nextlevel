<script setup>
import tombol from "./componen/buttom.vue";
</script>

<template>
  <div
    class="pt-20 pb-20 px-4 w-screen max-w-[1050px] flex justify-center lg:text-center flex-wrap lg:m-auto"
    id="service"
  >
    <div class="w-full h-auto md:w-1/2">
      <h1 class="text-black text-5xl pb-10 font-poppins">
        Jasa Pembuatan Website Murah
      </h1>
      <p class="font-roboto text-xl text-black text">
        Bersama Kami Bisnis Anda Dengan Website & Layanan Digital Marketing
        lainya
      </p>
      <div class="w-full text-center pt-10"><tombol /></div>
    </div>

    <div class="w-full md:w-1/2 h-auto">
      <div class="pt-10 w-full flex">
        <div class="w-20 h-20 bg-slate-300 m-2 rounded-lg text-5xl">
          <img src="/komputer.png" alt="" width="500" class="pt-2" />
        </div>
        <p class="text-black text-[16.5px] py-7 font-poppins p-2">
          Jasa Pembuatan website
        </p>
      </div>
      <div class="pt-5 w-full flex">
        <div class="w-20 h-20 bg-slate-300 m-2 rounded-lg text-5xl">
          <img src="/komputer.png" alt="" width="500" class="pt-2" />
        </div>
        <p class="text-black text-[16.5px] py-7 font-poppins p-2">
          Jasa Pembuatan Aplikasi
        </p>
      </div>
      <div class="pt-5 w-full flex">
        <div class="w-20 h-20 bg-slate-300 m-2 rounded-lg text-5xl">
          <img src="/komputer.png" alt="" width="500" class="pt-2" />
        </div>
        <p class="text-black text-[16.5px] py-7 font-poppins p-2">
          Jasa Pembuatan Google ADS
        </p>
      </div>
    </div>
  </div>
</template>
