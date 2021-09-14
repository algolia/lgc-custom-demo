<template>
  <div>
    <ais-state-results>
      <template v-slot="{ results: { hits, query } }">
        <!-- <SearchBox :hits="hits"/> -->
        <h3 class="federated-title" v-if="hits.length > 0">Products</h3>
        <div class="sort-and-stat" v-if="hits.length > 0">
          <ais-stats />
        </div>
       <Hits v-if="hits.length > 0" />
        <!-- <ais-hits v-if="hits.length > 0">
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
        </ais-hits> -->
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
import Hits from "../Hits/index.vue"

export default {
  name: "SearchPage",
  props: ["hits"],
  components: {
    // SearchBox,
    Hits,
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


 
    .hit-item-sr{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .title{
        text-align: center;
        width: 100%;
        font-weight: bold;
        margin: 1rem 0;
    }
    .hits-wrapper {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .infos{
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                margin: 0.5rem;
            }
            p{
                font-weight: 300;
                font-size: 0.8rem;
                display: flex;
                flex-direction: column;
                span{
                    font-weight: bold;
                }
            }

          
        }

        .btn-infos{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

          .stock{
                border: 2px solid black;
                padding: 0.5rem;
                text-decoration: none;
                font-size: 0.8rem;
                text-align: center;
            }
            .accreditations{
                width: 100%;
                border: 2px solid #4a90e2;
                padding: 0.5rem;
                text-decoration: none;
                font-size: 0.8rem;
                margin-bottom: 0.5rem;
                 text-align: center;
            }

        .image-wrapper{
            width: 20%;
            img{
                width: 100%;
            }
        }
    
    }
  

  .cta{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem !important;
      padding-top:1rem !important;
      border-top: 1px solid rgb(216, 216, 216);

      h4{
          font-size: 1.2rem;
          font-weight: bold;
          color: #4a90e2;
      }

      .cart{
          background-color: #4a90e2;
          border-radius: 30px;
          padding: 0.5rem 1rem;
          color: white;
          display: flex;
          
          p{
              color: white;
          }
          svg{
              width: 15px;
              margin-right: 1rem;
          }
      }
  }

//SEARCHRESULT
.ais-Hits {
  width: 100%;
  margin: 0 auto;
}
.ais-Hits-list {
  // width: 80% !important;
  margin: 0rem 1rem;
  @include hits-list;

  /* .ais-Hits-list {
    @include hit-list;
  } */
}

.ais-Hits-item {
  width: 95% !important;
  background-color: white;
  padding: 1rem;
  margin: 1rem
  // @include hit-list;
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
