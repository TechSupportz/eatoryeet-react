const Favourite = require('../models/Favourite')
const FavouriteDB = require("../models/FavouriteDB")

const favouriteDB = new FavouriteDB()

function getUserFavourites(req, res) {
	const userId = parseInt(req.params.id)

	favouriteDB.getUserFavourites(userId, (err, results) => {
		err ? res.status(500).json(err) : res.status(200).json(results)
	})
}

function getTotalRestaurantFavourites(req, res) {
	const restaurantId = parseInt(req.params.id)

	favouriteDB.getTotalRestaurantFavourites(restaurantId, (err, results) => {
		err ? res.status(500).json(err) : res.status(200).json(results[0])
	})
}

function addFavourite(req, res) {
	const favourite = new Favourite(
		null,
		parseInt(req.body.user_id),
		parseInt(req.body.restaurant_id)
	)

	favouriteDB.addFavourite(favourite, (err, result) => {
		err ? res.json(err) : res.json(result)
	})
}

function deleteFavourite(req, res) {
	const userId = parseInt(req.body.user_id)
	const restaurantId = parseInt(req.body.restaurant_id)

	favouriteDB.deleteFavourite(userId, restaurantId, (err, result) => {
		err ? res.json(err) : res.json(result)
	})
}

module.exports = { getUserFavourites, getTotalRestaurantFavourites, addFavourite, deleteFavourite }
