import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getRestaurants = createAsyncThunk(
	"restaurant/getRestaurants",
	async (dispatch, getState) => {
		return await fetch("http://localhost:8080/restaurant").then((res) => res.json())
	}
)

export const restaurantSlice = createSlice({
	name: "restaurant",
	initialState: {
		restaurants: [],
		status: null,
	},
	extraReducers: {
		[getRestaurants.pending]: (state, action) => {
			state.status = "loading"
		},
		[getRestaurants.fulfilled]: (state, action) => {
			state.status = "success"
			state.restaurants = action.payload
		},
		[getRestaurants.rejected]: (state, action) => {
			state.status = "failed"
		},
	},
})

export default restaurantSlice.reducer
