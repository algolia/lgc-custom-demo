<template>
  <ais-hits>
    <div
      @click="selectedProduct(item), svgClick()"
      class="hit-item-sr"
      slot="item"
      slot-scope="{ item }"
    >
      <ais-highlight attribute="name" :hit="item" class="title" />
      <div class="hits-wrapper">
        <div class="image-wrapper">
          <img
            v-if="item.brand.logo"
            :src="'https://www.lgcstandards.com/' + item.brand.logo.url"
            alt=""
          />
          <img
            style="width: 55%"
            v-else
            src="https://images.unsplash.com/photo-1531956656798-56686eeef3d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
            alt=""
          />
        </div>
        <div class="infos">
          <div class="infos-product">
            <p class="product-code">
              Product code : <span class="bold">{{ item.code }}</span>
            </p>
            <p>
              Molecular formula:
              <span class="bold">{{ item.listMolecularFormula[0] }}</span>
            </p>
          </div>
          <div class="infos-cas">
            <div class="cas-number">
              <p>
                Cas number:
                <span class="bold" style="display-flex">
                  <ais-highlight :hit="item" :attribute="'listCASNumber.' + 0" />
                </span>
              </p>
               <div class="more-wrapper" v-if="item.listCASNumber.length - 1 > 0">
                <p class="more">+ {{ item.listCASNumber.length - 1 }} more</p>
            </div>
            </div>
            <p>
              Molecular weight:
              <span class="bold">{{ item.listMolecularWeight[0] }}</span>
            </p>
          </div>
         
        </div>
        <div class="btn-infos">
          <!-- <a class="accreditations">{{getAccred(item.accreditations)}}</a> -->
          <a class="stock">Stock: {{ item.stockQty }}</a>
        </div>
      </div>
      <div class="analyte-wrapper">
        <p class="title-analyte">AnalyteName:</p>
        <!-- {{ percentageMethod(item, item.analyteName) }}
        <p v-if="percentage">Matched analyte:{{ percentage }}%</p> -->
        <ul class="analyte-names">
          <li v-for="(tag, index) in item.analyteName" :key="tag">
            <ais-highlight :hit="item" :attribute="'analyteName.' + index" />
            <span v-if="index < item.analyteName.length - 1">, </span>
          </li>
        </ul>
      </div>
      <div class="cta">
        <h4>Product Details</h4>
        <a class="cart">
          <svg
            viewBox="0 0 96 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M94.8001 14.5999C94.2001 13.7999 93.3001 13.3999 92.3001 13.3999H24.1001L21.8001 2.8999C21.5001 1.3999 20.2001 0.399902 18.7001 0.399902H3.80011C2.00011 0.399902 0.600098 1.79985 0.600098 3.59985C0.600098 5.39985 2.00011 6.79987 3.80011 6.79987H16.2001L29.2001 66.1999C29.5001 67.6999 30.8001 68.6998 32.3001 68.6998H82.8001C84.6001 68.6998 86.0001 67.2999 86.0001 65.4999C86.0001 63.6999 84.6001 62.2999 82.8001 62.2999H34.9001L33.3001 54.9999H84.4001C85.9001 54.9999 87.2001 53.9999 87.5001 52.4999L95.5001 17.2999C95.6001 16.3999 95.4001 15.3999 94.8001 14.5999Z"
              fill="white"
            />
            <path
              d="M76.2001 87.5999C80.3975 87.5999 83.8001 84.1972 83.8001 79.9999C83.8001 75.8025 80.3975 72.3999 76.2001 72.3999C72.0028 72.3999 68.6001 75.8025 68.6001 79.9999C68.6001 84.1972 72.0028 87.5999 76.2001 87.5999Z"
              fill="white"
            />
            <path
              d="M39.1 87.5999C43.2973 87.5999 46.7 84.1972 46.7 79.9999C46.7 75.8025 43.2973 72.3999 39.1 72.3999C34.9026 72.3999 31.5 75.8025 31.5 79.9999C31.5 84.1972 34.9026 87.5999 39.1 87.5999Z"
              fill="white"
            />
          </svg>
          <p>Add to cart</p></a
        >
      </div>
    </div>
  </ais-hits>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Hits",
  data() {
    return {
      showFilter: true,
      percentage: null,
    };
  },
  components: {},
  methods: {
    ...mapActions("SearchModule", ["selectedProduct"]),
    ...mapActions("HeaderModule", ["svgClick"]),
    percentageMethod: function(item, total) {
      let num = 0;
      item._highlightResult.analyteName.map((element) => {
        console.log("element.matchedWords.length", element.matchedWords.length);
        if (element.matchedWords.length > 0) {
          console.log("JE SUIS DANS LE IF");
          let percentage = num++;
          // console.log("PERCENTAGE", percentage);
          // console.log("TOTAL", total.length);
          let calcul = (percentage / total.length) * 100;
          // console.log("RETURN", calcul);
          this.percentage = Math.round(calcul);
        } else {
          console.log("JE SUIS DANS LE ELSE");
          this.percentage = 0;
        }
      });
    },
    // getAccred(hit){
    //     hit.map(e => console.log(e))
    // }
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
    width: 100%;
    margin: 0 auto;
    .hit-item-sr {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .title {
      text-align: center;
      width: 100%;
      font-weight: bold;
      margin: 1rem 0;
    }
    .hits-wrapper {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      position: relative;

      .infos {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          margin: 0.5rem;
        }
        p {
          font-weight: 300;
          font-size: $small-font-size;
          display: flex;
          flex-direction: column;
          span {
            font-weight: bold;
          }
        }
      }

      .btn-infos {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }

      .stock {
        border: 2px solid black;
        padding: 0.5rem;
        text-decoration: none;
        font-size: $small-font-size;
        text-align: center;
      }
      .accreditations {
        width: 100%;
        border: 2px solid #4a90e2;
        padding: 0.5rem;
        text-decoration: none;
        font-size: $small-font-size;
        margin-bottom: 0.5rem;
        text-align: center;
      }

      .image-wrapper {
        width: 20%;
        img {
          width: 100%;
        }
      }
    }
  }

  .cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgb(216, 216, 216);

    h4 {
      font-size: $bigger-font-size;
      font-weight: bold;
      color: #4a90e2;
    }

    .cart {
      background-color: #4a90e2;
      border-radius: 30px;
      padding: 0.5rem 1rem;
      color: white;
      display: flex;

      p {
        color: white;
      }
      svg {
        width: 15px;
        margin-right: 1rem;
      }
    }
  }

  .sort-and-stat {
    padding: 0 5em;
  }

  .ais-Hits-item {
    background-color: white;
    padding: 1rem;
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

.analyte-wrapper {
  width: 80%;
  margin: 1rem auto 0 auto;
  .title-analyte {
    font-size: 0.8rem;
    font-weight: 500;
  }
  .analyte-names {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    li {
      margin-right: 0.3rem;
      font-size: $xsmall-font-size;
      font-weight: 300;
    }
  }
}
.more-wrapper{
  margin: 0 !important;
  
.more {
  font-size: $xsmall-font-size !important;
}
}

.infos-product .infos-cas{
  p{
    margin: 0.5rem;
  }
}

.product-code{
  margin-bottom: 1rem;
}

.cas-number{
  margin: 0 !important;
  margin-bottom: 0.3rem !important;
}

</style>
