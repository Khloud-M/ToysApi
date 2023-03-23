<template>
  <section class="landing_home">
    <div class="content">
      <h1>Get everything new for your child at the best prices</h1>
      <p>Get everything new for your child at the best prices</p>
      <router-link to="/offer">
        <base-button> {{ $t("buttons.shoppingNow") }}</base-button>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss">
.landing_home {
  background-image: url("@/assets/images/landinghome.png");
  background-position: center;
  background-size: cover;
  height: 70vh;
  position: relative;
  color: var(--main-color);
  top: -10px;
  z-index: 1;
  margin-bottom: var(--margin);
  @media (max-width: 480px) {
    & {
      height: 80vh;
    }
  }
}
.content {
  width: 50%;
  left: 25%;
  position: absolute;
  top: 30%;
  text-align: center;
  @media (max-width: 480px) {
    & {
      width: 100%;
      left: 0%;
      padding: 10px;
    }
  }
}
</style>
