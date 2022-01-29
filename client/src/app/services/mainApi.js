import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const mainApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
	
	endpoints: () => ({}),
})
