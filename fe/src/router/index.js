import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'index',
			component: require('@/components/index')
		},
		{
			path: '*',
			redirect: '/'
		}
	]
});