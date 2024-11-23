<script lang="ts">
    
    import type { PageData } from "./$types"
    import { generations } from "./generations"

    export let data: PageData;
</script>

<div id="generations-container" class="flex flex-row flex-wrap w-full justify-center">
    {#each generations as generation (generation.id)}
        <button id="generation-button" class="m-4 py-1 px-3 border border-slate-100 rounded-lg bg-slate-600 text-slate-50 font-bold hover:bg-slate-700">
            {generation.main_region}
            
        </button>
    {/each}
</div>

<div id="pokemon-container" class="items-start flex-row justify-start w-creen flex flex-wrap basis-24">
    {#each data.monsters as monster (monster.id) }
    <div id="pokemon-card" class="max-w-48 grow drop-shadow-sm relative m-2 w-34 h-42 rounded bg-slate-100 border-slate-200 border-2 p-4 flex flex-col flex-center text-center hover:bg-slate-50 hover:border-slate-100 hover:drop-shadow-none transition-all"> 
        <span class="font-medium  text-slate-500 absolute top-1 right-3 text-xs" id="pokemon-id">{monster.id}</span>
        <p class="font-bold first-letter:uppercase text-slate-700"> {monster.name}</p>
        <img src={monster.image} alt={monster.name}>
    </div>
    {/each}
</div>

<style>

</style>