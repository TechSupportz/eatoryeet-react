import { Box, Stack } from "@mui/material"
import ReviewCard from "./ReviewCard"



const ReviewList = ({ reviewList }) => {
	
	return (
		<>
			<Stack spacing={5}>
				{reviewList &&
					reviewList.map((review) => <ReviewCard key={review.id} reviewInfo={review} />)}
			</Stack>
		</>
	)
}

export default ReviewList
