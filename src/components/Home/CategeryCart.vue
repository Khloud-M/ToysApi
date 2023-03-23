<template>
  <div class="icon_categery">
    <button
      class="button-cart"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      <h3>
        <v-icon icon=" mdi-dots-horizontal"> </v-icon>
        {{ $t("navs.Categories") }}
      </h3>
    </button>
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">
          {{ $t("navs.Categories") }}
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <hr />
      <div class="offcanvas-body">
        <div v-for="cat in Categories" data-bs-dismiss="offcanvas">
          <router-link :to="`/category/${cat.id}`">
            {{ cat.itemName }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapGetters({
      Categories: "products/Categories",
    }),
  },
};
</script>
<style lang="scss">
button{
  background: none;
}
.icon_categery {
  cursor: pointer;
  transition: all var(--transtion) ease-in-out;
  &:hover h3,
  &:hover .v-icon {
    color: var(--color-yellow);
  }
  h3 {
    color: var(--main-color);
    font-size: 15px;
    transition: all var(--transtion) ease-in-out;
    .v-icon {
      color: var(--main-color);
      transition: all var(--transtion) ease-in-out;
    }
  }
  .btn-close:focus {
    box-shadow: 0 0 0 0.1rem var(--color-yellow);
  }
  hr {
    border: 1px solid var(--main-color);
  }
  .offcanvas-body {
    div {
      background-color: var(--bg-color-light);
      padding: 10px;
      border-radius: 10px;
      margin: 15px 0;
    }
  }
}
</style>
