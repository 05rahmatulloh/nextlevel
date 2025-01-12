<template>
  <div
    class="nav fixed flex items-center justify-between w-screen bg-white/30 backdrop-blur-lg z-50 max-h-16"
  >
    <!-- Logo tanpa efek blur -->
    <div class="max-w-[1050px] flex items-center justify-between w-full m-auto">
      <div
        class="w-20 h-16 bg-contain lg:w-20 lg:h-16 lg:bg-contain relative z-10 px-5"
        style="background-image: url('/logo.png'); background-repeat: no-repeat"
      ></div>

      <div class="">
        <ul class="flex gap-4">
          <li>
            <a
              href="#home"
              class="text-black hover:border-b-2 hover:border-slate-500 transition duration-300 text-md font-monserat"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="text-black hover:border-b-2 hover:border-slate-500 transition duration-300 text-md font-monserat"
              >Tentang Kami</a
            >
          </li>
          <li>
            <a
              href="#service"
              class="text-black hover:border-b-2 hover:border-slate-500 transition duration-300 text-md font-monserat"
              >Layanan</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="text-black hover:border-b-2 hover:border-slate-500 transition duration-300 text-md font-monserat"
              >Kontak</a
            >
          </li>
          <li>
            <a href="" class=""
              ><div
                class="text-white flex items-center justify-center bg-logo1 rounded-full text-center w-28 h-8 transition duration-300 text-md font-monserat"
              >
                Konsultasi
              </div></a
            >
          </li>
        </ul>
      </div>

      <!-- Tombol dengan ikon -->
      <button
        @click="tombols"
        class="relative w-14 h-14 rounded-full flex items-center justify-center -translate-y-0 transition-colors duration-300 lg:hidden"
      >
        <!-- Ikon menu -->
        <img
          src="/icon/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).svg"
          alt="Menu Icon"
          :class="{ 'scale-0': !tombol }"
          class="absolute transition duration-500 w-2/3 h-2/3 bg-cover cursor-pointer"
        />
        <!-- Ikon close -->
        <img
          src="/icon/close.svg"
          alt="Close Icon"
          :class="{ 'scale-0': tombol }"
          class="absolute transition duration-500 text-black w-2/3 h-2/3 bg-cover cursor-pointer"
        />
      </button>
      <div
        v-if="!tombol"
        class="fixed inset-0 bg-black/50 z-5 transition-opacity duration-500"
        @click="tombols"
      ></div>

      <!-- Menu -->
    </div>
    <div
      class="isi fixed z-50 w-2/3 h-screen bg-white transition-transform duration-500 px-10"
      :class="{ '-translate-x-full': tombol, 'translate-x-0': !tombol }"
    >
      <div
        class="w-28 h-28 bg-cover relative z-10"
        style="background-image: url('/logo.png')"
      ></div>

      <div class="">
        <ul class="">
          <li>
            <a
              href="#home"
              class="text-black hover:border-b-2 hover:border-slate-500 transition duration-300 text-md font-monserat"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="text-black hover:border-b-2 hover:border-slate-500 transition duration-300 text-md font-monserat"
              >Tentang Kami</a
            >
          </li>
          <li>
            <a
              href="#service"
              class="text-black hover:border-b-2 hover:border-slate-500 transition duration-300 text-md font-monserat"
              >Layanan</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="text-black hover:border-b-2 hover:border-slate-500 transition duration-300 text-md font-monserat"
              >Kontak</a
            >
          </li>
          <li>
            <a
              href="https://wa.me/6281338613704?text=Halo%20saya%20ingin%20bertanya%20tentang%20produk%20Anda."
              class=""
              ><div
                class="text-white flex items-center justify-center bg-logo1 rounded-full text-center w-28 h-8 transition duration-300 text-md font-monserat"
              >
                Konsultasi
              </div></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Overlay -->
</template>

<script>
export default {
  data() {
    return {
      tombol: true,
    };
  },
  methods: {
    tombols() {
      this.tombol = !this.tombol;
    },
  },
};
</script>
