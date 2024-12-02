<script lang="ts">
	import { caughtMonsters } from '$lib/stores';
	import Monster from '$lib/components/Monster.svelte';
</script>

<h1 class="text-3xl font-bold text-slate-800 m-4">My Pokemons</h1>

<div class="w-creen flex basis-24 flex-row flex-wrap items-start justify-start">
	{#each $caughtMonsters as monster}
		<Monster {monster} />
	{/each}
</div>
