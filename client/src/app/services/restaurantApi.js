import { mainApi } from "./mainApi"

export const restaurantApi = mainApi.injectEndpoints({
	endpoints: (build) => ({
		getAllRestaurants: build.query({
			query: () => ({
				url: "/restaurant",
				method: "get",
			}),
		}),
		getRestaurantById: build.query({
			query: (id) => ({
				url: `/restaurant/${id}`,
				method: "get",
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetAllRestaurantsQuery, useGetRestaurantByIdQuery } = restaurantApi
