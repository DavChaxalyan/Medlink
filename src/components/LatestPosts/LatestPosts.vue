<template >
  <div class="bg-[#1F2933] mt-[150px]">
    <div>
      <div class="pl-[134px] pr-[134px] pt-[80px] flex gap-[263px]">
        <div class="flex items-center gap-4">
          <div
            class="p-2 pr-4 pb-2 pl-4 rounded-[27px] bg-[#BAD8F14D] max-w-[57px] flex justify-center"
          >
            <p class="text-[#FFFFFF] font-medium text-[24px] leading-[28.8px]">
              01
            </p>
          </div>
          <h2 class="font-normal text-[#FFFFFF] text-[64px] leading-[64px]">
            Latest Posts
          </h2>
        </div>
        <p
          class="text-lg font-medium leading-6 text-left max-w-[471px] text-[#FFFFFF]"
        >
          Aenean sit amet maximus dui. Nullam maximus urna leo, eu condimentum
          turpis luctus sed. Vestibulum sed urna quis urna venenatis tempor. In
          accumsan suscipit nisl et aliquam.
        </p>
      </div>
{{ console.log(latestObj.values)
 }}
      <LatestPostsItem :currentSlide="currentSlide" :latestObj="latestObj" />
    </div>
    <div>
      <div class="p-[0px_134px] flex justify-between">
        <div
          @click="prevSlide"
          class="flex items-center p-[20px_32px] gap-[10px]"
        >
          <img src="../../assets/images/left-icon.png" alt="" />
          <p class="text-[#FFFFFF] text-[16px] font-semibold leadeing-[16px]">
            Prev
          </p>
        </div>
        <div
          @click="nextSlide"
          class="flex items-center p-[20px_32px] gap-[10px]"
        >
          <p class="text-[#FFFFFF] text-[16px] font-semibold leadeing-[16px]">
            Next
          </p>
          <img src="../../assets/images/rigth-icon.png" alt="" />
        </div>
      </div>
      <div class="flex items-center justify-center">
        <img src="../../assets/images/rectangle-end.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import LatestPostsItem from "./LatestPostsItem.vue";
import { ref, reactive } from "vue";

    const latestObj = reactive([
      {
        image: "../../../src/assets/images/women-2.png",
        text: "Lorem ipsum dolor sit",
        description:
          "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
        watch: "watch now",
        imageRectangle: "../../../src/assets/images/rectangle-latest.png",
        play: "",
      },
      {
        image: "../../../src/assets/images/women.png",
        text: "Lorem ipsum dolor sit",
        description:
          "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
        watch: "watch now",
        imageRectangle: "../../../src/assets/images/rectangle-latest.png",
        play: "",
      },
      {
        image: "../../../src/assets/images/big-font-size.png",
        text: "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
        description:
          "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
        watch: "watch now",
        imageRectangle: "../../../src/assets/images/rectangle-latest.png",
        play: "../../../src/assets/images/font-size-01.png",
      },
      {
        image: "../../../src/assets/images/big-font-size.png",
        text: "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
        description:
          "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
        watch: "watch now",
        imageRectangle: "../../../src/assets/images/rectangle-latest.png",
        play: "../../../src/assets/images/font-size-01.png",
      },
      {
        image: "../../../src/assets/images/big-font-size.png",
        text: "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
        description:
          "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
        watch: "watch now",
        imageRectangle: "../../../src/assets/images/rectangle-latest.png",
        play: "../../../src/assets/images/font-size-01.png",
      },
      {
        image: "../../../src/assets/images/big-font-size.png",
        text: "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
        description:
          "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
        watch: "watch now",
        imageRectangle: "../../../src/assets/images/rectangle-latest.png",
        play: "../../../src/assets/images/font-size-01.png",
      },
      {
        image: "../../../src/assets/images/big-font-size.png",
        text: "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
        description:
          "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
        watch: "watch now",
        imageRectangle: "../../../src/assets/images/rectangle-latest.png",
        play: "../../../src/assets/images/font-size-01.png",
      },
    ]);

    const currentSlide = ref(0);
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % latestObj.length;
    };

    const prevSlide = () => {
      currentSlide.value =
        currentSlide.value === 0
          ? latestObj.length - 1
          : currentSlide.value - 1;
    };
 


</script>
<style scoped >
</style>