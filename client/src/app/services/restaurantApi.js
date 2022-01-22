import { mainApi } from "./mainApi"

export const restaurantApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllRestaurants: builder.query({
			query: () => ({
				url: "/restaurant",
				method: "get",
			}),
		}),
		getRestaurantById: builder.query({
			query: (id) => ({
				url: `/restaurant/${id}`,
				method: "get",
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetAllRestaurantsQuery, useGetRestaurantByIdQuery } = restaurantApi
