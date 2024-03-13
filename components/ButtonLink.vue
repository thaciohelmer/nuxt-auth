<template>
	<NuxtLink
		:to="to"
		:class="{
			'bg-slate-700 text-white border-transparent hover:bg-slate-800': !outline,
			'bg-transparent text-slate-700 border border-slate-700 hover:bg-slate-700 hover:text-white':
				outline,
		}"
		class="block text-center w-full p-4 font-bold rounded-sm focus:outline-slate-400 outline-1 transition-all duration-200 ease-in-out border"
	>
		<slot></slot>
	</NuxtLink>
</template>

<script setup lang="ts">
	import type { NuxtLinkProps } from '#app'

	const { to } = withDefaults(
		defineProps<{
			to: NuxtLinkProps['to']
			outline?: boolean
		}>(),
		{
			outline: false,
		}
	)
</script>

<style scoped></style>
