"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Insects", [
      {
        name: "Western Pygmy Blue Butterfly",
        description:
          "It can be recognized by the copper brown and dull blue pattern at the bases of both wings.",
        territory:
          "Can be found throughout North America and as far west as Hawaii and the middle east.",
        fact: "Its counterpart, the eastern blue pygmy can be found in forests along the Atlantic coasts.",
        millimeters: 12,
      },
      {
        name: "Patu Digua Spider",
        description:
          "Most of the spiders found around American homes are more helpful than harmful. This includes the smallest spider, the patu digua.",
        territory:
          "Lives around the Rio Digua river near the El Queremal, Valle del Cauca region of northern Colombia.",
        fact: "They’re hard to spot as the males grow to be about only a third of a millimeter, smaller than even the head of a pin.",
        millimeters: 0.33,
      },
      {
        name: "Scarlet Dwarf Dragonfly",
        description: "Scarlet color.",
        territory: "Can be found rom Southeast Asia to China and Japan.",
        fact: "It’s also known as the northern pygmyfly or tiny dragonfly.",
        millimeters: 20,
      },
      {
        name: "Midget Moth",
        description:
          "The smallest moths come from the Nepticulidae family and are referred to as pigmy moths or midget moths.",
        territory: "Not sure",
        fact: "They start out as little larvae who mine the leaves of various host plants.",
        millimeters: 3,
      },
      {
        name: "Bolbe Pygmaea Mantis",
        description: "Greenish color",
        territory: "Can be found in Australia.",
        fact: "Mantises are also one of the few insects that are kept and raised as pets.",
        millimeters: 10,
      },
      {
        name: "Microtityus Minimus Scorpion",
        description: "The world’s tiniest scorpion",
        territory:
          "Greater Antillean Island of Hispaniola in the Dominican Republic.",
        fact: "While scorpion venom is poisonous, only 25 species produce a toxin capable of killing humans.",
        millimeters: 11,
      },
      {
        name: "Euryplatea Nanaknihali Fly",
        description: "Smallest fly species on earth.",
        territory: "Not sure",
        fact: "These tiny flies lay their eggs inside the heads of ants, and once the eggs hatch and the larvae grow, they start to devour its host from the inside out, eventually decapitating the ant.",
        millimeters: 0.5,
      },
      {
        name: "Uranotaenia lowii Mosquito",
        description: "Pale-footed",
        territory:
          "Can be found from Texas to Florida, and can be found as far north as North Carolina.",
        fact: "The world’s smallest mosquito doesn’t like the taste of human blood.",
        millimeters: 2.5,
      },
      {
        name: "Fairyfly Wasp",
        description: "Virtually impossible to detect with the naked eye.",
        territory: "Regions in Hawaii, Costa Rica and Trinidad.",
        fact: "The kikiki is a close relative to the tinkerbella nana wasp, another fairyfly species whose name somehow perfectly befits its diminutive (.17 mm) stature.",
        millimeters: 0.139,
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Insects", {
      name: [
        "Western Pygmy Blue Butterfly",
        "Patu Digua Spider",
        "Scarlet Dwarf Dragonfly",
        "Midget Moth",
        "Bolbe Pygmaea Mantis",
        "Microtityus Minimus Scorpion",
        "Euryplatea Nanaknihali Fly",
        "Uranotaenia lowii Mosquito",
        "Fairyfly Wasp",
      ],
    });
  }
};
