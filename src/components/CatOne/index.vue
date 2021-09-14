<template>
  <div class="search-page">
    <Banner />
    <div class="hits-page">
      <Filters :showFilter="showFilter" />
        <div class="hits-wrapper">
        <div class="sort-and-stat">
          <ais-stats />
          </div>
     
          <!-- <ais-sort-by
            :items="[
              {
                value: 'rayban_merged',
                label: 'Relevancy',
              },
              {
                value: 'rayban_merged_price_dsc',
                label: 'Price Desc',
              },
              {
                value: 'rayban_merged_price_asc',
                label: 'Price Asc.',
              },
            ]"
          /> -->
        
        <ais-configure :userToken="userToken()" :hits-per-page.camel="21"  :enable-personalization.camel="true" />
        <transition name="fade">
         <Hits />
        </transition>
      </div>
    </div>
       <ais-pagination />
  </div>
</template>

<script>
import Filters from "@/components/Filters";
import Banner from "../Banner/index.vue";
import Hits from "../Hits/index.vue"
import { mapGetters, mapActions } from "vuex";
export default {
  name: "catOne",
  data() {
    return {
      showFilter: true,
    };
  },
  components: {
    Filters,
    Banner,
    Hits
  },
  methods: {
    showFiltersMethod() {
      this.showFilter = !this.showFilter;
    },
    userToken() {
      if (this.getPersonnaSelected == "Max Power") {
        return "Max-Power";
      }
      if (this.getPersonnaSelected == "Chuck Norris") {
        return "Chuck-Norris";
      }
      if (this.getPersonnaSelected == "Donna Smith") {
        return "Donna-Smith";
      }
      if (this.getPersonnaSelected == "Kyle Stuart") {
        return "Kyle-Stuart";
      }
    },
    ...mapActions("SearchModule", ["selectedProduct"]),
    ...mapActions("HeaderModule", ["svgClick"]),
  },
  computed: {
    ...mapGetters("PersonnaModule", ["getPersonnaSelected"]),
    
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/variables.scss";
@import "@/assets/scss/mixin.scss";

.search-page {
  width: 100%;
  margin: 0 auto;
  .hits-page {
    display: flex;
    width: 95%;
    margin: 0 auto;
    .hits-wrapper {
      position: relative;
      margin-top: 0rem;
      .sort-and-stat {
        position: absolute;
        top: -1rem;
        font-size: 0.8rem;
      }
    }
  }
  .search {
    width: 80%;
    margin: 0 auto;
  }
  .filterBtn {
    width: 10%;
    margin: 0 0 0 5.4em;
    display: -webkit-flex;
    display: flex;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    justify-content: space-between;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
