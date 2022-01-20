import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slices/userSlice"
import { mainApi } from "../services/mainApi"

export const store = configureStore({
	reducer: {
		[mainApi.reducerPath]: mainApi.reducer,
		user: userReducer,
	},

	middleware: (gdm) => gdm().concat(mainApi.middleware),
})

export default store