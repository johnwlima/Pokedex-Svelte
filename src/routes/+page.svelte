<script lang="ts">

    import type { PageData } from "./$types";
    import { page } from "$app/stores";
    import type { IndexMonster } from "./+page";
    import { generations } from "./generations";
	import { goto } from "$app/navigation";

    export let data: PageData;

    $: monsterId = $page.url.searchParams.get("monsterId") || "";
    $: monster = data.monsters.find((monster) => monster.id === monsterId);
    $: monsterId2 = $page.url.searchParams.get("monsterId2") || "";
    $: monster2 = data.monsters.find((monster) => monster.id === monsterId2);

    const generateSerchParams = (key: string, value: string) => {
        const searchParams = new URLSearchParams($page.url.searchParams)
        searchParams.set(key, value)
        return `?${searchParams.toString()}`
    }

</script>

<h1 class="text-slate-700 font-bold text-3xl first-letter:uppercase">
    {monster?.name}</h1>
<span class="text-slate-700 font-bold text-xl first-letter:uppercase">
    {monsterId}</span>
<h1 class="text-slate-700 font-bold text-3xl first-letter:uppercase">
    {monster2?.name}</h1>
<span class="text-slate-700 font-bold text-xl first-letter:uppercase">
    {monsterId2}</span>

<div id="generations-container" class="flex flex-row flex-wrap w-full justify-center">
    {#each generations as generation (generation.id)}
        <button id="generation-button" class="m-4 py-1 px-3 border border-slate-100 rounded-lg bg-slate-600 text-slate-50 font-bold hover:bg-slate-700">
            {generation.main_region}
            
        </button>
    {/each}
</div>

<div id="pokemon-container" class="items-start flex-row justify-start w-creen flex flex-wrap basis-24">
    {#each data.monsters as monster (monster.id) }
    <div id="pokemon-card" class="max-w-48 grow drop-shadow-sm relative m-2 w-34 rounded bg-slate-100 border-slate-200 border-2 p-4 flex flex-col flex-center text-center hover:bg-slate-50 hover:border-slate-100 hover:drop-shadow-none transition-all">

        <span class="font-medium  text-slate-500 absolute top-1 right-3 text-xs" id="pokemon-id">{monster.id}</span>

        <img src={monster.image} alt={monster.name}>

        <a href={generateSerchParams('monsterId', monster.id)} id="monster-content">
            <p  class="font-bold first-letter:uppercase text-md text-slate-50 bg-slate-600 p-1.5  rounded my-1 hover:bg-slate-700 hover:text-slate-50"> {monster.name}</p>
        </a>

        <a href={generateSerchParams('monsterId2', monster.id)} id="add-second-monster" class="font-medium text-xs text-slate-700 p-1.5 border-slate-300 rounded my-1 hover:bg-slate-200 hover:text-slate-600">
            Add Pokemon</a>
    </div>
    {/each}
</div>

<style>

</style>