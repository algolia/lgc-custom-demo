<template>
  <div>
    <ais-search-box>
      <div class="searchBox-wrapper" slot-scope="{ refine }">
        {{refine(query)}}
        <input
          type="search"
          placeholder="Search..."
          :value="query"
          @change="refine(query)"
        />
      </div>
    </ais-search-box>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchBox",
  props: ["query"],
  methods: {
    ...mapActions("HeaderModule", ["svgClick", "searchNewQuery"]),
    ...mapActions("SearchModule", ["modifQuery"]),
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables/variables.scss";
@import "@/assets/scss/mixin.scss";
// SEARCHBOX

.searchBox-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
  }

  input {
    width: 100%;
    margin: 1rem auto;
    border-radius: 2px;
    border: 1px solid $third-color;
    padding: 0.6rem;
    background-color: $third-color;
    transition: 0.2s ease-in-out;

    &:focus {
      transition: 0.2s ease-in-out;
      background-color: $fourth-color;
      outline: none;
    }
  }
}

// VOICESEARCH

.ais-VoiceSearch {
  /* position: absolute;
  right: 3rem; */
  top: 30%;
  cursor: pointer;
  .ais-VoiceSearch-button {
    background: none !important;
    position: unset;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: none;
  }
  .ais-VoiceSearch-status {
    display: none !important;
  }
}
</style>
