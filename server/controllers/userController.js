const User = require("../models/User")
const UserDB = require("../models/UserDB")
const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")

const userDB = new UserDB()

function getUserById(req, res) {
	const userId = parseInt(req.params.id)

	userDB.getUserById(userId, (err, result) => {
		err
			? res.status(500).json(err)
			: result.length === 0
			? res.status(404).json({ message: "User not found" })
			: res.status(200).json(result[0])
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
		req.body.address
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
					? res.json({
							message: "Login Success",
							userId: result[0].id,
					  })
					: res.json({ message: "Incorrect Password", userId: null })
			} else {
				res.json({ message: "Incorrect Username or Password", userId: null })
			}
		}
	})
}

function updateUser(req, res) {
	let profilePic
	let uploadPath
	let staticPath

	if (!req.files || Object.keys(req.files).length === 0) {
		staticPath = req.body.profile_pic
	} else {
		profilePic = req.files.profile_pic
		uploadPath = path.join(__dirname, "../uploads" + profilePic.name)

		profilePic.mv(uploadPath, (err) => {
			if (err) {
				return res.status(500).send(err)
			} else {
				uploadPath = fs.renameSync(
					uploadPath,
					path.join(
						__dirname,
						"../uploads",
						`${req.params.id}${path.extname(profilePic.name)}`
					)
				)
			}
		})

		staticPath = `/static/${req.params.id}${path.extname(profilePic.name)}`
	}

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
		staticPath
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

	let filePath = `./uploads/${userId}.jpg`

	fs.access(filePath, fs.constants.F_OK | fs.constants.W_OK, (err) => {
		if (err) {
			console.error(
				`${filePath} ${err.code === "ENOENT" ? "does not exist" : "is read-only"}`
			)
		} else {
			fs.unlink(filePath, (err) => {
				if (err) {
					console.error(err)
				} else {
					console.log(`${filePath} was deleted`)
				}
			})
		}
	})

	userDB.deleteUser(userId, (err, result) => {
		if (err) {
			res.json(err)
		} else {
			res.json(result)
		}
	})
}

module.exports = { getUserById, addUser, userLogin, updateUser, deleteUser }
