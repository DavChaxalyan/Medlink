<template>
  <div class="pt-[150px] bg-[#E4ECF7] rounded-[40px] pl-[134px] pr-[134px]">
    <div class="flex items-start gap-[10px]">
      <div
        class="p-[8px_16px] rounded-[27px] bg-[#BAD8F14D] max-w-[57px] flex justify-center"
      >
        <p class="text-customGray font-medium text-[24px] leading-[28.8px]">
          04
        </p>
      </div>
      <h2 class="font-normal text-[#customGray] text-[64px] leading-[64px]">
        Breast Cancer Case Studies
      </h2>
    </div>
    <div>
      <div>
        <BreastCaseItem
          v-for="(caseItem, index) in breast"
          :key="index"
          :image="caseItem.image"
          :description="caseItem.description"
          :nickName="caseItem.nickName"
          :imageHeight="caseItem.imageHeight"
          :playImage="caseItem.playImage"
          :text="index === 1 ? '' : caseItem.text"
          :womanImage="index === 1 ? caseItem.womanImage : ''"
          :userImage="caseItem.userImage"
          :message="caseItem.message"
          :messageImage="caseItem.messageImage"
          :playImageRecorder="caseItem.playImageRecorder"
          :recordingText="caseItem.recordingText"
          :pause="caseItem.pause"
        />
      </div>
    </div>
    <div class="flex justify-center py-[60px] gap-[8px] lg3:flex-col">
      <button  class="bg-customGray rounded-[40px] text-[white] p-[32px_48px] font-dm-sans text-[16px] font-semibold leading-[16px]">Subscribe to Beast Cancer videos</button>
      <button class="bg-[#DAFF98] rounded-[40px] text-[#398B39] p-[32px_48px] font-dm-sans text-[16px] font-semibold leading-[16px]">Read about Breast Cancer</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BreastCaseItem from "./BreastCaseItem.vue";

const breast = ref([
  {
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
    image: "../../../src/assets/images/mask-man.png",
    nickName: "Aspen Ekstrom Bothman",
    playImage: "../../../src/assets/images/solid-play.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    userImage:'../../../src/assets/images/user.png'

  },
  {
    description: "What did you try that didn’t help you better",
    image: "../../../src/assets/images/big-microphone.png",
    nickName: "Aspen Ekstrom Bothman",
    playImage: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    womanImage: "../../../src/assets/images/women-mini.png",
    userImage:'',
    playImageRecorder: "../../../src/assets/images/solid-play.png",
    recordingText:'Stop Recoding',
    pause:'../../../src/assets/images/pause.png'

  },
  {
    description:
      "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
    image: "../../../src/assets/images/big-font-size.png",
    playImage: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    nickName: "",
    userImage:'',
    message:'Your Message',
    messageImage:'../../../src/assets/images/font-size 01.png'

  },
  {
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
    nickName: "Aspen Ekstrom Bothman",
    image: "../../../src/assets/images/help.png",
    playImage: "../../../src/assets/images/solid-play.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    userImage:'../../../src/assets/images/user.png',
   


  },
]);
</script>

<style>
</style>
