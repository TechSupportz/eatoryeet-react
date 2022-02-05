import { Box } from "@mui/material"
import { useEffect } from "react"
import { useGetAllRestaurantsQuery } from "../app/services/restaurantAPI"

import Featured from "../components/Home/Featured"
import RestaurantGrid from "../components/Home/RestaurantGrid"
import SearchBar from "../components/Home/SearchBar"

const Home = () => {
	return (
		<Box mx={{ xs: "5%", md: "5%" }}>
			<Featured />
			<SearchBar />
			<RestaurantGrid />
			<br />
			<br />
			<br />
			<br />
		</Box>
	)
}

export default Home
