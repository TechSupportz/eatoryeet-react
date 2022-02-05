const db = require("../dbConnections")

class FavouriteDB {
	getUserFavourites(userId, callback) {
		const query =
			"SELECT favourites.id AS favourite_id, favourites.user_id, favourites.restaurant_id AS id ,restaurants.name, restaurants.cost, restaurants.image_url, AVG(eatoryeet.reviews.rating) AS avg_rating, GROUP_CONCAT(DISTINCT categories.category) AS category FROM eatoryeet.favourites LEFT JOIN restaurants ON restaurants.id = eatoryeet.favourites.restaurant_id LEFT JOIN reviews ON reviews.restaurant_id = eatoryeet.favourites.restaurant_id LEFT JOIN categories ON categories.restaurant_id = eatoryeet.favourites.restaurant_id WHERE eatoryeet.favourites.user_id = ? GROUP BY eatoryeet.favourites.restaurant_id "
		db.query(query, [userId], callback)
	}

	getTotalRestaurantFavourites(restaurantId, callback) {
		const query = "SELECT COUNT(*) AS total FROM eatoryeet.favourites WHERE restaurant_id = ?"
		db.query(query, [restaurantId], callback)
	}

	addFavourite(favourite, callback) {
		const query = "INSERT INTO eatoryeet.favourites (user_id, restaurant_id) VALUES (?, ?)"
		db.query(query, [favourite.userId, favourite.restaurantId], callback)
	}

	deleteFavourite(userId, restaurantId, callback) {
		const query = "DELETE FROM eatoryeet.favourites WHERE user_id = ? AND restaurant_id = ?"
		db.query(query, [userId, restaurantId], callback)
	}
}



module.exports = FavouriteDB
