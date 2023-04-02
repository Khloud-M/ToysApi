<template>
  <div class="quanty d-flex gap-3">
    <li v-for="p in productId">
      {{ p.quantity }}
    </li>
  </div>
</template>
<script>
export default {
  props: ["productId"],
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
