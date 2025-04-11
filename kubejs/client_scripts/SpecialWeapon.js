ItemEvents.tooltip((event) => {
    //匕首
    event.addAdvanced("magistuarmoryaddon:steel_rondel_dagger", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：额外的防护"))
    })
    event.addAdvanced("magistuarmoryaddon:steel_parrying_dagger", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：额外的防护"))
    })
    event.addAdvanced("magistuarmoryaddon:steel_bollock_dagger", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：额外的防护+额外的穿透伤害"))
    })
    event.addAdvanced("fantasy_weapons:weapon_thief_dagger", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：额外的穿透伤害"))
    })
    event.addAdvanced("fantasy_weapons:weapon_savage_dagger", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：额外的暴击率"))
    })
    event.addAdvanced("fantasy_weapons:weapon_old_dagger", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：坚实耐用+额外的穿透伤害"))
    })
    //单手镰
    event.addAdvanced("magistuarmoryaddon:steel_sickle", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：坚实耐用"))
    })
    //短剑
    event.addAdvanced("magistuarmory:gold_shortsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:wood_shortsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:silver_shortsword", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：对亡灵生物造成额外伤害"))
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:netherite_shortsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:diamond_shortsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:copper_shortsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:iron_shortsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:stone_shortsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:steel_shortsword", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：坚实耐用"))
    })
    //直剑
    event.addAdvanced("magistuarmoryaddon:steel_arming_sword_type_xiv", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：加长+坚实耐用"))
    })
    event.addAdvanced("magistuarmoryaddon:steel_arming_sword_type_xv", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：加长"))
    })
    event.addAdvanced("magistuarmoryaddon:steel_arming_sword_type_xiii", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：加长+轻便"))
    })
    event.addAdvanced("undead_revamp2:bostroxsword", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：击退能力强化"))
    })
    event.addAdvanced("miningmaster:power_pyrite_sword", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：额外的基础属性"))
    })
    event.addAdvanced("miningmaster:lucky_citrine_sword", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：额外的幸运值"))
    })
    event.addAdvanced("miningmaster:spirit_garnet_sword", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：弱效吸血"))
    })
    event.addAdvanced("miningmaster:ice_sapphire_sword", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：额外的冰霜学派法术强度"))
    })
    event.addAdvanced("miningmaster:fire_ruby_sword", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：额外的炽焰学派法术强度"))
    })
    event.addAdvanced("fantasy_weapons:weapon_old_blade", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：坚实耐用+额外的基础属性"))
    })
    event.addAdvanced("composite_material:rusted_copper_sword", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：攻击施加1点中毒伤害"))
    })
    event.addAdvanced("composite_material:amethyst_sword", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：物品丢入水中缓慢修复自身"))
    })
    //单手矛 
    event.addAdvanced("magistuarmory:pitchfork", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：加长"))
    })
    event.addAdvanced("fantasy_weapons:weapon_savage_spear", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：坚实耐用+额外的基础属性"))
    })
    //迅捷剑
    event.addAdvanced("magistuarmoryaddon:steel_rapier", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：坚实耐用"))
    })
    //单手斧
    event.addAdvanced("magistuarmoryaddon:steel_battleaxe", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：加长+坚实耐用"))
    })
    event.addAdvanced("magistuarmoryaddon:steel_francisca_axe", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：加长+轻便"))
    })
    event.addAdvanced("magistuarmoryaddon:steel_war_axe", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：加长+额外的基础属性"))
    })
    event.addAdvanced("miningmaster:haste_peridot_axe", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：轻便"))
    })
    event.addAdvanced("miningmaster:power_pyrite_axe", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：额外的基础属性"))
    })
    event.addAdvanced("miningmaster:kinetic_opal_axe", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：击退能力强化"))
    })
    event.addAdvanced("composite_material:amethyst_axe", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：物品丢入水中缓慢修复自身"))
    })
    event.addAdvanced("composite_material:rusted_copper_axe", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：攻击施加1点中毒伤害"))
    })
    //单手杖
    event.addAdvanced("magistuarmory:gold_heavymace", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:wood_heavymace", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:silver_heavymace", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：对亡灵生物造成额外伤害"))
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:stone_heavymace", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:iron_heavymace", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:copper_heavymace", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:netherite_heavymace", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:diamond_heavymace", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmoryaddon:steel_round_mace", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：击退能力强化"))
    })
    event.addAdvanced("magistuarmory:steel_heavymace", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：坚实耐用"))
    })
    event.addAdvanced("fantasy_weapons:weapon_savage_hammer", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：坚实耐用+额外的基础属性"))
    })
    event.addAdvanced("magistuarmory:rusted_heavymace", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:club", (item, advanced, text) => {
        text.remove(1)
    })
    //单手魔杖
    event.addAdvanced("mine_and_staff:iolite_staff", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：坚实耐用"))
    })
    event.addAdvanced("mine_and_staff:roots_staff", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：位于任意森林群系时提供额外的魔力回复"))
    })
    //手半剑
    event.addAdvanced("magistuarmory:noble_sword", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：额外的基础属性"))
    })
    event.addAdvanced("magistuarmory:steel_bastardsword", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：坚实耐用"))
    })
    event.addAdvanced("magistuarmory:silver_bastardsword", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：对亡灵生物造成额外伤害"))
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:netherite_bastardsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:copper_bastardsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:diamond_bastardsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:gold_bastardsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:stone_bastardsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:wood_bastardsword", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:iron_bastardsword", (item, advanced, text) => {
        text.remove(1)
    })
    //长矛
    event.addAdvanced("magistuarmory:steel_pike", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：坚实耐用"))
    })
    event.addAdvanced("magistuarmory:silver_pike", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：对亡灵生物造成额外伤害"))
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:netherite_pike", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:copper_pike", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:diamond_pike", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:gold_pike", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:stone_pike", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:wood_pike", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:iron_pike", (item, advanced, text) => {
        text.remove(1)
    })
    //长戟
    event.addAdvanced("magistuarmory:steel_concavehalberd", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：坚实耐用"))
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:silver_concavehalberd", (item, advanced, text) => {
        text.add(1,Text.gold("独特属性：对亡灵生物造成额外伤害"))
        text.remove(2)
        text.remove(3)
    })
    event.addAdvanced("magistuarmory:netherite_concavehalberd", (item, advanced, text) => {
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:copper_concavehalberd", (item, advanced, text) => {
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:diamond_concavehalberd", (item, advanced, text) => {
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:gold_concavehalberd", (item, advanced, text) => {
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:stone_concavehalberd", (item, advanced, text) => {
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:wood_concavehalberd", (item, advanced, text) => {
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:iron_concavehalberd", (item, advanced, text) => {
        text.remove(2)
    })
    //双手巨剑
    event.addAdvanced("magistuarmory:steel_zweihander", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：坚实耐用"))
    })
    event.addAdvanced("magistuarmory:silver_zweihander", (item, advanced, text) => {
        text.remove(1)
        text.add(1,Text.gold("独特属性：对亡灵生物造成额外伤害"))
        text.remove(2)
    })
    event.addAdvanced("magistuarmory:netherite_zweihander", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:copper_zweihander", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:diamond_zweihander", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:gold_zweihander", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:stone_zweihander", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:wood_zweihander", (item, advanced, text) => {
        text.remove(1)
    })
    event.addAdvanced("magistuarmory:iron_zweihander", (item, advanced, text) => {
        text.remove(1)
    })
})