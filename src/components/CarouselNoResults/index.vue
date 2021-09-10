<template>
  <div class="carousel-container">
    <ais-instant-search
      :search-client="searchClient"
      index-name="lgc-demo"
    >
      <ais-configure :hits-per-page.camel="7">
        <VirtualSearchBox :query="newQuery" style="display: none"/>
        <HitsCarouselBought />
      </ais-configure>
    </ais-instant-search>
  </div>
</template>

<script>
import HitsCarouselBought from "@/components/HitsCarouselBought";
import VirtualSearchBox from "@/components/VirtualSearchBox"
import algoliasearch from "algoliasearch/lite";
export default {
  props: ["query"],
  data() {
    return {
      newQuery: "",
      searchClient: algoliasearch(
        "RSBCBF0EG8",
        "e740caae53c72e09463a1117854491d5"
      ),
    };
  },
  methods: {
    queryMethod() {
      let newQueryValue = this.query.substring(0, 3);
      this.newQuery = newQueryValue.toString();
    },
  },
  components: {
    HitsCarouselBought,
    VirtualSearchBox
  },
  beforeMount() {
    this.queryMethod();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/variables.scss";
.carousel-container {
  width: 90%;
  margin: 5rem auto;
  h3 {
    font-family: "Oswald", sans-serif;
    color: $second-color;
    font-size: 2rem;
  }
}
</style>
