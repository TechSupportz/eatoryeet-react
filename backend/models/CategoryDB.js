const db = require("../dbConnections")

class CategoryDB{
	getRestaurantCategories(restaurantId ,callback){
		const query = "SELECT * FROM eatoryeet.categories WHERE restaurant_id = ?"
		db.query(query, [restaurantId], callback)
	}

}

module.exports = CategoryDB