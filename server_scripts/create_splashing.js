// priority: 1000
ServerEvents.recipes((event) => {
  event.remove({ id: "create:splashing/gravel" });
  event.remove({ id: "create:splashing/sand" });

  event.recipes.create
    .splashing(
      [
        Item.of("minecraft:lapis_lazuli").withChance(0.1),
        Item.of("thermal:cinnabar").withChance(0.1),
        Item.of("minecraft:diamond").withChance(0.05),
        Item.of("minecraft:emerald").withChance(0.05),
        Item.of("minecraft:iron_nugget").withChance(0.7),
        Item.of("minecraft:gold_nugget").withChance(0.4),
        Item.of("thermal:lead_nugget").withChance(0.3),
        Item.of("minecraft:amethyst_shard").withChance(0.1),
        Item.of("thermal:apatite").withChance(0.2),
        Item.of("thermal:sulfur").withChance(0.1),
      ],
      "#forge:gravel"
    )
    .processingTime(600);

  event.recipes.create
    .splashing(
      [
        Item.of("minecraft:raw_gold").withChance(0.2),
        Item.of("minecraft:raw_copper").withChance(0.3),
        Item.of("minecraft:clay_ball").withChance(0.2),
        Item.of("thermal:raw_nickel").withChance(0.1),
        Item.of("thermal:raw_silver").withChance(0.1),
        Item.of("mekanism:fluorite_gem").withChance(0.1),
        Item.of("minecraft:raw_iron").withChance(0.4),
        Item.of("minecraft:redstone").withChance(0.3),
        Item.of("minecraft:glowstone_dust").withChance(0.2),
      ],
      "#forge:sand"
    )
    .processingTime(600);

  event.recipes.create
    .splashing(
      [Item.of("minecraft:quartz").withChance(0.3)],
      "minecraft:soul_sand"
    )
    .processingTime(600);
});
