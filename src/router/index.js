import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", component: () => import("@/pages/HomePage.vue") },
    { path: "/about", component: () => import("@/pages/nav/AboutSection.vue") },
    {
      path: "/Contact",
      component: () => import("@/pages/nav/ContactSection.vue"),
    },
    { path: "/offer", component: () => import("@/pages/nav/OfferSection.vue") },
    // auth page
    {
      path: "/:auth",
      component: () => import("@/pages/auth/BasicPage.vue"),
      props: true,
      children: [
        { path: "", component: () => import("@/pages/auth/LoginPage.vue") },
        {
          path: "forgetPass",
          component: () => import("@/pages/auth/ForgetPass.vue"),
        },
        {
          path: "register",
          component: () => import("@/pages/auth/RegisterPage.vue"),
        },
        {
          path: "varifaction/:type",
          component: () => import("@/pages/auth/VarficationCode.vue"),
        },
        {
          path: "resetpass",
          component: () => import("@/pages/auth/ResetpassPage.vue"),
        },
      ],
    },
    // shopping Page
    {
      path: "/ShoppingCart",
      component: () => import("@/pages/ShoppingPage.vue"),
    },
    { path: "/CheckOut", component: () => import("@/pages/CheckOut.vue") },
    // categery
    {
      path: "/category/:id",
      component: () => import("@/pages/Categery/ItemCategery.vue"),
      props: true,
    },
    {
      path: "/brand/:id",
      component: () => import("@/pages/Categery/ItemBrand.vue"),
      props: true,
    },
    {
      path: "/products/:id",
      component: () => import("@/pages/ProductDetails.vue"),
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },

  linkActiveClass: "active",
});

export default router;
