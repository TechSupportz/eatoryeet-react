const Review = require("../models/Review")
const ReviewDB = require("../models/ReviewDB")

const reviewDB = new ReviewDB()

function getReviewById(req, res) {
	const reviewId = req.params.id

	reviewDB.getReviewById(reviewId, (err, result) => {
		err
			? res.json(err)
			: result.length === 0
			? res.status(404).json({ message: "Review not found" })
			: res.status(200).json(result[0])
	})
}

function getReviewsByRestaurant(req, res) {
	const restaurantId = req.params.id

	reviewDB.getReviewsByRestaurant(restaurantId, (err, results) => {
		err ? res.status(500).json(err) : res.status(200).json(results)
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
		date.toISOString().slice(0, 10)
	)

	reviewDB.addReview(review, (err, result) => {
		err ? res.status(500).json(err) : res.status(200).json(result)
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
		date.toISOString().slice(0, 10)
	)

	reviewDB.updateReview(review, (err, result) => {
		err ? res.status(500).json(err) : res.status(200).json(result)
	})
}

function deleteReview(req, res) {
	const reviewId = req.params.id

	reviewDB.deleteReview(reviewId, (err, result) => {
		err ? res.status(500).json(err) : res.status(200).json(result)
	})
}

module.exports = {
	getReviewById,
	getReviewsByRestaurant,
	addReview,
	updateReview,
	deleteReview,
}
