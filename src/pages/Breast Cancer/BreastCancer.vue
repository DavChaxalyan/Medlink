<template>
    <div>
        <Header />
        <ParticipantSummary/>
        <BreastCancerTables />
        <TextContainer />
        <Footer />
    </div>
</template>

<script setup>
import ParticipantSummary from "../../components/ParticipantSummary/ParticipantSummary.vue";
import Header from "../../components/Header/Header.vue";
import BreastCancerTables from "../../components/CaseStudiesPageTables/BreastCancerTables.vue";
import TextContainer from "../../components/Text Container/TextContainer.vue";
import Footer from '../../components/Footer/Footer.vue';

</script>

<style scoped></style>