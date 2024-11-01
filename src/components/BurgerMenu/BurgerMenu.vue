<template>
  <div class="relative z-50 hidden lg:block focus:outline-none">
    <button @click="toggleMenu"
      class="focus:outline-none w-[56px] h-[56px] p-[16px] gap-[10px] rounded-[40px] bg-[#1F2933] flex items-center justify-center">
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.5H19M1 8.5H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </button>

    <div v-if="isOpen" class="fixed inset-0 flex flex-col items-end pt-[8px] backdrop-blur-24 l2:px-[8px]"
      @click.self="toggleMenu">

      <div class="l2:w-[100%] l2:max-w-[360px]">
        <div class="l2:flex l2:justify-between">
          <img src="../../assets/images/delete-record-popup-img.png" alt="" class="w-[72%]"
            style="filter: brightness(0) saturate(100%) invert(93%) sepia(7%) saturate(2133%) hue-rotate(32deg) brightness(108%) contrast(101%);">
          <div
            class="w-[56px] l2:flex hidden l2:bg-[#1F2933] h-[56px] p-4 gap-[10px] rounded-[40px] border-2 border-[#1F293314] items-center justify-center cursor-pointer"
            @click="toggleMenu">
            <img src="../../assets/images/close.png" alt="close"
              style="filter: brightness(0) saturate(100%) invert(79%) sepia(100%) saturate(2%) hue-rotate(201deg) brightness(107%) contrast(101%);">
          </div>
        </div>
        <div>
          <div class="relative bg-[#DAFF98] px-[16px] pt-[48px] pb-[16px] rounded-[0px_40px_40px_40px]">
            <div class="flex flex-col" :class="{ 'gap-[160px]': !isVisible, 'gap-[0px]': isVisible }">
              <ul>
                <li
                  class="font-dm-sans text-[24px] font-medium leading-[28.8px] tracking[-0.02em] text-left text-[#1F2933] pb-[24px] border-b border-[#1F293314]">
                  Home</li>
                <li
                  class="font-dm-sans text-[24px] font-medium leading-[28.8px] tracking[-0.02em] text-left text-[#1F2933] pb-[24px] pt-[24px] border-b border-[#1F293314]"
                  @click="toggle">
                  For Patients
                  <div class="pt-[24px]" :class="{ 'hidden': !isVisible, 'block': isVisible }">
                    <ul class="flex flex-col gap-[20px] h-[285px] overflow-auto">
                      <li class="font-dm-sans text-[16px] leading-[24px] text-left font-[800] text-[#003b80]">
                        <router-link to="/breast-cancer" @click.self="toggleMenu">
                          Breast Cancer
                        </router-link>
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        IBD
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Migraine
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Multiple Sclerosis (MS)
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Rheumatoid Arthritis
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Type 2 Diabetes
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Sponsored Topics
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Acid Reflux
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        ADHD
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Allergies
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Alzheimer’s & Dementia
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Bipolar Disorder
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Cancer
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Crohn’s Disease
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Chronic Pain
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Cold & Flu
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        COPD
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Depression
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Fibromyalgia
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Heart Disease
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        High Cholesterol
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        HIV
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Hypertension
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        IPF
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Osteoarthritis
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Psoriasis
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        Skin Disorders Care
                      </li>
                      <li class="font-dm-sans text-[16px] font-normal leading-[24px] text-left text-[#1F2933]">
                        STDs
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="font-dm-sans text-[24px] font-medium leading-[28.8px] tracking[-0.02em] text-left text-[#1F2933] pb-[24px] pt-[24px] border-b border-[#1F293314]">
                  For Doctors</li>
                <li
                  class="font-dm-sans text-[24px] font-medium leading-[28.8px] tracking[-0.02em] text-left text-[#1F2933] pb-[24px] pt-[24px] border-b border-[#1F293314]">
                  About Us</li>
              </ul>
              <button
                class="max-w-[327px] w-[100%] bg-[#1F2933] h-[80px] p-[32px] gap-[10px] rounded-[40px] font-dm-sans text-[16px] font-semibold leading-[16px] text-[#FFFFFF]" @click="openPopup">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps } from "vue";

const isOpen = ref(false);
const isVisible = ref(false);

const props = defineProps({
  openPopup: {
    type: Function,
    required: true,
  },
});

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

const toggle = () => {
  isVisible.value = !isVisible.value;
};

onMounted(() => {
  isOpen.value = false;
});

watch(isOpen, (newValue) => {
  document.body.style.overflow = newValue ? "hidden" : "auto";
});
</script>

<style scoped></style>