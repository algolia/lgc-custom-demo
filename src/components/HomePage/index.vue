<template>
  <div class="homepage-wrapper">
    <div>
      <img :src="img0" alt="home" />
    </div>
    <CarouselHome />
    <div>
      <img :src="img1" alt="home" />
    </div>
    <div>
      <img :src="footer" alt="home" />
    </div>
  </div>
</template>

<script>
import rbVideo from "@/assets/Videos/rbVideo.webm";
import img0 from "@/assets/images/img0.png";
import img1 from "@/assets/images/img1.png";
import footer from "@/assets/images/footer.png";
import CarouselHome from "@/components/CarouselHome";

export default {
  data() {
    return {
      rbVideo,
      img0,
      img1,
      footer,
    };
  },
  components: {
    CarouselHome,
  },
};
</script>

<style lang="scss" scoped>
.homepage-wrapper {
  z-index: 0;
  position: absolute;
  img,
  video {
    width: 100%;
  }
}
</style>
