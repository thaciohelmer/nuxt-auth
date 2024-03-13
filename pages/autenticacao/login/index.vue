<template>
	<div>
		<h1 class="text-slate-600 text-4xl font-bold mb-4">Login</h1>
		<p class="text-slate-400 text-sm">
			Entre com seu e-mail e senha para acessar o sistema.
		</p>
		<hr class="my-6" />
		<form @submit.prevent="enviarFormulario">
			<div class="mb-6">
				<AppLabel>E-mail</AppLabel>
				<AppInput
					type="email"
					placeholder="e-mail"
					v-model="dadosLogin.email"
				/>
			</div>
			<div class="mb-6">
				<AppLabel>Senha</AppLabel>
				<AppInput
					type="password"
					placeholder="senha"
					v-model="dadosLogin.senha"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<AppButton type="submit"> Login </AppButton>
				<AppButtonLink
					to="/autenticacao/cadastro"
					outline
				>
					Cadastre-se
				</AppButtonLink>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: 'auth',
	})

	const dadosLogin = reactive({
		email: '',
		senha: '',
	})

	const enviarFormulario = async () => {
		await $fetch('/api/v1/autenticacao/login', {
			method: 'POST',
			body: dadosLogin,
			onResponse: ({ response }) => {
				if (response.status === 204) {
					navigateTo('/', { replace: true })
				} else {
					alert('E-mail ou senha inválidos')
				}
			},
		})
	}
</script>

<style scoped></style>
