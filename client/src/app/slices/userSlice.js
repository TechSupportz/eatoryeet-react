import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
	name: "user",
	initialState: {
		userId: null,
		userDetail: {},
		isLoggedIn: false,
		showLoginDialog: false,
		registrationStatus: null,
		status: null,
	},
	reducers: {
		setIsLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload
		},
		setShowLoginDialog: (state, action) => {
			state.showLoginDialog = action.payload
		},
		setUserId: (state, action) => {
			state.userId = action.payload
		},
		setUserDetail: (state, action) => {
			state.userDetail = action.payload
		},
		setRegistrationStatus: (state, action) => {
			state.registrationStatus = action.payload
		}
	},
	extraReducers: {

	}
})

export const { setIsLoggedIn, setShowLoginDialog, setUserId, setUserDetail, setRegistrationStatus } = userSlice.actions

export default userSlice.reducer