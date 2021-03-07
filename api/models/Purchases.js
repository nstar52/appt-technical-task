/**
 * Purchases.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    product_name: {
      type: 'string',
      required: true,
    },

    product_price: {
        type: "number",
        required: true
    },

    product_vat: {
        type: "number",
        required: true
    },

    owner: {
        collection: 'users',
        via: 'purchases'
    }

  },

};

