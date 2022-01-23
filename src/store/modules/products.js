export default {
  state: {
    items: []
  },
  getters: {
    availableProducts(state, getters) {
      return state.items.filter(product => product.inventory > 0);
    },

    productIsInStock() {
      return product => {
        return product.inventory > 0;
      };
    }
  },
  mutations: {
    setProducts(state, products) {
      // ☝🏽  update products
      state.products = products;
    },

    decrementProductInventory(state, cartItem) {
      product.quantity--;
    }
  },
  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve, reject) => {
        //  ☝🏽 make the call
        //   call set products mutation
        shop.getProducts(products => {
          commit("setProducts", products);
          resolve();
        });
      });
    }
  }
};
