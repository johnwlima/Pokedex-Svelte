<script>
    import {generations} from "./generations";
</script>

{#each generations as generation}
    <h1>{generation.name}</h1>
    <p>Games: {generation.games.join(', ')}</p>
    <p>Main region: {generation.main_region}</p>
{/each}