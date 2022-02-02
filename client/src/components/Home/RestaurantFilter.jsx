import { Button, Checkbox, FormControlLabel, Slider, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"

import { useState, useEffect } from "react"

const RestaurantFilter = () => {
	const [priceValue, setPriceValue] = useState([1, 3])
	const [ratingValue, setRatingValue] = useState([1, 5])

	const [priceOnStop, setPriceOnStop] = useState([1, 3])
	const [ratingOnStop, setRatingOnStop] = useState([1, 5])

	const [isChecked, setIsChecked] = useState({
		chinese: false,
		indian: false,
		malay: false,
		western: false,
	})

	useEffect(() => {
		console.table({ isChecked })
		console.table({ priceOnStop, ratingOnStop })
	}, [isChecked, ratingOnStop, priceOnStop])

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
	}

	return (
		<>
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
		</>
	)
}

export default RestaurantFilter
