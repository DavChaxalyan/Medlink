<template >
  <div>
    <div class="mt-[60px ] max-w-[556px]">
      <div class="relative">
        <img
          src="../../../src/assets/images/doctors.jpeg"
          class="rounded-[15px]"
          alt=""
        />
        <div class="max-w-[358px] absolute bottom-[0] right-[100px]">
          <img
            src="../../../src/assets/images/rectangle-end.png "
            class="filter-black-filter"
            alt=""
          />
        </div>
      </div>
      <div>
        <div>
          <h3
            class="font-medium text-white text-[24px] leadeing-[28.8px] mt-[24px]"
          >
            Title of the story
          </h3>
        </div>
        <p
          class="font-medium text-[#FFFFFFA3] text-[18px] leading-[21.6px] mt-[16px]"
        >
          <span class="font-medium text-white text-[18px] leading-[21.6px]">
            Summary:
          </span>
          Those who have successfully navigated their healing journey often
          advise others to seek multiple opinions, stay proactive in managing
          their health, and explore integrative therapies that align with their
          values and lifestyle. Building a supportive community and prioritizing
          self-care are also frequently emphasized as key components of
          recovery.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

import { defineProps } from "vue";
const props = defineProps({
    latestObj:{
        type:Array
    }
})

const currentSlide = ref(0);
const nextSlide = () => {                                                                                                                                                                                                             
  currentSlide.value = (currentSlide.value + 1) % latestObj.length;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? latestObj.length - 1 : currentSlide.value - 1;
};
</script >

<style scoped >
</style>