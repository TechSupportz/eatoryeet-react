import { mainApi } from "./mainApi"

export const reviewApi = mainApi.injectEndpoints({
	endpoints: (build) => ({
		getReviewsByRestaurantId: build.query({
			query: (id) => ({
				url: `/review/restaurant/${id}`,
				method: "get",
			}),
			providesTags: ["Review"],
		}),
		getReviewById: build.query({
			query: (id) => ({
				url: `/review/${id}`,
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
			invalidatesTags: ["Review", "Restaurant"],
		}),
		deleteReview: build.mutation({
			query: ({ id }) => ({
				url: `/review/delete/${id}`,
				method: "delete",
			}),
			invalidatesTags: ["Review", "Restaurant"],
		}),
		updateReview: build.mutation({
			query: ({ editId, restaurantId, userId, title, detail, rating }) => ({
				url: `/review/update/${editId}`,
				method: "put",
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
			invalidatesTags: ["Review", "Restaurant"],
		}),
	}),
	overrideExisting: false,
})

export const { useGetReviewsByRestaurantIdQuery,useLazyGetReviewByIdQuery, useAddReviewMutation, useDeleteReviewMutation, useUpdateReviewMutation } =
	reviewApi
