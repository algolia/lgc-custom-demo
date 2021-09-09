<template>
  <div class="carousel-container">
    <h3>Recommandations</h3>
    <HitsCarouselReco />
    <h3>Bought together</h3>
    <ais-instant-search
      :search-client="searchClient"
      index-name="lgc-demo"
    >
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
export default {
  data() {
    return {
      searchClient: algoliasearch(
        "RSBCBF0EG8",
        "e740caae53c72e09463a1117854491d5"
      ),
    };
  },
  components: {
    HitsCarouselReco,
    HitsCarouselBought,
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
