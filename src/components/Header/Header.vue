<template>
  <div>
    <header class="py-0">
      <nav class="max-w-[1140px] w-full flex justify-between">
        <div class="container-logo h-20 w-full max-w-[500px]">
          <div class="pt-[30px]">
            <img
              class="pl-[134px]"
              src="../../assets/images/medlink-logo.png"
              alt="MedLink Logo"
            />
          </div>
        </div>
        <ul class="w-[514px] flex items-center">
          <div class="relative">
            <div
              v-if="!isSearchOpen"
              @click="toggleSearch"
              class="block-search w-[52px] h-[52px] flex justify-center items-center bg-[#dfd9d9] rounded-[1234px]"
            >
              <img
                src="../../assets/images/search.png"
                alt="Search Icon"
                class="w-6 h-6"
              />
            </div>
            <div
              v-if="isSearchOpen"
              class="flex items-center max-w-full w-[476px] h-[56px]"
            >
              <div
                @click="toggleSearch"
                class="cursor-pointer p-2 pl-2 rounded-full absolute"
              >
                <img
                  src="../../assets/images/search.png"
                  alt="Search Icon"
                  class="w-6 h-6"
                />
              </div>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search"
                class="w-full p-3 border border-gray-300 rounded-full focus:outline-none input-background pl-[38.5px]"
                @click="openSearchPanel"
              />
              <div
                class="absolute right-[16px] cursor-pointer"
                @click="toggleSearch"
              >
                <img src="../../assets/images/close.png" alt="Close Icon" />
              </div>
            </div>
            <div
              v-if="isSearchPanel"
              class="absolute bg-white border border-gray-300 rounded-lg w-full max-h-60 overflow-y-auto z-10"
            >
              <ul>
                <li
                  v-for="(item, index) in items"
                  :key="index"
                  @click="selectItem(item)"
                  class="p-3 hover:bg-gray-100 cursor-pointer"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="flex gap-[24px] items-center pl-[32px]">
            <div v-if="!isSearchOpen" class="flex gap-[24px] items-center">
              <li>
                <a
                  class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3]"
                  href=""
                  >For Patients</a
                >
              </li>
              <li>
                <a
                  class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3]"
                  href=""
                  >For Doctors</a
                >
              </li>
              <li>
                <a
                  class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3]"
                  href=""
                  >About Us</a
                >
              </li>
            </div>
            <li>
              <button
                type="button"
                class="w-[109px] h-[56px] p-[20px32px] rounded-[40px] bg-[#1F2933] text-white"
              >
                Log in
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isSearchOpen = ref(false);
const isSearchPanel = ref(false);
const searchQuery = ref("");
const items = ref([
  "Abdominal Pain",
  "Antibiotics",
  "Arrhythmia",
  "Autoimmune Disorders",
]);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (!isSearchOpen.value) {
    isSearchPanel.value = false;
  }
};

const openSearchPanel = () => {
  isSearchPanel.value = true;
};

const selectItem = (item) => {
  searchQuery.value = item;
  isSearchPanel.value = false;
};
</script>

<style scoped>
.container-logo {
  background-image: url("../../assets/images/header-phone.png");
  background-repeat: no-repeat;
}

.input-background {
  box-shadow: 0 0 0 4px rgba(218, 255, 152, 0.24);
}
</style>
