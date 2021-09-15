<template>
  <div class="search-page">
    <Banner />
    <div class="hits-page">
      <div class="filters--catOne">
        <ais-state-results>
          <template slot-scope="{ hits }">
            <Filters :showFilter="showFilter" v-if="hits.length" />
            <div v-else></div>
          </template>
        </ais-state-results>
      </div>
      <div class="hits-wrapper">
        <div class="sort-and-stat">
          <ais-state-results>
            <template slot-scope="{ hits }">
              <ais-stats v-if="hits.length" />
              <div v-else></div>
            </template>
          </ais-state-results>
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

        <ais-configure
          :userToken="userToken()"
          :hits-per-page.camel="21"
          :enable-personalization.camel="true"
        />
        <transition name="fade">
          <ais-state-results>
            <template slot-scope="{ query, hits }">
              <!-- First condition -->
              <div v-if="!hits.length">
                <p class="not-found">
                  Hmmmm, we didn't find anything for
                  <span>'{{ query }}'</span>.<br />
                  Try a different search term or check out our suggestions below
                </p>
                <CarouselNoResults :query="query" />
              </div>
              <!-- Second condition -->
              <Hits v-else />
            </template>
          </ais-state-results>
        </transition>
      </div>
    </div>
    <ais-state-results>
      <template slot-scope="{ hits }">
        <ais-pagination v-if="hits.length"/>
        <div v-else></div>
      </template>
    </ais-state-results>
  </div>
</template>

<script>
import Filters from "@/components/Filters";
import Banner from "../Banner/index.vue";
import CarouselNoResults from "@/components/CarouselNoResults";
import Hits from "../Hits/index.vue";
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
    Hits,
    CarouselNoResults,
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
    .ais-StateResults{
      width: 100%;
    }
    .hits-wrapper {
      position: relative;
      margin-top: 0rem;
      width: 80%;
      .sort-and-stat {
        position: absolute;
        top: 4rem;
        left: 2rem;
        font-size: $small-font-size;
      }
    }
  }

  .filters--catOne{
    width: 20%;
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
