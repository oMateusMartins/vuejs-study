
<script>

export default {
	name: 'root-header'
}
</script>

<template>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link to="/" class="navbar-brand">Curso Vue</router-link>
			</div>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<router-link :to="{ name: 'dashboard.main' }" tag="li">
						<a>Home</a>
					</router-link>
					<router-link to="/auth" tag="li">
						<a>Entrar</a>
					</router-link>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>
</template>

<style>

</style>
