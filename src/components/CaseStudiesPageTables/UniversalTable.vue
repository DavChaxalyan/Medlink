<template>
    <div>
      <table class="min-w-full table-auto border-collapse border rounded-[24px] overflow-hidden">
        <thead>
          <tr>
            <th v-for="(header, index) in headers" :key="index" class="p-[24px] font-dm-sans text-[16px] font-semibold leading-[24px] text-left text-[#1F2933] bg-[#E4E9F3] border border-[#1F293314]">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="bg-[#F3F5F9] border-t">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="p-[24px] font-dm-sans text-[16px] font-semibold leading-[24px] text-left text-[#1F2933] border border-[#1F293314]">
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    headers: Array,
    rows: Array
  });
  </script>
  
  <style scoped>
  .table-auto th,
  .table-auto td {
    border-bottom: 1px solid #e5e7eb;
  }
  </style>