<template>
  <section>
    <landing-page />
    <div class="container d-flex">
      <div class="col-lg-6">
        <div class="contact">
          <h2>{{ $t("placeholder.persnalInfo") }}</h2>
          <form @submit.prevent="submit">
            <div class="name d-flex justify-content-between">
              <div class="firstName col-lg-6">
                <label for="firstName">
                  {{ $t("placeholder.firstName") }}</label
                >
                <input
                  type="text"
                  id="firstName"
                  :placeholder="$t('placeholder.firstName')"
                  v-model="firstName"
                  required
                />
              </div>
              <!-- end  first name -->
              <div class="lastName col-lg-5">
                <label for="lastName"> {{ $t("placeholder.lastName") }}</label>
                <input
                  type="text"
                  id="lastName"
                  :placeholder="$t('placeholder.lastName')"
                  v-model="lastName"
                  required
                />
              </div>
              <!-- end last name -->
            </div>
            <!-- end name -->
            <div class="phone">
              <label for="phone"> {{ $t("placeholder.phone") }} </label>
              <input
                type="tel"
                id="phone"
                :placeholder="$t('placeholder.phone')"
                v-model="phone"
                required
              />
            </div>
            <!-- end phone -->
            <div>
              <label> {{ $t("placeholder.city") }} </label>
              <select class="form-select" aria-label="Default select example">
                <option value="1">{{ $t("placeholder.chosecity") }}</option>
                <option value="1">{{ $t("placeholder.mansours") }}</option>
              </select>
            </div>
            <div class="address">
              <label for="address"> {{ $t("placeholder.address") }} </label>
              <input
                type="text"
                id="address"
                :placeholder="$t('placeholder.address')"
                v-model="address"
                required
              />
            </div>
            <!-- end name -->
          </form>
        </div>
        <!-- end  contact -->
        <div class="payment">
          <h2>{{ $t("placeholder.persnalInfo") }}</h2>
          <div>
            <input
              type="radio"
              id="myfatoorah"
              name="payment"
              v-model="check"
            />
            <label for="myfatoorah">
              <v-icon icon="mdi-credit-card"> </v-icon>
              {{ $t("placeholder.remember") }}</label
            >
          </div>
          <div>
            <input type="radio" id="cash" name="payment" v-model="check" />
            <label for="cash">
              <v-icon icon="mdi-credit-card"> </v-icon>
              {{ $t("placeholder.remember") }}</label
            >
          </div>
          <div>
            <input type="radio" id="bookeey" name="payment" v-model="check" />
            <label for="bookeey">
              <v-icon icon="mdi-credit-card"> </v-icon>
              {{ $t("placeholder.remember") }}</label
            >
          </div>
        </div>
        <!-- payment -->
      </div>
      <!-- end contact  -->
      <div class="col-lg-5">
        <div class="copon">
          <div class="coupon">
            <label for="phone"> {{ $t("placeholder.coupon") }} </label>
            <input
              type="text"
              id="coupon"
              :placeholder="$t('placeholder.coupon')"
              v-model="coupon"
            />
          </div>
          <!-- end enter copon -->

          <h6>{{ $t("placeholder.remember5") }}</h6>
          <base-button class="button_copon">
            <v-icon icon="mdi-check"></v-icon>
            {{ $t("placeholder.addcopon") }}
          </base-button>
        </div>
        <!-- coupon -->
        <div class="summary">
          <h5>{{ $t("placeholder.remember6") }}</h5>
          <div class="d-flex justify-content-between">
            <h6>{{ $t("placeholder.subtotal") }}</h6>
            <div class="d-flex">
              <h6>{{ $t("placeholder.KWD") }}</h6>
              <span></span>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <h6>{{ $t("placeholder.shippingfee") }}</h6>
            <div class="d-flex">
              <h6>{{ $t("placeholder.KWD") }}</h6>
              <span></span>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <h6>{{ $t("placeholder.coupon") }}</h6>
            <div class="d-flex">
              <h6>{{ $t("placeholder.KWD") }}</h6>
              <span></span>
            </div>
          </div>
          <hr />
          <div class="d-flex justify-content-between">
            <h6>{{ $t("placeholder.total") }}</h6>
            <div class="d-flex">
              <h6>{{ $t("placeholder.KWD") }}</h6>
              <span></span>
            </div>
          </div>
          <base-button class="btn">
            {{ $t("placeholder.Completepay") }}
          </base-button>
          <router-link to="/ShoppingCart">
            {{ $t("placeholder.editcart") }}
          </router-link>
        </div>
        <!-- end summary -->
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      firstName: null,
      lastName: null,
      phone: null,
      address: null,
      coupon: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: var(--margin) auto;
  flex-direction: row;
  justify-content: space-between;
  span {
    display: block;
  }
  h2{
    font-size: 20px;
    padding: 15px 0;
  }
}
.contact,
.copon,
.summary,
.payment {
  border: 1px solid var(--border-color);
  padding: 20px 40px;
  border-radius: 15px;
  form {
    label {
      display: block;
      margin: 20px 0;
      text-transform: capitalize;
      font-size: 20px;
    }
    input,
    textarea {
      outline: none;
      border: 1px solid var(--border-color);
      padding: 15px 10px;
      border-radius: 10px;
      width: 100%;
      transition: all var(--transtion) ease-in-out;
    }
    input:focus,
    textarea:focus {
      border-color: var(--color-yellow);
    }
  }
  .button_form {
    margin-top: 20px;
    .v-icon {
      padding: 0 10px;
      transform: rotateZ(-50deg);
      font-size: 20px;
      margin-top: -10px;
    }
  }
}
.payment {
  margin: 20px 0;
  div {
    border: 1px solid var(--border-color);
    padding: 10px 20px;
    border-radius: 15px;
    margin: 15px 0;
    input {
      margin-right: 10px;
    }
  }
}
.copon {
  margin: 20px 0;
  input {
    outline: none;
    border: 1px solid var(--border-color);
    padding: 15px 10px;
    border-radius: 10px;
    width: 100%;
    transition: all var(--transtion) ease-in-out;
  }
  label {
    display: block;
    margin: 15px 0;
    text-transform: capitalize;
    font-size: 20px;
  }
  input:focus {
    border-color: var(--color-yellow);
  }
  h6 {
    padding: 20px 5px;
    font-size: 13px;
  }
  .button_copon {
    color: white;
    background-color: var(--main-color);
    width: 50%;
    padding: 10px;
    background-image: linear-gradient(
      50deg,
      transparent 50%,
      #242323 50%
    ) !important;
    font-size: 15px !important;
  }
}
// end copon
.summary {
  background-color: var(--bg-color-light);
  .btn {
    margin: 20px 0;
    width: 100% !important;
  }
  div {
    margin: 5px 0;
  }
  h5 {
    padding-bottom: 15px;
  }
  h6 {
    font-size: 14px;
  }
  a {
    text-align: center;
    display: block;
    text-decoration: underline;
    &:hover {
      color: var(--main-color);
    }
  }
}
</style>

