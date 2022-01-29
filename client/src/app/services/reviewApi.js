import { mainApi } from "./mainApi"

export const reviewApi = mainApi.injectEndpoints({
	tagTypes: ["Review"],
	endpoints: (build) => ({
		getReviewsByRestaurantId: build.query({
			query: (id) => ({
				url: `/review/restaurant/${id}`,
				method: "get",
			}),
			providesTags: ["Review"],
		}),
		addReview: build.mutation({
			query: ({ restaurantId, userId, title, detail, rating }) => ({
				url: "review/add",
				method: "post",
				body: {
					restaurant_id: restaurantId,
					user_id: userId,
					title: title,
					detail: detail,
					rating: rating,
				},
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
			invalidatesTags: ["Review"],
		}),
	}),
	overrideExisting: false,
})

export const { useGetReviewsByRestaurantIdQuery, useAddReviewMutation } = reviewApi
