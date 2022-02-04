import { createSlice } from "@reduxjs/toolkit"

export const restaurantSlice = createSlice({
	name: "restaurant",
	initialState: {
		sortBy: "Name",
	},
	reducers: {
		setSortBy: (state, action) => {
			state.sortBy = action.payload
		}
	}
})

export const { setSortBy } = restaurantSlice.actions

export default restaurantSlice.reducer
