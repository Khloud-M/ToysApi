<template>
  <div class="mobile">
    <div class="bar" @click="toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="mobile-nav" appear>
      <div class="container_dropdowm" v-if="mobileNav">
        <div class="content_dropdown">
          <div class="header_phone">
            <h2>{{ $t("placeholder.mainList") }}</h2>
            <div class="close_nav" @click="toggle">X</div>
          </div>
          <!-- end header_phone -->
          <div class="nav_phone">
            <div>
              <search-categery class="search_cat" />
            </div>
            <div class="login_cart">
              <div>
                <router-link to="/:auth" @click="toggle">
                  <v-icon icon="mdi-account"> </v-icon>
                  {{ $t("buttons.signIn") }}</router-link
                >
                <router-link to="/ShoppingCart">
                  <v-icon
                    size="27"
                    icon="mdi-shopping-outline"
                    @click="toggle"
                  ></v-icon>
                </router-link>
              </div>
              <ChangeLang />
            </div>
            <div class="main_list">
              <router-link to="/" @click="toggle">
                <h3>Main List</h3>
              </router-link>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                categery
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li v-for="cat in categery" @click="toggle">
                  <router-link :to="`/category/${cat.id}`">
                    {{ cat.title }}
                  </router-link>
                </li>
              </ul>
            </div>
            <ul class="list_nav">
              <li>
                <router-link to="/offer" @click="toggle">
                  {{ $t("navs.offer") }}</router-link
                >
              </li>
              <li>
                <router-link to="/about" @click="toggle">
                  {{ $t("navs.aboutUs") }}</router-link
                >
              </li>
              <li>
                <router-link to="/Contact" @click="toggle">
                  {{ $t("navs.contactUs") }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- content_dropdown-->
      </div>
      <!-- container_dropdowm-->
    </transition>
  </div>
</template>

<script>
import SearchCategery from "./SearchCategery.vue";
import ChangeLang from "@/components/Header/ChangeLang.vue";
export default {
  components: {
    SearchCategery,
    ChangeLang,
  },
  props: ["id"],
  data() {
    return {
      mobileNav: false,
      mobile: false,
      categery: null,
    };
  },
  created() {
    this.GetCategery();
  },
  methods: {
    toggle() {
      this.mobileNav = !this.mobileNav;
      console.log("close");
    },
    GetCategery() {
      this.axios({
        method: "GET",
        url: "cats",
      })
        .then((response) => {
          this.categery = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          // this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
};
</script>

<style lang="scss" scoped >
.mobile {
  .bar {
    display: flex;
    flex-direction: column;
    gap: 7px;
    background-color: #fff6cd;
    padding: 12px;
    border-radius: 7px;
    span {
      width: 25px;
      height: 1px;
      background-color: var(--main-color);
    }
  }
}
.container_dropdowm {
  background-color: rgb(255, 255, 255, 1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999999;
  color: var(--main-color);
  .content_dropdown {
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    .header_phone {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      .close_nav {
        width: 50px;
        color: white;
        cursor: pointer;
        font-size: 20px;
        border: 2px solid var(--main-color) !important;
        padding: 4px;
        border-radius: 5px;
        text-align: center;
        color: var(--main-color);
      }
    }
    .nav_phone {
      flex-direction: column;
      display: flex;
      row-gap: 10px;
      .login_cart {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        & > :nth-child(1) {
          display: flex;
          flex-direction: row;
          gap: 15px;
        }
      }
    }
    .list_nav {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: space-between;
      padding-left: 0;
      li {
        border-radius: 10px;
        padding: 10px 15px;
        background-color: var(--bg-color-light);
        a {
          font-family: Medium;
          color: black;
          font-size: 18px;
          &::before {
            display: none;
          }
        }
      }
    }
    .main_list {
      background-color: #fff6cd;
      border-radius: 10px;
      padding: 10px 15px;
      a {
        color: var(--color-yellow);
      }
    }
    // end list nav
    .dropdown {
      margin: 18px 0;
      button {
        width: 100%;
        background-color: var(--bg-color-light);
        color: black;
        border-radius: 10px;
        padding: 10px 15px;
        text-align: justify;
        font-size: 18px;
      }
      .btn:focus {
        box-shadow: 0 0 0 0rem;
      }
      .btn-secondary {
        border-color: transparent;
      }
      .dropdown-menu.show {
        width: 100%;
        padding: 5px 10px;
        line-height: 40px;
      }
    }
    // end dropdown
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
.search_cat {
  width: 100% !important;
}
.login_cart {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  margin: 18px 0;
}
</style>

