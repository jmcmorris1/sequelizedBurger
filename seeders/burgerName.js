'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('burgers', [{
        burgers_Name: 'Cheese Burger',
        devoured: false
      },{
        burgers_Name: 'Krabby Patty',
        devoured: false
        },{
        burgers_Name: 'Turkey Burger',
        devoured: false
        },{
        burgers_Name: 'Big Mac',
        devoured: false
        },{
        burgers_Name: 'Whopper',
        devoured: false
        },{
        burgers_Name: "Good Burger",
        devoured: true
        }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('burgers', null, {truncate: true});
  }
};