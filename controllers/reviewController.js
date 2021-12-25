const Review = require("../models/Review")
const ReviewDB = require("../models/ReviewDB")

const reviewDB = new ReviewDB()

function getAllReviews(req, res) {
	reviewDB.getAllReviews((err, results) => {
		if (err) {
			res.status(500).json(err)
		} else {
			res.status(200).json(results)
		}
	})
}

function getReviewsByRestaurant(req, res) {
	const restaurantId = req.params.id
	
	reviewDB.getReviewsByRestaurant(restaurantId, (err, results) => {
		if (err) {
			res.status(500).json(err)
		} else {
			res.status(200).json(results)
		}
	})
}

function addReview(req, res) {
	const date = new Date()

	const review = new Review(
		null,
		req.body.restaurant_id,
		req.body.user_id,
		req.body.title,
		req.body.detail,
		req.body.rating,
		date.toISOString().slice(0,9),
		0
	)

	reviewDB.addReview(review, (err, result) => {
		err ? res.json(err) : res.json(result)
	})
}

function updateReview(req, res) {
	const date = new Date()

	const review = new Review(
		parseInt(req.params.id),
		req.body.restaurant_id,
		req.body.user_id,
		req.body.title,
		req.body.detail,
		req.body.rating,
		date.toISOString().slice(0, 9),
		1
	)

	reviewDB.updateReview(review, (err, result) => {
		err ? res.json(err) : res.json(result)
	})
}

function deleteReview(req, res) {
	const reviewId = req.params.id

	reviewDB.deleteReview(reviewId, (err, result) => {
		err ? res.json(err) : res.json(result)
	})
}

module.exports = { getAllReviews, getReviewsByRestaurant, addReview, updateReview, deleteReview }
