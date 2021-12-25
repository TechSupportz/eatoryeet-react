const db = require("../dbConnections")

class ReviewDB {
	getAllReviews(callback) {
		const query = "SELECT * FROM eatoryeet.reviews"
		db.query(query, callback)
	}

	getReviewsByRestaurant(restaurantId, callback) {
		const query = "SELECT * FROM eatoryeet.reviews WHERE restaurant_id = ?"
		db.query(query, [restaurantId], callback)
	}

	addReview(review, callback) {
		const query =
			"INSERT INTO eatoryeet.reviews (restaurant_id, user_id, title, detail, rating, date_posted, is_edited) VALUES (?, ?, ?, ?, ?, ?, ?);"
		db.query(
			query,
			[
				review.getRestaurantId(),
				review.getUserId(),
				review.getTitle(),
				review.getDetail(),
				review.getRating(),
				review.getDatePosted(),
				review.getIsEdited(),
			],
			callback
		)
	}

	updateReview(review, callback) {
		const query =
			"UPDATE eatoryeet.reviews SET restaurant_id = ?, user_id = ?, title = ?, detail = ?, rating = ?, date_posted = ?, is_edited = ? WHERE id = ?"
		db.query(
			query,
			[
				review.getRestaurantId(),
				review.getUserId(),
				review.getTitle(),
				review.getDetail(),
				review.getRating(),
				review.getDatePosted(),
				review.getIsEdited(),
				review.getId(),
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
