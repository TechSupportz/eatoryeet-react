import { mainApi } from "./mainApi"

export const restaurantApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllRestaurants: builder.query({
			query: () => ({
				url: "/restaurant",
				method: "get",
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetAllRestaurantsQuery } = restaurantApi
