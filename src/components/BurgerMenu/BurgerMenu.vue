<template>
  <div class="relative z-50 lg:hidden focus:outline-none">
    <button @click="toggleMenu" class="focus:outline-none">
      <svg
        class="w-6 h-6 text-gray-800"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          v-if="!isOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

      <div
        v-if="isOpen"
        class="max-w-[600px] fixed left-[25%] max-h-[550px] top-[15%] inset-0 bg-white z-40 flex flex-col justify-center items-center"
        @click.self="toggleMenu"
      >

          <button @click="toggleMenu" class="absolute top-4 right-4">
              <svg
              class="w-8 h-8 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <a
          href="#"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-center"
          >Home</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-center"
          >About</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-center"
          >Services</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-center"
          >Contact</a
        >
      </div>
  </div>
</template>
  
  <script setup>
import { ref, onMounted, watch } from "vue";

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

onMounted(() => {
  isOpen.value = false;
});

watch(isOpen, (newValue) => {
  document.body.style.overflow = newValue ? "hidden" : "auto";
});
</script>
  
  <style scoped>
</style>
  