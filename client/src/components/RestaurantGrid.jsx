import { CardActionArea, Grid } from "@mui/material"
import { useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import { useNavigate } from "react-router-dom"

import { useGetAllRestaurantsQuery } from "../app/services/restaurantAPI"

const RestaurantGrid = () => {
	const { isError, data: restaurantList = [], isLoading } = useGetAllRestaurantsQuery()

	const navigate = useNavigate()

	return (
		<Grid container spacing={5} justifyContent="center">
			{restaurantList &&
				restaurantList.map((restaurant) => (
					<Grid item key={restaurant.id}>
						<CardActionArea
							sx={{
								borderRadius: "15px",
							}}
							onClick={() => {
								setTimeout(() => {
									navigate(`/restaurant/${restaurant.id}`)
								}, 100)
							}}
						>
							<RestaurantCard restaurantInfo={restaurant} />
						</CardActionArea>
					</Grid>
				))}
		</Grid>
	)
}

export default RestaurantGrid
