/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const jwToken = require("../services/jwtoken");

module.exports = {

    login:function(req, res) {
        /**
         * This method will receive two parameter username and password
         * It will compare agaist the stored values(in real world it should query the database to compare the username and the hashed password)
         * If the compare is true it will return the token and the username
         */
        var username = "nick"
        var password = "1234"

        if (!req.param("username") && !req.param("password")) {
            return res.badRequest('Username or Password missing');
        }

        if (req.param("username") === username && req.param("password") === password){
            res.send({ username: username, token: jwToken.issue({ username: req.param("username")}) });
        } else {
            return res.json("Username or password incorect")
        }
    },

    buy: function(req, res) {

        /**
         * In this method the route should getting the attribute of a purchase such us 
         * product name,
         * product description,
         * username(who bought the item),
         * product price(product price can be multipled by 0.2 to get the Vat value and substract it from the product value)
         * After the substraction the value without the vat can be stored to tha database.
         */

        // I had problem on making the system use the ORM method
        // In the web they executing when the configure the adapter to link with a database
        // but none clarifies if it is possible to do it in db files
        // Purchase.Create({
        //     product_name: 'program',
        //     product_price: '15',
        //     product_vat: '2,5',
          
        //     // Set the User's Primary Key to associate the Pet with the User.
        //     owner: 2
        //   });

        //     return res.json(message: "The purchase completd");
        //   });
    },


    buyHistory: function(req,res){
        /**
         * In this method two approach can be excetuted:
         * Aproach 1: if the user is an administrator to query all the purchases of the system 
         * Approach 2: if only the users purchases needs to be returned a query filter could using the relationship between user and purchase table
         *             to retrive only the purchases owned from the current user.
         * 
         * In both cases the rest of the functionality will be similar, 
         * by returning the lenght of the list which contains the purchases the system can return  the total number of orders in the system
         * by looping through the list and adding the prices of the purchases the system can return the total value of the orders in the system
         * by looping through the list and adding the prices and then divide the total number with the total number of purchases the system returns the average value of the orders in the system
         * by using again the total purchase price and multiplying the value with 0.2 the system can return the total amount of VAT for the orders based on the current VAT rate of 20%
         */
    }

};

