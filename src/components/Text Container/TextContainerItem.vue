<template>
    <div class="flex gap-[16px]"
        :style="{ borderBottom: count !== infoArray.length ? '1px solid rgba(31, 41, 51, 0.1)' : 'none', paddingBottom: count !== infoArray.length ? '24px' : '0px' }">
        <div>
            <div
                class="w-[53px] h-[40px] flex items-center justify-center p-2 px-4 gap-2 rounded-[27px] border border-[#1F293314] bg-[#BAD8F14D] text-[#1F2933] font-dm-sans text-[20px] font-medium leading-6 text-left">
                0{{ count }}</div>
        </div>
        <div class="flex flex-col gap-[16px]">
            <p class="text-[#1F2933] font-dm-sans text-[24px] font-medium leading-[40px] tracking[-0.02em] text-left">
                {{ title }}</p>
            <p class="max-w-[1071px] font-dm-sans text-[20px] font-medium leading-[24px] text-left text-[#1F2933A3]">{{
                description }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    count: Number,
    title: String,
    description: String,
    infoArray: Array
});
</script>

<style scoped></style>