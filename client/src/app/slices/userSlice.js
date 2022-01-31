import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
	name: "user",
	initialState: {
		userId: null,
		userDetail: {},
		isLoggedIn: false,
		showLoginDialog: false,
		registrationStatus: null,
		deleteStatus: null,
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
		},
		setDeleteStatus: (state, action) => {
			state.deleteStatus = action.payload
		}
	},
	extraReducers: {

	}
})

export const { setIsLoggedIn, setShowLoginDialog, setUserId, setUserDetail, setRegistrationStatus, setDeleteStatus } = userSlice.actions

export default userSlice.reducer