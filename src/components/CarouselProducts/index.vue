<template>
  <div class="carousel-container">
    <h3>Recommandations</h3>
    <HitsCarouselReco />
    <h3>Bought together</h3>
    <ais-instant-search :search-client="searchClient" :index-name="appConfig.mainIndex">
      <ais-configure :hits-per-page.camel="7">
        <HitsCarouselBought />
      </ais-configure>
    </ais-instant-search>
  </div>
</template>

<script>
import HitsCarouselReco from "@/components/HitsCarouselReco";
import HitsCarouselBought from "@/components/HitsCarouselBought";
import algoliasearch from "algoliasearch/lite";

import { appConfig } from "../../configuration";
export default {
  data() {
    return {
      appConfig,
      searchClient: algoliasearch(appConfig.appId, appConfig.apiKey),
    };
  },
  components: {
    HitsCarouselReco,
    HitsCarouselBought,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/variables.scss";
.carousel-container {
  width: 90%;
  margin: 5rem auto;
  h3 {
    font-family: $main-font;
    color: #000;
    font-size: $bigger-font-size;
  }
}
</style>
