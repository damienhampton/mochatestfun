const { default: Vue } = require('vue');
const { default: App } = require('./App.vue');

new Vue({
  render: h => h(App),
}).$mount('#app');