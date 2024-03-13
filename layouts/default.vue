<template>
	<div>
		<header class="bg-slate-800 h-20 px-8 py-4 flex justify-end">
			<button
				class="flex items-center justify-center text-white bg-red-600 px-4 py-2 rounded-sm hover:bg-red-700 transition-colors duration-300 ease-in-out"
				@click="sairDoSistema"
			>
				Sair
			</button>
		</header>
		<main>
			<slot></slot>
		</main>
	</div>
</template>

<script setup lang="ts">
	const sairDoSistema = async () => {
		const token = useCookie('token')
		token.value = ''

		return await navigateTo('/autenticacao/login')
	}
</script>

<style scoped></style>
