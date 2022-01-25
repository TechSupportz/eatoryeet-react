import { mainApi } from "./mainApi"

export const userApi = mainApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.query({
			query: ({ username, password }) => ({
				url: "/user/login",
				method: "post",
				body: {
					username: username,
					password: password,
				},
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
			keepUnusedDataFor: 0,
		}),
	}),
	overrideExisting: false,
})

export const { useLazyLoginQuery } = userApi