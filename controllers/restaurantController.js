const RestaurantDB = require("../models/RestaurantDB")

const restaurantDB = new RestaurantDB()

function getAllRestaurants(req, res){
	restaurantDB.getAllRestaurants((err, results) => {
		if(err){
			res.status(500).send(err)
		}else{
			res.status(200).send(results)
		}
	})
}

module.exports = { getAllRestaurants }

