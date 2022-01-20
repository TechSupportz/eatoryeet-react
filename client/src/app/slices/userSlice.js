import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const userSlice = createSlice({
	name: "user",
	initialState: {
		users: [],
		isLoggedIn: false,
		status: null,
	},
	reducers: {
		setIsLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload
		},
	},
	extraReducers: {

	}
})

export const { setIsLoggedIn } = userSlice.actions

export default userSlice.reducer