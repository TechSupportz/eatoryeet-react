import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slices/userSlice"
import reviewReducer from "../slices/reviewSlice"
import { mainApi } from "../services/mainApi"

export const store = configureStore({
	reducer: {
		[mainApi.reducerPath]: mainApi.reducer,
		user: userReducer,
		review: reviewReducer,
	},

	middleware: (gdm) => gdm().concat(mainApi.middleware),
})

export default store