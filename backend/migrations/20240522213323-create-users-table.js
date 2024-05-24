"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    CREATE TABLE "users" (
      "id" SERIAL PRIMARY KEY,
      "email" VARCHAR(255) NOT NULL UNIQUE,
      "password" VARCHAR(255) NOT NULL,
      "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP TABLE "users";
    `);
  },
};
