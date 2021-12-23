const db = require("../dbConnections")

class UserDB {
	getAllUsers(callback) {
		const query = "SELECT * FROM eatoryeet.users"
		db.query(query, callback)
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

	userLogin(username, password, callback) {
		const query =
			"SELECT * FROM eatoryeet.users WHERE username = ?  AND password = ?"
		db.query(query, [username, password], callback)
	}
}

module.exports = UserDB
