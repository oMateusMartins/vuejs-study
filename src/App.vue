<template>
	<div id="app">
		<RootHeader></RootHeader>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import RootHeader from './components/root/header/Main.vue'

export default {
	name: 'app',
	data() {
		return {
		}
	},
	components: {
		RootHeader
	}
}
</script>


<style src="./assets/css/sass/app.scss" lang="sass"></style>
