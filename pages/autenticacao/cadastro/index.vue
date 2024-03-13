<template>
	<div>
		<h1 class="text-slate-600 text-4xl font-bold mb-4">Cadastre-se</h1>
		<p class="text-slate-400 text-sm">
			Preencha os campos abaixo para criar sua conta.
		</p>
		<hr class="my-6" />
		<form @submit.prevent="enviarFormulario">
			<div class="mb-6">
				<AppLabel>E-mail</AppLabel>
				<AppInput
					type="email"
					placeholder="e-mail"
					v-model="dadosCadastro.email"
				/>
			</div>
			<div class="mb-6">
				<AppLabel> Primeiro nome </AppLabel>
				<AppInput
					type="text"
					placeholder="primeiro nome"
					v-model="dadosCadastro.firstName"
				/>
			</div>
			<div class="mb-6">
				<AppLabel> Sobrenome </AppLabel>
				<AppInput
					type="text"
					placeholder="sobrenome"
					v-model="dadosCadastro.lastName"
				/>
			</div>
			<div class="mb-6">
				<AppLabel> Nome de usuário </AppLabel>
				<AppInput
					type="text"
					placeholder="nome de usuário"
					v-model="dadosCadastro.username"
				/>
			</div>
			<div class="mb-12">
				<AppLabel>Senha</AppLabel>
				<AppInput
					type="password"
					placeholder="senha"
					v-model="dadosCadastro.password"
				/>
			</div>
			<div class="flex flex-col gap-2">
				<AppButton type="submit"> Confirmar cadastro </AppButton>
				<AppButtonLink
					to="/autenticacao/login"
					outline
				>
					Fazer login
				</AppButtonLink>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: 'auth',
	})

	const dadosCadastro = reactive({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		username: '',
	})

	const enviarFormulario = async () => {
		await $fetch('/api/v1/autenticacao/cadastro', {
			method: 'POST',
			body: dadosCadastro,
			onResponse: ({ response }) => {
				if (response.status === 201) {
					navigateTo('/autenticacao/login', { replace: true })
				} else {
					alert('E-mail ou senha inválidos')
				}
			},
		})
	}
</script>

<style scoped></style>
