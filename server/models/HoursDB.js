const db = require("../dbConnections")

class HoursDB{
	getHoursByRestaurant(restaurantId, callback){
		const query = "SELECT * FROM eatoryeet.opening_hours WHERE restaurant_id = ?"
		db.query(query, [restaurantId], callback)
	}
}

module.exports = HoursDB