import {
	Button,
	CardActionArea,
	Checkbox,
	FormControlLabel,
	Grid,
	Skeleton,
	Slider,
	Stack,
	Typography,
} from "@mui/material"
import RestaurantCard from "../RestaurantCard"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { useGetAllRestaurantsQuery } from "../../app/services/restaurantAPI"
import { Box } from "@mui/system"

const RestaurantGrid = () => {
	const { isError, data: restaurantList = [], isLoading } = useGetAllRestaurantsQuery()
	const navigate = useNavigate()

	const [priceValue, setPriceValue] = useState([1, 3])
	const [ratingValue, setRatingValue] = useState([0, 5])

	const [priceOnStop, setPriceOnStop] = useState([1, 3])
	const [ratingOnStop, setRatingOnStop] = useState([0, 5])

	const [filteredRestaurantList, setFilteredRestaurantList] = useState([])

	const [isChecked, setIsChecked] = useState({
		chinese: false,
		indian: false,
		malay: false,
		western: false,
	})

	useEffect(() => {
		restaurantList && setFilteredRestaurantList(restaurantList)
		console.log(restaurantList)
	}, [isLoading])

	// useEffect(() => {
	// 	let filteredList = restaurantList.filter((restaurant) =>
	// 		restaurant.avg_rating >= ratingOnStop[0] &&
	// 		restaurant.avg_rating <= ratingOnStop[1] &&
	// 		restaurant.cost.length >= priceOnStop[0] &&
	// 		restaurant.cost.length <= priceOnStop[1] &&
	// isChecked.chinese === true
	// 	? restaurant.category.includes("Chinese")
	// 	: true && isChecked.indian === true
	// 	? restaurant.category.includes("Indian")
	// 	: true && isChecked.malay === true
	// 	? restaurant.category.includes("Malay")
	// 	: true && isChecked.western === true
	// 	? restaurant.category.includes("Western")
	// 	: true
	// 	)
	// 	// filteredList = filteredList.filter(
	// 	// 	(restaurant) =>
	// 	// 		restaurant.avg_rating >= ratingOnStop[0] &&
	// 	// 		restaurant.avg_rating <= ratingOnStop[1] &&
	// 	// 		restaurant.cost.length >= priceOnStop[0] &&
	// 	// 		restaurant.cost.length <= priceOnStop[1]
	// 	// )
	// 	console.log(filteredList)
	// 	setFilteredRestaurantList(filteredList)
	// }, [isChecked, ratingOnStop, priceOnStop])

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

	const handleClear = () => {
		setPriceValue([1, 3])
		setRatingValue([1, 5])
		setIsChecked({
			chinese: false,
			indian: false,
			malay: false,
			western: false,
		})
	}

	return (
		<Grid container justifyContent="space-between">
			<Grid direction="column" item container justifyContent="flex-start" maxWidth="15%">
				<Typography fontSize="1.5em" fontWeight="bold">
					Filters:
				</Typography>
				<br />
				<Stack direction="column">
					<Typography fontSize="1.2em" fontWeight="semiBold">
						Category:
					</Typography>
					<FormControlLabel
						control={<Checkbox />}
						checked={isChecked.chinese}
						onChange={() => setIsChecked({ ...isChecked, chinese: !isChecked.chinese })}
						label="Chinese"
					/>
					<FormControlLabel
						control={<Checkbox />}
						checked={isChecked.indian}
						onChange={() => setIsChecked({ ...isChecked, indian: !isChecked.indian })}
						label="Indian"
					/>
					<FormControlLabel
						control={<Checkbox />}
						checked={isChecked.malay}
						onChange={() => setIsChecked({ ...isChecked, malay: !isChecked.malay })}
						label="Malay"
					/>
					<FormControlLabel
						control={<Checkbox />}
						checked={isChecked.western}
						onChange={() => setIsChecked({ ...isChecked, western: !isChecked.western })}
						label="Western"
					/>
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
			<Grid item container maxWidth="80%" spacing={5} justifyContent="flex-end">
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
								isChecked.chinese === true
									? restaurant.category.includes("Chinese")
									: true && isChecked.indian === true
									? restaurant.category.includes("Indian")
									: true && isChecked.malay === true
									? restaurant.category.includes("Malay")
									: true && isChecked.western === true
									? restaurant.category.includes("Western")
									: true
									
							)
							.map((restaurant) => (
								<Grid item key={restaurant.id}>
									<CardActionArea
										sx={{
											borderRadius: "15px",
											padding: 0,
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
