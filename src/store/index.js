import Vue from "vue";
import Vuex from "vuex";
import actions from "../store/actions";
import cart from "./modules/cart";
import products from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  // = state is  = data
  state: {},

  //getters = computed properties
  getters: {},

  actions: actions,

  mutations: {}
});
