class User {
	constructor(
		id,
		username,
		password,
		email,
		firstName,
		lastName,
		gender,
		phoneNumber,
		address,
		profilePic
	) {
		this.id = id
		this.username = username
		this.password = password
		this.email = email
		this.firstName = firstName
		this.lastName = lastName
		this.gender = gender
		this.phoneNumber = phoneNumber
		this.address = address
		this.profilePic = profilePic
	}
}


module.exports = User
