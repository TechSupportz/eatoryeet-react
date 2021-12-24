class Favourite {
	constructor(id, userId, restaurantId) {
		this.id = id
		this.userId = userId
		this.restaurantId = restaurantId
	}

	//getter methods
	getId() {
		return this.id
	}
	getUserId() {
		return this.userId
	}
	getRestaurantId() {
		return this.restaurantId
	}

	//setter methods
	setUserId(userId) {
		this.userId = userId
	}
	setRestaurantId(restaurantId) {
		this.restaurantId = restaurantId
	}
}

module.exports = Favourite
