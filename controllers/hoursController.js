const HoursDB = require("../models/HoursDB")

const hoursDB = new HoursDB()

function getHoursByRestaurant(req, res) {
	const restaurantId = req.params.id

	hoursDB.getHoursByRestaurant(restaurantId, (err, results) => {
		if (err) {
			res.status(500).json(err)
		} else {
			res.status(200).json(results)
		}
	})
}

module.exports = { getHoursByRestaurant }