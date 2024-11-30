<script lang="ts">
	import type { IndexMonster } from "../../routes/+page";

    export let monster: IndexMonster;
    export let updateSearchParams: (key: string, value: string) => void;
    export let isInteractive: boolean = false;
</script>

<div id="pokemon-card" class="max-w-48 grow drop-shadow-sm relative m-2 w-34 rounded bg-slate-100 border-slate-200 border-2 p-4 flex flex-col flex-center text-center hover:bg-slate-50 hover:border-slate-100 hover:drop-shadow-none transition-all">

        <span class="font-medium  text-slate-500 absolute top-1 right-3 text-xs" id="pokemon-id">{monster.id}</span>
            <img src={monster.image} alt={monster.name}>
      
        {#if isInteractive}
            <button type="button" onclick={() => isInteractive ? updateSearchParams('monsterId', monster.id) : () => {}} id="monster-content">
                <p  class="font-bold first-letter:uppercase text-md text-slate-50 bg-slate-600 p-1.5  rounded my-1 hover:bg-slate-700 hover:text-slate-50"> {monster.name}</p>
            </button>

            <button type="button" onclick={() => updateSearchParams('monsterId2', monster.id)} id="add-second-monster" class="font-medium text-xs text-slate-700 p-1.5 border-slate-300 rounded my-1 hover:bg-slate-200 hover:text-slate-600">
                Add Pokemon</button>
        {/if}
    </div>
    