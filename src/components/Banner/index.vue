<template>
  <ais-query-rule-custom-data >
    <template v-slot:item="{ item }">
      <div class="banner--wrapper">
        <h2>{{ item.title }}</h2>
        <a :href="item.link">
          <img :src="item.img" :alt="item.title" />
        </a>
      </div>
    </template>
  </ais-query-rule-custom-data>
</template>

<script>
export default {
  name: "Banner",
  components: {},
  data() {
    return {
     
    };
  },
  methods: {
    // transformItems(items) {
    //   console.log(items)
    //   const match = items.find((data) => Boolean(data.redirect));
    //   if (match && match.redirect) {
    //     window.location.href = match.redirect;
    //   }
    //   return [];
    // },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables/variables.scss";

.banner--wrapper {
  width: 100%;
  height: 30rem;
  overflow: hidden;
  position: relative;

  h2 {
    position: absolute;
    top: 30%;
    left: 20%;
    color: $seventh-color;
    font-size: 3rem;
  }
  img {
    width: 100%;
    object-fit: cover;
    object-position: -0rem -26rem;
  }
}
</style>
