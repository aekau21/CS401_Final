const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/page3', component: Page3 },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
});

new Vue({
  el: '#app',
  router
});
