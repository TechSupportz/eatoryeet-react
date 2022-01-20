import { Grid } from "@mui/material"
import { useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import { useGetAllRestaurantsQuery } from "../app/services/restaurantAPI"

const RestaurantGrid = () => {
	const { isError, data: restaurantList = [], isLoading } = useGetAllRestaurantsQuery()

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
