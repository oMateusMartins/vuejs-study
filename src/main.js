import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router/index'

new Vue({
	router,
	el: '#app',
	render: h => h(App)
}).$mount('#app')
