<template>
  <transition name="fade">
    <div v-if="showFilter" class="filters">
      <div class="filterBtn" @click="showFiltersMethod()">
        <p>Navigation & Filters</p>
        <div>
          <p v-if="!showFilters">-</p>
          <p v-else>+</p>
        </div>
      </div>
      <div>
        <div class="filters-content">
          <div class="title">
            <div
              style="display: flex;justify-content: space-between; width: 45%"
            >
              <h3>BRAND</h3>
              <svg
                width="20"
                height="25"
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="searchBranMethod()"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3259 14.9744C11.9651 15.9936 10.2762 16.5974 8.4471 16.5974C3.94908 16.5974 0.296997 12.9453 0.296997 8.4471C0.296997 3.94888 3.94908 0.296997 8.4471 0.296997C12.9453 0.296997 16.5974 3.94888 16.5974 8.4471C16.5974 10.2762 15.9936 11.9651 14.9744 13.3259L19.3617 17.7132C19.8168 18.1681 19.8168 18.9069 19.3617 19.3617C18.9069 19.8166 18.1681 19.8166 17.7132 19.3617L13.3259 14.9744V14.9744ZM14.4774 13.9277C14.3029 14.1196 14.1194 14.3031 13.9279 14.4774L18.2627 18.8122C18.4144 18.9639 18.6606 18.9639 18.8122 18.8122C18.9639 18.6606 18.9639 18.4144 18.8122 18.2627L14.4774 13.9277V13.9277ZM8.4471 1.07422C12.5164 1.07422 15.8202 4.37799 15.8202 8.4471C15.8202 12.5164 12.5164 15.8202 8.4471 15.8202C4.37799 15.8202 1.07422 12.5164 1.07422 8.4471C1.07422 4.37799 4.37799 1.07422 8.4471 1.07422V1.07422ZM8.4471 1.91224C4.84036 1.91224 1.91224 4.84036 1.91224 8.4471C1.91224 12.0538 4.84036 14.9821 8.4471 14.9821C12.0538 14.9821 14.9821 12.0538 14.9821 8.4471C14.9821 4.84036 12.0538 1.91224 8.4471 1.91224V1.91224ZM8.4471 2.68947C11.6249 2.68947 14.2049 5.26927 14.2049 8.4471C14.2049 11.6249 11.6249 14.2049 8.4471 14.2049C5.26927 14.2049 2.68947 11.6249 2.68947 8.4471C2.68947 5.26927 5.26927 2.68947 8.4471 2.68947V2.68947Z"
                  fill="black"
                />
              </svg>
            </div>
            <p @click="showShapeMethod()">-</p>
          </div>
          <ais-refinement-list
            v-if="!showShapes"
            attribute="brand.name"
            searchable
            show-more
          >
            <div
              slot-scope="{
                items,
                isFromSearch,
                refine,
                createURL,
                searchForItems,
              }"
            >
              <input
                v-if="searchBrandFilter"
                placeholder="Search our brand"
                @input="searchForItems($event.currentTarget.value)"
              />
              <ul>
                <li v-if="isFromSearch && !items.length">No results.</li>
                <li v-for="item in items" :key="item.value" class="filter-list">
                  <a
                    class="button-filter"
                    :href="createURL(item)"
                    @click.prevent="refine(item.value)"
                    :style="{
                      border: item.isRefined ? '1px solid #1f1f24' : '',
                    }"
                  >
                    <ais-highlight attribute="item" :hit="item" />
                  </a>
                </li>
              </ul>
            </div>
          </ais-refinement-list>
          <div class="line"></div>
        </div>
        <div class="filters-content">
          <div class="title">
            <div
              style="display: flex;justify-content: space-between; width: 45%"
            >
              <h3>ANALYTE NAME</h3>
              <svg
                width="20"
                height="25"
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="searchAnalyteMethod()"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3259 14.9744C11.9651 15.9936 10.2762 16.5974 8.4471 16.5974C3.94908 16.5974 0.296997 12.9453 0.296997 8.4471C0.296997 3.94888 3.94908 0.296997 8.4471 0.296997C12.9453 0.296997 16.5974 3.94888 16.5974 8.4471C16.5974 10.2762 15.9936 11.9651 14.9744 13.3259L19.3617 17.7132C19.8168 18.1681 19.8168 18.9069 19.3617 19.3617C18.9069 19.8166 18.1681 19.8166 17.7132 19.3617L13.3259 14.9744V14.9744ZM14.4774 13.9277C14.3029 14.1196 14.1194 14.3031 13.9279 14.4774L18.2627 18.8122C18.4144 18.9639 18.6606 18.9639 18.8122 18.8122C18.9639 18.6606 18.9639 18.4144 18.8122 18.2627L14.4774 13.9277V13.9277ZM8.4471 1.07422C12.5164 1.07422 15.8202 4.37799 15.8202 8.4471C15.8202 12.5164 12.5164 15.8202 8.4471 15.8202C4.37799 15.8202 1.07422 12.5164 1.07422 8.4471C1.07422 4.37799 4.37799 1.07422 8.4471 1.07422V1.07422ZM8.4471 1.91224C4.84036 1.91224 1.91224 4.84036 1.91224 8.4471C1.91224 12.0538 4.84036 14.9821 8.4471 14.9821C12.0538 14.9821 14.9821 12.0538 14.9821 8.4471C14.9821 4.84036 12.0538 1.91224 8.4471 1.91224V1.91224ZM8.4471 2.68947C11.6249 2.68947 14.2049 5.26927 14.2049 8.4471C14.2049 11.6249 11.6249 14.2049 8.4471 14.2049C5.26927 14.2049 2.68947 11.6249 2.68947 8.4471C2.68947 5.26927 5.26927 2.68947 8.4471 2.68947V2.68947Z"
                  fill="black"
                />
              </svg>
            </div>
            <p @click="showMaterialMethod()">-</p>
          </div>
          <transition name="fade">
            <ais-refinement-list
              v-if="!showMaterial"
              attribute="analyteName"
              searchable
              show-more
            >
              <div
                slot-scope="{
                  items,
                  isFromSearch,
                  refine,
                  createURL,
                  searchForItems,
                }"
              >
                <input
                  v-if="searchAnalyteFilter"
                  placeholder="Search our Analyte"
                  @input="searchForItems($event.currentTarget.value)"
                />
                <ul>
                  <li v-if="isFromSearch && !items.length">No results.</li>
                  <li
                    v-for="item in items"
                    :key="item.value"
                    class="filter-list"
                  >
                    <a
                      class="button-filter"
                      :href="createURL(item)"
                      @click.prevent="refine(item.value)"
                      :style="{
                        border: item.isRefined ? '1px solid #1f1f24' : '',
                      }"
                    >
                      <ais-highlight attribute="item" :hit="item" />
                    </a>
                  </li>
                </ul>
              </div>
            </ais-refinement-list>
          </transition>
          <div class="line"></div>
        </div>
        <div class="filters-content">
          <div class="title">
            <div
              style="display: flex;justify-content: space-between; width: 45%"
            >
              <h3>CAS NUMBER</h3>
              <svg
                width="20"
                height="25"
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="searchCasMethod()"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3259 14.9744C11.9651 15.9936 10.2762 16.5974 8.4471 16.5974C3.94908 16.5974 0.296997 12.9453 0.296997 8.4471C0.296997 3.94888 3.94908 0.296997 8.4471 0.296997C12.9453 0.296997 16.5974 3.94888 16.5974 8.4471C16.5974 10.2762 15.9936 11.9651 14.9744 13.3259L19.3617 17.7132C19.8168 18.1681 19.8168 18.9069 19.3617 19.3617C18.9069 19.8166 18.1681 19.8166 17.7132 19.3617L13.3259 14.9744V14.9744ZM14.4774 13.9277C14.3029 14.1196 14.1194 14.3031 13.9279 14.4774L18.2627 18.8122C18.4144 18.9639 18.6606 18.9639 18.8122 18.8122C18.9639 18.6606 18.9639 18.4144 18.8122 18.2627L14.4774 13.9277V13.9277ZM8.4471 1.07422C12.5164 1.07422 15.8202 4.37799 15.8202 8.4471C15.8202 12.5164 12.5164 15.8202 8.4471 15.8202C4.37799 15.8202 1.07422 12.5164 1.07422 8.4471C1.07422 4.37799 4.37799 1.07422 8.4471 1.07422V1.07422ZM8.4471 1.91224C4.84036 1.91224 1.91224 4.84036 1.91224 8.4471C1.91224 12.0538 4.84036 14.9821 8.4471 14.9821C12.0538 14.9821 14.9821 12.0538 14.9821 8.4471C14.9821 4.84036 12.0538 1.91224 8.4471 1.91224V1.91224ZM8.4471 2.68947C11.6249 2.68947 14.2049 5.26927 14.2049 8.4471C14.2049 11.6249 11.6249 14.2049 8.4471 14.2049C5.26927 14.2049 2.68947 11.6249 2.68947 8.4471C2.68947 5.26927 5.26927 2.68947 8.4471 2.68947V2.68947Z"
                  fill="black"
                />
              </svg>
            </div>
            <p @click="showGenderMethod()">-</p>
          </div>
          <transition name="fade">
            <ais-refinement-list
              v-if="!showGender"
              attribute="listCASNumber"
              searchable
              show-more
            >
              <div
                slot-scope="{
                  items,
                  isFromSearch,
                  refine,
                  createURL,
                  searchForItems,
                }"
              >
                <input
                  v-if="searchCasFilter"
                  placeholder="Search our CAS Number"
                  @input="searchForItems($event.currentTarget.value)"
                />
                <ul>
                  <li v-if="isFromSearch && !items.length">No results.</li>
                  <li
                    v-for="item in items"
                    :key="item.value"
                    class="filter-list"
                  >
                    <a
                      class="button-filter"
                      :href="createURL(item)"
                      @click.prevent="refine(item.value)"
                      :style="{
                        border: item.isRefined ? '1px solid #1f1f24' : '',
                      }"
                    >
                      <ais-highlight attribute="item" :hit="item" />
                    </a>
                  </li>
                </ul>
              </div>
            </ais-refinement-list>
          </transition>
          <div class="line"></div>
        </div>
        <!-- <div class="filters-content">
          <div class="title" @click="showColorMethod()">
            <h3>COLORS</h3>
            <p>-</p>
          </div>
          <transition name="fade">
            <ais-refinement-list
              v-if="!showColor"
              attribute="color"
              searchable
              show-more
            >
              <div slot-scope="{ items, isFromSearch, refine, createURL }">
                <ul>
                  <li v-if="isFromSearch && !items.length">No results.</li>
                  <li
                    v-for="item in items"
                    :key="item.value"
                    class="filter-list"
                  >
                    <a
                      class="button-filter"
                      :href="createURL(item)"
                      @click.prevent="refine(item.value)"
                      :style="{
                        border: item.isRefined ? '1px solid #1f1f24' : '',
                      }"
                    >
                      <ais-highlight attribute="item" :hit="item" />
                    </a>
                  </li>
                </ul>
              </div>
            </ais-refinement-list>
          </transition>
          <div class="line"></div>
        </div> -->
        <!-- <div class="filters-content">
          <div class="title" @click="showSizeMethod()">
            <h3>SIZE</h3>
            <p>-</p>
          </div>
          <transition name="fade">
            <ais-refinement-list
              v-if="!showSize"
              attribute="size"
              searchable
              show-more
            >
              <div slot-scope="{ items, isFromSearch, refine, createURL }">
                <ul>
                  <li v-if="isFromSearch && !items.length">No results.</li>
                  <li
                    v-for="item in items"
                    :key="item.value"
                    class="filter-list"
                  >
                    <a
                      class="button-filter"
                      :href="createURL(item)"
                      @click.prevent="refine(item.value)"
                      :style="{
                        border: item.isRefined ? '1px solid #1f1f24' : '',
                      }"
                    >
                      <ais-highlight attribute="item" :hit="item" />
                    </a>
                  </li>
                </ul>
              </div>
            </ais-refinement-list>
          </transition>
          <div class="line"></div>
        </div> -->
        <!-- <div class="filters-content">
          <div class="title">
            <h3>PRICE</h3>
            <p>-</p>
          </div>
          <ais-range-input attribute="price">
            <div slot-scope="{ currentRefinement, range, refine }">
              +
              {{ range }}
              <vue-slider
                :min="range.min"
                :max="range.max"
                :value="toValue(currentRefinement, range)"
                @change="refine({ min: $event[0], max: $event[1] })"
              />
            </div>
          </ais-range-input>
          <div class="line"></div>
        </div> -->
      </div>
    </div>
  </transition>
</template>

<script>
// import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
export default {
  name: "Filters",
  components: {
    // VueSlider,
  },
  props: ["showFilter"],
  data() {
    return {
      showColor: false,
      showMaterial: false,
      showFilters: false,
      showShapes: false,
      showGender: false,
      showSize: false,
      searchBrandFilter: false,
      searchCasFilter: false,
      searchAnalyteFilter: false,
    };
  },
  methods: {
    showColorMethod() {
      this.showColor = !this.showColor;
    },
    showMaterialMethod() {
      this.showMaterial = !this.showMaterial;
    },
    showShapeMethod() {
      this.showShapes = !this.showShapes;
    },
    showGenderMethod() {
      this.showGender = !this.showGender;
    },
    showSizeMethod() {
      this.showSize = !this.showSize;
    },
    toValue(value, range) {
      return [
        value.min !== null ? value.min : range.min,
        value.max !== null ? value.max : range.max,
      ];
    },
    searchBranMethod() {
      this.searchBrandFilter = !this.searchBrandFilter;
    },
    searchAnalyteMethod() {
      this.searchAnalyteFilter = !this.searchAnalyteFilter;
    },
    searchCasMethod() {
      this.searchCasFilter = !this.searchCasFilter;
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  width: 25%;
  will-change: width;
  margin: 0 auto;
  .filterBtn {
    display: -webkit-flex;
    display: flex;
    margin: 1.2em 0;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    justify-content: space-between;

    :nth-child(1) {
      /* margin-right: 0.5rem; */
    }

    p {
      font-size: 0.8rem;
    }
  }
  .filters-content {
    .line {
      border-bottom: 1px solid #e2e2e5;
      width: 70%;
      margin: 1em auto 1em auto;
    }
    .filter-list {
      width: 100%;
      .button-filter {
        border: 1px solid #e2e2e5;
        text-decoration: none;
        color: #1f1f24;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        margin: 0.5rem 0;
        padding: 0.8em;
        font-size: 0.8rem;
        background-color: white;
        transition: all 0.2s ease-in-out;
      }
    }
    .title {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-size: 1rem;
        color: #1f1f24;
        text-transform: uppercase;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.ais-RefinementList {
  input {
    width: 70%;
    border: none;
    height: 2rem;
  }
}
</style>
