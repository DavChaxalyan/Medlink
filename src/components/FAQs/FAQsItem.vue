<template>
  <div 
    class="w-[1140px] p-[24px] gap-[24px] xs:max-w-[327px] rounded-[32px] flex justify-between border border-[gray]" 
    :class="{ 'bg-[#E4ECF7]': isOpen, 'h-[145px] xs:h-[284px]': isOpen, 'items-start': isOpen, 'items-center': !isOpen }" 
  >
    <div class="flex flex-col gap-[24px]">
      <p class="font-medium text-[24px] xs:max-w-[284px] leading-[28.8px] tracking[-0.02em] text-left">
        {{ question }}
      </p>
      <p v-if="isOpen">{{ answer }}</p>
    </div>
    <div :class="{ 'bg-[#1F2933]': isOpen }" class="w-[48px] xs:w-[70px] xs:h-[70px] h-[48px] gap-0 rounded-[40px] border border-[#B4C0D0] flex items-center justify-center" @click="toggleAnswer">
      <img v-if="isOpen" src='../../assets/images/minus.png' alt="+">
      <img v-else src='../../assets/images/plus.png' alt="-">
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

const isOpen = ref(false);

const toggleAnswer = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
</style>
