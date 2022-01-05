const db = require("../dbConnections")

class ReviewDB {
	getAllReviews(callback) {
		const query = "SELECT * FROM eatoryeet.reviews"
		db.query(query, callback)
	}

	getReviewById(reviewId, callback) {
		const query = "SELECT * FROM eatoryeet.reviews WHERE id = ?"
		db.query(query, [reviewId], callback)
	}

	getReviewsByRestaurant(restaurantId, callback) {
		const query = "SELECT * FROM eatoryeet.reviews WHERE restaurant_id = ?"
		db.query(query, [restaurantId], callback)
	}

	addReview(review, callback) {
		const query =
			"INSERT INTO eatoryeet.reviews (restaurant_id, user_id, title, detail, rating, date_posted, is_edited) VALUES (?, ?, ?, ?, ?, CURDATE(), 0);"
		db.query(
			query,
			[
				review.restaurantId,
				review.userId,
				review.title,
				review.detail,
				review.rating
			],
			callback
		)
	}

	updateReview(review, callback) {
		const query =
			"UPDATE eatoryeet.reviews SET restaurant_id = ?, user_id = ?, title = ?, detail = ?, rating = ?, date_posted = CURDATE(), is_edited = 1 WHERE id = ?"
		db.query(
			query,
			[
				review.restaurantId,
				review.userId,
				review.title,
				review.detail,
				review.rating,
				review.id
			],
			callback
		)
	}

	deleteReview(reviewId, callback) {
		const query = "DELETE FROM eatoryeet.reviews WHERE id = ?"
		db.query(query, [reviewId], callback)
	}
}

module.exports = ReviewDB
