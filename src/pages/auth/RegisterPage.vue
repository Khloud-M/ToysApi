<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <h3>{{ $t("placeholder.Welcome") }}</h3>
      <p>{{ $t("placeholder.register") }}</p>
      <!-- <div class="name">
        <input
          type="text"
          v-model="firstname"
          placeholder="first name"
          required
        />
      </div> -->
      <!-- name -->
      <div class="name">
        <input
          type="text"
          v-model="firstname"
          placeholder="first name"
          required
        />
      </div>
      <!-- name -->
      <div class="name">
        <input
          type="text"
          v-model="lastname"
          placeholder="last name"
          required
        />
      </div>
      <!-- name -->
      <div class="phone d-flex">
        <div class="col-lg-3">
          <select class="form-select" aria-label="Default select example">
            <option value="1">{{ $t("placeholder.Saudi") }}</option>
            <option value="1">{{ $t("placeholder.egypt") }}</option>
          </select>
        </div>
        <div class="col-lg-8">
          <input
            type="tel"
            id="phone"
            :placeholder="$t('placeholder.phone')"
            v-model="phone"
            required
          />
        </div>
      </div>
      <div class="email">
        <input
          type="email"
          :placeholder="$t('placeholder.email')"
          v-model="email"
          required
        />
      </div>
      <!-- email -->
      <div class="password">
        <input
          type="password"
          :placeholder="$t('placeholder.Password')"
          v-model="password"
          required
        />
      </div>
      <!-- Password-->
      <div class="confirmpassword">
        <input
          type="password"
          :placeholder="$t('placeholder.cPassword')"
          v-model="confirmpassword"
          required
        />
      </div>
      <!-- confirmpassword -->
      <div class="check_pass">
        <div>
          <input type="checkbox" id="check" v-model="check" />
          <label for="check"> {{ $t("placeholder.remember2") }}</label>
        </div>
      </div>
      <base-button class="form_submit"> {{ $t("buttons.signUp") }}</base-button>
    </form>
    <div class="footer_form d-flex justify-content-center mt-3">
      <p>{{ $t("placeholder.notaccount") }}</p>
      <router-link to="/:auth">{{ $t("buttons.signIn") }} </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      confirmpassword: null,
      phone: null,
      check: null,
      lastname: null,
      firstname: null,
    };
  },
  methods: {
    submitForm() {
      const myData = new FormData();
      // myData.append("name", this.name);
      myData.append("first_name", this.firstname);
      myData.append("last_name", this.lastname);
      myData.append("email", this.email);
      myData.append("phone", this.phone);
      myData.append("password", this.password);
      myData.append("confirm_password", this.confirmpassword);
      this.axios({
        method: "POST",
        url: "register",
        data: myData,
      })
        .then((response) => {
          console.log("register");
          console.log(response);
          this.$store.commit("auth/setCurrentUserData", {
            token: response.data.token,
            email: response.data.data.email,
            phone: response.data.data.phone,
          });

          console.log( "token" + response.data.token );

          this.$router.push("/");
          this.$toast.success(`    لسه شوية ونوصل `);

          localStorage.setItem("phone", this.phone);
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
};
</script>
