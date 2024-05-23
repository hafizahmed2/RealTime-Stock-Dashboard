"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      INSERT INTO stocks (symbol, company_name) VALUES
      ('AAPL', 'Apple Inc.'),
      ('MSFT', 'Microsoft Corporation'),
      ('AMZN', 'Amazon.com Inc.'),
      ('GOOGL', 'Alphabet Inc.'),
      ('FB', 'Facebook Inc.'),
      ('TSLA', 'Tesla Inc.'),
      ('NVDA', 'NVIDIA Corporation'),
      ('JPM', 'JPMorgan Chase & Co.'),
      ('V', 'Visa Inc.'),
      ('PYPL', 'PayPal Holdings Inc.');
    `);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
    DELETE FROM stocks;
  `);
  },
};
