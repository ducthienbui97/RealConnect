import Vue from 'vue';

Vue.config.productionTip = false;

import App from '@/components/App';
import router from '@/router';
import store from '@/store';

const vm = new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
});