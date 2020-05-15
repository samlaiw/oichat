
const pkg = require("./package");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
	mode: 'universal',
	/* Headers of the page */
	head: {
		htmlAttrs: {
			lang: "zh-Hant-TW",
			prefix: "og: http://ogp.me/ns#"
		},
		title: pkg.title,
		meta: [
			{hid: "charset", charset: "UTF-8"},
			{name: "viewport", content: "width=device-width, initial-scale=1"},
			{hid: "description", name: "description", content: pkg.description},
			{hid: "author", name: "author", content: pkg.author},
			{hid: "og:type", property: "og:type", content: "website"},
			{hid: "og:title", property: "og:title", content: pkg.title},
			{hid: "og:description", property: "og:description", content: pkg.description},
			{hid: "og:site_name", property: "og:site_name", content: pkg.siteName}
		],
		link: [
			{rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"},
			{rel: "shortcut icon", type: "image/x-icon", href: "/favicon.png"}
		]
	},
	/* Customize the progress-bar color*/
	loading: { 
		color: "#5e0b75",
		height: "2px"
	},
	/* Global CSS */
	css: [
		"swiper/css/swiper.css",
		"normalize.css",
		"./assets/css/global/transition.scss"
	],
	/* Plugins to load before mounting the App */
	plugins: [
		{src: './plugins/infiniteloading.js', mode: 'client'},
		// './plugins/infiniteloading.js',
		"./plugins/font-awesome.js",
		"./plugins/axiosRetry.js",
		"./plugins/axios.js",
		"./plugins/swiper.js",
		"./plugins/route.js"
		// "./plugins/gTag.js"
	],
	/* Nuxt.js modules */
	modules: [
		"nuxt-fontawesome",
		// "@nuxtjs/google-adsense",
		"@nuxtjs/axios",
		"@nuxtjs/component-cache",
		"nuxt-user-agent",
		"cookie-universal-nuxt",
		"nuxt-lazy-load"
	],
	router: {
		extendRoutes (routes, resolve) {
			routes.push({
				path: "*",
				redirect: "/"
			})
		}
	},
	// "google-adsense": {
	// 	id: "ca-pub-6958179296039634"
	// },
	fontawesome: {
		component: 'fa', 
		imports: [
			{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['fas']
			},
			{
				set: '@fortawesome/free-regular-svg-icons',
				icons: ['far']
			},
			{
				set: '@fortawesome/free-brands-svg-icons',
				icons: ['fab']
			}
		]
	},
	server: {
		port: 8888,
		host: "localhost",
	},
	/* Build configuration */
	build: {
		/* You can extend webpack config here */
		publicPath: "/dist/",
		plugins: [
			new ImageminPlugin({
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				cacheFolder: "./image_cache"
			})
		],
		extractCSS: true,
		extend(config, ctx) {
			ctx.loaders.fontUrl.limit = 5120;
			ctx.loaders.imgUrl.limit = 5120;

			if(ctx.isDev){
				config.devtool = "cheap-module-eval-source-map";
			}
			else{
				config.devtool = "nosources-source-map";
			}
		}
	}
}
