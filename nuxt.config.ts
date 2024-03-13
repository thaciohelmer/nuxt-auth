// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap',
				},
			],
		},
	},
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	css: ['/assets/css/tailwind.css', '/assets/css/global.css'],
	components: [{ path: './components', prefix: 'App' }],
	runtimeConfig: {
		KC_BASE_URL: 'http://localhost:8080/',
		KC_REALM: '',
		KC_CLIENT_ID: '',
		KC_CLIENT_SECRET: '',
	},
})

