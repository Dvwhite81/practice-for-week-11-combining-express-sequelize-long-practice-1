'use strict';

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
   await queryInterface.bulkInsert('Trees', [
    {
      tree: 'General Sherman',
      location: 'Sequoia National Park',
      heightFt: 274.9,
      ground_circumference_ft: 102.6
  },
  {
      tree: 'General Grant',
      location: 'Kings Canyon National Park',
      heightFt: 268.1,
      ground_circumference_ft: 107.5
  },
  {
      tree: 'President',
      location: 'Sequoia National Park',
      heightFt: 240.9,
      ground_circumference_ft: 93
  },
  {
      tree: 'Lincoln',
      location: 'Sequoia National Park',
      heightFt: 255.8,
      ground_circumference_ft: 98.3
  },
  {
      tree: 'Stagg',
      location: 'Private Land',
      heightFt: 243,
      ground_circumference_ft: 109
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
    await queryInterface.bulkDelete('Trees', {
      tree: ['General Sherman', 'General Grant', 'President', 'Lincoln', 'Stagg']
    });
  }
};
