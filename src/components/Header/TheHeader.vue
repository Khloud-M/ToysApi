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
    .offcanvas-body {
      display: flex;
      flex-direction: column;
      row-gap: 15px;
      .search_cat {
        width: 100% !important;
      }
      .login_cart {
        display: flex;
        flex-direction: row;
        column-gap: 10px;
        align-items: center;
      }
      ul {
        padding-left: 0;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        li {
          border-radius: 10px;
          padding: 10px 15px;
          background-color: var(--bg-color-light);
        }
        & > :nth-child(1) {
          background-color: #fff6cd;
          a {
            color: var(--color-yellow);
          }
        }
        .form-select {
          background-color: transparent !important;
          border: 0 !important;
        }
        .form-select:focus {
          box-shadow: 0 0 0 0;
        }
      }
    }
  }
}
.container_dropdowm {
  background-color: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999999;
  .content_dropdown {
    height: 100%;
    .close-nav {
      width: 50px;
      color: white;
      cursor: pointer;
      font-size: 20px;
      margin: 50px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: space-between;
      margin: 50px 0;
      height: 50%;
      // height: 600px;
      a {
        font-family: Medium;
        color: white;
        font-size: 18px;
        &::before {
          display: none;
        }
      }
    }
  }
}
.bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  span {
    width: 50px;
    height: 2px;
    background-color: black;
  }
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.7s ease;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-100%);
}
</style>

