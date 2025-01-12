<template>
  <nav class="bg-white shadow fixed w-full bg-white/30 backdrop-blur-lg z-50">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <!-- Logo -->

      <div class="items-center justify-between w-full mx-auto px-4 lg:flex">
        <div
          class="flex items-center lg:justify-start w-full"
          :class="{ 'justify-center': isMenuOpen }"
        >
          <a href="#home" class="text-2xl font-bold text-gray-800">
            <div
              class="w-28 h-20 bg-contain lg:w-24 lg:h-16 lg:bg-contain"
              style="
                background-image: url('/logo.png');
                background-repeat: no-repeat;
              "
            ></div
          ></a>
        </div>

        <!-- Hamburger Menu (Mobile) -->

        <!-- Menu Links -->
        <div
          :class="{
            hidden: !isMenuOpen,
          }"
          class="flex-col items-center lg:flex lg:flex-row lg:space-x-6"
        >
          <ul
            class="flex-col items-center text-center justify-center lg:flex lg:flex-row lg:space-x-6"
          >
            <li>
              <a
                href="#home"
                class="text-black hover:border-b-2 hover:border-slate-500 transition duration-300 text-md font-monserat"
                >Home</a
              >
            </li>
            <li class="lg:w-32">
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
                  class="text-white flex items-center justify-center m-auto bg-logo1 rounded-full text-center w-28 h-8 transition duration-300 text-md font-monserat"
                >
                  Konsultasi
                </div></a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="lg:hidden">
        <button
          @click="toggleMenu"
          class="text-gray-800 focus:outline-none top-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // State untuk menyembunyikan/menampilkan menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
