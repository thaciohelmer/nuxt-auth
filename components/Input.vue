<template>
	<input
		:type="type"
		v-model="value"
		class="w-full px-4 py-2 border boder-slate-200 rounded-sm focus:outline-slate-400 outline-1 placeholder:text-sm placeholder:text-slate-400"
		:placeholder="placeholder"
	/>
</template>

<script setup lang="ts">
	const { type, placeholder } = withDefaults(
		defineProps<{
			type?: HTMLInputElement['type']
			placeholder?: string
		}>(),
		{
			type: 'text',
			placeholder: undefined,
		}
	)

	const value = defineModel<string>()
</script>

<style scoped></style>
