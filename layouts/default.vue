<template>
	<div data-layout='__default'>
		<v-header />
		<nuxt />
		<v-footer />
		<v-navbar />
	</div>
</template>

<script>
	import header from "~/components/header.vue";
	import footer from "~/components/footer.vue";
	import navbar from "~/components/navbar.vue";

	export default {
		components: {
			vHeader: header,
			vFooter: footer,
			vNavbar: navbar
		}
	}
</script>

<style lang="scss">
	html {
		font-family: 'Microsoft JhengHei', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
			Roboto, 'Helvetica Neue', Arial, sans-serif;
		font-size: 16px;
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}

	.button--green {
		display: inline-block;
		border-radius: 4px;
		border: 1px solid #3b8070;
		color: #3b8070;
		text-decoration: none;
		padding: 10px 30px;
	}

	.button--green:hover {
		color: #fff;
		background-color: #3b8070;
	}

	.button--grey {
		display: inline-block;
		border-radius: 4px;
		border: 1px solid #35495e;
		color: #35495e;
		text-decoration: none;
		padding: 10px 30px;
		margin-left: 15px;
	}

	.button--grey:hover {
		color: #fff;
		background-color: #35495e;
	}

	img {
		width: 100%;
	}

	.clear::after {
		content: '';
		clear: both;
		display: block;
	}

	a {
		text-decoration: none !important;

		&:hover {
			color: #566FB8 !important;
		}
	}
</style>
