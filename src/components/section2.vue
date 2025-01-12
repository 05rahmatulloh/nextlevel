<template>
  <div class="bg-bg2 w-screen " id="about">
    <div class="isi px-5 pb-20 lg:px-10 flex flex-wrap m-auto max-w-[1050px]">
      <div class="w-full pt-20 pb-10 text-center">
        <p class="text-4xl pb-10 text-white font-poppins">
          Solusi Jasa Website Terbaik
        </p>
        <p class="text-lg text-white font-roboto">
          Dapatkan berbagai solusi kebutuhan digital marketing untuk bisnis Anda
          dengan layanan profesional dari tim Jasa Website
        </p>
      </div>

      <div class="w-full md:w-2/5 text-center lg:text-left">
        <div class="text-center">
          <button
            @click="klik"
            class="w-[350px] lg:w-[400px] md:w-[300px] h-auto text-left bg-button_bg_2 transition-all duration-300 rounded-xl"
          >
            <div
              class="float-left flex text-center justify-center items-center"
            >
              <span
                class="material-symbols-outlined text-white text-6xl px-3 transition duration-500"
                :class="{ 'scale-0 text-[0px]': !kotak }"
              >
                remove
              </span>
              <span
                class="material-symbols-outlined text-white text-6xl transition duration-500"
                :class="{ 'scale-0  text-[0px]': kotak }"
              >
                add
              </span>

              <p class="text-xl text-white font-poppins">
                Website Terima Beres
              </p>
            </div>
          </button>

          <div
            :class="{ 'h-0': kotak }"
            class="w-[350px] lg:w-[400px] md:w-[300px] h-auto m-auto bg-button_bg_2 mt-5 mb-5 rounded-2xl transition duration-500 text-slate-600 text-sm text-center"
          >
            <p class="p-5 font-roboto" :class="{ hidden: kotak }">
              di sini anda bisa membuat website tanpa harus ngapa ngapain
            </p>
          </div>
        </div>
        <div class="text-center">
          <button
            @click="klik2"
            class="w-[350px] lg:w-[400px] md:w-[300px] h-auto text-left bg-button_bg_2 transition-all duration-300 rounded-xl"
          >
            <div
              class="float-left flex text-center justify-center items-center"
            >
              <span
                class="material-symbols-outlined text-white text-6xl px-3 transition duration-500"
                :class="{ 'scale-0 text-[0px]': !kotak2 }"
              >
                remove
              </span>
              <span
                class="material-symbols-outlined text-white text-6xl transition duration-500"
                :class="{ 'scale-0  text-[0px]': kotak2 }"
              >
                add
              </span>

              <p class="text-xl text-white font-poppins">
                Website Mobile Friendly
              </p>
            </div>
          </button>

          <div
            :class="{ 'h-0': kotak2 }"
            class="w-[350px] lg:w-[400px] md:w-[300px] h-auto m-auto bg-button_bg_2 mt-5 mb-5 rounded-xl transition duration-500 text-slate-600 text-sm text-center"
          >
            <p class="p-5 font-roboto" :class="{ hidden: kotak2 }">
              Setiap website dari kami di rancang dengan desain yang friendly
              dan modern
            </p>
          </div>
        </div>
        <div class="text-center">
          <button
            @click="klik3"
            class="w-[300px] lg:w-[400px] md:w-[300px] h-auto text-left bg-button_bg_2 transition-all duration-300 rounded-xl"
          >
            <div
              class="float-left flex text-center justify-center items-center"
            >
              <span
                class="material-symbols-outlined text-white text-6xl px-3 transition duration-500"
                :class="{ 'scale-0 text-[0px]': !kotak3 }"
              >
                remove
              </span>
              <span
                class="material-symbols-outlined text-white text-6xl transition duration-500"
                :class="{ 'scale-0  text-[0px]': kotak3 }"
              >
                add
              </span>

              <p class="text-xl text-white font-poppins">Layanan setiap saat</p>
            </div>
          </button>

          <div
            :class="{ 'h-0': kotak3 }"
            class="w-[350px] lg:w-[400px] md:w-[300px] h-auto m-auto bg-button_bg_2 mt-5 rounded-xl transition duration-500 text-slate-600 text-sm text-center"
          >
            <p class="p-5 font-roboto" :class="{ hidden: kotak3 }">
              Layanan kami tersedia 24 jam untuk mendukung kebutuhan pemasaran
              anda kapan saja
            </p>
          </div>
        </div>
      </div>

      <div class="w-full md:w-3/5 h-auto px-10">
        <img src="/public/gallery-03.jpg" class="rounded-2xl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kotak: true,

      kotak2: true,
      kotak3: true,
    };
  },
  methods: {
    klik() {
      this.kotak = !this.kotak;
    },
    klik2() {
      this.kotak2 = !this.kotak2;
    },
    klik3() {
      this.kotak3 = !this.kotak3;
    },
  },
};
</script>
