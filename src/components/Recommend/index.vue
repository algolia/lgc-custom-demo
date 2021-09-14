<template>
  <div id="frequentlyBoughtTogether"></div>
</template>

<script>
import recommend from '../../recommend';
export default {
  name: "Recommend",
  data(){
    return{
      recommend
    }
  },
  mounted(){
    this.recommend
  }
};
</script>

<style></style>
