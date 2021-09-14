<template>
  <div>
    <p class="close-modal" @click="closeModal">X</p>
    <div class="modal-detail">
          <h2>{{ getProductDetails.name }}</h2>
      <div class="product-side">
        <div class="modal-infos">
          <p>{{ getProductDetails.description }}</p>
           <div class="infos">
               <div>
                <p>Product code : <span class="bold">{{getProductDetails.code}}</span></p>
                <p>Molecular formula: <span class="bold">{{getProductDetails.listMolecularFormula[0]}}</span> </p>
                <p>Cas number: <span class="bold">{{getProductDetails.listCASNumber[0]}}</span></p>
                </div>
                <div>
                <p>Molecular weight: <span class="bold">{{getProductDetails.listMolecularWeight[0]}}</span></p>
                <p>Matrix: <span class="bold">{{getProductDetails.variantMatrix}}</span></p>
                <p>ProductType: <span class="bold">{{getProductDetails.productType}}</span></p>
                </div>
            </div>
       
        </div>
        <div class="modal-images">
          <img
            :src="'https://www.lgcstandards.com/' + getProductDetails.brand.logo.url"
            alt=""
          />
        </div>
    </div>
    <div class="stock-infos">
      <p class="pack-size">Pack size : </p>
      <div class="details">
        <a class="stock">Stock: {{getProductDetails.stockQty}}</a>
        <div>
        <p>Estimated dispatch</p>
        <p>{{getProductDetails.stockmessage}}</p>
        </div>
      </div>
      <div>
        <img :src="addToCart" alt="">
      </div>
    </div>
    </div>
    <div class="modal-image">
      <img :src="pdp" alt="">
    </div>
    <!-- <CarouselProducts /> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import pdp from "@/assets/images/pdp.png";
import addToCart from "@/assets/images/addToCart.png";

// import CarouselProducts from "@/components/CarouselProducts";

export default {
  components: {
    // CarouselProducts,
  },
  data() {
    return {
      pdp,
      addToCart
    };
  },
  computed: {
    ...mapGetters("SearchModule", ["getProductDetails"]),
  },
  methods: {
    ...mapActions("SearchModule", ["closeModal"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/variables.scss";
.modal-detail {
  padding: 2rem;
  width: 100%;
  border-radius: 3px;
  background-color: #e9ebee;
  .product-side {
    margin: 2rem auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-infos{
      width: 80%;
    }

    .infos{
      display: flex;
      justify-content: space-evenly;
      width: 90%;
      background-color: white;
      border-radius: 10px;
      div{
        margin: 1rem;

        p{
          margin-top: 1rem;
          font-weight: 300;
          display: flex;
          flex-direction: column;
          justify-content: center;
          
        }

        .bold{font-weight: 500;}
      }
    }

    .modal-images{
      background-color: white;
      border-radius: 10px;
      height: 100%;
      width: 30%;
      height: 11.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img{width: 70%;}
    }
  }
  

  .stock-infos{
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .pack-size{
      width: 20%;
    }
    .details{
      width: 40%;
      div{

        margin-top: 1rem;
      }
      }
    .stock{
      font-size: 1.2rem;
      font-weight: bold;
      font-family: $main-font;
      margin-bottom: 2rem;
    }


  }

  .fake-filters {
    width: 60%;
    .modal-infos {
      margin-top: 3rem;
      width: 80%;
      h3,
      p {
        margin: 1rem 0;
      }
      .btn-modal {
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
        cursor: pointer;
        width: 30%;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-align-items: center;
        align-items: center;
        margin-top: 3rem;
      }
    }
    img {
      width: 100%;
      object-fit: cover;
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }
}


    .modal-image {
      display: flex;
      align-items: center;
      width: 100%;
     
      img {
        width: 100%;
      }
    }
.close-modal {
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
}
</style>
