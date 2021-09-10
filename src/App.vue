<template>
  <div>
    <ais-instant-search :search-client="searchClient" :index-name="appConfig.mainIndex">
      <Header @showFederatedSearch="showFederatedSearchMethod" />
      <HomePage v-if="!getCatOne && !getCatTwo" />
      <CatOne v-if="getCatOne" />
      <CatTwo v-if="getCatTwo" />
      <Modal v-if="getShowModal" />
    </ais-instant-search>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HomePage from "@/components/HomePage";
import Modal from "@/components/Modal";
import CatOne from "@/components/CatOne";
import CatTwo from "@/components/CatTwo";
import { mapGetters } from "vuex";
import algoliasearch from "algoliasearch/lite";

import { appConfig } from "./configuration";

export default {
  components: {
    Header,
    HomePage,
    Modal,
    CatOne,
    CatTwo,
  },
  data() {
    return {
      appConfig,
      showFederatedSearch: true,
      searchClient: algoliasearch(appConfig.appId, appConfig.apiKey),
    };
  },
  methods: {
    showFederatedSearchMethod(value) {
      this.showFederatedSearch = value;
    },
  },
  computed: {
    ...mapGetters("HeaderModule", [
      "getShowFederatedSearch",
      "getShowModal",
      "getCatTwo",
      "getCatOne",
    ]),
    ...mapGetters("ConfigModule", ["getId", "getApiKey"]),
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables/variables.scss";
body {
  background-color: $primary-color;
}
</style>
