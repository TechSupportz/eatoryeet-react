const User = require("../models/User")
const UserDB = require("../models/UserDB")

const userDB = new UserDB()

function getAllUsers(req, res) {
	userDB.getAllUsers((err, results) => {
		if (err) {
			res.status(500).send(err)
		} else {
			res.status(200).send(results)
		}
	})
}

function addUser(req, res) {
	const user = new User(
		null,
		req.body.username,
		req.body.password,
		req.body.email,
		req.body.first_name,
		req.body.last_name,
		req.body.gender,
		req.body.phone_number,
		req.body.address,
		req.body.profilePic
	)

	userDB.addUser(user, (err, result) => {
		err ? res.json(err) : res.json(result)
	})
}

function userLogin(req, res) {
	const username = req.body.username
	const password = req.body.password

	userDB.userLogin(username, password, (err, result) => {
		if (err){
			res.json(err)
		} 

		if (result.length > 0){
			res.json(result)
		} else {
			res.json({ message: "Invalid username or password" })
		}
	})
}

module.exports = { getAllUsers, addUser, userLogin }
