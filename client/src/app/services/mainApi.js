import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const mainApi = createApi({
	tagTypes: ["Review", "Restaurant", "User"],
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
	endpoints: () => ({}),
})
