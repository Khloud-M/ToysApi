<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <h3>{{ $t("placeholder.code") }}</h3>
      <p>010627565464</p>
      <div class="myOtp">
        <v-otp-input
          ref="otpInput"
          input-classes="otp-input"
          separator="-"
          :num-inputs="4"
          :should-auto-focus="true"
          :is-input-num="true"
          :conditionalClass="['one', 'two', 'three', 'four']"
          :placeholder="['', '', '', '']"
          @on-change="handleOnChange"
          @on-complete="handleOnComplete"
          v-model="verification_code"
        />
        <!-- <input type="text" placeholder="cpde"  v-model="verification_code"> -->
      </div>

      <base-button class="form_submit"> {{ $t("buttons.submit") }}</base-button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      verificationType: this.$route.params.type,
    };
  },
  methods: {
    submitForm() {
      if (this.verificationType === "ResetPassword") {
        this.$router.push("/:auth/resetpass");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>
<style lang="scss" >
.myOtp {
  display: flex;
  flex-direction: row;
  justify-content: space-around !important;
}
.myOtp input {
  width: 100px !important;
  @media (max-width: 768px) {
    &{
      width: 50px !important;
    }
  }
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>
