<template >
  <div class="absolute z-10 right-[160px] top-[80px]" :class="{ hidden: !isOpen }">

    <div class="max-w-[1140px] p-[40px] rounded-[24px] bg-[#FFFFFF]">
      <div>
        <h3 class="font-medium text-[24px] leading-[32px] text-customGray">
          Featured
        </h3>
        <div class="w-full border mt-[20px]"></div>
      </div>
      <div class="flex gap-[118.33px] mt-[20px]">
        <div class="max-w-[176px] flex flex-col gap-[20px]">
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Breast Cancer
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            IBD
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Migraine
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Multiple Sclerosis (MS)
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Rheumatoid Arthritis
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Type 2 Diabetes
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Sponsored Topics
          </p>
        </div>
        <div class="max-w-[176px] flex flex-col gap-[20px]">
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Acid Reflux
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            ADHD
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Allergies
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Alzheimer’s & Dementia
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Bipolar Disorder
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Cancer
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Crohn’s Disease
          </p>
        </div>
        <div class="max-w-[176px] flex flex-col gap-[20px]">
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Chronic Pain
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Cold & Flu
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            COPD
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Depression
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Fibromyalgia
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Heart Disease
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            High Cholesterol
          </p>
        </div>
        <div class="max-w-[176px] flex flex-col gap-[20px]">
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            HIV
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Hypertension
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            IPF
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Osteoarthritis
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Psoriasis
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            Skin Disorders Care
          </p>
          <p class="font-normal leading-[24px] text-customGray text-[16px]">
            STDs
          </p>
        </div>
      </div>
      <div class="mt-[40px] ">
        <button class="bg-customGray text-white p-[20px_32px] rounded-[40px]">
          Read More
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

</script>
<style >
</style>