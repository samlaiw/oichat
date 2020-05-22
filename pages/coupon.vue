<template>
  <section class="container">
      <v-vision />

      <div class="banner">
          <img data-src="~/assets/image/coupon/coupon.png" v-lazy-load>
      </div>

      <coupon-table />
  </section>
</template>

<script>
    import vision from "~/components/masterVision.vue";
    import couponTable from "~/components/couponTable.vue";

	export default {
		components: {
            vVision: vision,
            couponTable: couponTable
		}
	}
</script>

<style lang="scss">
	@import '~/assets/css/global/config.scss';
</style>
