<script lang="ts">

    import type { PageData } from "./$types";
    import { page } from "$app/stores";
    import { generations } from "./generations";
    import { goto } from "$app/navigation";
	import Monster from "$lib/components/Monster.svelte";

    export let data: PageData;

    let form =  {
        searchString: ''
    }

    let searchString = ""
    $: selectedMonsters = data.monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchString.toLowerCase())
    })

    $: monsterId = $page.url.searchParams.get("monsterId") || "";
    $: monster = data.monsters.find((monster) => monster.id === monsterId);
    $: monsterId2 = $page.url.searchParams.get("monsterId2") || "";
    $: monster2 = data.monsters.find((monster) => monster.id === monsterId2);

    const updateSearchParams = (key: string, value: string) => {
        const searchParams = new URLSearchParams($page.url.searchParams);
        searchParams.set(key, value);
        goto(`?${searchParams.toString()}`)
    }

    const submitSearch = (e:Event) => {
        searchString = form.searchString
    }

</script>

{#if monster}
  <Monster
    monster={monster}
    updateSearchParams={updateSearchParams}
    isInteractive={false}
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

<form onsubmit= {submitSearch}
    class="w-full flex justify-center items-center m-4 gap-2">

    <input type="text" placeholder="Busque um Pokemon" bind:value={form.searchString}
        class="bg-slate-200 py-2 px-4 rounded text-xl text-slate-800 placeholder:text-slate-400"
    />

    <input type="submit" value="Pesquisar"
        class="py-2.5 px-3 border border-slate-100 rounded-lg bg-slate-600 text-slate-50 font-bold hover:bg-slate-700"
    >
</form>

<div id="pokemon-container" class="items-start flex-row justify-start w-creen flex flex-wrap basis-24">
    {#each selectedMonsters as monster (monster.id) }
        <Monster
            monster={monster}
            updateSearchParams={updateSearchParams}
            isInteractive={true}
        /> 
    {/each}
</div>

<style>

</style>