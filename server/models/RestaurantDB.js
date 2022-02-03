const db = require("../dbConnections")

class RestaurantDB {
	getAllRestaurants(callback) {
		const query =
			"SELECT restaurants.id, restaurants.name, restaurants.cost, restaurants.image_url, AVG(eatoryeet.reviews.rating) AS avg_rating, GROUP_CONCAT(DISTINCT categories.category) AS category FROM eatoryeet.restaurants LEFT JOIN reviews ON reviews.restaurant_id = eatoryeet.restaurants.id LEFT JOIN categories ON categories.restaurant_id = eatoryeet.restaurants.id GROUP BY eatoryeet.restaurants.id"
		db.query(query, callback)
	}

	getRestaurantById(restaurantId, callback) {
		const query =
			"SELECT restaurants.*, AVG(eatoryeet.reviews.rating) AS avg_rating, GROUP_CONCAT(DISTINCT categories.category) AS category, opening_hours.start_hour AS start_hour, opening_hours.end_hour AS end_hour FROM eatoryeet.restaurants LEFT JOIN reviews ON reviews.restaurant_id = eatoryeet.restaurants.id LEFT JOIN categories ON categories.restaurant_id = eatoryeet.restaurants.id LEFT JOIN opening_hours ON opening_hours.restaurant_id = eatoryeet.restaurants.id WHERE eatoryeet.restaurants.id = ? GROUP BY eatoryeet.restaurants.id"
		db.query(query, [restaurantId], callback)
	}
}

module.exports = RestaurantDB
