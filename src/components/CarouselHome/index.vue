<template>
  <ais-instant-search
    :search-client="searchClient"
    :index-name="appConfig.mainIndex"
  >
    <div class="carousel-container">
      <h3>Our Products</h3>
      <ais-configure :hits-per-page.camel="7" ruleContexts="carousel-home"/>
      <HitsCarouselHome />
    </div>
  </ais-instant-search>
</template>

<script>
import HitsCarouselHome from "@/components/HitsCarouselHome";
import algoliasearch from "algoliasearch/lite";
import { appConfig } from "../../configuration";
export default {
  data() {
    return {
      appConfig,
      showFederatedSearch: true,
      searchClient: algoliasearch(appConfig.appId, appConfig.apiKey),
    };
  },
  components: {
    HitsCarouselHome,
  },
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 90%;
  margin: 5rem auto;
  h3 {
    font-family: "Oswald", sans-serif;
    color: #000;
    font-size: 2rem;
  }
}
</style>
