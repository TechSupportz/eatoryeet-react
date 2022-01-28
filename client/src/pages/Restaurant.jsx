import { Box } from "@mui/material"

import { useParams } from "react-router-dom"
import RestaurantInfo from "../components/Restaurant/RestaurantInfo"
import ReviewList from "../components/Restaurant/ReviewList"

const Restaurant = () => {

	const { id } = useParams()

	return (
		<Box ml={5} mr={5}>
			<RestaurantInfo restaurantId={id} />
			<br />
			<br />
			<ReviewList restaurantId={id} />
			<br />
			<br />
			<br />
			<br />

		</Box>
	)
}

export default Restaurant
