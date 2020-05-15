<template>
	<section class="container">
		<v-vision />
		<v-table />
	</section>
</template>

<script>
	import vision from "~/components/masterVision.vue";
	import table from "~/components/table.vue";

	export default {
		components: {
			vVision: vision,
			vTable: table
		}
	}
</script>