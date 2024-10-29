<template>
    <div class="mt-[150px] bg-[#E4ECF7] rounded-[40px] py-[80px]">
        <div class="flex flex-col gap-[24px] mx-auto max-w-[1200px]">
            <div v-for="(item, ind) in infoArray" :key="ind">
                <TextContainerItem :title="item.title" :description="item.description" :count="ind + 1" :infoArray="infoArray" />
            </div>
        </div>
    </div>
</template>

<script setup>
import TextContainerItem from './TextContainerItem.vue';

const infoArray = [
    {
        title: "Understanding Symptoms and Diagnoses",
        description: "Patients often report symptoms like lumps, pain, and changes in breast shape. Diagnoses can vary widely, with Western medicine focusing on imaging and biopsies, while Eastern approaches might consider energy imbalances. Accurate diagnosis is key to determining the right treatment path."
    },
    {
        title: "Trial and Error in Treatments",
        description: "Not every treatment works for everyone. Some patients found certain medications or therapies ineffective due to side effects or lack of improvement. This highlights the need for personalized treatment plans that consider individual health profiles and preferences."
    },
    {
        title: "Best Healing Methods",
        description: "Our analysis shows that a combination of chemotherapy, surgery, and radiation therapy often yields the highest success rates. Early detection plays a crucial role in the effectiveness of these treatments. Many patients have also found value in incorporating alternative therapies, such as acupuncture and mindfulness, to manage side effects and improve overall well-being."
    },
    {
        title: "Healing Journeys",
        description: "Patients report that the journey through breast cancer treatment is highly personal and varies greatly. Common themes include the importance of a strong support network, staying informed about treatment options, and maintaining a positive mindset. Many have shared stories of resilience and adaptability, highlighting the significance of mental and emotional strength alongside physical treatment."
    },
    {
        title: "Advice for Others",
        description: "Those who have successfully navigated their healing journey often advise others to seek multiple opinions, stay proactive in managing their health, and explore integrative therapies that align with their values and lifestyle. Building a supportive community and prioritizing self-care are also frequently emphasized as key components of recovery."
    }
];
</script>

<style scoped></style>