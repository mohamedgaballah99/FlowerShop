import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from '@/views/Products';
import Sales from '@/views/Sales';
import About from '@/views/About';
import Contact from '@/views/Contact';
import Cart from '@/views/Cart';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/products",
    name:"Products",
    component:Products,
  },
  {
    path:"/sales",
    name:"Sales",
    component:Sales,
  },
  {
    path:"/about",
    name:"About",
    component:About,
  },
  {
    path:"/contact",
    name:"Contact",
    component:Contact,
  },
  {
    path:"/cart",
    name:"Cart",
    component:Cart,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
