const db = require("../dbConnections")

class RestaurantDB{
	getAllRestaurants(callback){
		const query = "SELECT * FROM eatoryeet.restaurants"
		db.query(query, callback)
	}
}

module.exports = RestaurantDB