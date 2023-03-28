<template>
  <div class="account_defult">
    <div class="container d-flex">
      <div class="SideBar col-lg-3">
        <div class="heading">
          <h5>welcome {{ name }}</h5>
          <span>{{ email }}</span>
        </div>
        <hr />
        <!-- end heading -->
        <ul class="myData">
          <li>
            <router-link to="/Account">
              <v-icon icon="mdi-account"></v-icon> my account
            </router-link>
          </li>
          <li>
            <router-link to="/Account/address">
              <v-icon icon="mdi-map-marker-outline"></v-icon> Adresses
            </router-link>
          </li>
          <li>
            <router-link to="/Account/favourite">
              <v-icon icon="mdi-heart-outline"></v-icon> favourites
            </router-link>
          </li>
          <li>
            <router-link to="/Account/myorder">
              <v-icon icon="mdi-list-box-outline"></v-icon> order list
            </router-link>
          </li>
        </ul>
        <hr />
        <button @click="removeToken">logout</button>
      </div>
      <div class="content col-lg-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("user_email_toys"),
    };
  },
  methods: {
    removeToken() {
      this.$store.commit("auth/logout");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.account_defult {
  background-color: var(--bg-color-light);
  .container {
    justify-content: space-between;
    .SideBar {
      background-color: white;
      .heading {
        padding: 15px;
        span {
          color: var(--account-color);
        }
      }
      ul{
        padding-left: 0;
        padding: 15px;

      }
      ul li {
        margin: 10px 0;
        text-transform: capitalize;
        a {
          color: var(--account-color);
          transition: all 0.3s ease-in-out;
        }
        .v-icon {
          transition: all 0.3s ease-in-out;
        }
        .active {
          color: black;
          .v-icon {
            color: white;
            background-color: black;
            padding: 13px;
            border-radius: 5px;
            margin-right: 10px;
          }
        }
        .active:hover,
        a:hover {
          color: black;
          .v-icon {
            color: white;
            background-color: black;
            padding: 13px;
            border-radius: 5px;
            margin-right: 10px;
          }
        }
      }
      button{
        padding: 15px;

      }
    }
  }
}
</style>
