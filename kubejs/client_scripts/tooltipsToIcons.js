ItemEvents.tooltip((event) => {
	let { player } = Client;

	// 是的只有有tag的物品才会有提示
	function tooltipAdv(tool_tag) {
		event.addAdvanced(
			{ tag: tool_tag },
			/**
			 * @param {Internal.ItemStack} stack
			 * @param {boolean} isAdvanced
			 * @param {Internal.List<Internal.Component>} tooltip
			 */
			(stack, isAdvanced, tooltips) => {
				if (!Client.isShiftDown()) {
					tooltips.removeIf(($) => $.toString().includes("modifier") || Text.isEmpty($));
					let comp = Text.empty();
					if (player) {
						let slot = onSlots(stack); // 这个方法在底下
						let equipped = player.getItemBySlot(slot);
						let atrMap = stack.getAttributeModifiers(slot);
						let otherMap = equipped.getAttributeModifiers(slot);

						let colors = Color.WHITE;

						atrMap.forEach((atr, modifier) => {
							if (
								//true
								(atr.descriptionId == "attribute.name.generic.attack_speed" && stack.hasTag("kjs:tools")) || // 攻速
								atr.descriptionId == "attribute.name.generic.attack_damage" || // 伤害
								atr.descriptionId == "attribute.name.generic.armor" || // 护甲
								atr.descriptionId == "attribute.name.generic.armor_toughness" // 韧性
							) {
								let vlaue = 0;

								atrMap.get(atr).forEach((amm) => {
									vlaue += amm.amount;
								});

								if (!equipped.isEmpty() && !equipped.equals(stack) && !otherMap.isEmpty()) {
									let ovlaue = 0;

									otherMap.get(atr).forEach((amm) => {
										ovlaue += amm.amount;
									});

									if (vlaue != ovlaue) {
										colors = vlaue > ovlaue ? Color.GREEN : Color.RED;
									}
								}
								let { amount } = modifier;

								if (amount) {
									if (atr.descriptionId == "attribute.name.generic.attack_damage") {
										vlaue += 2; // 让伤害数值回归原版数值需要+空手伤害
									}
									let texT = {
										// 这是大部分情况下都能使用的内容
										normal: [
											{
												translate: "kubejs." + atr.descriptionId,
												font: "kubejs:icons",
											},
											Text.of(vlaue >= 1 ? vlaue.toFixed() : (vlaue * 100).toFixed() + "%").color(colors),
											" ",
										],
										// 这是为了攻击速度专门写的
										attackSpeed: [
											{
												translate: "kubejs." + atr.descriptionId,
												font: "kubejs:icons",
											},
											Text.of((vlaue += 4).toFixed(1)).color(colors),
											" ",
										],
									};
									// 二选一，多了就换switch
									if (atr.descriptionId == "attribute.name.generic.attack_speed") {
										comp.append(texT.attackSpeed);
									} else {
										comp.append(texT.normal);
									}
								}
							}
						});
					}
					if (!comp.isEmpty()) {
						tooltips.add(1, comp);
					}
				}
			}
		);
	}
	// 这里我指定了这俩tag
	tooltipAdv("forge:armors");
	tooltipAdv("kjs:tools");
});
/**
 * @param {Internal.ItemStack} stack
 * @returns {Internal.EquipmentSlot}
 */
let onSlots = (stack) => {
	// 这是分拣装备部位
	switch (true) {
		case stack.hasTag("forge:armors/helmets"):
			return "head";
		case stack.hasTag("forge:armors/chestplates"):
			return "chest";
		case stack.hasTag("forge:armors/leggings"):
			return "legs";
		case stack.hasTag("forge:armors/boots"):
			return "feet";
		default:
			return "mainhand";
	}
};
