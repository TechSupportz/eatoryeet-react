const User = require("../models/User")
const UserDB = require("../models/UserDB")
const bcrypt = require("bcrypt")

const userDB = new UserDB()

function getAllUsers(req, res) {
	userDB.getAllUsers((err, results) => {
		err ? res.status(500).json(err) : res.status(200).json(results)
	})
}

function getUserById(req, res) {
	const userId = parseInt(req.params.id)

	userDB.getUserById(userId, (err, result) => {
		err
			? res.status(500).json(err)
			: result.length === 0
			? res.status(404).json({ message: "User not found" })
			: res.status(200).json(result)
	})
}

function addUser(req, res) {
	const user = new User(
		null,
		req.body.username,
		bcrypt.hashSync(req.body.password, 10),
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

	userDB.userLogin(username, (err, result) => {
		if (err) {
			res.json(err)
		} else {
			if (result.length > 0) {
				bcrypt.compareSync(password, result[0].password)
					? res.json(result)
					: res.json({ message: "Incorrect Password" })
			} else {
				res.json({ message: "Incorrect Username or Password" })
			}
		}
	})
}

function updateUser(req, res) {
	const user = new User(
		parseInt(req.params.id),
		req.body.username,
		bcrypt.hashSync(req.body.password, 10),
		req.body.email,
		req.body.first_name,
		req.body.last_name,
		req.body.gender,
		req.body.phone_number,
		req.body.address,
		req.body.profilePic
	)

	userDB.updateUser(user, (err, result) => {
		if (err) {
			res.json(err)
		} else {
			res.json(result)
		}
	})
}

function deleteUser(req, res) {
	const userId = parseInt(req.params.id)

	userDB.deleteUser(userId, (err, result) => {
		if (err) {
			res.json(err)
		} else {
			res.json(result)
		}
	})
}

module.exports = { getAllUsers, getUserById, addUser, userLogin, updateUser, deleteUser }
