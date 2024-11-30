<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { generations } from './generations';
	import { goto } from '$app/navigation';
	import Monster from '$lib/components/Monster.svelte';

	export let data: PageData;

	let form = {
		searchString: ''
	};

	let searchString = '';
	$: selectedMonsters = data.monsters.filter((monster) => {
		return monster.name.toLowerCase().includes(searchString.toLowerCase());
	});

	$: monsterId = $page.url.searchParams.get('monsterId') || '';
	$: monster = data.monsters.find((monster) => monster.id === monsterId);
	$: monsterId2 = $page.url.searchParams.get('monsterId2') || '';
	$: monster2 = data.monsters.find((monster) => monster.id === monsterId2);

	const updateSearchParams = (key: string, value: string) => {
		const searchParams = new URLSearchParams($page.url.searchParams);
		searchParams.set(key, value);
		goto(`?${searchParams.toString()}`);
	};

	const submitSearch = (e: Event) => {
		searchString = form.searchString;
	};
</script>

{#if monster}
	<Monster {monster} {updateSearchParams} isInteractive={false} />
{/if}
{#if monster2}
	<Monster monster={monster2} {updateSearchParams} />
{/if}

<div id="generations-container" class="flex w-full flex-row flex-wrap justify-center">
	{#each generations as generation (generation.id)}
		<button
			id="generation-button"
			class="m-4 rounded-lg border border-slate-100 bg-slate-600 px-3 py-1 font-bold text-slate-50 hover:bg-slate-700"
		>
			{generation.main_region}
		</button>
	{/each}
</div>

<form onsubmit={submitSearch} class="m-4 flex w-full items-center justify-center gap-2">
	<input
		type="text"
		placeholder="Busque um Pokemon"
		bind:value={form.searchString}
		class="rounded bg-slate-200 px-4 py-2 text-xl text-slate-800 placeholder:text-slate-400"
	/>

	<input
		type="submit"
		value="Pesquisar"
		class="rounded-lg border border-slate-100 bg-slate-600 px-3 py-2.5 font-bold text-slate-50 hover:bg-slate-700"
	/>
</form>

<div
	id="pokemon-container"
	class="w-creen flex basis-24 flex-row flex-wrap items-start justify-start"
>
	{#each selectedMonsters as monster (monster.id)}
		<Monster {monster} {updateSearchParams} isInteractive={true} />
	{/each}
</div>

<style>
</style>
