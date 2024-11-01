<template >
  <div class=" bg-[#1F2933] rounded-[40px] mt-[16px]">
    <div class="pt-[115px]">
      <div class="flex items-center gap-[16px]">
        <div
          class="w-[63px] h-[45px] p-2 gap-2 rounded-[27px] border-l bg-[#BAD8F14D] text-[#FFFFFF] font-medium text-[24px] leading-[28.8px] tracking[-0.02em] text-center border border-[#FFFFFF29]"
        >
          03
        </div>
        <p
          class="font-normal text-6xl leading-[64px] tracking[-0.04em] text-left text-[#FFFFFF]"
        >
          Video Showcase
        </p>
      </div>
    </div>
    <div class="flex justify-center gap-[20px]">
      <RemarkableItem v-for="(item, index) in latestObj" :key="index" :item="item" :image="item.image"/>
     
    </div>

    <div>
      <div class="p-[0px_134px] flex justify-between">
        <div @click="prevSlide" class="flex items-center p-[20px_32px] gap-[10px] cursor-pointer">
          <img src="../../assets/images/left-icon.png" alt="" />
          <p class="text-[#FFFFFF] text-[16px] font-semibold leadeing-[16px]">
            Prev
          </p>
        </div>
        <div @click="nextSlide" class="flex items-center p-[20px_32px] gap-[10px] cursor-pointer">
          <p class="text-[#FFFFFF] text-[16px] font-semibold leadeing-[16px]">
            Next
          </p>
          <img src="../../assets/images/rigth-icon.png" alt="" />
        </div>
      </div>
      <div  class="flex items-center justify-center">
        <img src="../../assets/images/rectangle-end.png" alt="" />
      </div>
    </div>
  </div>
</template>
  <script setup>
import RemarkableItem from "./RemarkableItem.vue";
import { ref } from "vue";

const latestObj = ref([
  {
    image: "../../../src/assets/images/doctors.jpeg",
    text: "Summary:",
    description:
      "Those who have successfully navigated their healing journey often advise others to seek multiple opinions, stay proactive in managing their health, and explore integrative therapies that align with their values and lifestyle. Building a supportive community and prioritizing self-care are also frequently emphasized as key components of recovery.",
  },
  {
    image: "../../../src/assets/images/doctor.jpeg",
    text: "Summary:",
    description:
      "Those who have successfully navigated their healing journey often advise others to seek multiple opinions, stay proactive in managing their health, and explore integrative therapies that align with their values and lifestyle. Building a supportive community and prioritizing self-care are also frequently emphasized as key components of recovery.",
  },
  {
    image: "../../../src/assets/images/doctor.jpeg",
    text: "Summary:",
    description:
      "Those who have successfully navigated their healing journey often advise others to seek multiple opinions, stay proactive in managing their health, and explore integrative therapies that align with their values and lifestyle. Building a supportive community and prioritizing self-care are also frequently emphasized as key components of recovery.",
  },
  {
    image: "../../../src/assets/images/doctor.jpeg",
    text: "Summary:",
    description:
      "Those who have successfully navigated their healing journey often advise others to seek multiple opinions, stay proactive in managing their health, and explore integrative therapies that align with their values and lifestyle. Building a supportive community and prioritizing self-care are also frequently emphasized as key components of recovery.",
  },
  {
    image: "../../../src/assets/images/doctor.jpeg",
    text: "Summary:",
    description:
      "Those who have successfully navigated their healing journey often advise others to seek multiple opinions, stay proactive in managing their health, and explore integrative therapies that align with their values and lifestyle. Building a supportive community and prioritizing self-care are also frequently emphasized as key components of recovery.",
  },
]);
</script>
  <style scoped >
</style>