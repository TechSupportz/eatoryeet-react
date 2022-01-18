import { configureStore } from "@reduxjs/toolkit"
import restaurantReducer from "../slices/restaurantSlice"
import userReducer from "../slices/userSlice"

export const store = configureStore({
	reducer: {
		restaurant: restaurantReducer,
		user: userReducer
	},
})

export default store