import type { PageLoad } from './$types';
type ApiMonster = {
	name: string;
	url: string;
};

export type IndexMonster = ApiMonster & {
	id: string;
	url: string;
	image: string;
};

export const load = (async ({ fetch, url }) => {
	const generationId = url.searchParams.get('generation_id') || '1'
	let monstersList = []

	if(generationId == 'all') {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20000');
		const json = await response.json();
		monstersList = json.results
	} else {
		const generationRespose = await fetch(`https://pokeapi.co/api/v2/generation/${generationId}`)
		const generationJson = await 
		generationRespose.json()
		monstersList = generationJson.pokemon_species;
	}

	const monsters: IndexMonster[] = monstersList.map((monster: ApiMonster) => {
		const splitUrl = monster.url.split('/');
		const id = splitUrl[splitUrl.length - 2];
		return {
			name: monster.name,
			url: monster.url,
			id,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
		};
	})

	return {
		monsters
	}
}) satisfies PageLoad;
