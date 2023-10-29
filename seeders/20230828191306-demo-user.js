'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
       firstName:'John',
       lastName:'Nguyen',
       email:'john@gmail.com',
       createdAt: new Date(),
       updatedAt: new Date ()
     },
     {
      firstName:'Jojo',
      lastName:'Vu',
      email:'Jojo@gmail.com',
      createdAt: new Date(),
       updatedAt: new Date ()
     }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Users', null, {});

  }
};
