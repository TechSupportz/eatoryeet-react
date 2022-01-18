import { Grid } from "@mui/material"
import { useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import { useSelector } from "react-redux"

const RestaurantGrid = () => {
	const restaurantList = useSelector((state) => state.restaurant.restaurants)

	return (
		<Grid container spacing={5} justifyContent="center">
			{restaurantList &&
				restaurantList.map((restaurant) => (
					<Grid item key={restaurant.id}>
						<RestaurantCard restaurantInfo={restaurant} />
					</Grid>
				))}
		</Grid>
	)
}

export default RestaurantGrid
