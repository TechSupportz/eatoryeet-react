import { configureStore } from "@reduxjs/toolkit"
import restaurantReducer from "../slices/restaurantSlice"

export const store = configureStore({
	reducer: {
		restaurant: restaurantReducer
	},
})
