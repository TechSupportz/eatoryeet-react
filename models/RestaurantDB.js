const db = require("../dbConnections")

class RestaurantDB{
	getAllRestaurants(callback){
		const query = "SELECT * FROM eatoryeet.restaurants"
		db.query(query, callback)
	}

	getRestaurantById(restaurantId, callback){
		const query = "SELECT * FROM eatoryeet.restaurants WHERE id = ?"
		db.query(query, [restaurantId], callback)
	}
}

module.exports = RestaurantDB