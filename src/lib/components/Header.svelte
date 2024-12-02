<script lang="ts">
	import Timer from "./Timer.svelte";
	import City from "./City.svelte";
    import { caughtMonsters } from '$lib/stores';

</script>

{#snippet link(content: string = '', link: string = '/')}
    <a href="{link}" class="bg-slaterounded-lg px-3 py-2.5 font-bold text-slate-50 rounded-lg hover:border-b-2 border-blue-300 hover:text-blue-300"> {content}
    </a>
{/snippet}

<div 
class="p-6 mb-4 w-full bg-slate-900 flex items-center content-center justify-around gap-4">

    <div class="flex items-center content-center gap-2 ">
        <a href="/" id="logo" class="flex gap-2 items-center">
            <img src="/pokemon-icon.jpg" alt="pokemon icon" class="w-12">
            <span class="text-lg font-bold text-slate-50">Pokedex</span>
        </a>
        <Timer/>
        <City/>
    </div>
    <nav class="flex items-center justify-start gap-4">
       {@render link("Home","/")}

       <a href="my-monsters" class="bg-slaterounded-lg px-3 py-2.5 font-bold text-slate-50 rounded-lg hover:border-b-2 border-blue-300 hover:text-blue-300"> My Pokemons ({$caughtMonsters.length})
        </a>
      
       {@render link("About", "/about")}
    </nav>
</div>

<style>
</style>