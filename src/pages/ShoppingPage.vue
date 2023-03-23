<template>
  <section>
    <landing-page />
    <div class="container">
      <fill-cart v-if="cart.length" />
      <empty-cart v-else="cart.length" />
    </div>
    <!-- end continaer -->
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import EmptyCart from "@/components/Cart/EmptyCart.vue";
import fillCart from "@/components/Cart/fillCart.vue";
export default {
  components: {
    EmptyCart,
    fillCart,
  },
  computed: {
    ...mapGetters({
      cart: "products/cart",
    }),
  },
};
</script>
<style scoped>
.container {
  margin: var(--margin) auto;
}
</style>


