import { CardActionArea, Grid } from "@mui/material"
import RestaurantCard from "../RestaurantCard"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useGetAllRestaurantsQuery } from "../../app/services/restaurantAPI"
import RestaurantFilter from "./RestaurantFilter"

const RestaurantGrid = () => {
	const { isError, data: restaurantList = [], isLoading } = useGetAllRestaurantsQuery()

	const navigate = useNavigate()

	return (
		<Grid container justifyContent="space-between">
			<Grid direction="column" item container justifyContent="flex-start" maxWidth="15%">
				<RestaurantFilter />
			</Grid>
			<Grid item container maxWidth="80%" spacing={5} justifyContent="flex-end">
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
									}, 15)
								}}
							>
								<RestaurantCard restaurantInfo={restaurant} />
							</CardActionArea>
						</Grid>
					))}
			</Grid>
		</Grid>
	)
}

export default RestaurantGrid
