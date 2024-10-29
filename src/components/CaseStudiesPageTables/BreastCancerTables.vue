<template>
    <div class="max-w-[1600px] mr-auto ml-auto p-6 mt-[150px]">
        <div class="flex items-center gap-[16px]">
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
        <div class="flex items-center gap-[16px] mt-[100px] mb-[60px]">
            <div
                class="w-[63px] h-[45px] p-[8px_16px] gap-[10px] rounded-[27px] border bg-[#BAD8F14D] border-[#1F293314] flex items-center justify-center text-[#1F2933] font-dm-sans text-[24px] font-medium leading-[28.8px] text-left">
                03</div>
            <h1 class="font-dm-sans text-[64px] font-normal leading-[64px] tracking-[-0.04em] text-left text-[#1F2933]">
                Western Medicine Diagnoses:</h1>
        </div>
        <UniversalTable :headers="headers2" :rows="rows2" />
    </div>
</template>

<script setup>
import UniversalTable from './UniversalTable.vue';

const headers1 = ['Modality', 'Success Rate', 'Didn’t Work', 'Success Stories', 'Key Insights'];
const rows1 = [
    ['Chemotherapy', '75%', '20%', '150', 'Effective in early detection cases.'],
    ['Chemotherapy', '75%', '20%', '150', 'Effective in early detection cases.'],
    ['Radiation Therapy', '25%', '15%', '130', 'Best results when paired with surgery.'],
    ['Surgery', '55%', '40%', '80', 'Complementary to traditional methods.']
];

const headers2 = ['Diagnosis', 'Prevalence', 'Key Inaights'];
const rows2 = [
    ['Invasive Ductal Carcinoma', '60% (200)', 'Most common type, responds well to combination therapy.'],
    ['Invasive Lobular Carcinoma', '25% (125)', 'Often requires tailored treatment plans.'],
    ['Triple-Negative Breast Cancer', '20% (100)', 'Aggressive but responsive to chemotherapy.'],
];
</script>