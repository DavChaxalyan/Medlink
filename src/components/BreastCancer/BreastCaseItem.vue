<template>
  <div class="bg-[#FFFFFF4D] rounded-[24px] mt-[60px] p-[16px] flex justify-between">
    <div class="flex gap-[45px]" :style="{ height: imageHeight + 'px' }">
      <div class="max-w-[540px] flex justify-center items-center">
        <div class="h-[390px] flex items-center justify-center">
          <div class="relative gap-[60px] justify-center flex-col h-[390px] flex items-center bg-[#BAD8F14D]">
            <div
              v-if="playImage"
              class="p-[40px] absolute left-[39%] top-[39%] backdrop-blur-[23px] rounded-[80px] max-w-[107.4px] max-h-[104px]"
            >
              <img :src="playImage" alt="Play" />
            </div>
            <div class="w-[544px] flex justify-center">
              <img :src="image" alt="image w-full" />
            </div>
            <div class="absolute left-[94%] top-[23%] right-[-14px]">
              <img src="../../assets/images/breast-vector.png" alt="breast" />
            </div>
            <div v-if="messageImage  " class=" bg-[#FFFFFF] p-[17.52px] rounded-[21.89px]">
              <div class="w-[312px]">
                <div class="flex items-center gap-[4.89px]">
                  <div class="w-[16px] h-[16px]">
                    <img :src="messageImage" alt="">
                  </div>
                  <p class="text-customGray">{{ message }}</p>
                </div>
              </div>
            </div>
            <div v-if="playImageRecorder" class=" bg-[#FFFFFF] p-[17.52px] rounded-[21.89px]">
              <div class="w-[312px]">
                <div class="flex items-center justify-between">
                  <div class="w-[20px] h-[20px] rounded-[40px] bg-[#398B39] flex justify-center items-center">
                    <img  class="w-[8px] " :src="playImageRecorder" alt="">
                  </div>
                  <div class="flex gap-[5px] items-center">
                    <div class="border w-[20px] h-[20px] rounded-[50%] border-[#398B39] flex justify-center items-center">
                      <img :src="pause" alt="">
                    </div>
                    <p class="text-customGray font-medium text-[13px] leading-[11.4px]">{{ recordingText }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <div class="max-w-[458px]">
          <h3 class="text-[32px] font-semibold leading-[38.4px]">
            {{ description }}
          </h3>
        </div>
        <div class="flex flex-col gap-[8px] mt-[16px]">
            <div v-if="userImage || womanImage" class="rounded-full flex items-center  gap-[8px]">
              <img v-if="userImage" :src="userImage" alt="user" />
              <img v-if="womanImage" :src="womanImage" class="rounded-[100px]" alt="Woman" />
              <p>{{ nickName }}</p> 
            </div>
          <h4
            v-if="!womanImage"
            class="text-[20px] font-medium leading-[28px] text-left text-[#1F2933A3] w-[458px]"
          >
            {{ text }}
          </h4>
        </div>
        <div>
          <div class="flex gap-[16px] flex-wrap mt-[16px]">
            <div
              class="p-[8px_16px] rounded-[32px] border flex items-center gap-[8px] border-[rgba(31,41,51,0.078)]"
            >
              <img src="../../assets/images/calendar.png" alt="calendar" />
              <p>1 day ago</p>
            </div>
            <div
              class="p-[8px_16px] rounded-[32px] border flex items-center gap-[8px] border-[rgba(31,41,51,0.078)]"
            >
              <img src="../../assets/images/eye1.png" alt="eye" />
              <p>100</p>
            </div>
            <div
              class="p-[8px_16px] rounded-[32px] border flex items-center gap-[8px] border-[rgba(31,41,51,0.078)]"
            >
              <img src="../../assets/images/second.png" alt="second" />
              <p>1 hour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <button
          @click="openMenu"
          class="rounded-[50px] w-[56px] h-[56px] bg-white flex items-center justify-center"
        >
          <img src="../../assets/images/menu-line.png" alt="" />
        </button>
        <div v-if="isOpen" class="bg-white p-[10px]">
          <div class="p-[10px] cursor-pointer">
            <p class="font-medium leading-[24px]">Share Link</p>
          </div>
          <div class="p-[10px] cursor-pointer font-medium leading-[24px]">
            <p>Report</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
const isOpen = ref(false);
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
    required: false,
  },
  imageHeight: {
    type: String,
    default: "390",
  },
  playImage: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  womanImage: {
    type: String,
    required: false,
  },
  userImage: {
    type: String,
    required: false,
  },
  message:{
    type:String,
    required:false
  },
  messageImage:{
    type:String,
    required:false
  },
  pause:{
    type:String,
    required:false

  },
  playImageRecorder:{
    type:String,
    required:false
  },
  recordingText:{
    type:String,
    required:false
  }
});

const openMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
</style>
