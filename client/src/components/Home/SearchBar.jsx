import {
	Autocomplete,
	Box,
	Button,
	FilledInput,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material"
import React from "react"

import { useSelector, useDispatch } from "react-redux"
import { useGetAllRestaurantsQuery } from "../../app/services/restaurantAPI"
import { useNavigate } from "react-router-dom"
import { setSortBy } from "../../app/slices/restaurantSlice"

const SearchBar = () => {
	const { isError, data: restaurantList = [], isLoading } = useGetAllRestaurantsQuery()

	const sortBy = useSelector((state) => state.restaurant.sortBy)

	const navigate = useNavigate()
	const dispatch = useDispatch()

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
				autoHighlight
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

			<Select
				autoWidth
				id="sort-label"
				variant="filled"
				hiddenLabel={false}
				type="sort"
				margin="dense"
				sx={{ mb: "1em" }}
				value={sortBy}
				onChange={(e) => dispatch(setSortBy(e.target.value))}
			>
				<MenuItem value="Name">Name</MenuItem>
				<MenuItem value="Rating">Rating</MenuItem>
				<MenuItem value="Cost">Cost</MenuItem>
			</Select>
		</Box>
	)
}

export default SearchBar
