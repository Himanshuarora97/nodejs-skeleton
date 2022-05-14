"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn("Users", "password", {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.addColumn("Users", "isAdmin", {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn("Users", "password"),
      queryInterface.removeColumn("Users", "isAdmin"),
    ]);
  },
};
