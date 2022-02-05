import { configureStore } from "@reduxjs/toolkit"
import { api } from "../services/api"
import userReducer from "../slices/userSlice"
import reviewReducer from "../slices/reviewSlice"
import restaurantReducer from "../slices/restaurantSlice"

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		user: userReducer,
		review: reviewReducer,
		restaurant: restaurantReducer,
	},

	middleware: (gdm) => gdm().concat(api.middleware),
})

export default store