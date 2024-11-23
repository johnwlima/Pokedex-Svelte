<script lang="ts">
    
    import type { PageData } from "./$types"
    import { generations } from "./generations"

    export let data: PageData;
</script>


{#each data.monsters as monster, i (monster.url) }
   <p class="text-xl font-bold">{i+1}: {monster.name}</p>
{/each}

{#each generations as generation (generation.id)}
    <h1>{generation.name}</h1>
    <p>Games: {generation.games.join(", ")}</p>
    <p>Main region: {generation.main_region}</p>
{/each}
