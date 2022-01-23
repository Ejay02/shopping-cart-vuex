<template>
  <div>
    <h1>Shopping Cart</h1>

    <ul>
      <li v-for="product in products">
        {{ product.title }} - {{ product.price | currency }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">{{ $store.state.checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: "cartProducts",
      total: "cartTotal"
    }),

    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),

    ...mapActions(['checkout'])
  }
};
</script>

<style></style>
