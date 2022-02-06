import {
	Box,
	Button,
	CardActionArea,
	Checkbox,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	Skeleton,
	Slider,
	Stack,
	Typography,
} from "@mui/material"
import RestaurantCard from "./RestaurantCard"

import { useState, useEffect, useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useSelector } from "react-redux"
import { useLazyGetFavouritesByUserIdQuery } from "../app/services/favouriteApi"

const RestaurantGrid = ({ restaurantList, isLoading }) => {
	const navigate = useNavigate()

	const sortBy = useSelector((state) => state.restaurant.sortBy)
	const userId = useSelector((state) => state.user.userId)

	const [priceValue, setPriceValue] = useState([1, 3])
	const [ratingValue, setRatingValue] = useState([0, 5])

	const [priceOnStop, setPriceOnStop] = useState([1, 3])
	const [ratingOnStop, setRatingOnStop] = useState([0, 5])
	const [favouriteList, setFavouriteList] = useState([])

	const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
	const [getFavouriteList] = useLazyGetFavouritesByUserIdQuery()

	const [category, setCategory] = useState("")

	useEffect(() => {
		console.log(sortBy)
	}, [sortBy])

	useEffect(() => {
		restaurantList && setFilteredRestaurantList(restaurantList)
		console.log(restaurantList)
	}, [isLoading])

	useLayoutEffect(() => {
		getFavouriteList(userId)
			.unwrap()
			.then((res) => setFavouriteList(res))
			.catch((err) => {})
	}, [userId])

	const prices = [
		{
			label: "$",
			value: 1,
		},
		{
			label: "$$",
			value: 2,
		},
		{
			label: "$$$",
			value: 3,
		},
	]

	const ratings = [
		{
			label: "1",
			value: 1,
		},
		{
			label: "",
			value: 2,
		},
		{
			label: "",
			value: 3,
		},
		{
			label: "",
			value: 4,
		},
		{
			label: "5",
			value: 5,
		},
	]

	// function fetchFavourites() {
	// 	if (userId !== null) {
	// 		getFavouriteList(userId)
	// 		.unwrap()
	// 		.then((res) => setFavouriteList(res))
	// 	} else {
	// 		setTimeout(fetchFavourites, 250)
	// 		clearTimeout()
	// 	}
	// }

	const handleUncheck = (e) => {
		category === e.target.value && setCategory("")
	}

	const handleSort = (a, b) => {
		if (sortBy === "Name") {
			return a.name.localeCompare(b.name)
		} else if (sortBy === "Rating") {
			return b.avg_rating - a.avg_rating
		} else if (sortBy === "Cost") {
			return b.cost.length - a.cost.length
		}
	}

	const handleClear = () => {
		setPriceValue([1, 3])
		setRatingValue([0, 5])
		setPriceOnStop([1, 3])
		setRatingOnStop([1, 5])
		setCategory("")
	}

	return (
		<Grid container justifyContent="center" sx={{ width: "100%" }}>
			<Grid direction="column" item container md={2}>
				<Typography fontSize="1.5em" fontWeight="bold">
					Filters:
				</Typography>
				<br />
				<Stack direction="column">
					<Typography fontSize="1.2em" fontWeight="semiBold">
						Category:
					</Typography>
					<RadioGroup onChange={(e, value) => setCategory(value)} value={category}>
						<FormControlLabel
							control={<Radio />}
							value="Chinese"
							label="Chinese"
							onClick={handleUncheck}
						/>
						<FormControlLabel
							control={<Radio />}
							value="Indian"
							label="Indian"
							onClick={handleUncheck}
						/>
						<FormControlLabel
							control={<Radio />}
							value="Malay"
							label="Malay"
							onClick={handleUncheck}
						/>
						<FormControlLabel
							control={<Radio />}
							value="Western"
							label="Western"
							onClick={handleUncheck}
						/>
					</RadioGroup>
					<br />
					<Typography fontSize="1.2em" fontWeight="semiBold">
						Ratings:
					</Typography>
					<Slider
						marks={ratings}
						min={1}
						max={5}
						value={ratingValue}
						valueLabelDisplay="auto"
						onChange={(e) => {
							setRatingValue(e.target.value)
						}}
						onChangeCommitted={(e, value) => {
							setRatingOnStop(value)
						}}
						sx={{ mt: 0.5 }}
					/>
					<br />
					<Typography fontSize="1.2em" fontWeight="semiBold">
						Price:
					</Typography>
					<Slider
						marks={prices}
						min={1}
						max={3}
						value={priceValue}
						onChange={(e) => {
							setPriceValue(e.target.value)
						}}
						onChangeCommitted={(e, value) => {
							setPriceOnStop(value)
						}}
						sx={{ mt: 0.5 }}
					/>
				</Stack>
				<Box display="flex" justifyContent="center" mt={4}>
					<Button variant="contained" onClick={handleClear}>
						Clear Filters
					</Button>
				</Box>
			</Grid>
			<Grid
				item
				container
				md={9.75}
				spacing={4}
				justifyContent="flex-end"
				className="restaurant-grid"
			>
				{isLoading
					? Array.from({ length: 6 }).map((_, i) => (
							<Grid item key={i}>
								<Skeleton
									variant="rectangular"
									width="280px"
									height="270px"
									sx={{ borderRadius: "15px" }}
								/>
							</Grid>
					  ))
					: restaurantList
							.filter(
								(restaurant) =>
									restaurant.avg_rating >= ratingOnStop[0] &&
									restaurant.avg_rating <= ratingOnStop[1] &&
									restaurant.cost.length >= priceOnStop[0] &&
									restaurant.cost.length <= priceOnStop[1]
							)
							.filter((restaurant) =>
								category === ""
									? restaurant
									: true && category === "Chinese"
									? restaurant.category.includes("Chinese")
									: true && category === "Indian"
									? restaurant.category.includes("Indian")
									: true && category === "Malay"
									? restaurant.category.includes("Malay")
									: true && category === "Western"
									? restaurant.category.includes("Western")
									: true
							)
							.sort(handleSort)
							.map((restaurant) => (
								<Grid item key={restaurant.id}>
									<RestaurantCard
										restaurantInfo={restaurant}
										isFavorite={
											favouriteList.find(
												(favourite) => favourite.id === restaurant.id
											) !== undefined
												? true
												: false
										}
									/>
								</Grid>
							))}
			</Grid>
		</Grid>
	)
}

export default RestaurantGrid
