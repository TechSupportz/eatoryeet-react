const db = require("../dbConnections")

class UserDB {
	getAllUsers(callback) {
		const query = "SELECT * FROM eatoryeet.users"
		db.query(query, callback)
	}

	getUserById(userId, callback) {
		const query = "SELECT * FROM eatoryeet.users WHERE id = ?"
		db.query(query, [userId], callback)
	}

	addUser(user, callback) {
		const query =
			"INSERT INTO eatoryeet.users (username, password, email, first_name, last_name, gender, phone_number, address, profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);"

		db.query(
			query,
			[
				user.getUsername(),
				user.getPassword(),
				user.getEmail(),
				user.getFirstName(),
				user.getLastName(),
				user.getGender(),
				user.getPhoneNumber(),
				user.getAddress(),
				user.getProfilePic(),
			],
			callback
		)
	}

	userLogin(username, callback) {
		const query = "SELECT * FROM eatoryeet.users WHERE username = ?"
		db.query(query, [username], callback)
	}

	updateUser(user, callback) {
		const query =
			"UPDATE eatoryeet.users SET username = ?, password = ?, email = ?, first_name = ?, last_name = ?, gender = ?, phone_number = ?, address = ?, profile_pic = ? WHERE id = ?;"
		return db.query(
			query,
			[
				user.getUsername(),
				user.getPassword(),
				user.getEmail(),
				user.getFirstName(),
				user.getLastName(),
				user.getGender(),
				user.getPhoneNumber(),
				user.getAddress(),
				user.getProfilePic(),
				user.getId()
			],
			callback
		)
	}

	deleteUser(userId, callback) {
		const query = "DELETE FROM eatoryeet.users WHERE id = ?"
		db.query(query, [userId], callback)
	}

}

module.exports = UserDB
