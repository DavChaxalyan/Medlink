<template>
    <div>
        <Header />
        <HeaderCancerPage />
        <BreastCancerTables />
        <TextContainer />
        <ParticipantSummary/>
        <Footer />
    </div>
</template>

<script setup>
import ParticipantSummary from "../../components/ParticipantSummary/ParticipantSummary.vue";
import HeaderCancerPage from "../../components/Header Cancer Page/HeaderCancerPage.vue"
import Header from "../../components/Header/Header.vue";
import BreastCancerTables from "../../components/CaseStudiesPageTables/BreastCancerTables.vue";
import TextContainer from "../../components/Text Container/TextContainer.vue";
import Footer from '../../components/Footer/Footer.vue';

</script>

<style scoped></style>