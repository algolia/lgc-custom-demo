<template>
  <div>
    <ais-state-results>
      <template v-slot="{ results: { hits, query } }">
        <!-- <SearchBox :hits="hits"/> -->
        <h3 class="federated-title" v-if="hits.length > 0">Products</h3>
        <div class="sort-and-stat" v-if="hits.length > 0">
          <ais-stats />
        </div>
       
        <ais-hits v-if="hits.length > 0">
          <div
            class="hits-wrapper"
            slot="item"
            slot-scope="{ item }"
            @click="selectedProduct(item)"
          >
            <div class="image-wrapper">
              <img
                :src="'https://www.lgcstandards.com/' + item.brand.logo.url"
                alt=""
              />
            </div>
            <div class="infos">
              <ais-highlight attribute="name" :hit="item" />
            </div>
            <p class="prices">
              To view pricing
              <br />
              <span>Login/Register</span>
            </p>
          </div>
        </ais-hits>
        <div v-else>
          <p class="not-found">
            Hmmmm, we didn't find anything for <span>'{{ query }}'</span>.<br />
            Try a different earch term or check out our suggestions below
          </p>
          <CarouselNoResults :query="query"/>
        </div>
        <ais-pagination v-if="hits.length > 0" />
      </template>
    </ais-state-results>
  </div>
</template>
<script>
// import SearchBox from "@/components/SearchBox";
import { mapActions } from "vuex";
import CarouselNoResults from "@/components/CarouselNoResults";

export default {
  name: "SearchPage",
  props: ["hits"],
  components: {
    // SearchBox,
    CarouselNoResults,
  },
  methods: { ...mapActions("SearchModule", ["selectedProduct"]) },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables/variables.scss";
@import "@/assets/scss/mixin.scss";
.searchPanel-results {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 3rem auto;
  position: relative;

  .filters-wrapper {
    width: 20%;
    will-change: width;
  }

  .hits-wrapper {
    width: 100%;
  }
}
//SORT BY and STATS

.sort-and-stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: -1rem auto 2rem auto;
  .ais-Stats-text {
    color: $sixth-color;
  }
}
.ais-SortBy-select {
  @include btn;
  .ais-SortBy-option {
    color: $sixth-color;
    @include title;
  }
}

//SEARCHRESULT
.ais-Hits {
  width: 90%;
  margin: 0 auto;
}
.ais-Hits-list {
  width: 80% !important;
  margin: 0 auto;
  @include hits-list;

  /* .ais-Hits-list {
    @include hit-list;
  } */
}

.ais-Hits-item {
  width: 95% !important;
  @include hit-list;
}

.searchPanel-results {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 3rem auto;
  position: relative;

  .filters-wrapper {
    width: 20%;
    will-change: width;
  }

  .hits-wrapper {
    width: 100%;
  }
}

.federated-title {
  margin-left: 3rem;
  margin-bottom: 1rem;
}

.prices {
  span {
    color: $second-color;
    font-weight: 400;
  }
}

/* Not Found */
.not-found {
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  span {
    font-style: italic;
    color: $second-color;
  }
}
</style>
