import { Box, Link, Typography } from "@mui/material"
import React from "react"
import RestaurantGrid from "../components/RestaurantGrid"

import { useSelector, useDispatch } from "react-redux"
import { setShowLoginDialog } from "../app/slices/userSlice"
import { useGetFavouritesByUserIdQuery } from "../app/services/favouriteApi"
import SearchBar from "../components/Home/SearchBar"

const Favourite = () => {
	const dispatch = useDispatch()

	const userId = useSelector((state) => state.user.userId)
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

	const { isError, data: favouriteList = [], isLoading } = useGetFavouritesByUserIdQuery(userId)

	return (
		<Box mx={{ xs: "5%", md: "5%" }}>
			{!isLoggedIn ? (
				<>
					<Box display="flex" alignItems="flex-end">
						<Typography fontWeight="medium" variant="h1">
							Hello there,
						</Typography>
						<Typography fontWeight="medium" fontSize="0.25em">
							General Kenobi
						</Typography>
					</Box>
					<br />
					<Typography fontWeight="medium" variant="h2">
						You want to add favourites?
					</Typography>
					<br />
					<br />
					<Typography fontWeight="medium" variant="h3">
						Sorry buddy, but you need an account for that
					</Typography>

					<br />
					<br />
					<Link
						component="button"
						fontSize="1.5em"
						onClick={() => dispatch(setShowLoginDialog(true))}
					>
						Click this to login
					</Link>
					<br />
					<br />
					<Link fontSize="1.5em" href="/register">
						Click this to make a new account
					</Link>
					<br />
				</>
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
