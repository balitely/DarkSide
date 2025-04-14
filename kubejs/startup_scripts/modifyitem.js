ItemEvents.modification((event) => {
	// 只是懒得写完整string😁
	let t = {
		uc: "UNCOMMON",
		ra: "RARE",
		ep: "EPIC",
	};

	/**
	 * @type {[物品:Ingredient_,稀有度:Internal.Rarity_,伤害:number,攻速:number]}
	 */
	let modifyItem = [
		//匕首
		["magistuarmoryaddon:steel_rondel_dagger", t.uc],
		["magistuarmoryaddon:steel_parrying_dagger", t.uc],
		["magistuarmoryaddon:steel_bollock_dagger", t.uc],
		["fantasy_weapons:weapon_thief_dagger", t.ra],
		["fantasy_weapons:weapon_old_dagger", t.uc],
		["fantasy_weapons:weapon_savage_dagger", t.uc],

		//单手镰
		["magistuarmoryaddon:steel_sickle", t.uc],

		//短剑
		["magistuarmory:steel_shortsword", t.uc],
		["magistuarmory:silver_shortsword", t.uc],

		//直剑
		["magistuarmoryaddon:steel_arming_sword_type_xiv", t.uc],
		["magistuarmoryaddon:steel_arming_sword_type_xv", t.uc],
		["magistuarmoryaddon:steel_arming_sword_type_xiii", t.uc],
		["miningmaster:power_pyrite_sword", t.ra],
		["miningmaster:lucky_citrine_sword", t.ra],
		["miningmaster:spirit_garnet_sword", t.ra],
		["miningmaster:ice_sapphire_sword", t.ra],
		["miningmaster:fire_ruby_sword", t.ra],
		["fantasy_weapons:weapon_old_blade", t.uc],
		["composite_material:rusted_copper_sword", t.uc],
		["composite_material:amethyst_sword", t.uc],

		//单手矛
		["magistuarmory:pitchfork", t.uc],
		["fantasy_weapons:weapon_savage_spear", t.uc],

		//迅捷剑
		["magistuarmoryaddon:steel_rapier", t.uc],

		//单手斧
		["magistuarmoryaddon:steel_battleaxe", t.uc],
		["magistuarmoryaddon:steel_francisca_axe", t.uc],
		["magistuarmoryaddon:steel_war_axe", t.uc],
		["miningmaster:haste_peridot_axe", t.ra],
		["miningmaster:power_pyrite_axe", t.ra],
		["miningmaster:kinetic_opal_axe", t.ra],
		["composite_material:amethyst_axe", t.uc],
		["composite_material:rusted_copper_axe", t.uc],

		//单手杖
		["magistuarmoryaddon:steel_round_mace", t.uc],
		["magistuarmory:steel_heavymace", t.uc],
		["fantasy_weapons:weapon_savage_hammer", t.uc],
		["magistuarmory:rusted_heavymace", t.uc],
		["magistuarmory:club", t.uc],
		["magistuarmory:silver_heavymace", t.uc],

		//单手魔杖
		["mine_and_staff:iolite_staff", t.ra],
		["mine_and_staff:roots_staff", t.ra],

		//长弓
		["magistuarmory:longbow", t.uc],

		//重弩
		["magistuarmory:heavy_crossbow", t.uc],

		//手半剑
		["magistuarmory:noble_sword", t.uc],
		["magistuarmory:steel_bastardsword", t.uc],
		["magistuarmory:silver_bastardsword", t.uc],

		//长矛
		["magistuarmory:steel_pike", t.uc],
		["magistuarmory:silver_pike", t.uc],

		//长戟
		["magistuarmory:steel_concavehalberd", t.uc],
		["magistuarmory:silver_concavehalberd", t.uc],

		//双手巨剑
		["magistuarmory:steel_zweihander", t.uc, 1],
		["magistuarmory:silver_zweihander", t.uc],
		["fantasy_weapons:weapon_sharp_sword", t.ra],
		["fantasy_weapons:weapon_cursed_blade", t.ra],
	];

	modifyItem.forEach(([item, r, d, s]) => {
		event.modify(item, (e) => {
			e.rarity = r;
			if (d && d == number) {
				e.setAttackDamage(d);
			}
			if (s && s == number) {
				e.setAttackSpeed(s);
			}
		});
	});
});
