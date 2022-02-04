import { Autocomplete, Box, Button, FilledInput, TextField, Typography } from "@mui/material"
import React from "react"

import { useGetAllRestaurantsQuery } from "../../app/services/restaurantAPI"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
	const { isError, data: restaurantList = [], isLoading } = useGetAllRestaurantsQuery()

	const navigate = useNavigate()

	const handleNavigate = (e, value) => {
		for (const restaurant of restaurantList) {
			if (restaurant.name === value) {
				navigate(`/restaurant/${restaurant.id}`)
			}
		}
	}

	return (
		<Box my={5} display="flex" justifyContent="space-between">
			<Typography fontWeight="medium" fontSize="2em">
				Restaurants
			</Typography>
			<Autocomplete
				freeSolo
				options={restaurantList && restaurantList.map((options) => options.name)}
				fullWidth
				sx={{ mx: "5%" }}
				onChange={handleNavigate}
				renderInput={(params) => (
					<TextField
						{...params}
						variant="filled"
						label="Search for a restaurant"
						InputProps={{
							...params.InputProps,
						}}
					/>
				)}
			/>
			<Button
				variant="contained"
				//disabled={!IsLoggedIn}
				mr={0}
				ml="auto"
				sx={{ px: 5 }}
				//onClick={handleAddReview}
			>
				Hello
			</Button>
		</Box>
	)
}

export default SearchBar
