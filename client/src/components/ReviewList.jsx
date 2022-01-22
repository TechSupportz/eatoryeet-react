import { Box, Stack } from "@mui/material"
import ReviewCard from "./ReviewCard"

import { useGetReviewsByRestaurantIdQuery } from "../app/services/reviewApi"

const ReviewList = ({ restaurantId }) => {
	const {
		isError,
		data: reviewList = [],
		isLoading,
	} = useGetReviewsByRestaurantIdQuery(restaurantId)
	return (
		<Box mx="1.5%">
			<Stack spacing={5}>
				{reviewList &&
					reviewList.map((review) => <ReviewCard key={review.id} reviewInfo={review} />)}
			</Stack>
		</Box>
	)
}

export default ReviewList
