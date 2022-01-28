import { Box } from "@mui/material"
import { useEffect } from "react"
import { useGetAllRestaurantsQuery } from "../app/services/restaurantAPI"

import Featured from "../components/Home/Featured"
import RestaurantGrid from "../components/Home/RestaurantGrid"


const Home = () => {
	return (
		<Box mx={{ xs: "2.5%", md: "5%" }}>
			<Featured/>
			<RestaurantGrid />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</Box>
	)
}

export default Home
