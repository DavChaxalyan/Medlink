<template>
    <div>
        <Header />
        <BreastCancerHeader />
        <Table />
        <BreastCase />
        <Footer />
    </div>
</template>

<script setup>
import Header from "../../components/Header/Header.vue";
import BreastCase from "../../components/BreastCancer/BreastCase.vue";
import BreastCancerHeader from "../../components/Breast Cancer Header/BreastCancerHeader.vue";
import Table from "../../components/CaseStudiesPageTables/Table.vue";
import Footer from '../../components/Footer/Footer.vue';

</script>

<style scoped></style>