const db = require("../dbConnections")

class FavouriteDB {
	getAllFavourites(callback) {
		const query = "SELECT * FROM eatoryeet.favourites"
		db.query(query, callback)
	}

	getUserFavourites(userId, callback) {
		const query = "SELECT * FROM eatoryeet.favourites WHERE user_id = ?"
		db.query(query, [userId], callback)
	}

	getTotalRestaurantFavourites(restaurantId, callback) {
		const query = "SELECT COUNT(*) AS total FROM eatoryeet.favourites WHERE restaurant_id = ?"
		db.query(query, [restaurantId], callback)
	}

	addFavourite(favourite, callback) {
		const query = "INSERT INTO eatoryeet.favourites (user_id, restaurant_id) VALUES (?, ?);"
		db.query(query, [favourite.getUserId(), favourite.getRestaurantId()], callback)
	}

	deleteFavourite(favouriteId, callback) {
		const query = "DELETE FROM eatoryeet.favourites WHERE id = ?"
		db.query(query, [favouriteId], callback)
	}
}

module.exports = FavouriteDB
