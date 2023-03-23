import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";
import store from "./store";
// import i18n from './i18n';

// Plugins
import { registerPlugins } from "@/plugins";
// import public page
import TheHeader from "@/components/Header/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
import LandingPage from "./components/layout/LandingPage.vue";
import LandingCat from "@/pages/Categery/LandingCategery.vue";
// import ui Base Button  page
import BaseButton from "@/components/ui/BaseButton.vue";
import HeadingSection from "@/components/ui/HeadingSection.vue";
// bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import bootstrap from 'bootstrap';
// import Aos library
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();
// import css file
import "@/assets/styles/main.css";
import "@/assets/styles/form.css";
import "@/assets/styles/Item.css";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
import VOtpInput from "vue3-otp-input";
import i18n from "./i18n";

const app = createApp(App);
app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);
app.component("base-button", BaseButton);
app.component("heading-section", HeadingSection);
app.component("landing-page", LandingPage);
app.component("landing-cat", LandingCat);
app.component("v-otp-input", VOtpInput);

registerPlugins(app);
app.use(router);
app.use(store);
app.use(i18n);
app.use(vuetify);
// app.use(bootstrap);


app.mount("#app");
