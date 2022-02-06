import { Box } from "@mui/material"
import { useEffect, useLayoutEffect } from "react"
import { useGetAllRestaurantsQuery } from "../app/services/restaurantAPI"

import Featured from "../components/Home/Featured"
import RestaurantGrid from "../components/RestaurantGrid"
import SearchBar from "../components/Home/SearchBar"

const Home = () => {
	const { isError, data: restaurantList = [], isLoading } = useGetAllRestaurantsQuery()

	return (
		<Box mx={{ xs: "5%", md: "5%" }}>
			<Featured restaurantList={restaurantList} isLoading={isLoading} />
			<SearchBar restaurantList={restaurantList} isLoading={isLoading} />
			<RestaurantGrid restaurantList={restaurantList} isLoading={isLoading} />
			<br />
			<br />
		</Box>
	)
}

export default Home
