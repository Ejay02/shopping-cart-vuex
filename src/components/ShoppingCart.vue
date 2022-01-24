<template>
  <div>
    <h1>Shopping Cart</h1>

    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotal"
    }),

    ...mapState("cart", {
      checkoutStatus: state => state.checkoutStatus
    })
  },

  methods: {
    ...mapActions("cart", ["checkout"])
  }
};
</script>

<style></style>
