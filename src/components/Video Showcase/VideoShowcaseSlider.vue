<template>
  <div class="relative w-full max-w-[1140px] mx-auto p-6 rounded-lg">
    <div class="relative overflow-hidden rounded-lg">
      <div class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="max-w-[100%] flex-shrink-0 relative mr-[80px]">
          <img :src="slide.image" alt="Slide image" class="max-w-[100%] h-[640px] object-cover rounded-lg"
            style="clip-path: polygon(30% 7%, 100% 7%, 100% 60%, 100% 100%, 0 100%, 0 0, 25% 0);">
          <div
            class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-transparent to-transparent text-white l2:hidden">
            <h2
              class="max-w-[490px] mb-[16px] font-medium text-[32px] leading-[38.4px] tracking[-0.02em] text-left text-[#FFFFFF]">
              {{ slide.title }}</h2>
            <p class="max-w-[780px] font-medium text-[24px] leading-[28.8px] text-left text-[#FFFFFFA3]">{{
              slide.description }}</p>
            <router-link to="/video-interview">
              <button
                class="w-[184px] h-[184px] gap-4 rounded-[80px] backdrop-blur-[24px] flex items-center justify-center absolute bottom-[80px] right-[80px]">
                <img src="../../assets/images/play.png" alt="play">
              </button>
            </router-link>
            </div>
          
          <router-link to="/video-interview">
            <button
              class="w-[184px] h-[184px] gap-4 rounded-[80px] hidden l2:flex backdrop-blur-[24px] items-center justify-center absolute bottom-[56%] right-[35%]">
              <img src="../../assets/images/play.png" alt="play">
            </button>
          </router-link>

          <div class="bottom-0 left-0 w-full p-6 text-white l2:block hidden">
            <h2
              class="max-w-[490px] mb-[16px] font-medium text-[32px] leading-[38.4px] tracking[-0.02em] text-left text-[#FFFFFF]">
              {{ slide.title }}</h2>
            <p class="max-w-[780px] font-medium text-[24px] leading-[28.8px] text-left text-[#FFFFFFA3]">{{
              slide.description }}</p>
          </div>
        </div>
        </div>
      </div>
  
      <div class="flex justify-between items-center mt-4">
        <button @click="prevSlide" class="w-[160px] h-[64px] p-[20px_32px] rounded-[80px] border border-[#FFFFFF29] flex items-center justify-center gap-[10px]">
            <img src="../../assets/images/arrow-left.png" alt="Prev">
            <p class="text-[#FFFFFF] font-semibold text-[16px] leading-[16px] text-left">Prev</p>
        </button>
        <button @click="nextSlide" class="w-[160px] h-[64px] p-[20px_32px] rounded-[80px] border border-[#FFFFFF29] flex items-center justify-center gap-[10px]">
            <img src="../../assets/images/arrow-right.png" alt="Next">
            <p class="text-[#FFFFFF] font-semibold text-[16px] leading-[16px] text-left">Next</p>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import slideImg from '../../assets/images/video-show-case.png'
  
  const slides = ref([
    {
      title: 'Understanding Chronic Illness Management',
      description: 'Discover strategies for managing chronic conditions effectively. This video covers practical tips, lifestyle adjustments, and expert advice to improve quality of life.',
      image: slideImg
    },
    {
      title: 'Understanding Chronic Illness Management',
      description: 'Discover strategies for managing chronic conditions effectively. This video covers practical tips, lifestyle adjustments, and expert advice to improve quality of life.',
      image: slideImg
    },
    {
      title: 'Understanding Chronic Illness Management',
      description: 'Discover strategies for managing chronic conditions effectively. This video covers practical tips, lifestyle adjustments, and expert advice to improve quality of life.',
      image: slideImg
    }
  ])
  
  const currentSlide = ref(0)
  
  const prevSlide = () => {
    currentSlide.value = currentSlide.value > 0 ? currentSlide.value - 1 : slides.value.length - 1
  }
  
  const nextSlide = () => {
    currentSlide.value = currentSlide.value < slides.value.length - 1 ? currentSlide.value + 1 : 0
  }
  </script>
  
  <style scoped>
  </style>
  