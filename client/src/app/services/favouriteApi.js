import { api } from "./api";

export const favouriteApi = api.injectEndpoints({
	endpoints: (build) => ({
		getFavouritesByUserId: build.query({
			query: (id) => ({
				url: `/favourite/user/${id}`,
				method: "get",
			}),
			providesTags: ["Favourite"],
		}),
		addFavourite: build.mutation({
			query: ({userId, restaurantId}) => ({
				url: `/favourite/add`,
				method: "post",
				body: {
					user_id: userId,
					restaurant_id: restaurantId,
				}
			}),
			invalidatesTags: ["Favourite"],
		}),
		deleteFavourite: build.mutation({
			query: ({userId, restaurantId}) => ({
				
			}),
		}),
	}),
	overrideExisting: false,
})

export const { useGetFavouritesByUserIdQuery, useLazyGetFavouritesByUserIdQuery, useAddFavouriteMutation } = favouriteApi