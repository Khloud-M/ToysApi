<template>
  <section class="header">
    <div class="container d-flex">
      <div class="logo">
        <router-link to="/">
          <img
            src="@/assets/images/logo.png"
            alt="logo"
            width="120"
            height="120"
          />
        </router-link>
      </div>
      <!-- logo -->
      <large-screen class="large_sreen col-lg-10" />
      <MobileScreen  class="mobile"/>

      <!-- mobile Screen -->
    </div>
    <!-- container -->
  </section>
</template>
<script>
import LargeScreen from "@/components/Header/LargeScreen.vue";
import MobileScreen from "@/components/Header/MobileScreen.vue";
// import SearchCategery from "./SearchCategery.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    LargeScreen,
    // SearchCategery,
    MobileScreen,
  },
  data() {
    return {
      mobileNav: false,
      mobile: false,
    };
  },
  methods: {
    toggle() {
      this.mobileNav = !this.mobileNav;
      console.log("close");
    },
  },
  computed: {
    ...mapGetters({
      Categories: "products/Categories",
    }),
  },
};
</script>
<style lang="scss" >
.header {
  .container {
    justify-content: space-between;
    align-items: center;
  }
  padding: var(--padding) 0;
  font-size: 15px;
  background-color: white;
  border-radius: 0px 0px 20px 20px;
  border: 2px solid white;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  a {
    text-transform: capitalize;
  }
  .v-icon {
    color: #dadada;
    cursor: pointer;
  }
  .v-badge__badge {
    background: #fff6cd !important;
    bottom: -10px !important ;
    left: calc(100% - 12px);
  }
  .v-theme--light {
    --v-theme-surface-variant: none !important;
  }
}

// media screen
@media (min-width: 1201px) {
  .mobile {
    display: none;
  }
}
@media (max-width: 1200px) {
  .large_sreen {
    display: none;
  }
  .mobile {
    display: block;
  }
}

</style>

