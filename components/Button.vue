<template>
	<button
		:type="type"
		class="block w-full p-4 bg-slate-700 text-white font-bold rounded-sm hover:bg-slate-800 focus:outline-slate-400 outline-1 transition-all duration-200 ease-in-out"
		@click="emits('click', $event)"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
	const { type } = withDefaults(
		defineProps<{
			type?: HTMLButtonElement['type']
		}>(),
		{
			type: 'button',
		}
	)

	const emits = defineEmits<{
		(event: 'click', payload: Event): void
	}>()
</script>

<style scoped></style>
