import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
	tagTypes: ["Review", "Restaurant", "User", "Favourite"],
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
	endpoints: () => ({}),
})
