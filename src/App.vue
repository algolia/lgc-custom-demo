<template>
  <div>
    <ais-instant-search
      :search-client="searchClient"
      index-name="lgc-demo"
    >
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
      showFederatedSearch: true,
      searchClient: algoliasearch(
        "RSBCBF0EG8",
        "e740caae53c72e09463a1117854491d5"
      ),
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
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables/variables.scss";
body{
  background-color: $primary-color;
}
</style>
