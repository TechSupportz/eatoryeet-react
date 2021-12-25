const RestaurantDB = require("../models/RestaurantDB")

const restaurantDB = new RestaurantDB()

function getAllRestaurants(req, res){
	restaurantDB.getAllRestaurants((err, results) => {
		if(err){
			res.status(500).json(err)
		}else{
			res.status(200).json(results)
		}
	})
}

module.exports = { getAllRestaurants }


