import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
	const token = useCookie('token').value

	if (!token && !to.path.toString().match(/\bautenticacao\b/i)) {
		return navigateTo({
			name: 'autenticacao-login',
			replace: true,
		})
	}

	if (token && to.path.toString().match(/\bautenticacao\b/i)) {
		return navigateTo({
			name: 'index',
			replace: true,
		})
	}
})
