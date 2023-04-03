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
        <li>
          <v-icon icon="  mdi-home-outline"> </v-icon>
          <router-link to="/">
            {{ $t("navs.home") }}
          </router-link>
        </li>
        <li>
          <v-icon icon="  mdi-account-outline"> </v-icon>
          <button v-if="isLoggedIn">
            <router-link to="/Account"> welcome {{ name }} </router-link>
          </button>
          <router-link to="/:auth" v-else>
            {{ $t("buttons.signIn") }}</router-link
          >
        </li>

        <v-icon icon="mdi-bell-outline"></v-icon>

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
  data() {
    return {
      name: localStorage.getItem("name"),
    };
  },
  components: {
    ChangeLang,
    CategeryCart,
    TheCart,
    SearchCategery,
  },
  computed: {
    ...mapGetters({
      cart: "products/cart",
      isLoggedIn: "auth/isLoggedIn",
    }),
  },
  methods: {
    removeToken() {
      this.$store.commit("auth/logout");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.large_nav {
  .v-icon {
    color: rgba(0, 0, 0, 0.519) !important;
    font-size: 22px;
  }
  .top_header,
  .bottom_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ul {
      display: flex;
      flex-direction: row;
      column-gap: 22px;
      align-items: center;
      li {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 10px;
      }
    }
  }
  .top_header {
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
