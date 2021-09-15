const SearchModule = {
  namespaced: true,
  state: {
    query: null,
    ProductDetails: null,
  },
  getters: {
    getQuery(state) {
      return state.query;
    },
    getProductDetails(state) {
      return state.ProductDetails;
    },
  },
  actions: {
    modifQuery({ commit }, value) {
      commit("MODIF_QUERY", value);
    },
    selectedProduct({ commit }, value) {
      commit("SELECTED_PRODUCT", value);
    },
    closeModalProduct({commit}){
      commit("CLOSE_MODAL_PRODUCT", null);
    },
    deleteProducts({commit}){
      commit("DELETE_PRODUCTS")
    }
  },
  mutations: {
    MODIF_QUERY(state, value) {
      state.query = value;
    },
    SELECTED_PRODUCT(state, value) {
      state.ProductDetails = value;
    },
    DELETE_PRODUCTS(state){
      state.ProductDetails = null
    },
    CLOSE_MODAL_PRODUCT(state, value){
      state.ProductDetails = value;
    }
  },
};

export default SearchModule;
