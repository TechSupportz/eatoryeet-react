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

	//getter methods
	getId() {
		return this.id
	}
	getUsername() {
		return this.username
	}
	getPassword() {
		return this.password
	}
	getEmail() {
		return this.email
	}
	getFirstName() {
		return this.firstName
	}
	getLastName() {
		return this.lastName
	}
	getGender() {
		return this.gender
	}
	getPhoneNumber() {
		return this.phoneNumber
	}
	getAddress() {
		return this.address
	}
	getProfilePic() {
		return this.profilePic
	}

	//setter methods
	setUsername(username) {
		this.username = username
	}
	setPassword(password) {
		this.password = password
	}
	setEmail(email) {
		this.email = email
	}
	setFirstName(firstName) {
		this.firstName = firstName
	}
	setLastName(lastName) {
		this.lastName = lastName
	}
	setGender(gender) {
		this.gender = gender
	}
	setPhoneNumber(phoneNumber) {
		this.phoneNumber = phoneNumber
	}
	setAddress(address) {
		this.address = address
	}
	setProfilePic(profilePic) {
		this.profilePic = profilePic
	}
}

module.exports = User
