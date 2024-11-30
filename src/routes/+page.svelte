<script lang="ts">

    import type { PageData } from "./$types";
    import { page } from "$app/stores";
    import { generations } from "./generations";
    import { goto } from "$app/navigation";
	import Monster from "$lib/components/Monster.svelte";

    export let data: PageData;

    $: monsterId = $page.url.searchParams.get("monsterId") || "";
    $: monster = data.monsters.find((monster) => monster.id === monsterId);
    $: monsterId2 = $page.url.searchParams.get("monsterId2") || "";
    $: monster2 = data.monsters.find((monster) => monster.id === monsterId2);

    const updateSearchParams = (key: string, value: string) => {
        const searchParams = new URLSearchParams($page.url.searchParams);
        searchParams.set(key, value);
        goto(`?${searchParams.toString()}`)
    }

</script>

{#if monster}
  <Monster
    monster={monster}
    updateSearchParams={updateSearchParams}
  />
{/if}
{#if monster2}
  <Monster
    monster={monster2}
    updateSearchParams={updateSearchParams}
  />
{/if}

<div id="generations-container" class="flex flex-row flex-wrap w-full justify-center">
    {#each generations as generation (generation.id)}
        <button id="generation-button" class="m-4 py-1 px-3 border border-slate-100 rounded-lg bg-slate-600 text-slate-50 font-bold hover:bg-slate-700">
            {generation.main_region}
        </button> 
    {/each}
</div>

<div id="pokemon-container" class="items-start flex-row justify-start w-creen flex flex-wrap basis-24">
    {#each data.monsters as monster (monster.id) }
        <Monster
            monster={monster}
            updateSearchParams={updateSearchParams}
            isInteractive={true}
        /> 
    {/each}
</div>

<style>

</style>