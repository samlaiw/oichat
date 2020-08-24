<template>
	<section class="container">
		<v-vision />
    <!-- <div class="discuss-table">

    </div> -->
		<v-table />
	</section>
</template>

<script>
	import vision from "~/components/masterVision.vue";
  import table from "~/components/table.vue";
  import container from "~/pages/login.vue";




	export default {
		components: {
			vVision: vision,
			vTable: table
    }
	}

</script>
<style lang="scss">
@import '~/assets/css/global/config.scss';

.discuss-table{
  width: 100%;
  height: 500px;
  background-color: #f2f2f2;
}


</style>
