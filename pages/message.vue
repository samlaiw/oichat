<template>
  <section class="container">
      <v-vision />
      <v-message />
  </section>
</template>

<script>
    import vision from "~/components/masterVision.vue";
    import message from "~/components/messageList.vue";

	export default {
		components: {
            vVision: vision,
            vMessage: message
		}
	}
</script>

<style lang="scss">
	@import '~/assets/css/global/config.scss';
</style>
