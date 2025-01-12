<script setup>
import buttom from "./componen/buttom.vue";
</script>

<template>
  <div class="flex flex-wrap justify-center w-screen " id="home">
    <div class="w-full min-h-[600px] h-auto text-center">
      <div class="bg-bg1 min-h-[800px] h-screen w-full absolute -z-50">
        <div class="w-30 h-5 bg-slate-400 rounded-full mt-20 -rotate-45"></div>

        <div class="w-20 h-10 bg-slate-400 rounded-full mt-20 -rotate-45"></div>
        <div class="w-30 h-1 bg-slate-400 rounded-full mt-30 -rotate-45"></div>
        <div
          class="w-40 h-10 bg-slate-400 rounded-full mt-20 ml-56 -rotate-45"
        ></div>
        <div
          class="w-40 h-5 bg-slate-400 rounded-full mt-20 ml-20 -rotate-45"
        ></div>
        <div class="w-40 h-10 bg-slate-300 rounded-full mt-10 -rotate-45"></div>
        <div
          class="w-560 h-6 bg-slate-300 rounded-full mt-10 ml-28 -rotate-45"
        ></div>
      </div>
      <div class="w-screen m-auto lg:px-10 max-w-[1050px] lg:h-screen">
        <div class="isi justify-center px-5 pt-32 flex flex-wrap md:pt-32">
          <div class="w-full pb-10 md:w-1/2">
            <h1
              class="text-4xl pt-8 md:text-5xl lg:text-6xl font-poppins pb-10 md:text-left text-black"
            >
              Ayo Digitalisasi Bisnis Anda
            </h1>
            <p class="text-black text-lg font-roboto pb-6">
              Dapatkan Website Terbaik, Iklan Google Ads dan Aplikasi Agar
              Bisnis Anda Lebih Mudah
            </p>

            <buttom />
          </div>
          <div class="foto pt-20 md:pt-5 md:w-1/2">
            <img
              src="/public/mobile.png"
              class="m-auto"
              alt="Gambar Lokal dengan Require"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
