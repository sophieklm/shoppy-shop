import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import History from './components/History';
import Delivery from './components/Delivery';
import Admin from './components/Admin';
import OrderingGuide from './components/OrderingGuide';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/contact', component: Contact },
  { path: '/admin', component: Admin },
  {
    path: '/about',
    component: About,
    children: [
      { path: '/history', component: History },
      { path: '/delivery', component: Delivery },
      { path: '/ordering-guide', component: OrderingGuide },
    ],
  },
  { path: '*', redirect: '/' },
];
const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
