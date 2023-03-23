<template>
  <section class="auth_page">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.png" width="90" height="90" />
      </router-link>
    </div>
    <!-- logo-->
    <div class="container">
      <div
        class="row"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>
