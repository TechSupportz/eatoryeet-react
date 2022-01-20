import { Box } from "@mui/material"
import Featured from "../components/Featured"
import RestaurantGrid from "../components/RestaurantGrid"
import { useEffect } from "react"
import { useGetAllRestaurantsQuery } from "../app/services/restaurantAPI"

const Home = () => {

	return (
		<Box mx={{ xs: "2.5%", md: "5%" }}>
			<Featured />
			<RestaurantGrid />
			<br />
			<br />
			<br />
			<br />
		</Box>
	)
}

export default Home
