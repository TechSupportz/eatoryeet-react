import { mainApi } from "./mainApi";

export const reviewApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		getReviewsByRestaurantId: builder.query({
			query: (id) => ({
				url: `/review/restaurant/${id}`,
				method: "get",
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetReviewsByRestaurantIdQuery } = reviewApi

