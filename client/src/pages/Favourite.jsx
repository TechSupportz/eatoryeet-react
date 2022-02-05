import { Box } from "@mui/material"
import React from "react"
import RestaurantGrid from "../components/RestaurantGrid"

import { useSelector } from "react-redux"
import { useGetFavouritesByUserIdQuery } from "../app/services/favouriteApi"
import SearchBar from "../components/Home/SearchBar"

const Favourite = () => {
	const userId = useSelector((state) => state.user.userId)
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

	const { isError, data: favouriteList = [], isLoading } = useGetFavouritesByUserIdQuery(userId)

	return (
		<Box mx={{ xs: "5%", md: "5%" }}>
			{!isLoggedIn ? (
				<h1>Please login to view your favourites</h1>
			) : (
				<>
					<SearchBar restaurantList={favouriteList} isLoading={isLoading} />
					<RestaurantGrid restaurantList={favouriteList} />
				</>
			)}
		</Box>
	)
}

export default Favourite
