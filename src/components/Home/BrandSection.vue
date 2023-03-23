<template>
  <section>
    <heading-section>
      <div>
        {{ $t("placeholder.brand") }}
      </div>
    </heading-section>
    <div class="container d-flex brands">
      <div class="brand_image" v-for="brand in Brands" :key="id">
        <router-link :to="`/brand/${brand.id}`">
          <img :src="brand.image" alt="" width="150" height="150" />
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapGetters({
      Brands: "products/Brands",
    }),
  },
};
</script>
<style lang="scss" scoped>
section {
  margin: var(--margin) 0;
}
.brands {
  flex-wrap: wrap;
  margin: var(--margin) auto;
  justify-content: flex-start;
  column-gap: 50px;
  align-items: center;
  .brand_image {
    cursor: pointer;
    img {
      object-fit: contain;
    }
  }
}
</style>
