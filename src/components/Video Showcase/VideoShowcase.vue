<template>
    <div class=" bg-[#1F2933] rounded-[40px] relative mt-[16px]">
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img src="../../assets/images/clip-path-community.png" alt="">
        </div>
        <div class="pt-[115px] flex items-start justify-center gap-[115px] xs:flex-wrap xs:gap-[10px] px-[15px]">
            <div class="flex items-center gap-[16px]">
                <div class="w-[63px] h-[45px] p-2 gap-2 rounded-[27px] border-l bg-[#BAD8F14D] text-[#FFFFFF] font-medium text-[24px] leading-[28.8px] tracking[-0.02em] text-center border border-[#FFFFFF29]">03</div>
                <p class="font-normal text-6xl leading-[64px] tracking[-0.04em] text-left text-[#FFFFFF]">Video Showcase</p>
            </div>
            <div class="w-[548px]">
                <p class="font-medium text-[18px] leading-[25.2px] text-left text-[#FFFFFFA3]">Explore our curated collection of insightful videos designed to enhance your understanding of various healthcare topics. Our showcase features expert interviews, patient stories, and educational content that provides valuable perspectives and practical advice.</p>
            </div>
        </div>
        <VideoShowcaseSlider />
        
    </div>
</template>

<script setup>
import VideoShowcaseSlider from "./VideoShowcaseSlider.vue"
</script>

<style scoped>
</style>