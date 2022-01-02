class Review {
	constructor(id, restaurantId, userId, title, detail, rating, datePosted, isEdited) {
		this.id = id
		this.restaurantId = restaurantId
		this.userId = userId
		this.title = title
		this.detail = detail
		this.rating = rating
		this.datePosted = datePosted
		this.isEdited = isEdited
	}

	//getter methods
	getId() {
		return this.id
	}
	getRestaurantId() {
		return this.restaurantId
	}
	getUserId() {
		return this.userId
	}
	getTitle() {
		return this.title
	}
	getDetail() {
		return this.detail
	}
	getRating() {
		return this.rating
	}
	getDatePosted() {
		return this.datePosted
	}
	getIsEdited() {
		return this.isEdited
	}

	//setter methods
	setRestaurantId(restaurantId) {
		this.restaurantId = restaurantId
	}
	setUserId(userId) {
		this.userId = userId
	}
	setTitle(title) {
		this.title = title
	}
	setDetail(detail) {
		this.detail = detail
	}
	setRating(rating) {
		this.rating = rating
	}
	setDatePosted(datePosted) {
		this.datePosted = datePosted
	}
	setIsEdited(isEdited) {
		this.isEdited = isEdited
	}
}

module.exports = Review
