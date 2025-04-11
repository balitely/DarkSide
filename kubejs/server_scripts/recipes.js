ServerEvents.recipes((event) => {
	// remove by modid
	let remove_recipes = [
		"fantasy_weapons",
		"magistuarmory",
		"magistuarmoryaddon",
		"slavicarmory",
		"composite_material",
		"fantasy_armor",
		"additional_rpg_jewelry",
		"archers",
		"extraspellattributes",
		"jewelry",
		"paladins",
		"rogues",
		"spellbladenext",
		"wizards",
		"genshinstrument",
		"legendarysurvivaloverhaul",
		"legendary_monsters",
		"mutantmonsters",
		"mine_and_staff",
		"miningmaster",
		"more_potion_effects",
		"undead_revamp2",
		"grimoireofgaia",
		"majruszsdifficulty",
		"simplyswords",
		"enigmaticlegacy",
		"third_life_plus",
		"thirst",
		"verdant",
		"verdantvibes",
		"waystones",
		"mcdw",
		"minecraft",
	];

	remove_recipes.forEach((item) => {
		event.remove({ mod: item });
	});
});
