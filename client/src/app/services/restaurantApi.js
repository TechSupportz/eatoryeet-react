import { api } from "./api"

export const restaurantApi = api.injectEndpoints({
	endpoints: (build) => ({
		getAllRestaurants: build.query({
			query: () => ({
				url: "/restaurant",
				method: "get",
			}),
			providesTags: ["Restaurant"],
		}),
		getRestaurantById: build.query({
			query: (id) => ({
				url: `/restaurant/${id}`,
				method: "get",
			}),
			providesTags: ["Restaurant"],
		}),
	}),
	overrideExisting: false,
})

export const { useGetAllRestaurantsQuery, useGetRestaurantByIdQuery } = restaurantApi
