ItemEvents.tooltip((event) => {
	let { player } = Client;

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
						let slot = onSlots(stack);
						let equipped = player.getItemBySlot(slot);
						let atrMap = stack.getAttributeModifiers(slot);
						let otherMap = equipped.getAttributeModifiers(slot);

						let colors = Color.WHITE;

						atrMap.forEach((atr, modifier) => {
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
								comp.append([
									{
										translate: "kubejs." + atr.descriptionId,
										font: "kubejs:icons",
									},
									Text.of(vlaue >= 1 ? vlaue.toFixed() : (vlaue * 100).toFixed() + "%").color(colors),
									" ",
								]);
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
	tooltipAdv("forge:armors");
	tooltipAdv("kjs:tools");
});
/**
 * @param {Internal.ItemStack} stack
 * @returns {Internal.EquipmentSlot}
 */
let onSlots = (stack) => {
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
