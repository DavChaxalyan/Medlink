<template>
    <form>
    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700 transition duration-300 transform hover:scale-105">Name</label>
      <input
        type="text"
        required
        class="mt-1 p-[8px] block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:shadow-xl hover:border-blue-400"
        placeholder="Enter Your Name"
      />
    </div>
    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700 transition duration-300 transform hover:scale-105">Email</label>
      <input
        type="email"
        required
        class="mt-1 p-[8px] block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:shadow-xl hover:border-blue-400"
        placeholder="Enter Your Email"
      />
    </div>
    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700 transition duration-300 transform hover:scale-105">Password</label>
      <input
        type="password"
        required
        class="mt-1 p-[8px] block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:shadow-xl hover:border-blue-400"
        placeholder="Enter Your Password"
      />
    </div>
    <button
      type="submit"
      class="w-full bg-[#1F2933] text-white py-2 rounded-md hover:bg-[#1F2933] transition duration-300 transform hover:scale-105"
    >
      Register
    </button>
  </form>
  </template>
  
  <script setup>
  
  const emit = defineEmits(['register']);
  
  </script>
  
  <style scoped>
  </style>
  