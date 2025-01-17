/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    username: {
      type: 'string',
      required: true,
      unique: true
    },
    
    password: {
      type: 'string',
      required: true
    },

    purchases: {
      collection: 'purchases',
      via: 'owner'
    }

  },

};

