import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
	name: "user",
	initialState: {
		userId: null,
		userDetail: [],
		isLoggedIn: false,
		showLoginDialog: true,
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
		}
	},
	extraReducers: {

	}
})

export const { setIsLoggedIn, setShowLoginDialog, setUserId } = userSlice.actions

export default userSlice.reducer