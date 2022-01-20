const CategoryDB = require("../models/CategoryDB")

const categoryDB = new CategoryDB()

function getRestaurantCategories(req, res) {
	const restaurantId = parseInt(req.params.id)

	categoryDB.getRestaurantCategories(restaurantId, (err, results) => {
		if (err){
			res.status(500).json(err)
		}

		if (results.length > 0){
			res.status(200).json(results)
		} else{
			res.status(404).json({ message: "Restaurant not found" })
		}
	})
}

module.exports = { getRestaurantCategories }