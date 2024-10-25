<template>
    <div class="mt-[150px] max-w-[1140px] ml-[150px]">
        <div class="flex flex-col items-center gap-[40px]">
            <div class="flex items-center gap-[16px]">
                <div class="w-[63px] h-[45px] p-[8px_16px] gap-[10px] rounded-[27px] border border-gray-300 flex items-center justify-center bg-[#1F293314] text-[#1F2933] font-medium text-[24px] leading-[28.8px] tracking[-0.02em] text-left">04</div>
                <p class="font-normal text-[64px] leading-[64px] tracking[-0.04em] text-left text-[#1F2933]">FAQs</p>
            </div>
            <div class="w-[280px] h-[78px] p-[4px] rounded-[40px] border border-gray-300 flex items-center gap-[44px]">
                <div class="w-[99px] h-[70px] p-[24px_40px] gap-[10px] rounded-[40px] bg-[#DAFF98]">
                    <p class="text-[#398B39] font-medium text-[16px] leading-[22.4px] text-left">All</p>
                </div>
                <div class="text-[#1F2933] font-medium text-[16px] leading-[22.4px] text-left">
                    Practitioner
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-[8px] mt-[40px]">
            <div v-for="(item, index) in data" :key="index">
                <FAQsItem :question="item.question" :answer="item.answer" />
            </div>
        </div>
    </div>
</template>

<script setup>
import FAQsItem from "./FAQsItem.vue"

const data = [
    {
        question: 'What is the purpose of this community?',
        answer: 'Our community aims to connect patients and doctors, fostering collaboration and support to enhance healthcare experiences for everyone involved.'
    },
    {
        question: 'How can I join the community?',
        answer: 'Our community aims to connect patients and doctors, fostering collaboration and support to enhance healthcare experiences for everyone involved.'
    },
    {
        question: 'Are there any membership fees?',
        answer: 'Our community aims to connect patients and doctors, fostering collaboration and support to enhance healthcare experiences for everyone involved.'
    },
    {
        question: 'Can I contribute content to the site?',
        answer: 'Our community aims to connect patients and doctors, fostering collaboration and support to enhance healthcare experiences for everyone involved.'
    },
    {
        question: 'How do I participate in events and webinars?',
        answer: 'Our community aims to connect patients and doctors, fostering collaboration and support to enhance healthcare experiences for everyone involved.'
    },
    {
        question: 'Are there guidelines for writing or recording my journey?',
        answer: 'Our community aims to connect patients and doctors, fostering collaboration and support to enhance healthcare experiences for everyone involved.'
    },
    {
        question: 'How is my privacy protected?',
        answer: 'Our community aims to connect patients and doctors, fostering collaboration and support to enhance healthcare experiences for everyone involved.'
    },
    {
        question: 'Can I edit or delete my story after posting?',
        answer: 'Our community aims to connect patients and doctors, fostering collaboration and support to enhance healthcare experiences for everyone involved.'
    },
]

</script>

<style scoped>
</style>