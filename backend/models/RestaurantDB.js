const db = require("../dbConnections")

class RestaurantDB {
	getAllRestaurants(callback) {
		const query =
			"SELECT restaurants.id, restaurants.name, restaurants.cost, restaurants.image_url, AVG(eatoryeet.reviews.rating) AS avg_rating, categories.category FROM eatoryeet.restaurants LEFT JOIN reviews ON reviews.restaurant_id = eatoryeet.restaurants.id LEFT JOIN categories ON categories.restaurant_id = eatoryeet.restaurants.id GROUP BY eatoryeet.restaurants.id"
		db.query(query, callback)
	}

	getRestaurantById(restaurantId, callback) {
		const query = "SELECT * FROM eatoryeet.restaurants WHERE id = ?"
		db.query(query, [restaurantId], callback)
	}
}

module.exports = RestaurantDB
