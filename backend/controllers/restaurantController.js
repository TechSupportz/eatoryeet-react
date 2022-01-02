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

function getRestaurantById(req, res){
	const restaurantId = parseInt(req.params.id)

	restaurantDB.getRestaurantById(restaurantId, (err, result) => {
		if(err){
			res.status(500).json(err)
		}else{
			res.status(200).json(result)
		}
	})
}

module.exports = { getAllRestaurants, getRestaurantById }


