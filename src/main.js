import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// import AOS from 'aos'
// import 'aos/dist/aos.css'

new Vue({
  router,
  store,
  render: (h) => h(App),
  // mounted() {
  //   AOS.init()
  // },
}).$mount("#app");
import "../src/js/script";