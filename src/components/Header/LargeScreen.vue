<template>
  <div class="large_nav">
    <div class="top_header">
      <div>
        <CategeryCart />
      </div>
      <ul>
        <router-link to="/offer"> {{ $t("navs.offer") }}</router-link>
        <router-link to="/about"> {{ $t("navs.aboutUs") }}</router-link>
        <router-link to="/Contact"> {{ $t("navs.contactUs") }}</router-link>
        <change-lang />
      </ul>
    </div>
    <!-- end top header -->
    <hr />
    <div class="bottom_header">
      <search-categery />
      <ul>
        <router-link to="/">
          <v-icon icon="  mdi-home-outline"> </v-icon>
          {{ $t("navs.home") }}
        </router-link>
        <router-link to="/:auth">
          <v-icon icon="mdi-account"> </v-icon>
          {{ $t("buttons.signIn") }}</router-link
        >
        <v-icon size="27" icon="mdi-bell"></v-icon>

        <TheCart />
      </ul>
    </div>
    <!-- end bottom header  -->
  </div>
</template>

<script>
import ChangeLang from "@/components/Header/ChangeLang.vue";
import CategeryCart from "@/components/Home/CategeryCart.vue";
import TheCart from "@/components/Cart/TheCart.vue";
import SearchCategery from "./SearchCategery.vue";
import { mapGetters } from "vuex";
export default {
  props: ["id"],

  components: {
    ChangeLang,
     CategeryCart,
    TheCart,
    SearchCategery,
  },
  computed: {
    ...mapGetters({
      cart: "products/cart",
    }),
  },
};
</script>

<style lang="scss">
.large_nav {
  .top_header,
  .bottom_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 7px 0;
    ul {
      display: flex;
      flex-direction: row;
      column-gap: 15px;
      align-items: center;
    }
  }
  .top_header {
    // .icon_categery {
    //   cursor: pointer;
    //   transition: all var(--transtion) ease-in-out;
    //   &:hover h3,
    //   &:hover .v-icon {
    //     color: var(--color-yellow);
    //   }
    //   h3 {
    //     color: var(--main-color);
    //     font-size: 15px;
    //     transition: all var(--transtion) ease-in-out;
    //     .v-icon {
    //       color: var(--main-color);
    //       transition: all var(--transtion) ease-in-out;
    //     }
    //   }
    // }
    a {
      transition: all var(--transtion) ease-in-out;
      &:hover {
        color: var(--color-yellow);
      }
    }
  }
  .bottom_header {
    a:hover {
      color: var(--main-color);
    }
  }
  .cart_overlay {
    position: relative;
    .overlay {
      background-color: yellow;
      position: absolute;
      left: 8px;
      bottom: -12px;
      font-size: 13px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      text-align: center;
    }
  }
}
</style>
