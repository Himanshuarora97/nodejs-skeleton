"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.addColumn("Users", "verifyToken", {
        type: Sequelize.STRING,
        defaultValue: null,
      }),
      queryInterface.addColumn("Users", "isVerified", {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Promise.all([
      queryInterface.removeColumn("Users", "verifyToken"),
      queryInterface.removeColumn("Users", "isVerified"),
    ]);
  },
};
