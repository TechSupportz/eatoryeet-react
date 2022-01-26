import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"



export const userSlice = createSlice({
	name: "user",
	initialState: {
		userId: null,
		userDetail: {},
		isLoggedIn: false,
		showLoginDialog: false,
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
		}
	},
	extraReducers: {

	}
})

export const { setIsLoggedIn, setShowLoginDialog, setUserId, setUserDetail } = userSlice.actions

export default userSlice.reducer