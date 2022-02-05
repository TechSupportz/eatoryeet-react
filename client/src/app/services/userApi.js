import { mainApi } from "./mainApi"

export const userApi = mainApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation({
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
			providesTags: ["User"],
			keepUnusedDataFor: 0,
		}),
		register: build.mutation({
			query: ({
				username,
				password,
				email,
				firstName,
				lastName,
				gender,
				phoneNum,
				address,
			}) => ({
				url: "/user/register",
				method: "post",
				body: {
					username: username,
					password: password,
					email: email,
					first_name: firstName,
					last_name: lastName,
					gender: gender,
					phone_number: phoneNum,
					address: address,
				},
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
			providesTags: ["User"],
			keepUnusedDataFor: 0,
		}),
		getUserById: build.query({
			query: ({ id }) => ({
				url: `/user/${id}`,
				method: "get",
			}),
			providesTags: ["User"],
			keepUnusedDataFor: 0,
		}),
		deleteUser: build.mutation({
			query({ id }) {
				return {
					url: `/user/delete/${id}`,
					method: "delete",
				}
			},
			invalidatesTags: ["Review", "Restaurant"],
		}),
		updateUser: build.mutation({
			query: ({
				userId,
				username,
				email,
				firstName,
				lastName,
				gender,
				phoneNum,
				address,
			}) => ({
				url: `/user/update/${userId}`,
				method: "put",
				body: {
					username: username,
					email: email,
					first_name: firstName,
					last_name: lastName,
					gender: gender,
					phone_number: phoneNum,
					address: address,
				},
			}),
			invalidatesTags: ["Review", "Restaurant", "User"],
		}),
		updateUserPassword: build.mutation({
			query: ({ userId, password }) => ({
				url: `/user/update/password/${userId}`,
				method: "put",
				body: {
					password,
				},
			}),
			invalidatesTags: ["Review", "Restaurant", "User"],
		}),
	}),
	overrideExisting: false,
})

export const {
	useLoginMutation,
	useRegisterMutation,
	useLazyGetUserByIdQuery,
	useDeleteUserMutation,
	useUpdateUserMutation,
	useUpdateUserPasswordMutation,
} = userApi
