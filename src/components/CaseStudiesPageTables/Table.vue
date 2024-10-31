<template>
    <div class="max-w-[1600px] mr-auto ml-auto p-6">
        <router-link to="/">
            <div class="w-[175px] cursor-pointer flex items-center justify-start gap-[8px] mb-[66px] mt-[60px]">
                <img src="../../assets/images/back-icon.png" alt="back">
                <p class="text-[#0D0D0D] font-dm-sans text-[16px] font-normal leading-[20px] text-left">View All
                    Conditions</p>
            </div>
        </router-link>
        <div class="flex items-center gap-[16px] lg3:items-start">
            <div
                class="w-[63px] h-[45px] p-[8px_16px] gap-[10px] rounded-[27px] border bg-[#BAD8F14D] border-[#1F293314] flex items-center justify-center text-[#1F2933] font-dm-sans text-[24px] font-medium leading-[28.8px] text-left">
                02</div>
            <h1 class="font-dm-sans text-[64px] font-normal leading-[64px] tracking-[-0.04em] text-left text-[#1F2933]">
                Successful Treatment Analysis</h1>
        </div>
        <div class="mt-[24px] mb-[60px]">
            <p class="font-dm-sans text-[20px] font-medium leading-[24px] text-left text-[#1F2933A3]">Sample Size : 500
                Healing Stories</p>
        </div>
        <UniversalTable :headers="headers1" :rows="rows1" />
        <div class="mt-[32px] flex items-center justify-between">
            <div class="flex items-center justify-center gap-[8px] cursor-pointer">
                <p class="text-[#1F2933] font-dm-sans text-[16px] font-semibold leading-[16px] text-left">Read More</p>
                <img src="../../assets/images/mini-right-icon.png" alt="...">
            </div>
            <div
                class="w-[32px] h-[32px] p-[16px] gap-[10px] rounded-[40px] bg-[#ececec] flex items-center justify-center cursor-pointer">
                <img class="max-w-[30px]" src="../../assets/images/arrow-down-icon.png" alt="down">
            </div>
        </div>
        <div class="flex items-center gap-[16px] mt-[100px] mb-[60px] lg3:items-start">
            <div
                class="w-[63px] h-[45px] p-[8px_16px] gap-[10px] rounded-[27px] border bg-[#BAD8F14D] border-[#1F293314] flex items-center justify-center text-[#1F2933] font-dm-sans text-[24px] font-medium leading-[28.8px] text-left">
                03</div>
            <h1 class="font-dm-sans text-[64px] font-normal leading-[64px] tracking-[-0.04em] text-left text-[#1F2933]">
                Western Medicine Diagnoses:</h1>
        </div>
        <UniversalTable :headers="headers2" :rows="rows2" />
        <div class="mt-[32px] flex items-center justify-between">
            <div class="flex items-center justify-center gap-[8px] cursor-pointer">
                <p class="text-[#1F2933] font-dm-sans text-[16px] font-semibold leading-[16px] text-left">Read More</p>
                <img src="../../assets/images/mini-right-icon.png" alt="...">
            </div>
            <div
                class="w-[32px] h-[32px] p-[16px] gap-[10px] rounded-[40px] bg-[#ececec] flex items-center justify-center cursor-pointer">
                <img class="max-w-[30px]" src="../../assets/images/arrow-down-icon.png" alt="down">
            </div>
        </div>
    </div>
</template>

<script setup>
import UniversalTable from './UniversalTable.vue';

const headers1 = ['Modality', 'Success Rate', 'Didn’t Work', 'Success Stories', 'Key Insights'];
const rows1 = [
    ['Meditation', '80%', '10%', '160', 'High improvement in mental and emotional well-being.'],
    ['Acupuncture', '75%', '15%', '150', 'Effective for pain relief and overall balance.']
];

const headers2 = ['Diagnosis', 'Prevalence', 'Key Inaights'];
const rows2 = [
    ['Chronic Pain', '40% (200)', 'Commonly treated with physical therapy and acupuncture.'],
    ['Digestive Disorders', '25% (125)', 'Responded well to nutrition therapy and herbal remedies.'],
];
</script>