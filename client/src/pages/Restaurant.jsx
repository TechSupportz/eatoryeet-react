import { Box } from "@mui/material"

import { useParams } from "react-router-dom"
import { useGetRestaurantByIdQuery } from "../app/services/restaurantApi"
import { useGetReviewsByRestaurantIdQuery } from "../app/services/reviewAPI"
import RestaurantInfo from "../components/Restaurant/RestaurantInfo"
import ReviewDialog from "../components/Restaurant/ReviewDialog"
import ReviewList from "../components/Restaurant/ReviewList"
import ReviewSeparator from "../components/Restaurant/ReviewSeparator"

const Restaurant = () => {

	const { id } = useParams()

	const { isError: isErrorRestaurant, data: restaurant = {}, isLoading: isLoadingRestaurant } = useGetRestaurantByIdQuery(id)
	const {
		isError: isErrorReviews,
		data: reviewList = [],
		isLoading: isLoadingReviews,
	} = useGetReviewsByRestaurantIdQuery(id)
	

	return (
		<Box ml={5} mr={5}>
			<RestaurantInfo restaurant={restaurant} isLoading={isLoadingRestaurant} />
			<br />
			<ReviewSeparator reviewList={reviewList}/>
			<ReviewDialog restaurant={restaurant} />
			<br />
			<ReviewList reviewList={reviewList} />
			<br />
			<br />
		</Box>
	)
}

export default Restaurant