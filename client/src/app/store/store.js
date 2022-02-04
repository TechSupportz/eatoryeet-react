import { configureStore } from "@reduxjs/toolkit"
import { mainApi } from "../services/mainApi"
import userReducer from "../slices/userSlice"
import reviewReducer from "../slices/reviewSlice"
import restaurantReducer from "../slices/restaurantSlice"

export const store = configureStore({
	reducer: {
		[mainApi.reducerPath]: mainApi.reducer,
		user: userReducer,
		review: reviewReducer,
		restaurant: restaurantReducer,
	},

	middleware: (gdm) => gdm().concat(mainApi.middleware),
})

export default store