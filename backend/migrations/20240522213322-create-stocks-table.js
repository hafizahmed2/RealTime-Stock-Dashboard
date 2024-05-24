"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    CREATE TABLE "stocks" (
      "id" SERIAL PRIMARY KEY,
      "symbol" VARCHAR(50) NOT NULL UNIQUE,
      "company_name" VARCHAR(255) NOT NULL
    );
  `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP TABLE "stocks";
    `);
  },
};
