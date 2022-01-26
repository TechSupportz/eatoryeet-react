import { mainApi } from "./mainApi";

export const reviewApi = mainApi.injectEndpoints({
	endpoints: (build) => ({
		getReviewsByRestaurantId: build.query({
			query: (id) => ({
				url: `/review/restaurant/${id}`,
				method: "get",
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetReviewsByRestaurantIdQuery } = reviewApi

