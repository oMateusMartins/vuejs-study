import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/index'
import store from './vuex'

new Vue({
	router,
	store,
	el: '#app',
	render: h => h(App)
}).$mount('#app')
