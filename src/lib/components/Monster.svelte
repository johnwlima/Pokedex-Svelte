<script lang="ts">
	import type { IndexMonster } from '../../routes/+page';
	import { caughtMonsters } from '$lib/stores';

	export let monster: IndexMonster;

	const catchMonster = () => {
        caughtMonsters.update((monsters) => {
            return [...monsters, monster]
        })

		console.log('catch monster', monster);
	};
</script>

<div
	id="pokemon-card"
	class="w-34 flex-center relative m-2 flex max-w-48 grow flex-col rounded border-2 border-slate-200 bg-slate-100 p-4 text-center drop-shadow-sm transition-all hover:border-slate-100 hover:bg-slate-50 hover:drop-shadow-none"
>
	<span class="absolute right-3 top-1 text-xs font-medium text-slate-500" id="pokemon-id"
		>{monster.id}</span
	>
	<img src={monster.image} alt={monster.name} />

	<button type="button" onclick={catchMonster} id="monster-content">
		<p
			class="text-md my-1 rounded bg-slate-600 p-1.5 font-bold text-slate-50 first-letter:uppercase hover:bg-slate-700 hover:text-slate-50"
		>
			{monster.name}
		</p>
	</button>
</div>
