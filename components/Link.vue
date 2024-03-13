<template>
	<NuxtLink
		:to="to"
		class="text-blue-600 hover:underline hover:text-blue-800 transition-all duration-200 ease-in-out text-sm"
	>
		<slot></slot>
	</NuxtLink>
</template>

<script setup lang="ts">
	import type { NuxtLinkProps } from '#app'

	const { to } = defineProps<{
		to: NuxtLinkProps['to']
	}>()
</script>

<style scoped></style>
