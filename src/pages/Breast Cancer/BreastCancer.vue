<template>
    <div>
        <Header />
        <HeaderCancerPage />
        <BreastCancerTables />
        <TextContainer />
        <RemarkableRecoveries/>
        <Footer />
    </div>
</template>

<script setup>
import HeaderCancerPage from "../../components/Header Cancer Page/HeaderCancerPage.vue"
import Header from "../../components/Header/Header.vue";
import BreastCancerTables from "../../components/CaseStudiesPageTables/BreastCancerTables.vue";
import TextContainer from "../../components/Text Container/TextContainer.vue";
import Footer from '../../components/Footer/Footer.vue';
import RemarkableRecoveries from "../../components/RemarkableRecoveries/RemarkableRecoveries.vue";

</script>

<style scoped></style>