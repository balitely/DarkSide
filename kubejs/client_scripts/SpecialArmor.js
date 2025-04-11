ItemEvents.tooltip((event) => {
    //轻盈
    event.addAdvanced("immersive_armors:bone_helmet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的移动速度"))
        text.add(1,Text.gold("部位独特属性：额外的法力恢复"))
    })
    event.addAdvanced("immersive_armors:bone_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的移动速度"))
        text.add(1,Text.gold("部位独特属性：额外的灵魂法术强度"))
    })
    event.addAdvanced("immersive_armors:bone_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的移动速度"))
        text.add(1,Text.gold("部位独特属性：额外的法术急速"))
    })
    event.addAdvanced("immersive_armors:bone_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的移动速度"))
    })

    event.addAdvanced("majruszsdifficulty:tattered_helmet", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的法术暴击率"))
    })
    event.addAdvanced("majruszsdifficulty:tattered_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的法术暴击伤害"))
    })
    event.addAdvanced("majruszsdifficulty:tattered_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的法术暴击率"))
    })
    event.addAdvanced("majruszsdifficulty:tattered_boots", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的法术暴击伤害"))
    })

    event.addAdvanced("rogues:rogue_armor_head", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的移动速度+攻击速度"))
        text.add(1,Text.gold("部位独特属性：额外的暴击率"))
    })
    event.addAdvanced("rogues:rogue_armor_chest", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的移动速度+攻击速度"))
        text.add(1,Text.gold("部位独特属性：额外的穿透伤害"))
    })
    event.addAdvanced("rogues:rogue_armor_legs", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的移动速度+攻击速度"))
        text.add(1,Text.gold("部位独特属性：额外的穿透伤害"))
    })
    event.addAdvanced("rogues:rogue_armor_feet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的移动速度+攻击速度"))
        text.add(1,Text.gold("部位独特属性：额外的运气值"))
    })

    event.addAdvanced("magistuarmory:gambeson_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的物理伤害防护"))
    })
    //较轻
    event.addAdvanced("minecraft:leather_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的远程武器装填速度"))
    })

    event.addAdvanced("archers:archer_armor_head", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的基础远程攻击力"))
        text.add(1,Text.gold("部位独特属性：额外的每秒技力恢复"))
    })
    event.addAdvanced("archers:archer_armor_chest", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的基础远程攻击力"))
        text.add(1,Text.gold("部位独特属性：额外的远程武器装填速度"))
    })
    event.addAdvanced("archers:archer_armor_legs", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的基础远程攻击力"))
        text.add(1,Text.gold("部位独特属性：最大闪避充能+1"))
    })
    event.addAdvanced("archers:archer_armor_feet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的基础远程攻击力"))
        text.add(1,Text.gold("部位独特属性：额外的闪避冷却回复速度"))
    })

    //正常
    event.addAdvanced("magistuarmory:cuirassier_helmet", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的单次攻击技力恢复"))
    })
    event.addAdvanced("magistuarmory:cuirassier_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的物理伤害防护"))
    })

    event.addAdvanced("magistuarmory:lamellar_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的物理伤害防护"))
    })

    event.addAdvanced("minecraft:chainmail_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的物理伤害防护"))
    })

    event.addAdvanced("immersive_armors:wooden_helmet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的弹射物与爆炸保护"))
    })
    event.addAdvanced("immersive_armors:wooden_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的弹射物与爆炸保护"))
    })
    event.addAdvanced("immersive_armors:wooden_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的弹射物与爆炸保护"))
    })
    event.addAdvanced("immersive_armors:wooden_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的弹射物与爆炸保护"))
    })

    event.addAdvanced("composite_material:copper_helmet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的击退抗性"))
    })
    event.addAdvanced("composite_material:copper_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的击退抗性"))
    })
    event.addAdvanced("composite_material:copper_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的击退抗性"))
    })
    event.addAdvanced("composite_material:copper_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的击退抗性"))
    })

    event.addAdvanced("mutantmonsters:mutant_skeleton_skull", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的暴击率"))
    })
    event.addAdvanced("mutantmonsters:mutant_skeleton_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的百分比远程攻击力"))
    })
    event.addAdvanced("mutantmonsters:mutant_skeleton_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的远程武器装填速度"))
    })
    event.addAdvanced("mutantmonsters:mutant_skeleton_boots", (item, advanced, text) => {
        text.add(1,Text.gold("部位独特属性：额外的移动速度"))
    })

    //偏重
    event.addAdvanced("minecraft:iron_helmet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的物理伤害防护"))
    })
    event.addAdvanced("minecraft:iron_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的物理伤害防护"))
    })
    event.addAdvanced("minecraft:iron_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的物理伤害防护"))
    })
    event.addAdvanced("minecraft:iron_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的物理伤害防护"))
    })

    event.addAdvanced("magistuarmory:face_helmet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的物理伤害防护"))
        text.add(1,Text.gold("部位独特属性：额外的盔甲韧性"))
    })
    event.addAdvanced("slavicarmory:rus_chainmail_coif", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的物理伤害防护"))
        text.add(1,Text.gold("部位独特属性：额外的基础物理攻击力"))
    })
    event.addAdvanced("slavicarmory:rus_chainmail_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的物理伤害防护"))
        text.add(1,Text.gold("部位独特属性：额外的百分比物理攻击力"))
    })
    event.addAdvanced("slavicarmory:rus_chainmail_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的物理伤害防护"))
        text.add(1,Text.gold("部位独特属性：额外的攻击速度"))
    })
    event.addAdvanced("slavicarmory:rus_chainmail_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的物理伤害防护"))
        text.add(1,Text.gold("部位独特属性：额外的移动速度"))
    })

    event.addAdvanced("minecraft:golden_helmet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的法力护盾"))
    })
    event.addAdvanced("minecraft:golden_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的法力护盾"))
    })
    event.addAdvanced("minecraft:golden_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的法力护盾"))
    })
    event.addAdvanced("minecraft:golden_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的法力护盾"))
    })

    event.addAdvanced("magistuarmory:greathelm", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的物理伤害防护"))
    })
    event.addAdvanced("magistuarmory:crusader_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的基础物理攻击力"))
    })
    event.addAdvanced("magistuarmory:crusader_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的技力消耗减免"))
    })
    event.addAdvanced("magistuarmory:crusader_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的法术急速"))
    })

    event.addAdvanced("magistuarmory:bascinet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的基础攻击力"))
    })
    event.addAdvanced("magistuarmory:xivcenturyknight_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的击退抗性"))
    })
    event.addAdvanced("magistuarmory:xivcenturyknight_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的物理伤害防护"))
    })
    event.addAdvanced("magistuarmory:xivcenturyknight_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的物理伤害防护"))
    })

    event.addAdvanced("composite_material:amethyst_helmet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的每秒法力恢复"))
        text.add(1,Text.gold("部位独特属性：额外的最大法力值"))
    })
    event.addAdvanced("composite_material:amethyst_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的每秒法力恢复"))
        text.add(1,Text.gold("部位独特属性：额外的物理伤害防护"))
    })
    event.addAdvanced("composite_material:amethyst_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的每秒法力恢复"))
        text.add(1,Text.gold("部位独特属性：额外的法术急速"))
    })
    event.addAdvanced("composite_material:amethyst_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的每秒法力恢复"))
        text.add(1,Text.gold("部位独特属性：额外的法力护盾"))
    })

    event.addAdvanced("magistuarmory:kettlehat", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
    })
    event.addAdvanced("magistuarmory:platemail_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
    })
    event.addAdvanced("magistuarmory:platemail_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
    })
    event.addAdvanced("magistuarmory:platemail_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
    })

    //沉重
    event.addAdvanced("minecraft:diamond_helmet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的每秒法力与技力恢复"))
    })
    event.addAdvanced("minecraft:diamond_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的法力护盾"))
    })
    event.addAdvanced("minecraft:diamond_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的物理伤害防护"))
    })
    event.addAdvanced("minecraft:diamond_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性"))
        text.add(1,Text.gold("部位独特属性：额外的法术急速"))
    })

    //极重
    event.addAdvanced("composite_material:obsidian_helmet", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性+法力护盾"))
        text.add(1,Text.gold("部位独特属性：额外的物理伤害防护"))
    })
    event.addAdvanced("composite_material:obsidian_chestplate", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性+法力护盾"))
        text.add(1,Text.gold("部位独特属性：额外的百分比减伤"))
    })
    event.addAdvanced("composite_material:obsidian_leggings", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性+法力护盾"))
        text.add(1,Text.gold("部位独特属性：额外的百分比伤害增加"))
    })
    event.addAdvanced("composite_material:obsidian_boots", (item, advanced, text) => {
        text.add(1,Text.gold("套装特性：额外的盔甲韧性+法力护盾"))
        text.add(1,Text.gold("部位独特属性：额外的法术急速"))
    })
})