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
	}),
	overrideExisting: false,
})

export const { useGetFavouritesByUserIdQuery } = favouriteApi