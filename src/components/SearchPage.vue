<template>
  <div>
    {{ data }}
    search page
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      data: "products/data",
    }),
  },
};
</script>

<style>
</style>
