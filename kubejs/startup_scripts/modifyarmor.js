ItemEvents.modification((event) => {
	// 只是懒得写完整string😁
	let t = {
		uc: "UNCOMMON",
		ra: "RARE",
		ep: "EPIC",
	};

	// 物品,稀有度
	let modifyArmor = [
		//轻盈
		["rogues:rogue_armor_head", t.uc],
		["rogues:rogue_armor_chest", t.uc],
		["rogues:rogue_armor_legs", t.uc],
		["rogues:rogue_armor_feet", t.uc],

		//较轻
		["archers:archer_armor_head", t.uc],
		["archers:archer_armor_chest", t.uc],
		["archers:archer_armor_legs", t.uc],

		//正常
		["mutantmonsters:mutant_skeleton_skull", t.uc],
		["mutantmonsters:mutant_skeleton_chestplate", t.uc],
		["mutantmonsters:mutant_skeleton_leggings", t.uc],
		["mutantmonsters:mutant_skeleton_boots", t.uc],
		["archers:archer_armor_feet", t.uc],

		//偏重
		["magistuarmory:greathelm", t.uc],
		["magistuarmory:crusader_chestplate", t.uc],
		["magistuarmory:crusader_leggings", t.uc],
		["magistuarmory:crusader_boots", t.uc],
		["magistuarmory:face_helmet", t.uc],
		["slavicarmory:rus_chainmail_coif", t.uc],
		["slavicarmory:rus_chainmail_chestplate", t.uc],
		["slavicarmory:rus_chainmail_leggings", t.uc],
		["slavicarmory:rus_chainmail_boots", t.uc],
		["minecraft:golden_helmet", t.uc],
		["minecraft:golden_chestplate", t.uc],
		["minecraft:golden_leggings", t.uc],
		["minecraft:golden_boots", t.uc],
		["magistuarmory:bascinet", t.ra],
		["magistuarmory:xivcenturyknight_chestplate", t.ra],
		["magistuarmory:xivcenturyknight_leggings", t.ra],
		["magistuarmory:xivcenturyknight_boots", t.ra],
		["composite_material:amethyst_helmet", t.ra],
		["composite_material:amethyst_chestplate", t.ra],
		["composite_material:amethyst_leggings", t.ra],
		["composite_material:amethyst_boots", t.ra],

		//沉重
		["minecraft:diamond_helmet", t.uc],
		["minecraft:diamond_chestplate", t.uc],
		["minecraft:diamond_leggings", t.uc],
		["minecraft:diamond_boots", t.uc],

		//极重
		["composite_material:obsidian_helmet", t.ep],
		["composite_material:obsidian_chestplate", t.ep],
		["composite_material:obsidian_leggings", t.ep],
		["composite_material:obsidian_boots", t.ep],
	];

	modifyArmor.forEach(([item, r]) => {
		event.modify(item, (e) => {
			e.rarity = r;
		});
	});
});
