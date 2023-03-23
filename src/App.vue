<template>
  <v-app :class="$i18n.locale == 'ar' ? 'is-rtl' : 'is-ltr'">
    <the-header v-if="!$route.params.auth" />
    <v-main>
      <transition name="route" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <the-footer v-if="!$route.params.auth" />
  </v-app>
</template>

<script >
import i18n from "./i18n";
export default {
  mounted() {
    if (i18n.global.locale == "en") {
      document.body.dir = "ltr";
    } else {
      document.body.dir = "rtl";
    }
  },
};
</script>
<style lang="scss">
.is-ltr {
  direction: ltr;
}
.is-rtl {
  direction: rtl;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

