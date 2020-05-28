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
  { path: '/', name: 'homeLink', component: Home },
  { path: '/shop', name: 'shopLink', component: Shop },
  { path: '/contact', name: 'contactLink', component: Contact },
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin,
    beforeEnter: (to, from, next) => {
      alert('This area is for authorised users only, please log in', next());
    },
  },
  {
    path: '/about',
    name: 'aboutLink',
    component: About,
    children: [
      { path: '/history', name: 'historyLink', component: History },
      { path: '/delivery', name: 'deliveryLink', component: Delivery },
      {
        path: '/ordering-guide',
        name: 'orderingGuideLink',
        component: OrderingGuide,
      },
    ],
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
