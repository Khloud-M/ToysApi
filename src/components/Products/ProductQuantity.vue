<template>
  <div class="quanty d-flex gap-3">
    <button @click="decrementQty">-</button>
    <span>
      {{ selectitem.qty }}
    </span>
    <button
      @click="increaseQty"
      :disabled="selectitem.qty >= selectitem.quantity"
    >
      +
    </button>
  </div>
  <!-- :disabled="selectitem.qty >= selectitem.quantity" -->
</template>
<script>
export default {
  props: ["selectitem", "quantity"],
  methods: {
    decrementQty() {
      this.$store.commit("products/decrementQty", this.selectitem);
    },
    increaseQty() {
      this.$store.commit("products/increaseQty", this.selectitem);
    },
  },
};
</script>

<style>
.quanty {
  width: 150px;
  justify-content: space-between;
  font-size: 25px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 8px;
}
.quanty button {
  border: none;
  background-color: white;
  width: 30%;
}
</style>
