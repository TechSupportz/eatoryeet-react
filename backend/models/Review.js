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
}

module.exports = Review
