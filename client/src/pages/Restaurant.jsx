import { Box } from "@mui/material"
import RestaurantInfo from "../components/RestaurantInfo"
import { useParams } from "react-router-dom"
import ReviewList from "../components/ReviewList"

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
